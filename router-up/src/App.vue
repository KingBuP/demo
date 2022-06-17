<script setup lang="ts"></script>

<template>
  <!-- 用了全局 await 需要包Suspense -->
  <Suspense>
    <router-view />
  </Suspense>
</template>

<style lang="scss"></style>
