import { RouteRecordRaw } from "vue-router";

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
      const route = getzRouyeByModule(file, module);
      routes.push(route);
    }
  });
  return routes;
}

//设置
function getRouyeByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    name: name.replace("/", "-"),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw;
  return Object.assign(route, module.default.route);
}

//
function getzRouyeByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    name: name.split("/").pop(),
    path: `/${name.split("/").pop()}`,
    component: module.default,
  } as RouteRecordRaw;
  return Object.assign(route, module.default.route);
}

//导出动态创建的路由
export default getRoutes();
