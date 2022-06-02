import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/personal_portfolio_dir/",
  plugins: [vue()],
});
