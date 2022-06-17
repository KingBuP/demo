<template>
  <div class="serve">
    <div class="s_banner">
      <img
        src="/images/serve/serve.png"
        class="align-top border-[0px] w-full min-w-[1200px]"
      />
    </div>
    <ServeBox1 />
    <ServeBox2 />
    <ServeBox3 />
    <ServeBox5Vue />
  </div>
</template>

<script setup lang="ts">
import ServeBox1 from "@/components/serve/serveBox1.vue";
import ServeBox2 from "@/components/serve/serveBox2.vue";
import ServeBox3 from "../../components/serve/serveBox3.vue";
import ServeBox5Vue from "../../components/serve/serveBox5.vue";
</script>

<style lang="scss" scoped>
.serve {
  @apply flex flex-col;
  .s_banner {
    @apply w-full flex justify-center items-center relative;
  }
}
</style>
