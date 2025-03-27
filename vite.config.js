import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components") // Recommended over @jsx
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // Add all needed extensions
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});