import { RouteRecordRaw } from "vue-router";

export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layouts/admin.vue"),
  redirect: "/admin/home",
  meta: { menu: { mtitle: "编辑器", micon: "EditOne" } },
  children: [
    {
      name: "editor-base",
      path: "base",
      meta: {
        permission: "editor_base",
        menu: { mtitle: "富文本编辑器" },
        auth: true,
      },
      component: () => import("@/views/editor/base.vue"),
    },
    {
      name: "editor-markdown",
      path: "markdown",
      meta: {
        permission: "editor_markdown", //判断这个“abc”权限是否在后台返回的权限列表存在
        menu: { mtitle: "markdown编辑器" },
        auth: true,
      },
      component: () => import("@/views/editor/markdown.vue"),
    },
  ],
} as RouteRecordRaw;
