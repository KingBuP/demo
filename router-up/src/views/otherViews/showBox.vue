<template>
  <div class="w-full px-2 py-5">
    <img :src="'12' + nums()" class="w-full" />
    <img :src="'12' + nums()" class="w-full" />
    <img :src="'12' + nums()" class="w-full" />
    <img :src="'12' + nums()" class="w-full" />
    <img :src="'12' + nums()" class="w-full" />
    <img :src="'12' + nums()" class="w-full" />
    <img :src="'12' + nums()" class="w-full" />
    <img :src="'12' + nums()" class="w-full" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let num = ref(0);
let nums = () => {
  num.value = num.value + 1;
  return num.value;
};
</script>

<style lang="scss" scoped></style>
