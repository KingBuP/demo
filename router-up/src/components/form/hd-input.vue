<!-- input -->
<template>
  <input
    type="text"
    class="hd-input"
    v-model="dataValue"
    @input="setupData(dataValue)"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);
const dataValue = ref(props.modelValue);

const setupData = (value: string | undefined) => {
  emit("update:modelValue", value);
};
</script>

<style lang="scss"></style>
