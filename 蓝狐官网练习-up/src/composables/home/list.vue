<template>
  <li class="home_list mb-[5px]">
    <a href="javascript:;">
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.home_list {
  &:hover {
    transition: 0.7s all;
    transform: translateY(-10px);
  }
  a {
    img {
      @apply w-[263.94px] h-[181.77px] align-top border-0;
    }
  }
}
</style>
