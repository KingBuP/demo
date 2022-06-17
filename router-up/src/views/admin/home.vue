<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-md">
      <el-card
        shadow="hover"
        :body-style="{ padding: '20px' }"
        v-for="(card, index) in cards"
        :key="index"
        class="cursor-pointer"
      >
        <template #header>
          <div class="flex justify-between items-center">
            <span>
              {{ card.title }}
            </span>
            <el-tag type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>
        <section class="flex justify-between items-center mt-2">
          <span class="text-xl font-black"
            >{{ card.totalType }}<span class="mx-2">:</span
            >{{ card.price }}</span
          ><i :class="[card.icon, card.iconColor]" class="text-2xl"></i>
        </section>
        <section class="flex justify-between items-center mt-6">
          <span class="text-sm">{{ card.totalTitle }}</span>
          <span class="text-sm">{{ card.total }}{{ card.totalType }}</span>
        </section>
      </el-card>
    </div>
    <div class="mt-3 bg-slate-300 rounded-md">
      <section class="py-3 grid md:grid-cols-2 gap-3">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <template #header>
            <div>
              <span>用户统计</span>
            </div>
          </template>
          <div id="echart1" class="sm:!w-full h-72"></div>
        </el-card>
        <el-card shadow="always " :body-style="{ padding: '20px' }">
          <template #header>
            <div>
              <span>销售额</span>
            </div>
          </template>
          <div id="echart2" class="sm:!w-full h-72"></div>
        </el-card>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { echart1, echart2 } from "./echart";
import * as echarts from "echarts";
interface ICard {
  title: string;
  price: number;
  icon: string;
  iconColor: string;
  totalTitle: string;
  total: number;
  totalType: string;
}
const cards = ref<ICard[]>([
  {
    title: "用户数",
    price: 200,
    iconColor: "text-blue-500",
    icon: "fas fa-circle-user",
    totalTitle: "总人数",
    total: 29322,
    totalType: "人",
  },
  {
    title: "销售额",
    price: 20120,
    iconColor: "text-green-500",
    icon: "fab fa-btc",
    totalTitle: "总销售额",
    total: 293221,
    totalType: "￥",
  },
  {
    title: "订单数",
    price: 223300,
    iconColor: "text-pink-500",
    icon: "fab fa-buffer",
    totalTitle: "总订单数",
    total: 29321212,
    totalType: "件",
  },
  {
    title: "评论数",
    price: 200000000,
    iconColor: "text-green-700",
    icon: "fab fa-discourse",
    totalTitle: "总评论数",
    total: 29322,
    totalType: "条",
  },
]);

nextTick(() => {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(
    document.getElementById("echart1") as HTMLDivElement
  );
  let myChart2 = echarts.init(
    document.getElementById("echart2") as HTMLDivElement
  );

  // 绘制图表
  myChart.setOption(echart1);
  myChart2.setOption(echart1);
});
</script>
<style lang="scss">
#echart1 {
  div {
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
}
#echart2 {
  div {
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
}
</style>
