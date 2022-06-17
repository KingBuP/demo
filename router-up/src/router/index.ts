import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import autoLaod from "./autoload";
import guard from "./guard";
import userStore from "@/store/userStore";

// router路由者 route路由 routes路由们

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

// 入口文件触发
export async function setupRouter(app: App) {
  //刷新页面 刷新一次数据
  const user = userStore();
  await user.getUserInfo();
  autoLaod(router); //自动注册路由

  guard(router);
  app.use(router);
}

export default router;
