import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";
import { buildLlmsTxt } from "./scripts/llms";

/** Emits /llms.txt at build time from siteConfig, including the FAQ. */
const llmsTxt = (): Plugin => ({
  name: "llms-txt",
  apply: "build",
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "llms.txt", source: buildLlmsTxt() });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), llmsTxt(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
