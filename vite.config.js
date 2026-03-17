import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint2";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      dev: true,
      lintOnStart: true,
      cache: true,
      emitErrorAsWarning: true, // keep dev server running; show lint errors as warnings
    }),
  ],
  server: {
    port: 5173,
  },
});
