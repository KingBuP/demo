<template>
  <div class="about bg-white p-2 md:p-5">
    <header class="h-8 p-2">
      <h2 class="flex items-center font-black">
        <span class="w-3 h-4 mr-2"></span>关于我们
      </h2>
    </header>
    <hr class="h-1 my-4 bg-slate-600 rounded-full" />
    <main class="p-2 md:p-8 md:pt-0 text-base text-slate-800">
      <p>
        哔哩哔哩是中国年轻世代高度聚集的综合性视频社区，被用户亲切地称为“B站”。根据艾瑞咨询报告，2020年B站35岁及以下用户占比超86%。截至2021年第四季度，B站月均活跃用户达2.72亿。
      </p>
      <p>
        围绕用户、创作者和内容，B站构建了一个源源不断产生优质内容的生态系统。中国最优秀的专业创作者都聚集在B站创作内容，涵盖生活、游戏、时尚、知识、音乐等数千个品类和圈层，引领着流行文化的风潮，成为中文互联网极其独特的存在。目前，B站94%的视频播放量都来自于专业用户创作的视频（Professional
        User Generated Video，PUGV）。
      </p>
      <p>
        在此基础之上，B站提供了移动游戏、直播、付费内容、广告、漫画、电商等商业化产品服务，并对电竞、虚拟偶像等前沿领域展开战略布局。
      </p>
      <p>
        B站多个季度蝉联QuestMobile“Z世代偏爱APP”和“Z世代偏爱泛娱乐APP”两项榜单第一位，同时入选“BrandZ”报告2019最具价值中国品牌100强。公司于2018年3月登陆美国纳斯达克，并于2021年3月在港交所二次上市
      </p>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
  header {
    h2 {
      span {
        background-image: url(/images/text_01.png);
        background-size: 100%;
      }
    }
  }
  main {
    p {
      @apply py-4;
    }
  }
}
</style>
