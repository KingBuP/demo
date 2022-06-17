<template>
  <div class="uiuepage">
    <div class="w_banner">
      <img
        src="/images/serve/uiue.png"
        class="align-top border-[0px] w-full min-w-[1200px]"
      />
    </div>
    <uiueBox1 />
    <Uiuebox2 />
    <WebfooterVue />
  </div>
</template>

<script setup lang="ts">
import WebfooterVue from "@/components/courseweb/webfooter.vue";
import uiueBox1 from "@/components/uiuepage/uiuebox1.vue";
import Uiuebox2 from "@/components/uiuepage/uiuebox2.vue";
</script>

<style lang="scss">
.uiuepage {
  font: 12px/1.5 "å¾®è½¯é›…é»‘", \5b8b\4f53, Arial, sans-serif; //setup字体
  @apply flex flex-col;
  .w_banner {
    @apply w-full flex justify-center items-center relative;
  }
}
</style>
