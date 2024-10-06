import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/goit-react-hw-07-phonebook/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://6702b778bd7c8c1ccd3fa72d.mockapi.io/contacts",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
