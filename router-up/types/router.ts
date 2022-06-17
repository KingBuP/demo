import "vue-router";
import { IMenu } from "./menu";

declare module "vue-router" {
  interface RouteMeta {
    auth?: boolean;
    guest?: boolean;
    //menu 路由是否在菜单中显示
    // mshow?: boolean;
    //菜单标题 图标 路由名字
    menu?: IMenu;
    //访问权限
    permissions?: string[];
    permission?: string;
  }
}
