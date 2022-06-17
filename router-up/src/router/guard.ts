import { CacheEnum } from "@/enum/cacheEnum";
import menuStore from "@/store/menuStore";
import userStore from "@/store/userStore";
import utils from "@/utils";
import store, { IData } from "@/utils/store";
import { resolve } from "path";
import { RouteLocationNormalized, Router, useRoute } from "vue-router";

class Guard {
  constructor(private router: Router) {}
  //1登入 2权限
  public run() {
    //next 在vue3里时可选内容  如果使用了每调用页面就会显示空白
    // this.router.beforeEach((to, from, next ) => {});
    this.router.beforeEach(this.beforeEach.bind(this));
  }
  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    //守卫
    // to 是 访问所有路由的合并 admin  admin/hd
    //对需要登入才能访问的路由验证
    if (this.isLogin(to) === false) return { name: "login-2" };
    // if (this.isGuest(to) === false) return from;
    // if (to.meta.auth && !this.token()) return { name: "login-2" };
    if (to.meta.guest && this.token()) return from;
    //路由每次更换 刷新一次数据 挪移
    // await this.getUserInfo();

    // await new Promise(() => {
    //   setTimeout(() => {
    //     resolve("abc");
    //   }, 5000);
    // });
    //记录历史路由 以挪移
    // menuStore().addHistoryMenu(to);
    // console.log(to);
  }

  private token(): string | null {
    return store.get(CacheEnum.TOKEN_NAME)
      ? store.get(CacheEnum.TOKEN_NAME)
      : null;
  }

  //总结 页面有auth：true 是登录后才能看见   页面有guest：true 是登录后看不到的页面-但游客能访问的到
  //   是什么能访问什么
  //游客 游客能访问
  // private isGuest(route: RouteLocationNormalized) {
  //   return Boolean(!route.meta.guest || (route.meta.guest && !this.token()));
  // }

  //是否登入  登入能访问  验证需要验证路由的方法  返回true通过 返回false不通过  返回的内容是登入后能访问的网页
  private isLogin(route: RouteLocationNormalized): boolean {
    // if (route.name != "login") return false;
    const state = Boolean(
      !route.meta.auth || (route.meta.auth && this.token())
    );

    if (state === false) {
      utils.store.set(CacheEnum.REDIRECT_ROUTE_NAME, route.name);
    }

    return state;
  }

  //权限
}

export default (router: Router) => {
  new Guard(router).run();
};
