// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "./src/pages/login.html"),
        register: resolve(__dirname, "./src/pages/register.html"),
        book: resolve(__dirname, "./src/pages/book.html"),
        table: resolve(__dirname, "./src/pages/table.html"),
        ticket: resolve(__dirname, "./src/pages/ticket.html"),
      },
      output: {
        preserveModules: false,
      },
    },
  },
});
