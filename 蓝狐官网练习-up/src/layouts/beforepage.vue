<template>
  <Lhnavber />
  <router-view #default="{ Component }">
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__fast"
    >
      <component :is="Component" class="" />
    </Transition>
  </router-view>
  <Lhfooter />
</template>

<script setup lang="ts">
import Lhnavber from "./beforepage/lhnavber.vue";
import Lhfooter from "./beforepage/lhfooter.vue";
</script>

<script lang="ts">
export default {
  route: { path: "/", redirect: "/home" },
};
</script>
<style lang="scss" scoped></style>
