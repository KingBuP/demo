<template>
  <div class="webbox2">
    <div class="wcon2 cw">
      <p class="text-[#636363] text-center text-[41.5px] font-bold">
        紧跟市场需求，让你成为更具竞争力的前端人才！
      </p>
      <p class="text-[#636363] text-center text-[18.26px]">
        真正为0基础学员而设，让你“学的都有用，学了都能懂”，提高效率、不走弯路
      </p>
      <div class="mt-[53px]">
        <WeblunboVue />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WeblunboVue from "./weblunbo.vue";
</script>

<style lang="scss">
.webbox2 {
  @apply w-full bg-[#f7f7f7];
  .wcon2 {
    @apply pt-[70px] pb-[71px];
  }
}
</style>
