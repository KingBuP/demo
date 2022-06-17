<template>
  <div class="uiuebox2 flex flex-col">
    <div class="u2con1 cw pt-[52px]">
      <p class="font-bold text-[#636363] text-[41.5px] mb-[59px] text-center">
        课程大纲
      </p>
      <ul class="">
        <li
          class="flex items-center mb-[45px]"
          v-for="(item, index) in liDates"
          :key="index"
        >
          <p
            class="w-[92px] leading-[28px] bg-[#2c54fc] rounded-[446px] text-[#fff] text-[18px] mr-[9px] text-center"
            :class="{ ab: !item.hi }"
          >
            {{ item.p1 }}
          </p>
          <div class="w-[1179px] bg-white pr-[80px]">
            <img :src="item.url" class="float-left mr-[21px]" />
            <p class="text-[#636363] text-[18px] pt-[14px] mb-[37px]">
              {{ item.p2 }}
            </p>
            <p class="text-[#636363] text-[14px] leading-[20px] mb-[50px]">
              {{ item.p3 }}
            </p>
            <ul class="flex">
              <li
                class="whitespace-nowrap py-[5px] px-[15px] bg-[#f3f5f6] hover:bg-[#2c54fc] hover:text-white rounded-[15px] text-center text-[#808080] flex justify-center text-[18px] mr-[20px] relative items-center mb-[45px]"
              >
                {{ item.li1 }}
              </li>
              <li
                class="whitespace-nowrap py-[5px] px-[15px] bg-[#f3f5f6] hover:bg-[#2c54fc] hover:text-white rounded-[15px] text-center text-[#808080] flex justify-center text-[18px] mr-[20px] relative items-center mb-[45px]"
              >
                {{ item.li2 }}
              </li>
              <li
                class="whitespace-nowrap py-[5px] px-[15px] bg-[#f3f5f6] hover:bg-[#2c54fc] hover:text-white rounded-[15px] text-center text-[#808080] flex justify-center text-[18px] mr-[20px] relative items-center mb-[45px]"
              >
                {{ item.li3 }}
              </li>
              <li
                class="whitespace-nowrap py-[5px] px-[15px] bg-[#f3f5f6] hover:bg-[#2c54fc] hover:text-white rounded-[15px] text-center text-[#808080] flex justify-center text-[18px] mr-[20px] relative items-center mb-[45px]"
              >
                {{ item.li4 }}
              </li>
              <li
                class="whitespace-nowrap py-[5px] px-[15px] bg-[#f3f5f6] hover:bg-[#2c54fc] hover:text-white rounded-[15px] text-center text-[#808080] flex justify-center text-[18px] mr-[20px] relative items-center mb-[45px]"
                v-if="item.li5"
              >
                {{ item.li5 }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="u2con2 cw">
      <p
        class="text-[#636363] text-[50px] text-center mb-[59px] tracking-[28px]"
      ></p>
      <ul class="con2ul flex justify-between">
        <li
          class="con2li w-[278px] h-[215px] border-[1px] flex flex-col items-center box-border text-center bg-white rounded-[10px] mb-[71px] relative"
          style="box-shadow: 0px 6px 3px rgb(0 0 0 / 16%)"
          v-for="(pli, index) in plis"
          :key="index"
        >
          <img
            :src="pli.url"
            class="mt-[33px] mb-[23px]"
            style="perspective: 1000px; transition: transform 0.3s linear"
          />
          <p class="">{{ pli.title }}</p>
        </li>
      </ul>
      <ul class="con2ul flex justify-between">
        <li
          class="con2li w-[278px] h-[215px] border-[1px] box-border flex flex-col items-center text-center bg-white rounded-[10px] mb-[71px] relative"
          style="box-shadow: 0px 6px 3px rgb(0 0 0 / 16%)"
          v-for="(pli, index) in plis2"
          :key="index"
        >
          <img
            :src="pli.url"
            class="mt-[33px] mb-[23px]"
            style="perspective: 1000px; transition: transform 0.3s linear"
          />
          <p class="">{{ pli.title }}</p>
        </li>
      </ul>
    </div>
    <div class="u2con3 cw">
      <ul class="kl flex overflow-hidden justify-between mb-[67px] w-full">
        <li class="overflow-hidden w-[25%]">
          <img src="/images/uiue/pb1.png" class="w-full" />
          <img src="/images/uiue/pb7.png" class="w-full" />
        </li>
        <li class="overflow-hidden w-[25%]">
          <img src="/images/uiue/pb2.png" class="w-full" />
          <img src="/images/uiue/pb5.png" class="w-full" />
          <img src="/images/uiue/pb8.png" class="w-full" />
        </li>
        <li class="overflow-hidden w-[25%]">
          <img src="/images/uiue/pb3.png" class="w-full" />
          <img src="/images/uiue/pb6.png" class="w-full" />
          <img src="/images/uiue/pb.png" class="w-full" />
        </li>
        <li class="overflow-hidden w-[25%]">
          <img src="/images/uiue/pb4.png" class="w-full" />
        </li>
      </ul>
    </div>
    <Uifooter />
  </div>
</template>

<script setup lang="ts">
import Uifooter from "@/components/uiuepage/uifooter.vue";
undefined;
interface liD {
  url: string;
  hi?: boolean;
  p1: string;
  p2: string;
  p3: string;
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
}

const liDates = [
  {
    url: "/images/uiue/j1.png",
    p1: "阶段一",
    p2: "基础阶段",
    p3: "本阶段包含手绘插画、知识体系梳理，和电商设计以及软件学习四个部分，通过本阶段的学习你可以了解到UI的技能基础构成，对今后学习UI的进阶部分做好充分的铺垫。",
    li1: "Photoshop",
    li2: "商业插画",
    li3: "手绘",
    li4: "illustrator",
    li5: "知识体系梳理",
  },
  {
    url: "/images/uiue/j2.png",
    p1: "阶段二",
    p2: "平面设计",
    p3: "本阶段主要学习平面设计的内容，通过本阶段的学习你可以了解到UI设计和平面设计的区别，在今后工作中可多一个职业选择方向",
    li1: "Logo设计",
    li2: "VIS设计",
    li3: "字体设计",
    li4: "插画设计",
    li5: "物料设计",
  },
  {
    url: "/images/uiue/j3.png",
    p1: "案例实操",
    p2: "UI设计",
    p3: "阶段开始UI设计实操部分，通过前边所学基础知识开始制作icon设计，APP设计，网页设计以及插画在UI设计中的应用，通过阶段的学习同学们就应该能完成大部分UI设计需求工作",
    li1: "网页设计",
    li2: "移动端界面设计",
    li3: "Axure",
    li4: "illustrator",
    li5: "小程序",
  },
  {
    url: "/images/uiue/j4.png",
    p1: "阶段四",
    p2: "项目实战",
    p3: "本章节属于UI设计师的进阶技能，当你已经能完整地制作页面后，通过本阶段的学习能让你页面更加丰富多彩并且富有活力",
    li1: "项目实战",
    li2: "动效设计",
    li3: "视频剪辑",
    li4: "Html5前端",
    li5: "C4D设计",
  },
  {
    url: "/images/uiue/j5.png",
    p1: "阶段五",
    p2: "就业指导",
    p3: "本阶段的内容主要是针对UI设计师的作品包装技巧，面试技巧，以及入职后的沟通技巧和工作效率的提升",
    li1: "职业素养",
    li2: "作品集整理",
    li3: "面试指导",
    li4: "职后指导",
    hi: true,
  },
] as liD[];

interface Pli {
  url: string;
  title: string;
}
const plis = [
  { title: "Photoshop软件", url: "/images/uiue/p1.png" },
  { title: "Premiere软件", url: "/images/uiue/p2.png" },
  { title: "lndesign软件", url: "/images/uiue/p3.png" },
  { title: "AfterEffect软件", url: "/images/uiue/p4.png" },
] as Pli[];
const plis2 = [
  { title: "illstrator软件", url: "/images/uiue/p5.png" },
  { title: "C4D软件", url: "/images/uiue/p6.png" },
  { title: "Skerth软件", url: "/images/uiue/p7.png" },
  { title: "Principle软件", url: "/images/uiue/p8.png" },
] as Pli[];
</script>

<style lang="scss">
.uiuebox2 {
  @apply w-full bg-[#f7f7ff];
  .u2con1 {
    .ab {
      position: relative;
      &::after {
        position: absolute;
        top: 85px;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        width: 0px;
        height: 139px;
        border-right: 2px dashed;
        border-color: #2c54fc;
      }
    }
  }
  .u2con2 {
    .con2ul {
      &::after {
      }
    }
    .con2li {
      &::before {
        box-sizing: inherit;
        position: absolute;
        content: "";
        border: 3px solid transparent;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
      }
      &::after {
        box-sizing: inherit;
        position: absolute;
        content: "";
        border: 3px solid transparent;
        width: 0;
        height: 0;
        bottom: 0;
        right: 0;
      }
      &:hover {
        img {
          transform: translateY(-10px);
          transition: transform 0.3s linear;
        }
        &::before {
          width: 100%;
          height: 100%;
          border-top-color: #2c54fc;
          border-right-color: #2c54fc;
          transition: width 0.2s linear, height 0.2s linear 0.3s;
        }
        &::after {
          width: 100%;
          height: 100%;
          border-bottom-color: #2c54fc;
          border-left-color: #2c54fc;
          transition: border-color 0s linear 0.6s, width 0.3s linear 0.6s,
            height 0.3s linear 1s;
        }
      }
    }
  }
  .u2con3 {
    .kl li img {
      &:hover {
        transform: scale(1.05);
        transition: all 1s ease-out;
      }
    }
  }
}
</style>
