<template>
  <div class="abox flex flex-col justify-center items-center cursor-pointer">
    <div><img :src="props.datas.url" /></div>
    <p>{{ props.datas.p1 }}</p>
    <p>{{ props.datas.p2 }}</p>
    <p>{{ props.datas.p3 }}</p>
  </div>
</template>

<script setup lang="ts">
import { abData } from "@/views/beforepage/about.vue";

const props = defineProps<{
  datas: abData;
}>();
</script>

<style lang="scss" scoped>
.abox {
  div {
    background-image: url("/images/4.png");
    background-size: 100% 100%;
    @apply duration-300 w-[191.73px] h-[224.1px] flex justify-center items-center;
    img {
      @apply flex flex-col justify-center items-center cursor-pointer;
    }
  }
  p {
    @apply duration-300 text-[#3a3a3a] text-[13.28px];
    &:nth-of-type(1) {
      @apply text-[18.26px] mt-[19.92px];
    }
    &:nth-of-type(2) {
      @apply text-[13.28px] mt-[20.75px];
    }
  }
  &:hover {
    div {
      @apply opacity-60;
    }
    p {
      @apply text-[blue];
    }
  }
}
</style>
