import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/goit-react-hw-06-phonebook/", // numele repo-ului tău GitHub
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://mockapi.io/endpoint", // Adresa reală a API-ului tău
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
