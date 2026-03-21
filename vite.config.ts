import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
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
