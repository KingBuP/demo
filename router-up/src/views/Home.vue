<template>
  <div
    class="qshome"
    style="background-image: url(/images/cool-background.png)"
  >
    <div class="qshome-main">
      <div class="">
        <img
          v-show="userStore.avater"
          :src="Boolean(userStore.avater) ? userStore.avater : ''"
          class="object-cover"
        />
        <span
          v-show="!userStore.avater"
          class="text-xl font-black w-full h-full flex items-center justify-center bg-slate-600 tracking-widest"
          >未登入</span
        >
      </div>

      <div class="flex flex-col md:block">
        <router-link :to="{ name: 'admin-home' }" class=""
          >后台管理</router-link
        >
        <router-link :to="{ name: 'login' }" class="">登录页面</router-link>
        <router-link :to="{ name: 'homepage-home' }" class=""
          >首 页</router-link
        >
      </div>
      <div class="my-7">
        主页-Home 登入后不能访问登入 未登入不能访问后台和首页
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import user from "@/store/userStore";
let userStore = user().info;
ElMessage({
  type: "success",
  message: "欢迎！",
});
</script>

<style lang="scss">
.qshome {
  @apply h-screen w-screen flex items-center justify-center bg-cover p-5 md:p-0;
  .qshome-main {
    @apply relative flex items-center bg-green-300 justify-center flex-col bg-opacity-75 p-10 md:p-24 rounded-sm shadow-md shadow-orange-300 md:shadow-xl md:shadow-gray-800;
    div {
      &:nth-of-type(1) {
        @apply w-28 h-28 rounded-full overflow-hidden flex shadow-lg shadow-slate-700;
      }
      &:nth-of-type(3) {
        @apply mt-7 text-slate-800 font-bold;
      }
      &:nth-of-type(2) {
        a {
          @apply mt-7 hover:bg-lime-500  font-black px-4 py-2 text-green-100 rounded-none text-sm mx-3 duration-300 inline-flex justify-center items-center;
        }
      }
    }
  }
}
</style>
