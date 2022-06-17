import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./vite/alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 自定义 路径部分名
  resolve: {
    alias,
  },
});
