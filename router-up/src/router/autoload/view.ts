// 动态路由 （动态加载）
// 好处：能根据子路由的创建自动添加，不需要再手动添加  ----- 目前没开 去环境变量开启

import utils from "@/utils";
import { RouteRecordRaw } from "vue-router"; //先别删

// 用vite自带的 获取指定文件夹里所有的组件  路径只能用相对路径    /**/表示可以遍历到子目录
const layouts = import.meta.globEager("../../layouts/*.vue");
const views = import.meta.globEager("../../views/**/*.vue");

//获取设置全部路由
function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouyeByModule(file, module);
    //获取并添加子路由
    route.children = getChildrenRoutes(route);
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

//获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    //筛选是否属于本路由的子路由
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouyeByModule(file, module);
      routes.push(route);
    }
  });
  return routes;
}

function getRouyeByModule(file: string, module: { [key: string]: any }) {
  //获取name的几种方法
  //console.log(file.split("/").pop().split(".")[0]);
  //console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i).groups.name);
  //console.log(file.replace(/.+layouts\/|\.vue/gi, ""));
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    name: name.replace("/", "-"),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw;
  return Object.assign(route, module.default.route);
}

//环境变量控制路由自动注册是否开启
const routes = utils.env.VITE_ROUTER_AUTOLOAD
  ? getRoutes()
  : ([] as RouteRecordRaw[]);

export default getRoutes();
