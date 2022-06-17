import userApi, { User } from "@/apis/userApi";
import { CacheEnum } from "@/enum/cacheEnum";
import store from "@/utils/store";
import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => {
    return {
      info: {} as User,
    };
  },
  actions: {
    async getUserInfo() {
      // if (store.get(CacheEnum.TOKEN_NAME)) {//对历史跳转有影响
      const res = await userApi.info();
      this.info = res.data;
      // }
    },
  },
});
