import { createApp } from "vue";
import App from "./App.vue";
// 全局css
import "@/styles/global.scss";
//路由设置
import router, { setupRouter } from "@/router";
//插件设置
import { setupPlugins } from "@/plugins";

//路由加载完成后 挂载app
async function bootstrap() {
  const app = createApp(App);
  //plugins
  setupPlugins(app);
  //roures
  setupRouter(app);
  await router.isReady();
  app.mount("#app");
}
bootstrap();
