<template>
  <div class="full-screen-container flex flex-col" style="z-index: 999">
    <div id="toolbar-container"></div>
    <div id="editor-container" class="flex-1 overflow-y-scroll"></div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import wangEditor from "./wangEditor";

interface Props {
  height?: number;
  modelValue?: string;
  uploadImageServer?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
  modelValue: "12121212",
  uploadImageServer: "/api/upload/images",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  new wangEditor(props, (newHtml: string) => {
    emit("update:modelValue", newHtml);
  });
});
</script>

<style lang="scss">
.full-screen-container {
  #editor-container {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
