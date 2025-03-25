import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@jsx": path.resolve(__dirname, "./src/jsx"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "/src/jsx/Header.jsx", // Dodaj problematyczny plik
      ],
    },
  },
});
