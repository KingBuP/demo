import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from "lodash";
import setupElementPlus from "./elementui";
import setupPinia from "./pinia";
import setupIconPark from "./iconpark";

export function setupPlugins(app: App) {
  //插件设置
  setupTailwindcss();
  setupElementPlus(app);
  setupPinia(app);
  setupIconPark(app);
  // 自动注册组件
  // autoRegisterComponent(app);
}

// 被按需加载组件替换
//自动注册全局组件   register(注册)  auto(自动) component(组件)
// import notification from "@/components/notification.vue";
// function autoRegisterComponent(app: App) {
//   const formComponents = import.meta.globEager("@/components/form/*.vue");
//   const boxComponents = import.meta.globEager("@/components/itemBox/*.vue");
//   Object.keys(formComponents).forEach((key) => {
//     const name = key.split("/").pop()?.split(".").shift() as string;
// 用lodash工具箱里的 _.camelCase() 方法把name转换为驼峰命名    目的：支持hd-input 和 hdInput 两种用法
// app.component(_.camelCase(name), formComponents[key].default);
// console.log(_.camelCase(name));
// });
//   Object.keys(boxComponents).forEach((key) => {
//     const name = key.split("/").pop()?.split(".").shift() as string;
//     app.component(_.camelCase(name), boxComponents[key].default);
//   });
//   app.component(_.camelCase("notification"), notification);
// }
