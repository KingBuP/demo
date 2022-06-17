import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from "lodash";
import setupElementPlus from "./elemenui";

export function setupPlugins(app: App) {
  //插件设置
  setupTailwindcss();
  setupElementPlus(app);
  // 自动注册组件
  autoRegisterComponent(app);
}

//自动注册全局组件   register(注册)  auto(自动) component(组件)
// import notification from "@/composables/notification.vue"; 单独定义某个全局组件
function autoRegisterComponent(app: App) {
  // 指定文件夹里的组件定为全局组件
  const formComponents = import.meta.globEager("@/components/form/*.vue");
  const boxComponents = import.meta.globEager("@/components/itemBox/*.vue");
  Object.keys(formComponents).forEach((key) => {
    const name = key.split("/").pop()?.split(".").shift() as string;
    // 用lodash工具箱里的 _.camelCase() 方法把name转换为驼峰命名    目的：支持hd-input 和 hdInput 两种用法
    app.component(_.camelCase(name), formComponents[key].default);
  });
  Object.keys(boxComponents).forEach((key) => {
    const name = key.split("/").pop()?.split(".").shift() as string;
    app.component(_.camelCase(name), boxComponents[key].default);
  });
  // app.component(_.camelCase("notification"), notification); 单独定义某个全局组件
}
