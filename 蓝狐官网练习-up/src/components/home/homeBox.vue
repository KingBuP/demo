<template>
  <div class="home_box">
    <div class="home_box_hd cw">
      <p class="text-center text-[12px]">
        学员直接承接企业上线项目，毕业即有丰富项目经验。
      </p>
      <ul class="flex justify-center mt-[19px]">
        <li class="mr-[54px] text-center">
          <img
            src="/images/home/a1.png"
            class="w-[49.8px] h-[49.8px] mb-[8px]"
          />
          <p class="">云控之家</p>
        </li>
        <li class="mr-[54px] text-center">
          <img
            src="/images/home/a2.png"
            class="w-[49.8px] h-[49.8px] mb-[8px]"
          />
          <p class="">你点我帮</p>
        </li>
        <li class="mr-[54px] text-center">
          <img
            src="/images/home/a3.png"
            class="w-[49.8px] h-[49.8px] mb-[8px]"
          />
          <p class="">蚂蚁技工</p>
        </li>
        <li class="mr-[54px] text-center">
          <img
            src="/images/home/a4.png"
            class="w-[49.8px] h-[49.8px] mb-[8px]"
          />
          <p class="">学开车</p>
        </li>
        <li class="mr-[54px] text-center">
          <img
            src="/images/home/a5.png"
            class="w-[49.8px] h-[49.8px] mb-[8px]"
          />
          <p class="">爱作业</p>
        </li>
        <li class="mr-[54px] text-center">
          <img
            src="/images/home/a6.png"
            class="w-[49.8px] h-[49.8px] mb-[8px]"
          />
          <p class="">乐教乐学</p>
        </li>
      </ul>
    </div>
    <div class="home_box_con">
      <ul>
        <li v-for="(item, index) in dataImgs" :key="index">
          <img :src="item.url" />
        </li>
      </ul>
    </div>
    <div class="home_box_ft">
      <p class="text-[39.84px] font-semibold mb-[20px] mt-[10px]">
        10,000+学员共同选择蓝狐教育，选的人多自然是好机构
      </p>
      <p class="font-semibold text-[18.26px]">
        学员就业满意率达98%，高薪就业率达65%，入职合作企业好评不断！
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lunB } from "./lunbo.vue";

const dataImgs = [
  { url: "/images/home/p1.png" },
  { url: "/images/home/p2.png" },
  { url: "/images/home/p3.png" },
  { url: "/images/home/p4.png" },
  { url: "/images/home/p5.png" },
  { url: "/images/home/p6.png" },
  { url: "/images/home/p7.png" },
  { url: "/images/home/p8.png" },
  { url: "/images/home/p9.png" },
  { url: "/images/home/p10.png" },
  { url: "/images/home/p11.png" },
  { url: "/images/home/p12.png" },
  { url: "/images/home/p13.png" },
  { url: "/images/home/p1.png" },
  { url: "/images/home/p2.png" },
  { url: "/images/home/p3.png" },
  { url: "/images/home/p4.png" },
  { url: "/images/home/p5.png" },
  { url: "/images/home/p6.png" },
  { url: "/images/home/p7.png" },
  { url: "/images/home/p8.png" },
  { url: "/images/home/p9.png" },
  { url: "/images/home/p10.png" },
  { url: "/images/home/p11.png" },
  { url: "/images/home/p12.png" },
  { url: "/images/home/p13.png" },
  { url: "/images/home/p1.png" },
  { url: "/images/home/p2.png" },
  { url: "/images/home/p3.png" },
  { url: "/images/home/p4.png" },
  { url: "/images/home/p5.png" },
  { url: "/images/home/p6.png" },
  { url: "/images/home/p7.png" },
  { url: "/images/home/p8.png" },
  { url: "/images/home/p9.png" },
  { url: "/images/home/p10.png" },
  { url: "/images/home/p11.png" },
  { url: "/images/home/p12.png" },
  { url: "/images/home/p13.png" },
  { url: "/images/home/p1.png" },
  { url: "/images/home/p2.png" },
  { url: "/images/home/p3.png" },
  { url: "/images/home/p4.png" },
  { url: "/images/home/p5.png" },
  { url: "/images/home/p6.png" },
  { url: "/images/home/p7.png" },
  { url: "/images/home/p8.png" },
  { url: "/images/home/p9.png" },
] as lunB[];
</script>

<style lang="scss">
.home_box {
  @apply w-full bg-[#f5f6fa];
  .home_box_hd {
    @apply pt-[17px] box-border;
    ul {
      li {
        @apply duration-200;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  .home_box_con {
    @apply w-[1500px] m-auto overflow-hidden mt-[50px] pl-[10px] box-border;
    ul {
      animation: move 13s linear infinite forwards;
      @apply flex flex-wrap w-[200%];
      &:hover {
        animation-play-state: paused;
      }
      li {
        img {
          @apply w-[123.67px] h-[273.9px];
        }
      }
    }
  }
  .home_box_ft {
    @apply box-content bg-[#f4775f] h-[138px] overflow-hidden text-center py-[10px];
    p {
      @apply text-center text-white;
    }
  }
}
@keyframes move {
  100% {
    transform: translateX(-35%);
  }
}
</style>
