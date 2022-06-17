<template>
  <div id="mk_editor"></div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import ToastEditor from "./toastEditor";
interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: "markdown语法",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  const toastUi = new ToastEditor(
    "#mk_editor",
    `${props.modelValue}`,
    `${props.height}px`
  );

  toastUi.editor.on("change", (type: string) => {
    const content =
      type == "markdown"
        ? toastUi.editor.getMarkdown()
        : toastUi.editor.getHTML();

    emit("update:modelValue", content);
  });
});
</script>

<style lang="scss">
// @import "https://uicdn.toast.com/editor/latest/toastui-editor.min.css";

#mk_editor {
  @apply bg-white;
  .toastui-editor-mode-switch {
    display: none !important;
    // @apply hidden;
  }
  .fullscreen {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: #fff;
  }
}
</style>
