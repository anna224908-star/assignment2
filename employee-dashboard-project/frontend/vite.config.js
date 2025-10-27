import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // React dev server port
    proxy: {
      "/api": "http://localhost:3000" // Proxy backend requests to port 3000
    }
  },
  build: {
    outDir: "../backend/dist"
  }
});

