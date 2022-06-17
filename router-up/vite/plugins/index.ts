import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import { autoImport } from "./autoImport";
import { setupMockPligin } from "./mock";

export function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()];
  // 配置mock
  plugins.push(setupMockPligin(isBuild));
  //按需加载 (自动导入)
  autoImport(plugins);
  return plugins;
}
