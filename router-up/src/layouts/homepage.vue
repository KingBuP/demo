<template>
  <!-- <hmenu /> -->
  <div class="homepage w-full flex flex-col items-center bg-slate-100">
    <!-- 头部图片 -->
    <div
      class="h-[350px] bg-cover w-full bg-opacity-90 shadow-md shadow-slate-900 cursor-pointer hidden md:block"
      style="background-image: url('/images/wallhaven-mdmox9.jpg')"
    ></div>
    <!-- 导航 -->
    <!-- <navber /> -->
    <!-- main -->
    <section class="md:w-[1300px] mt-6 p-2 w-11/12">
      <router-view #default="{ Component }">
        <Transition
          enter-active-class="animate__animated animate__fadeIn animate__fast"
        >
          <component :is="Component" />
        </Transition>
      </router-view>
    </section>
    <!-- footer -->
    <div class="footerbox w-full mt-6 bg-slate-400">
      <div
        class="footerbox_con md:w-[1300px] py-7 m-auto flex justify-center items-center text-sm font-black"
      >
        <span
          @click="hp_about"
          class="text-slate-50 mx-2 hover:text-black duration-300 hover:underline cursor-pointer"
          >关于我们
        </span>
        <span
          @click="hp_join"
          class="text-slate-50 mx-2 hover:text-black duration-300 hover:underline cursor-pointer"
          >加入我们</span
        >
        <span class="text-slate-50 mx-2">©版权</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import navber from "./homepage/navber.vue";
// import hmenu from "./homepage/hmenu.vue";
import { clickClear } from "./homepage/utils";
import router from "@/router";
const hp_about = () => {
  clickClear();
  router.push({ name: "AboutUs" });
};
const hp_join = () => {
  clickClear();
  router.push({ name: "JoinUs" });
};
</script>

<style lang="scss">
.homepage {
}
</style>
