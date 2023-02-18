import AutoImportPlugin from "unplugin-auto-import/vite";

export function AutoImport() {
  return AutoImportPlugin({
    dts: "src/@types/auto-imports.d.ts",
    imports: {
      "webextension-polyfill": [["*", "browser"]],
    },
  });
}
