<template>
  <div class="uiuebox1">
    <div class="uicon1 cw">
      <p class="font-bold text-[#636363] text-[41.5px] text-center mt-[44px]">
        学习UI设计，迈入互联网黄金职业
      </p>
      <ul class="flex justify-center mt-[68px]">
        <li
          class="mt-[23px] h-[587px] w-[24%] flex flex-col items-center"
          v-for="(uit, index) in uiTs"
          :key="index"
        >
          <p class="text-center font-bold text-black text-[18px]">
            {{ uit.str1 }}
          </p>
          <p
            class="text-center mt-[10px] font-bold text-[30px] mb-[38px] text-black"
          >
            {{ uit.str2 }}
          </p>
          <p class="text-center h-[198px]">
            <img :src="uit.url" />
          </p>
          <p class="text-center font-bold text-black text-[18px] mt-[41px]">
            {{ uit.str3 }}
          </p>
          <p class="text-left mt-[31px] text-black pl-[22px] text-[16px]">
            {{ uit.str4 }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface uiT {
  str1: string;
  str2: string;
  str3: string;
  str4: string;
  url: string;
}

const uiTs = [
  {
    str1: "行业覆盖率",
    str2: "99%",
    str3: "企业多",
    str4: "互联网+时代各行各业都缺UI 设计人才，涵盖互联网、金融、教育、通信、建筑、广 告、媒体等企业。",
    url: "/images/uiue/t1.png",
  },
  {
    str1: "平均薪资",
    str2: "11630元",
    str3: "薪资高",
    str4: "智联招聘数据显示，UI设计师平均薪资高达11630元，高于同水平其他行业薪资25%。",
    url: "/images/uiue/t2.png",
  },
  {
    str1: "胜任设计岗位",
    str2: "87%",
    str3: "就业广",
    str4: "设计职位所需技能大同小异，掌握最核心的设计原理与技巧，就能实现各种设计职位的跨界，职业发展路径更宽。",
    url: "/images/uiue/t3.png",
  },
  {
    str1: "晋升管理层只需",
    str2: "3年",
    str3: "企业多",
    str4: "UI设计师的职业发展呈现两条不同的路径，产品设计与创意设计，双线发展，更有无线可能。",
    url: "/images/uiue/t5.png",
  },
] as uiT[];
</script>

<style lang="scss">
.uiuebox1 {
  @apply w-full bg-white;
  .uicon1 {
    @apply h-[828px];
  }
}
</style>
