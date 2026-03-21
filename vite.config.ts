import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [
    preact({
      reactAliasesEnabled: false,
      devtoolsInProd: false,
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    minify: "esbuild",
    cssMinify: "lightningcss",
  },
});
