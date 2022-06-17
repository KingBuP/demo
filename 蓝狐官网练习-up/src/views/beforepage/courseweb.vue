<template>
  <div class="course_web">
    <div class="w_banner">
      <img
        src="/images/courseweb/banner.png"
        class="align-top border-[0px] w-full min-w-[1200px]"
      />
    </div>
    <Webbox1 />
    <Webbox2 />
    <Webbox3 />
    <Webbox5 />
    <Webbox6 />
    <Webbox7 />
    <!-- footer -->
    <Webfooter />
  </div>
</template>

<script setup lang="ts">
import Webfooter from "../../components/courseweb/webfooter.vue";
import Webbox1 from "../../components/courseweb/webbox1.vue";
import Webbox2 from "../../components/courseweb/webbox2.vue";
import Webbox3 from "../../components/courseweb/webbox3.vue";
import Webbox5 from "../../components/courseweb/webbox5.vue";
import Webbox6 from "../../components/courseweb/webbox6.vue";
import Webbox7 from "../../components/courseweb/webbox7.vue";
</script>

<style lang="scss">
.course_web {
  @apply flex flex-col;
  .w_banner {
    @apply w-full flex justify-center items-center relative;
  }
}
</style>
