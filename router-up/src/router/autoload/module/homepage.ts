import { RouteRecordRaw } from "vue-router";

export default {
  name: "homepage",
  path: "/homepage",
  component: () => import("@/layouts/homepage.vue"),
  redirect: "/",
  children: [
    {
      name: "homepage-home",
      path: "home",
      meta: {
        auth: true,
      },
      component: () => import("@/views/homepage/home.vue"),
    },
    {
      name: "homepage-recommend",
      path: "recommend",
      meta: { auth: true },
      component: () => import("@/views/homepage/recommend.vue"),
    },
  ],
} as RouteRecordRaw;
