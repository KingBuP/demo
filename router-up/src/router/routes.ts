import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    children: [],
  },
  {
    path: "/article_0",
    name: "article",
    component: () => import("@/views/article.vue"),
    children: [],
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/views/error/error404.vue"),
  },
] as RouteRecordRaw[];

export default routes;
