import { RouteRecordRaw } from "vue-router";
const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("@/views/beforepage/home.vue"),
  //   children: [],
  // },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/views/beforepage/404.vue"),
  },
] as RouteRecordRaw[];

export default routes;
