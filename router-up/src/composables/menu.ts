// 没有使用pinia 插件 管理数据的方法 和pinia二选一

import { IMenu } from "#/menu";
import { ref } from "vue";
import router from "@/router";
import utils from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";
import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";

class adminMenu {
  public menus = ref<IMenu[]>([]);
  public history = ref<IMenu[]>([]);
  public close = ref(false);
  public route = ref(null as null | RouteLocationNormalized);
  constructor() {
    this.menus.value = this.getMenuByRoute();

    // this.history.value = utils.store.get(CacheEnum.HISTORY_MENU)
    //   ? utils.store.get(CacheEnum.HISTORY_MENU)
    //   : [];

    // this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? [];

    this.history.value = this.getHistoryMenu();
  }

  private getHistoryMenu() {
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
  }

  toggleState() {
    this.close.value = !this.close.value;
  }

  getMenuByRoute() {
    return router
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
      }) as IMenu[];
  }

  removeHistoryMenu(menu: IMenu) {
    const index = this.history.value.indexOf(menu);
    this.history.value.splice(index, 1);
  }

  addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta?.menu) return;
    this.route.value = route;
    const menu: IMenu = { ...route.meta?.menu, route: route.name as string };
    const isHas = this.history.value.some((menu) => {
      return menu.route == route.name;
    });
    if (!isHas) {
      this.history.value.unshift(menu);
    }
    if (this.history.value.length > 10) {
      this.history.value.pop();
    }
    utils.store.set(CacheEnum.HISTORY_MENU, this.history.value);
  }
}

export default new adminMenu();
