import userStore from "@/store/userStore";
import env from "@/utils/env";
import { Router, RouteRecordRaw } from "vue-router";
import autoloadModuleRouters from "./module";
import getRoutes from "./view";

let routes: RouteRecordRaw[] = env.VITE_ROUTER_AUTOLOAD
  ? getRoutes
  : autoloadModuleRouters();

//后面会通过权限过滤路由
const autoLaod = (router: Router) => {
  const user = userStore().info.permissions;

  // 过滤没有添加权限的路由 router.addRoute() 添加路由
  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission;
      return permission ? user.includes(permission) : true;
    });
    return route;
  });

  // 注册路由
  routes.forEach((r) => router.addRoute(r));
};
export default autoLaod;
