import { RouteRecordRaw } from "vue-router";

export default {
  name: "error",
  path: "/error",
  meta: {
    auth: true,
    menu: { mtitle: "错误页面", micon: "Caution" },
  },
  component: () => import("@/layouts/admin.vue"),
  redirect: "/admin/home",

  children: [
    {
      name: "error-404",
      path: "404",
      meta: { menu: { mtitle: "404页面" }, auth: true },
      component: () => import("@/views/error/error404.vue"),
    },
    {
      name: "error-403",
      path: "403",
      meta: { menu: { mtitle: "403页面" }, auth: true },
      component: () => import("@/views/error/error403.vue"),
    },
    {
      name: "error-500",
      path: "500",
      meta: { menu: { mtitle: "500页面" }, auth: true },
      component: () => import("@/views/error/error500.vue"),
    },
  ],
} as RouteRecordRaw;
