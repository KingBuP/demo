<!-- error消息 -->
<template>
  <div class="error" v-show="props.error">{{ props.error }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: String,
});
</script>

<style lang="scss" scoped>
.error {
  @apply rounded-md border-2 border-amber-300 text-xs bg-pink-500 text-white px-2 py-1 mt-2;
}
</style>
