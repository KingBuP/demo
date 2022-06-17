import store from "./store";
import { CacheEnum } from "@/enum/cacheEnum";
import userApi, { ILoginData, User } from "@/apis/userApi";
import router from "@/router";
import userStore from "@/store/userStore";
import utils from ".";

export function logout() {
  store.remove(CacheEnum.TOKEN_NAME);
  store.remove(CacheEnum.HISTORY_MENU);
  store.remove(CacheEnum.REDIRECT_ROUTE_NAME);
  router.push("/");
  userStore().info = {} as User;
}

export async function login(values: ILoginData) {
  const {
    data: { token },
  } = await userApi.login(values);
  store.set(CacheEnum.TOKEN_NAME, { token }, 1200); //token时效 默认1200秒
  // 获取用户资料。。。
  userStore().getUserInfo();

  const routeName = utils.store.get(CacheEnum.REDIRECT_ROUTE_NAME)
    ? utils.store.get(CacheEnum.REDIRECT_ROUTE_NAME)
    : "home";

  router.push({ name: routeName });
}
