<template>
  <div class="home_course cw">
    <div class="top">
      <p class="text-[39.84px] mt-[5px] relative bottom-[6px]">
        线下班开课啦，预约免费学习
      </p>
      <p class="text-[24px] text-[#bebebe]">
        八大热门课程任你选，适不适合试听就知道了
      </p>
    </div>
    <div class="con">
      <ul class="flex flex-wrap justify-evenly">
        <List v-for="list in lists" :key="list.id">
          <img :src="list.url" />
        </List>
      </ul>
    </div>
    <div class="text-[41.5px] text-center">
      在校承接企业真实项目，积累项目经验
    </div>
  </div>
</template>

<script setup lang="ts">
import List from "@/composables/home/list.vue";
import { lunB } from "./lunbo.vue";
const lists = [
  { url: "/images/home/3.png", id: 1 },
  { url: "/images/home/6.png", id: 2 },
  { url: "/images/home/9.png", id: 3 },
  { url: "/images/home/5.png", id: 4 },
  { url: "/images/home/8.png", id: 5 },
  { url: "/images/home/7.png", id: 6 },
  { url: "/images/home/4.png", id: 7 },
  { url: "/images/home/10.png", id: 8 },
] as lunB[];
</script>

<style lang="scss">
.home_course {
  .top {
    p {
      @apply text-center font-bold;
    }
  }
  .con {
    @apply my-[70px];
  }
}
</style>
