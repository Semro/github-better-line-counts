import { defineConfig } from "vite";
import WebExtension, { readJsonFile } from "vite-plugin-web-extension";
import { AutoImport } from "./vite.shared";

function generateManifest() {
  const manifest = readJsonFile("manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

export default defineConfig({
  build: {
    sourcemap: "inline",
  },
  plugins: [
    AutoImport(),
    WebExtension({
      manifest: generateManifest,
      watchFilePaths: ["vite.config.ts", "manifest.json"],
    }),
  ],
});
