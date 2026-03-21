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

  server: {
    // Helps when the browser runs on the host (e.g. Windows) and Vite runs in WSL.
    host: true,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,

    minify: "esbuild",
    cssMinify: "lightningcss",
  },
});
