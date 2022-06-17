<template>
  <div>
    <WangEditorEditor v-model="baseD" style="height: 300px" />
    <div>{{ baseD }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const baseD = ref("1212121454"); //默认值
</script>

<style lang="scss"></style>
