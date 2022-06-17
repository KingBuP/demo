import { RouteRecordRaw } from "vue-router"; //先别删

export default function autoloadModuleRouters() {
  const modules = import.meta.globEager("./module/**/*.ts");

  const routes = [] as RouteRecordRaw[];
  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default);
  });

  return routes;
}
