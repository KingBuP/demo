<!-- 通知组件 -->
<template>
  <div class="notification">
    <i-tips-one
      theme="outline"
      size="24"
      fill="#333"
      @click.stop="isShow = !isShow"
      class="cursor-pointer"
    />

    <el-tabs
      v-model="activeName"
      class="lists"
      v-show="isShow"
      @tab-click="handleClick"
      @click.stop
    >
      <el-tab-pane label="系统通知" name="site">
        <!-- 后面是router-link 现在用a -->
        <a href="javascript:;" class=""
          >壓力發佈藥物篇文章回事收費看過都沒帶著負責人電子郵件拿出，相對標誌相比模樣已被一會兒審批計算尋求透。
        </a>
        <a href="javascript:;" class=""
          >為止恐怕預測開通小孩全新完了歌曲我要到了適合貨幣展示物理用戶，信號改進這些中文空中上帝能夠不怕機器，走進人家無關電子郵件，化學興趣責任過來。</a
        >
        <a href="javascript:;" class=""
          >房間版面責任可憐，嘗試信箱，浙江認為提前哪裡多種緊急原創一級瞬間，信箱停止壓力一系列風雲，同樣英國就算幾天及其隊員有些不多適用需要化工，是啊改變斗內女孩子並在就是相當近日歌曲得分工業都說資訊，家電。</a
        >
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message">message</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";
let isShow = ref(false);
const activeName = ref("site");

//Dom更新后渲染之后
nextTick(() => {
  document.documentElement.addEventListener("click", () => {
    isShow.value = false;
  });
});

const handleClick = (tab: TabsPaneContext, event: Event) => {};
</script>

<style lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply w-[300px] text-sm absolute -right-5  bg-white px-3 py-2 border rounded-md shadow-md z-30 translate-y-1;
    a {
      @apply block truncate border-b pb-2 my-2 hover:text-blue-700 duration-300;
    }
  }
}
</style>
