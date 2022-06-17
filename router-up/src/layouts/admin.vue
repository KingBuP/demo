<template>
  <div class="admin min-h-screen min-w-screen flex relative shadow-slate-400">
    <menu-component />
    <div class="content flex-1 bg-slate-300 flex flex-col">
      <div class="content_header w-full shadow-md shadow-slate-400">
        <navber />
      </div>
      <div class="hidden md:block"><history-link /></div>
      <div class="flex-1 m-3 overflow-hidden relative">
        <router-view #default="{ Component }">
          <Transition
            appear
            enter-active-class="animate__animated animate__bounceInLeft animate__fast"
          >
            <component :is="Component" class="" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuComponent from "./admin/menu.vue";
import Navber from "./admin/navber.vue";
import HistoryLink from "./admin/historyLink.vue";
import menuStore from "@/store/menuStore";
import { CacheEnum } from "@/enum/cacheEnum";
import utils from "@/utils";
const route = useRoute();
const admenu = menuStore();
admenu.init();
//监听路由更新
watch(
  route,
  () => {
    admenu.addHistoryMenu(route);
  },
  { immediate: true }
);
</script>

<style lang="scss">
.admin {
  .content {
    .contentmain {
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
}
</style>
