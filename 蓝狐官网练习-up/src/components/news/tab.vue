<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane
      label="公司动态"
      name="first"
      class="animate__animated animate__fadeInLeft animate__faster"
    >
      <div>
        <div class="flex flex-wrap justify-between">
          <router-link
            :to="{ name: 'article' }"
            class="text-[#252525]"
            v-for="n in 7"
            :key="n"
          >
            <div
              class="flex justify-between mb-[101.26px] w-[576px] h-[176px] px-[15px] py-[40px] box-border bg-white rounded-[9.22px]"
              style="box-shadow: 0px 7.38px 10.14px #ececf0;}"
            >
              <p
                class="w-[30px] h-[30px] leading-[30px] text-center bg-[#59a3ff] text-white text-[14px] rounded-[2.27px]"
              >
                1
              </p>
              <div class="w-[500px]">
                <div class="flex justify-between items-center">
                  <p
                    class="w-[410px] text-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    2021年广东省网络安全宣传周群众性宣传作...
                  </p>
                  <span class="text-[12px] text-[#707070]">2021-08-21</span>
                </div>
                <p
                  class="text-[12px] text-[#707070] leading-[23px] my-[18px] text-center"
                >
                  本次征集于8月27号正式启动，通过引导、发掘、鼓励生产群众喜闻乐见的网络安全宣传作品，推
                  动“网络安全为人民、网络安全靠人民”理念深入人心。
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="行业资讯"
      name="second"
      class="animate__animated animate__fadeInRight animate__faster"
    >
      <div>
        <div class="flex flex-wrap justify-between">
          <router-link
            :to="{ name: 'article' }"
            class="text-[#252525]"
            v-for="n in 7"
            :key="n"
          >
            <div
              class="flex justify-between mb-[101.26px] w-[576px] h-[176px] px-[15px] py-[40px] box-border bg-white rounded-[9.22px]"
              style="box-shadow: 0px 7.38px 10.14px #ececf0;}"
            >
              <p
                class="w-[30px] h-[30px] leading-[30px] text-center bg-[#59a3ff] text-white text-[14px] rounded-[2.27px]"
              >
                1
              </p>
              <div class="w-[500px]">
                <div class="flex justify-between items-center">
                  <p
                    class="w-[410px] text-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    2021年广东省网络安全宣传周群众性宣传作...
                  </p>
                  <span class="text-[12px] text-[#707070]">2021-08-21</span>
                </div>
                <p
                  class="text-[12px] text-[#707070] leading-[23px] my-[18px] text-center"
                >
                  本次征集于8月27号正式启动，通过引导、发掘、鼓励生产群众喜闻乐见的网络安全宣传作品，推
                  动“网络安全为人民、网络安全靠人民”理念深入人心。
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs {
  .el-tabs__header {
    @apply flex justify-center m-0 p-0;
    .el-tabs__nav-wrap {
      &::after {
        display: none !important;
      }
      .el-tabs__nav-scroll {
        @apply flex mt-[68.89px] mb-[55.61px] mx-auto;
        .el-tabs__nav {
          .el-tabs__active-bar {
            @apply h-[4px] rounded-sm;
          }
          .el-tabs__item {
            @apply text-[#3b3b3b] text-[36.52px] mx-[25px] h-[58px] font-bold cursor-pointer;
          }
        }
      }
    }
  }

  .is-active {
    @apply text-[#3b3b3b];
  }

  .el-tabs__content {
    @apply m-0 p-0 font-normal;
    .el-tab-pane {
      @apply w-[1200px] text-[18px] bg-white flex items-center relative flex-wrap justify-between;
    }
  }
}
</style>
