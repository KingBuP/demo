<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-if="route">
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="(item, index) in route.matched"
        :key="index"
        >{{ item.meta.menu?.mtitle }}</el-breadcrumb-item
      >
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import menuStore from "@/store/menuStore";
const route = menuStore().route;
</script>

<style lang="scss"></style>
