<script setup lang="ts">
import menuStore from "@/store/menuStore";
import user from "@/store/userStore";
import utils from "@/utils";
const userStore = user();
let isFull = ref<boolean>(false);
//Full screen 全屏
const fullScreen = () => {
  isFull.value = !isFull.value;
  if (isFull.value) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

onMounted(() => {
  window.onresize = function () {
    if (document.fullscreenElement) {
    } else {
      isFull.value = false;
    }
  };
});
</script>

<template>
  <div class="navber bg-slate-100 p-2 flex justify-between">
    <div class="ultop">
      <div class="" @click="menuStore().toggleState()"></div>
      <Breadcrumb class="hidden md:inline-block" />
    </div>
    <div class="flex">
      <div class="flex items-center justify-center">
        <i-full-screen-one
          theme="outline"
          size="24"
          fill="#333"
          v-if="!isFull"
          @click="fullScreen"
          class="mr-6 flex items-center cursor-pointer"
        />
        <i-off-screen
          theme="outline"
          size="24"
          fill="#333"
          v-else
          @click="fullScreen"
          class="mr-6 flex items-center cursor-pointer"
        />
        <Notification class="mr-6" />
      </div>
      <div class="leftuser group">
        <img
          :src="userStore.info.avater ? userStore.info.avater : ''"
          class="w-10 rounded-full object-cover"
        />
        <span class="ml-1 text-slate-500 text-sm font-semibold">
          {{ userStore.info.name }}
        </span>
        <section class="group-hover:flex">
          <div class="userli actre">
            <i-me theme="outline" size="18" fill="#e1e4e7" />
            <span class="">我的</span>
          </div>
          <div class="userli">
            <i-home theme="outline" size="18" fill="#e1e4e7" />
            <span class="">网站首页</span>
          </div>
          <div class="userli">
            <i-vip-one theme="outline" size="18" fill="#e1e4e7" />
            <span class="">会员中心</span>
          </div>
          <div class="userli">
            <i-log theme="outline" size="18" fill="#e1e4e7" />
            <span class="">文档资料</span>
          </div>
          <div class="userli" @click="utils.user.logout()">
            <i-logout theme="outline" size="18" fill="#e1e4e7" />
            <span class="">退出登入</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navber {
  .ultop {
    @apply flex items-center;
  }
  .leftuser {
    @apply flex justify-center items-center relative;
    section {
      @apply absolute right-0 top-12 bg-slate-400 rounded-md p-4 whitespace-nowrap  hidden flex-col justify-start z-50;
      .userli {
        @apply my-1 flex items-center text-slate-600 cursor-pointer border-b-2 pb-1 border-transparent hover:text-slate-200 hover:border-slate-200 hover:font-black duration-300;
        i {
        }
        span {
          @apply text-sm ml-2;
        }
        &.actre {
          @apply text-slate-200 border-slate-200 font-black;
        }

        .borbu {
          @apply border-sky-600;
        }
      }
      &::before {
        content: "";
        position: absolute;
        z-index: -12;
        width: 0px;
        height: 0px;
        border-bottom: 30px solid rgb(148 163 184 / var(--tw-bg-opacity));
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        left: 50%;
        transform: translateX(-50%);
        top: -5%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 12px;
        left: 0;
        top: -12px;
      }
    }
  }
}
</style>
