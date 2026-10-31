/**
 * Builds /llms.txt from siteConfig so the plain-text summary that AI
 * crawlers read always matches the site, including every FAQ answer.
 * Imported by vite.config.ts; uses relative imports only (no "@" alias).
 */
import { siteConfig } from "../src/config/site";

const BASE_URL = "https://www.nextgenadvisorsltd.com";

export function buildLlmsTxt(): string {
  const { global, services, team, industriesServed, faq } = siteConfig;
  const lines: string[] = [];

  lines.push(`# ${global.name}`, "");
  lines.push(`> ${siteConfig.footer.description}`, "");
  lines.push(
    `Website: ${BASE_URL}`,
    `Location: Banana Island, Lekki, ${global.city}, ${global.country}`,
    `Phone: ${global.phone}`,
    `Email: ${global.email}`,
    `Book a consultation: ${siteConfig.hero.cta1.href}`,
    ""
  );

  lines.push("## Services", "");
  for (const s of services.main.servicesList) {
    lines.push(`- ${s.title}: ${s.items.join("; ")}.`);
  }
  lines.push(
    "- Audit, Taxation & Statutory Compliance (through affiliate firm Joy Ozua & Co., Chartered Accountants): statutory audit, IFRS financial reporting, FIRS and state tax filings, CAC corporate filings.",
    "- Financial Strategy & Business Transformation: financial cleanup, IFRS restatements, CFO advisory, investment readiness.",
    ""
  );

  lines.push("## Who we serve", "");
  for (const i of industriesServed.industries) {
    lines.push(`- ${i.title}: ${i.description}.`);
  }
  lines.push("");

  lines.push("## Leadership", "");
  for (const m of team.members) {
    lines.push(`- ${m.name}, ${m.role}. ${m.bio} LinkedIn: ${m.memberLinkedInUrl}`);
  }
  lines.push("");

  lines.push(`## ${faq.heading}: frequently asked questions`, "");
  for (const item of faq.items) {
    lines.push(`### ${item.question}`, "", item.answer, "");
  }

  lines.push("## Pages", "");
  lines.push(
    `- Home and FAQ: ${BASE_URL}/`,
    `- Audit, Taxation & Statutory Compliance: ${BASE_URL}/audit-taxation`,
    `- Financial Strategy & Business Transformation: ${BASE_URL}/financial-strategy`,
    ""
  );

  return lines.join("\n");
}
