<template>
  <div class="home_introduction">
    <div class="home_introduction_con">
      <Lunbo2 />
    </div>
  </div>
</template>

<script setup lang="ts">
import Lunbo2 from "./lunbo2.vue";
</script>

<style lang="scss">
.home_introduction {
  @apply bg-[#f5f6fa] w-full h-[560.49px] overflow-hidden;
  .home_introduction_con {
    @apply h-full pt-[78.02px] pl-[30px] box-border flex relative w-[1500px] m-auto;
  }
}
</style>
