<template>
  <div
    class="boxTemplate flex flex-col items-center rounded-md bg-indigo-50 overflow-hidden shadow-md shadow-slate-500"
  >
    <div class="topimg w-full h-32 md:h-48 bg-cover overflow-hidden">
      <slot name="topImg" />
    </div>

    <div class="w-full h-full md:p-3 p-2">
      <h2
        class="md:mb-2 mb-1 md:text-xl text-base font-bold w-full whitespace-nowrap overflow-hidden text-ellipsis"
      >
        <slot name="title" />
      </h2>
      <p
        class="md:text-base text-sm w-full h-10"
        style="
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
        "
      >
        <slot name="textP" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.boxTemplate {
  .topimg {
    img {
      @apply w-full h-full object-cover;
    }
  }
}
</style>
