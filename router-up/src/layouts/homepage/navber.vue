<template>
  <div class="homenav">
    <div class="navitem">
      <ul class="">
        <li class="artie">
          <router-link :to="{ name: 'homepage-home' }">首页</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'homepage-recommend' }">推荐</router-link>
        </li>
        <li><a href="javascript:;">分类</a></li>
      </ul>
    </div>
    <div class="relative">
      <div
        class="rounded-full w-20 h-20 mx-auto overflow-hidden absolute left-1/2 bottom-0 -translate-x-1/2 cursor-pointer"
      >
        <img :src="userStore.avater" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="navitem">
      <ul class="">
        <li><a href="javascript:;">漫画</a></li>
        <li><a href="javascript:;">论坛</a></li>
        <li><a href="javascript:;">联系我们</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import user from "@/store/userStore";
import { clickClear } from "./utils";
let userStore = user().info;

onMounted(() => {
  const liItems = document.querySelectorAll(".navitem ul li");
  liItems.forEach((key) => {
    key.addEventListener("click", () => {
      clickClear();
      key.classList.add("artie");
    });
  });
});
</script>

<style lang="scss">
.homenav {
  @apply rounded-sm bg-white shadow-md shadow-slate-600  w-[1300px] h-[40px] hidden md:grid  grid-cols-7 mt-5;
  .navitem {
    @apply w-full h-full flex items-end col-span-3 rounded-sm overflow-hidden;
    ul {
      @apply w-full h-10 flex items-center justify-center;
      li {
        @apply h-full flex-1 flex hover:bg-slate-500 hover:font-black duration-300;
        &:hover a {
          @apply text-white;
        }
        &.artie {
          @apply bg-slate-500 font-black;
          a {
            @apply text-white;
          }
        }
        a {
          @apply text-sm text-slate-800 font-black h-full flex-1 flex justify-center items-center;
        }
      }
    }
  }
}
</style>
