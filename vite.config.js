import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/goit-react-hw-07-phonebook/", // numele repo-ului tău GitHub
  plugins: [react()],
});
