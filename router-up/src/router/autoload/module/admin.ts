import { RouteRecordRaw } from "vue-router";

export default {
  name: "admin",
  path: "/admin",
  redirect: "/admin/home",
  component: () => import("@/layouts/admin.vue"),
  meta: {
    auth: true,
    menu: { mtitle: "主菜单", micon: "DashboardOne" },
  },
  children: [
    {
      name: "admin-home",
      path: "home",
      meta: {
        auth: true,
        menu: { mtitle: "工作台" },
      },
      component: () => import("@/views/admin/home.vue"),
    },
  ],
} as RouteRecordRaw;
