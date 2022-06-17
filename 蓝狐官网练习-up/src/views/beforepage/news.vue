<template>
  <main class="news_con">
    <div class="banner">
      <img
        src="/images/news/2.png"
        style="filter: brightness(54%)"
        class="align-top border-[0px] w-full min-w-[1200px]"
      />
      <div
        class="mx-auto text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        <p class="text-[41.5px] font-bold">NEWS</p>
        <p class="text-[19.92px]">新闻动态</p>
      </div>
    </div>
    <div class="content">
      <div class="con_main w-[1200px] m-auto flex flex-col">
        <Tab />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import AboutBox from "@/components/about/aboutBox.vue";
import Tab from "@/components/news/tab.vue";
</script>

<style lang="scss" scoped>
.news_con {
  @apply flex flex-col;
  .banner {
    @apply w-full flex justify-center items-center relative;
  }
}
</style>
