<template>
  <div>
    <MarkdownEditor
      v-model="content"
      :height="300"
      placeholder="请输入markdown语法内容"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const content = ref("abc"); //默认值
</script>

<style lang="scss"></style>
