/**
 * Prerender: after `vite build`, load each sitemap URL in headless Chromium,
 * let React render, and save the finished HTML into dist/. Crawlers that do
 * not run JavaScript (GPTBot, ClaudeBot, PerplexityBot) then receive the full
 * page text and JSON-LD. The browser app still boots normally on top.
 *
 * Output:
 *   dist/index.html             prerendered home page
 *   dist/<route>.html           prerendered sub-pages (served via cleanUrls)
 *   dist/spa-fallback.html      untouched app shell for every other URL
 *
 * If Chromium cannot start (e.g. a CI image without it), the build still
 * succeeds with the plain SPA and a loud warning is printed.
 */
import { readFile, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const PORT = 4179;

const warn = (msg) =>
  console.warn(`\n\x1b[33m[prerender] WARNING: ${msg}\x1b[0m\n`);

async function routesFromSitemap() {
  const xml = await readFile(path.join(dist, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

async function main() {
  // Keep a pristine shell before index.html is overwritten.
  await copyFile(path.join(dist, "index.html"), path.join(dist, "spa-fallback.html"));

  let chromium;
  try {
    ({ chromium } = await import("@playwright/test"));
  } catch {
    warn("@playwright/test is not installed; skipping prerender.");
    return;
  }

  let browser;
  try {
    browser = await chromium.launch();
  } catch (err) {
    warn(
      `Chromium could not start, so pages were NOT prerendered.\n` +
        `Run "npx playwright install chromium" in this environment.\n${err.message.split("\n")[0]}`
    );
    return;
  }

  const server = await preview({
    root,
    logLevel: "silent",
    preview: { port: PORT, strictPort: true },
  });

  const routes = await routesFromSitemap();
  const pages = [];

  try {
    for (const route of routes) {
      const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle" });
      await page.waitForSelector("#root footer", { state: "attached", timeout: 20000 });

      // Scroll through the page so whileInView animations settle to visible.
      await page.evaluate(async () => {
        const step = 600;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 600));
      });

      // Drop static index.html head tags that Helmet has superseded, so each
      // page has one canonical, one description, one og:url, etc.
      await page.evaluate(() => {
        const key = (el) =>
          el.tagName +
          "|" +
          (el.getAttribute("name") ||
            el.getAttribute("property") ||
            el.getAttribute("rel") ||
            el.getAttribute("type") ||
            "");
        const managed = new Set(
          [...document.head.querySelectorAll("[data-rh]")]
            .filter((el) => el.tagName !== "SCRIPT")
            .map(key)
        );
        for (const el of [...document.head.querySelectorAll("meta, link")]) {
          if (!el.hasAttribute("data-rh") && managed.has(key(el))) el.remove();
        }
        document.documentElement.setAttribute("data-prerendered", "true");
      });

      const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
      const file = route === "/" ? "index.html" : `${route.replace(/^\/|\/$/g, "")}.html`;
      pages.push({ file, html, route });
      await page.close();
    }
  } finally {
    await browser.close();
    await new Promise((r) => server.httpServer.close(r));
  }

  for (const { file, html, route } of pages) {
    await writeFile(path.join(dist, file), html, "utf8");
    console.log(`[prerender] ${route} -> dist/${file} (${Math.round(html.length / 1024)} KB)`);
  }
}

main().catch((err) => {
  warn(`Prerender failed; the build output is the plain SPA.\n${err.stack ?? err}`);
});
