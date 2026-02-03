import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PersonaForge/", // Set base url for GitHub Pages deployment
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      sourcemap: false,
    },
  },
  build: {
    outDir: "build",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          mermaid: ["mermaid"],
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "i18next",
            "react-i18next",
          ],
        },
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    emptyOutDir: true,
    minify: "terser",
  },
});
