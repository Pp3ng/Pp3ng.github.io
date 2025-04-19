// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    copyPublicDir: true,
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
}); 