<template>
  <div class="home_box1 cw">
    <ul class="flex justify-evenly">
      <li class="">
        <div class=""></div>
        <p>100+资深讲师</p>
      </li>
      <li class="">
        <div class=""></div>
        <p>积累输出上万名IT人才</p>
      </li>
      <li class="">
        <div class=""></div>
        <p>多年IT教学经验</p>
      </li>
      <li class="">
        <div class=""></div>
        <p>上市公司旗下教育品牌</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.home_box1 {
  @apply relative -top-[50px] z-[99];
  ul {
    li {
      box-shadow: 0px 6px 24px rgb(44 84 252 / 16%);
      @apply relative w-[249px] h-[141.1px] text-center text-[13.28px] rounded-[6px] pt-[97.94px] box-border bg-white font-semibold;
      div {
        background-image: url("/images/h3.png");
        background-repeat: no-repeat;
        @apply absolute top-[32px] left-1/2 -translate-x-1/2
            w-[58.1px] h-[58.1px] bg-cover;
      }
      &:nth-of-type(1) {
        &:hover {
          background: linear-gradient(134.61deg, #4cc2fa 0%, #90d9fe 100%);
          color: white;
          div {
            background-image: url("/images/h3b.png");
          }
        }
      }
      &:nth-of-type(2) {
        div {
          background-image: url("/images/h4.png");
        }
        &:hover {
          background: linear-gradient(134.54deg, #7de390 0%, #92e7af 100%);
          color: white;
          div {
            background-image: url("/images/h4b.png");
          }
        }
      }
      &:nth-of-type(3) {
        div {
          background-image: url("/images/h5.png");
        }
        &:hover {
          background: linear-gradient(134.44deg, #fb9863 0%, #f8bca2 100%);
          color: white;
          div {
            background-image: url("/images/h5b.png");
          }
        }
      }
      &:nth-of-type(4) {
        div {
          background-image: url("/images/h6.png");
        }
        &:hover {
          background: linear-gradient(134.33deg, #ab83f8 0%, #c19ffc 100%);
          color: white;
          div {
            background-image: url("/images/h6b.png");
          }
        }
      }
    }
  }
}
</style>
