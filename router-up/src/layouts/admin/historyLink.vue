<template>
  <div
    class="historymenu grid grid-flow-col gap-2 justify-start whitespace-nowrap px-3 py-2"
  >
    <div
      v-for="(menuLink, index) of menuLinks"
      :key="index"
      class="hist_menu_item inline-flex duration-100 rounded-sm shadow border border-slate-400 bg-white text-slate-800 text-xs justify-center items-center whitespace-nowrap"
      :class="{ ctaver: $route.name == menuLink.route }"
    >
      <section
        @click="menuLinkClick(menuLink)"
        class="pl-3 pr-2 py-1 cursor-pointer"
      >
        {{ menuLink.mtitle }}
      </section>

      <i-close-small
        theme="outline"
        size="18"
        fill="red"
        @click="removeHistoryMenu(menuLink)"
        class="h-full flex justify-center items-center pr-1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMenu } from "#/menu";
import router from "@/router";
import menuStore from "@/store/menuStore";
const menuLinks = menuStore().historyMenu;
const menuData = menuStore();
const usRoute = useRoute();
//格式化
const resetCMenu = () => {
  menuData.menus.forEach((pmenu) => {
    if (pmenu.children) {
      pmenu.children.forEach((cmenu) => {
        cmenu.isClick = false;
      });
    }
  });
};
//清除父菜单 click
const resetMenu = () => {
  menuData.menus.forEach((menu) => {
    menu.isClick = false;
  });
};
//历史导航点击
const menuLinkClick = (menuLink: IMenu) => {
  resetCMenu();
  menuLink.isClick = true;
  menuData.menus.forEach((pmenu) => {
    if (pmenu.children) {
      pmenu.children.forEach((cmenu) => {
        if (cmenu.route == menuLink.route) cmenu.isClick = true;
      });
      const isC = pmenu.children.some((item) => item.isClick);
      if (isC) {
        pmenu.isClick = true;
      } else {
        pmenu.isClick = false;
      }
    }
  });
  router.push({ name: menuLink.route });
};
// 删除历史导航
const removeHistoryMenu = (menuLink: IMenu) => {
  menuStore().removeHistoryMenu(menuLink);
  menuStore().updateLocalStorage();
  if (usRoute.name == menuLink.route) {
    if (menuLinks.length) {
      router.push({ name: menuLinks[0].route });
    } else {
      router.push({ name: "admin-home" });
    }
  }
};
</script>

<style lang="scss">
.historymenu {
  .hist_menu_item {
    &.ctaver {
      @apply text-slate-50 bg-slate-600;
    }
  }
}
</style>
