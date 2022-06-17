import { createApp } from "vue";
import "animate.css"; //引入animate.css
import App from "./App.vue";
//全局css
import "@/styles/global.scss";
//引入路由   默认导出可以直接接收（接收名字自定义） 直接导出的需要结构语法结构出来（名字必须和定义的一样）
import router, { setupRouter } from "@/router";
import { setupPlugins } from "./plugins";

//路由加载完成后 挂载app
async function bootstrap() {
  const app = createApp(App);
  //设置插件的入口文件  和  组件自动注册为全局组件
  setupPlugins(app);

  // 将挂载路由的代码分离出去 setupRouter函数
  setupRouter(app);
  await router.isReady();
  app.mount("#app");
}
bootstrap();

import "@toast-ui/editor/dist/toastui-editor.css"; // Editor's Style 放后面提升权限
