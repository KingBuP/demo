<template>
  <div class="webfooter">
    <div class="zhezhao"></div>
    <div class="main">
      <div class="t relative top-0 left-0 pt-[85px]">
        <p class="text-white text-center text-[33.2px]">优秀讲师团队</p>
        <p class="text-[16px] mt-[10px] text-white text-center">
          优秀的讲师团队是蓝狐教育取得成功的基础
        </p>
      </div>
      <div class="b mt-[88px]">
        <ul class="flex justify-between">
          <WebuiboxVue
            :dItem="dItem"
            v-for="(dItem, index) in daItems"
            :key="index"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dIte } from "../../composables/home/footerBox.vue";
import WebuiboxVue from "../../composables/home/webuibox.vue";

const daItems = [
  {
    url: "/images/courseweb/r.png",
    nub: 5,
    name: "段老师",
    conText:
      "7年互联网设计经验，精通多款设计软件，资深UI设计师，拥有多年互联网UI视觉设计及管理经验，擅长2B/2C领域，熟悉并精通互联网产品/设计工作和运营工作中的各个环节和流程。",
  },

  {
    url: "/images/courseweb/r2.png",
    nub: 5,
    name: "裵老师",
    conText:
      "拥有6年的UI设计经验，3年的UI设计线上线下教学经验;曾在某知名互联网自营电商公司担任海外站项目设计总监，荣获Adobe Certified Associate国际认证考试监考员聘书;精通PS、AI、C4D、Axure等多款软件，擅长视觉营销设计、平面广告设计、UI交互动效设计等。",
  },
  {
    url: "/images/courseweb/r3.png",
    nub: 5,
    name: "杨老师",
    conText:
      "拥有多年web前端开发相关工作经验，熟悉前端项目的整个开发流程，曾参加过多个大型上线项目的需求定制与研发工作。对PC端移动端应用、用户体验、交互设计有深入的研究。精通web开发技术HTML5、CSS3原生Javascript，并能用原生js开发各种动画特效，交互效果等。",
  },
  {
    url: "/images/courseweb/r4.png",
    nub: 5,
    name: "唐老师",
    conText:
      "五年前端开发工作经验，曾参与多款大型项目开发，前端经验丰富。人性格开朗，热衷于专研前端技术。另外，多年来丰富的教学经验使其多次蝉联优秀讲师称号，其自身的教学宗旨是让学员在快乐的学习氛围中获取更多的技术知识。",
  },

  {
    url: "/images/courseweb/r5.png",
    nub: 5,
    name: "陈老师",
    conText:
      "拥有丰富的工作经验，曾在某大型教育机构任前端开发一职，管理并维护公司的项目。擅长JavaScript、nodeJS、Vue等一些前端框架，有良好的逻辑思维能力，善于发现学生问题，并给予解决，激发学员学习兴趣，正确的引导学员。",
  },
] as dIte[];
</script>

<style lang="scss">
.webfooter {
  background: url(/images/courseweb/bg-footer.png) center no-repeat;
  @apply w-full relative h-[560px];
  .main {
    @apply w-[1200px] mx-auto;
  }
  .zhezhao {
    @apply opacity-[0.6] w-full h-full bg-[#000] absolute top-0 left-0;
  }
}
</style>
