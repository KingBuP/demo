<template>
  <div class="home_banner block text-center" m="t-4">
    <el-carousel trigger="click" height="auto">
      <el-carousel-item v-for="item in lunBo" :key="item.id">
        <img :src="item.url" class="w-full" />
      </el-carousel-item>
      <!-- 撑开div的img -->
      <img src="/images/banner/1.png" class="w-full opacity-0" />
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
export interface lunB {
  url: string;
  id?: number;
}
const lunBo = [
  { url: "/images/banner/1.png", id: 1 },
  { url: "/images/banner/banner1.png", id: 2 },
  { url: "/images/banner/banner2.png", id: 3 },
] as lunB[];
</script>

<style lang="scss">
.home_banner {
  .el-carousel {
    .el-carousel__indicators {
      display: none !important;
    }
    .el-carousel__container {
      .el-carousel__arrow--left {
        left: 48px;
        width: 72px;
        height: 72px;
      }
      .el-carousel__arrow--right {
        right: 48px;
        height: 72px;
        width: 72px;
      }
      .el-icon {
        width: 2em !important;
        height: 2em !important;
        line-height: 2em !important;
        svg {
          width: 2em !important;
          height: 2em !important;
          line-height: 2em !important;
        }
      }
    }
  }
}
</style>
