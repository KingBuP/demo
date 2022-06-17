<template>
  <div class="webbox5">
    <div class="wcon5 cw">
      <p class="text-[#636363] text-center font-bold text-[41.5px]">
        多样化案例驱动式教学，让学习的每个环节都充满动力与成就感
      </p>
      <p class="text-[#636363] text-center font-bold mt-[15px] text-[18px]">
        新手学代码最怕枯燥，沉浸式学习体验，在探索中掌握丰富的技术能力
      </p>
      <div
        class="bg-white w-[1003.47px] mx-auto box-border flex justify-between pt-[28.22px] pr-[51.46px] pb-[39.01px] pl-[48.97px] mt-[62px]"
      >
        <div>
          <ul>
            <li
              class="w-[205.01px] h-[35.69px] leading-[35.69px] flex text-[12px] cursor-pointer rounded-[4px]"
              :class="{ 'mt-[19.92px]': index != 0 }"
              v-for="(item, index) in wconData"
              :key="index"
              @click="updateUrl(item)"
            >
              <div
                class="w-[71.38px] bg-[#f3f3f3] text-center rounded-l-[4px]"
                :class="{ active: item.active }"
              >
                {{ item.title }}
              </div>
              <div
                class="w-[133.63px] bg-[#e6e6e6] text-[#9e9e9e] pl-[15px] box-border rounded-r-[4px]"
                :class="{ active: item.active }"
              >
                {{ item.title2 }}
              </div>
            </li>
          </ul>
        </div>
        <div
          class="hidden w-[661.51px] h-[424.96px] bg-[#f3f5f6] box-border pt-[39.84px] pr-[21.58px] pb-[29.05px] pl-[7.47px]"
          v-for="(item, index) in wconData"
          :class="{ '!block': item.active }"
          :key="index"
        >
          <img :src="item.url" class="bg-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface wData {
  title: string;
  title2: string;
  url: string;
  active?: boolean;
}

const updateUrl = (item: wData) => {
  wconData.value.forEach((w) => {
    w.active = false;
  });
  item.active = true;
};

const wconData = ref<wData[]>([
  {
    title: "基础技能",
    active: true,
    title2: "HTML5/CSS3",
    url: "/images/courseweb/wc1.png",
  },
  { title: "基础技能", title2: "Javascript", url: "/images/courseweb/wc2.png" },
  { title: "技术提升", title2: "组件化", url: "/images/courseweb/wc3.png" },
  { title: "技术提升", title2: "移动WebApp", url: "/images/courseweb/wc4.png" },
  { title: "技术拓展", title2: "小程序", url: "/images/courseweb/wc5.png" },
  { title: "技术纵深", title2: "Vue3 x", url: "/images/courseweb/wc6.png" },
  {
    title: "技术纵深",
    title2: "Node.js/Koa2",
    url: "/images/courseweb/wc7.png",
  },
  {
    title: "技术拔高",
    title2: "TypeScript/React.js",
    url: "/images/courseweb/wc8.png",
  },
]);
</script>

<style lang="scss">
.webbox5 {
  @apply w-full bg-[#f7f7f7] py-[76px];
  .wcon5 {
    .active {
      background: rgb(255, 123, 0);
      @apply text-white;
    }
  }
}
</style>
