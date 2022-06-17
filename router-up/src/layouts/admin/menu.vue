<template>
  <div
    class="skbg md:!hidden fixed hidden top-0 right-0 h-full w-full z-10"
  ></div>
  <div class="menu">
    <nav
      class="smnav fixed top-6 p-1 left-5 cursor-pointer md:!hidden z-20 bg-slate-400 rounded-md"
      @click="clNav"
    >
      <i-hamburger-button
        theme="outline"
        size="32"
        fill="#e5e7eb"
        class="h-[32px]"
      />
    </nav>
    <div class="logo text-gray-300 flex items-center">
      <i-home
        theme="outline"
        size="18"
        fill="#e5e7eb"
        class="mr-2 text-xl relative"
        ><span
          class="absolute top-0 left-0 flex h-full w-full md:hidden"
          @click="rclNav"
        ></span
      ></i-home>
      <section>
        <span class="text-sm font-bold">欢迎来到后台管理</span>
      </section>
    </div>
    <!-- 菜单 -->

    <div class="left-container flex-1 overflow-y-scroll pt-6">
      <hr class="mt-2" />
      <dl
        class="text-gray-200 text-sm pl-1 mt-4"
        v-for="(menu, index) in menuData.menus"
        :key="index"
      >
        <dt class="cursor-pointer" @click="handle(menu)">
          <section class="cursor-pointer flex items-center">
            <component :is="icons[menu.micon!]" size="18" class="mr-2" />
            <span>{{ menu.mtitle }}</span>
          </section>
          <section>
            <i-down-one
              class="jiantou duration-200"
              theme="outline"
              size="24"
              fill="#d1d5db"
              :class="{ 'rotate-180': menu.isClick }"
            />
          </section>
        </dt>
        <dd
          v-show="menu.isClick"
          v-for="(cmenu, index) in menu.children"
          :key="index"
          @click="ckiItem(cmenu)"
        >
          <a
            href="javascript:;"
            :class="{
              'hd-dd': true,
              active: cmenu ? cmenu.isClick : false,
            }"
          >
            {{ cmenu ? cmenu.mtitle : undefined }}</a
          >
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuStore from "@/store/menuStore";
import { IMenu } from "#/menu";
import router from "@/router";

import * as icons from "@icon-park/vue-next";
const route = useRoute();
const menuData = menuStore();
menuData.init();
watch(route, () => menuStore().setCurrentMenu(route), { immediate: true });

//清除父菜单 click
const resetMenus = () => {
  menuData.menus.forEach((menu) => {
    menu.isClick = false;
  });
};

//移动端-显示侧边栏
const clNav = () => {
  const menu = document.querySelector(".menu") as HTMLDivElement;
  const smnav = document.querySelector(".smnav") as HTMLDivElement;
  const skbg = document.querySelector(".skbg") as HTMLDivElement;
  menu.classList.add("clmenu");
  smnav.style.display = "none";
  skbg.style.display = "flex";
};

//移动端-隐藏侧边栏
const rclNav = () => {
  const menu = document.querySelector(".menu") as HTMLDivElement;
  const smnav = document.querySelector(".smnav") as HTMLDivElement;
  const skbg = document.querySelector(".skbg") as HTMLDivElement;
  menu.classList.remove("clmenu");
  skbg.style.display = "none";
  setTimeout(() => {
    smnav.style.display = "block";
  }, 400);
};

//cmenu 点击子菜单
const ckiItem = (cmenu: IMenu | undefined) => {
  rclNav();
  if (cmenu) {
    cmenu.isClick = true;
    router.push({ name: cmenu.route });
  }
};

//pmenu 点击菜单
const handle = (pmenu: IMenu) => {
  resetMenus();
  pmenu.isClick = true;
};
//点击admin-home
const adHome = () => {
  router.push({ name: "admin-home" });
};

onMounted(function () {
  const skbg = document.querySelector(".skbg") as HTMLDivElement;
  skbg.addEventListener("click", rclNav);
});
</script>

<style lang="scss">
.menu {
  @apply fixed min-w-[200px] min-h-screen md:h-auto bg-gray-600 p-3 flex flex-col  top-0 -left-[105%] duration-500 md:relative md:left-0 z-20;
  &.clmenu {
    @apply left-0;
  }
  .left-container {
    &::-webkit-scrollbar {
      width: 0;
    }
    dl {
      dt {
        @apply text-[14px] font-semibold flex justify-between;
        section {
          @apply flex justify-center items-center pt-3;
          .jiantou {
            @apply text-sm mr-2;
          }
        }
      }
      dd {
        a {
          &.hd-dd {
            @apply flex py-2 ml-2 pl-4 bg-cyan-700 text-white rounded-md  mt-2 cursor-pointer hover:bg-cyan-500 duration-300 text-xs;
          }
          &.active {
            @apply bg-cyan-500;
          }
        }
      }
    }
  }
}
</style>
