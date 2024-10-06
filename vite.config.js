import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/goit-react-hw-07-phonebook/", // numele repo-ului tău GitHub
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["axios"], // adaugă axios aici ca dependență externă
    },
  },
});
