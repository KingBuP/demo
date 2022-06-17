<template>
  <div class="join bg-white p-2 md:p-5">
    <header class="h-8 p-2">
      <h2 class="flex items-center font-black">
        <span class="w-3 h-4 mr-2"></span>加入我们
      </h2>
    </header>
    <hr class="h-1 my-4 bg-slate-600 rounded-full" />
    <main class="">
      <section class="my-3">
        <h2 class="font-black text-sm md:ml-2 text-slate-900">
          <i class="fab fa-qq mr-3 text-xl text-sky-500"></i
          ><span>群：123456789</span>
        </h2>
      </section>
      <section class="my-3">
        <h2 class="font-black text-sm md:ml-2 text-slate-900">
          <i class="fab fa-qq mr-3 text-xl text-sky-500"></i
          ><span>群：123456789</span>
        </h2>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.join {
  header {
    h2 {
      span {
        background-image: url(/images/text_01.png);
        background-size: 100%;
      }
    }
  }
}
</style>
