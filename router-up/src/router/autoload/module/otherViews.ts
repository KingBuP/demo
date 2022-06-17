import { RouteRecordRaw } from "vue-router";

export default {
  name: "otherView",
  path: "/otherView",
  meta: {
    auth: true,
  },
  component: () => import("@/layouts/homepage.vue"),
  children: [
    {
      path: "JoinUs",
      name: "JoinUs",
      meta: { auth: true },
      component: () => import("@/views/otherViews/joinUs.vue"),
    },
    {
      path: "aboutUs",
      name: "AboutUs",
      meta: { auth: true },
      component: () => import("@/views/otherViews/aboutUs.vue"),
    },
    {
      path: "showBox",
      name: "showBox",
      meta: { auth: true },
      component: () => import("@/views/otherViews/showBox.vue"),
    },
  ],
} as RouteRecordRaw;
