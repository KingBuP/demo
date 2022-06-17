<template>
  <div class="home_team cw">
    <div class="title">
      <p>百余位教资团队，为你打造全“薪”课程</p>
      <p>教学案例全部来自于真是企业项目</p>
    </div>
    <div class="con">
      <ul>
        <FooterBox
          :dItem="dItem"
          v-for="(dItem, index) in daItem"
          :key="index"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterBox, { dIte } from "@/composables/home/footerBox.vue";

const daItem = [
  {
    url: "/images/home/r1.png",
    nub: 5,
    name: "段老师",
    conText:
      "7年互联网设计经验，精通多款设计软件，资深UI设计师，拥有多年互联网UI视觉设计及管理经验，擅长2B/2C领域，熟悉并精通互联网产品/设计工作和运营工作中的各个环节和流程。",
  },
  {
    url: "/images/home/r2.png",
    nub: 5,
    name: "李老师",
    conText:
      "原互联网、物联网行业设计师；百度认证的U2高级讲师；14年设计总监经验，拥有一套独特的从0到1快速进阶的教学方法论！",
  },
  {
    url: "/images/home/r3.png",
    nub: 5,
    name: "裵老师",
    conText:
      "拥有6年的UI设计经验，3年的UI设计线上线下教学经验;曾在某知名互联网自营电商公司担任海外站项目设计总监，荣获Adobe Certified Associate国际认证考试监考员聘书;精通PS、AI、C4D、Axure等多款软件，擅长视觉营销设计、平面广告设计、UI交互动效设计等。",
  },
  {
    url: "/images/home/r4.png",
    nub: 5,
    name: "杨老师",
    conText:
      "拥有多年web前端开发相关工作经验，熟悉前端项目的整个开发流程，曾参加过多个大型上线项目的需求定制与研发工作。对PC端移动端应用、用户体验、交互设计有深入的研究。精通web开发技术HTML5、CSS3原生Javascript，并能用原生js开发各种动画特效，交互效果等。",
  },
  {
    url: "/images/home/r5.png",
    nub: 5,
    name: "唐老师",
    conText:
      "五年前端开发工作经验，曾参与多款大型项目开发，前端经验丰富。人性格开朗，热衷于专研前端技术。另外，多年来丰富的教学经验使其多次蝉联优秀讲师称号，其自身的教学宗旨是让学员在快乐的学习氛围中获取更多的技术知识。",
  },
  {
    url: "/images/home/r6.png",
    nub: 5,
    name: "申老师",
    conText:
      "8年以上Linux自动化运维管理经验;擅长高可用网络架构设计与网站高并发架构设计、实施及自动化运维;擅长分布式计算存储技术，精通容器技术(docker、kubernets等)在实际生产环境应用及智能运维体系建设。",
  },
  {
    url: "/images/home/r7.png",
    nub: 5,
    name: "张老师",
    conText:
      "毕业于211大学设计专业，拥有近10年从业经验，曾是中超项目设计师，担任过国内上市公司的资深视觉设计师、资深UI设计师，具有丰富的团队管理和项目经验。曾带领团队完成多个大型web端和移动端的项目，其中包括小熊电器天猫旗舰店、实时球事APP、中超大数据官网，家长口袋APP等。精通平面设计，网页设计，UI设计，熟练掌握PS/AI/SKETCH/C4D等设计软件，对用户体验和交互设计有很好的了解。",
  },
  {
    url: "/images/home/r8.png",
    nub: 5,
    name: "文老师",
    conText:
      "UXD金牌讲师，知名互联网公司设计制作总监，负责月活量千万级产品设计，具有多年线上线下跨平台设计工作经验，对字体、标志、Web端、移动端及人工智能设计有深入研究。授课逻辑严谨、条理清晰，注重学生独立解决问题的能力，善于启发式教学",
  },
  {
    url: "/images/home/r9.png",
    nub: 5,
    name: "李老师",
    conText:
      "JavaEE金牌讲师，行业技术大牛，IT教育风云人物。亲自主持开发过多个大型项目，对JavaEE技术体系、大数据、互联网技术都有深厚的技术功底，具备很强的项目管理能力和丰富的项目开发实施经验。授课思路清晰，激情昂扬、通俗易懂。",
  },
  {
    url: "/images/home/r10.png",
    nub: 5,
    name: "陈老师",
    conText:
      "拥有丰富的工作经验，曾在某大型教育机构任前端开发一职，管理并维护公司的项目。擅长JavaScript、nodeJS、Vue等一些前端框架，有良好的逻辑思维能力，善于发现学生问题，并给予解决，激发学员学习兴趣，正确的引导学员。",
  },
] as dIte[];
</script>

<style lang="scss">
.home_team {
  .title {
    p {
      @apply font-semibold text-center text-[#424242] text-[39.83px];
      &:nth-of-type(2) {
        @apply mt-[5px] text-[19.92px] text-[#bebebe];
      }
    }
  }
  .con {
    @apply mt-[50px];
    ul {
      @apply flex flex-wrap;
    }
  }
}
</style>
