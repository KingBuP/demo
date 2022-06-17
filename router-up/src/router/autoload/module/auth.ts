import { RouteRecordRaw } from "vue-router";

export default {
  name: "auth",
  path: "/auth",
  component: () => import("@/layouts/auth.vue"),
  children: [
    {
      name: "login",
      path: "login",
      meta: { guest: true },
      component: () => import("@/views/auth/login.vue"),
    },
    {
      name: "login-2",
      path: "register",
      meta: { guest: true },
      component: () => import("@/views/auth/register.vue"),
    },
  ],
} as RouteRecordRaw;
