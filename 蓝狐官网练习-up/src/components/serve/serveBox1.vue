<template>
  <div class="servebox1">
    <div class="con">
      <ul>
        <li>
          <img src="/images/serve/t1.png" />
        </li>
        <li>
          <img src="/images/serve/t2.png" />
        </li>
        <li>
          <img src="/images/serve/t3.png" />
        </li>
        <li>
          <img src="/images/serve/t4.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.servebox1 {
  @apply w-full;
  .con {
    box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
    @apply m-auto w-[1200px] h-[255.64px] rounded-[10px] flex justify-center items-center;
    ul {
      @apply w-full flex justify-evenly;
      li {
        @apply relative;
        img {
          transition: all 0.3s ease;
          @apply w-[288.01px] h-[141.1px];
        }
        &:hover {
          img {
            transform: scale(1.05);
          }
        }
      }
    }
  }
}
</style>
