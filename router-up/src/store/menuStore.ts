import { defineStore } from "pinia";
import { IMenu } from "#/menu";
import router from "@/router";
import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
  useRoute,
} from "vue-router";
import utils from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";

export default defineStore("adminmenu", {
  state: () => {
    return {
      //过滤后-菜单
      menus: [] as IMenu[],
      //历史菜单
      historyMenu: [] as IMenu[],
      //侧边栏开启关闭
      close: false,
      route: null as null | RouteLocationNormalized,
    };
  },

  actions: {
    toggleState() {
      this.close = !this.close;
    },

    updateLocalStorage() {
      utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenu);
    },

    getHistoryMenu() {
      const routes = [] as RouteRecordRaw[];
      router.getRoutes().map((r) => {
        routes.push(...r.children);
      });
      let menus: IMenu[] = utils.store.get(CacheEnum.HISTORY_MENU) ?? [];
      return menus.filter((m) => {
        return routes.some((r) => {
          return r.name == m.route;
        });
      });
    },

    setCurrentMenu(route: RouteLocationNormalizedLoaded) {
      this.menus.forEach((m) => {
        m.isClick = false;
        if (m.children) {
          m.children.forEach((c) => {
            c.isClick = false;
            if (c.route == route.name) {
              m.isClick = true;
              c.isClick = true;
            }
          });
        }
      });
    },

    init() {
      this.getMenuByRoute();

      this.historyMenu = this.getHistoryMenu();
    },

    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenu.indexOf(menu);
      this.historyMenu.splice(index, 1);
    },

    addHistoryMenu(route: RouteLocationNormalized) {
      const ruIsmenu = route.meta ? route.meta.menu : undefined;
      if (!ruIsmenu) return;
      this.route = route;
      const menu: IMenu = { ...ruIsmenu, route: route.name as string };
      const isHas = this.historyMenu.some((menu) => {
        return menu.route == route.name;
      });
      if (!isHas) {
        this.historyMenu.unshift(menu);
      }
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop();
      }
      utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenu);
    },
    //根据路由获取菜单
    getMenuByRoute() {
      const menus = router
        .getRoutes()
        .filter((route) => route.children.length && route.meta.menu)
        .map((route) => {
          let menucon = route.meta ? route.meta.menu : undefined;
          let menu: IMenu = { ...menucon };
          menu.children = route.children
            .filter((route) => (route.meta ? route.meta.menu : undefined))
            .map((route) => {
              let con = route.meta ? route.meta.menu : undefined;
              return { ...con, route: route.name };
            }) as IMenu[];
          return menu;
        })
        .filter((route) => {
          let isB = route.children ? route.children.length : undefined;
          return isB;
        });
      this.menus = menus;
    },
  },
  getters: {},
});
