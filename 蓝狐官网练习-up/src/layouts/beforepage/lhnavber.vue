<template>
  <header class="lhnavber">
    <div class="navber_left" @click="tolink">
      <router-link to="/">
        蓝狐教育
        <img src="/images/2@3x.png" class="mr-[20px] h-[66.5px]" />
        <h1 class="">蓝狐教育</h1></router-link
      >
    </div>
    <div class="navber_rigth">
      <ul class="flex">
        <li
          @click="tolink"
          v-for="(liData, index) in liDatas"
          :key="index"
          :class="{
            active:
              liData.active ||
              ($route.name == 'uiuepage' && liData.routeName == 'courseweb'),
          }"
          class="relative"
        >
          <router-link :to="liData.routeName">{{ liData.title }}</router-link>
          <div
            v-if="liData.routeName == 'courseweb' && bool"
            class="show_k absolute flex overflow-hidden flex-col h-[0px] duration-300 w-[65.91px] bg-white left-0 top-6 z-50 items-center rounded-md shadow-md shadow-black"
          >
            <router-link
              to="uiuepage"
              @click="fn"
              class="text-[#252525] !text-[9.96px] mt-[7px]"
              >UI/UE设计</router-link
            >
            <router-link
              to="courseweb"
              @click="fn"
              class="text-[#252525] !text-[9.96px] mt-[7px]"
              >WEB前端</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import pagedata from "@/qdata/pagedata";
import router from "@/router";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
// import router from "@/router";
// import pageData from "@/qdata/pagedata";

const bool = ref(true);

onMounted(() => {
  tolink();
});

const fn = () => {
  watch(
    () => router.currentRoute.value.path,
    (newValue, oldValue) => {
      if (newValue != pagedata.lhNavBool.value) {
        bool.value = false;
        setTimeout(() => {
          bool.value = true;
        }, 100);
      }
      pagedata.lhNavBool.value = newValue;
    },
    { immediate: true }
  );
};

interface navLiData {
  title: string;
  routeName?: string;
  active?: boolean;
}

const liDatas = ref<navLiData[]>([
  { title: "首页", active: true, routeName: "home" },
  { title: "精品课程", routeName: "courseweb" },
  { title: "就业服务", routeName: "serve" },
  { title: "新闻动态", routeName: "news" },
  { title: "关于我们", routeName: "about" },
]);

const usRoute = useRoute();

const tolink = () => {
  liDatas.value.forEach((m) => {
    m.active = false;
    if (m.routeName == usRoute.name) {
      m.active = true;
    }
  });
};
</script>

<style lang="scss" scoped>
.lhnavber {
  @apply h-[99.5px] w-[1200px] flex items-center justify-between m-auto;
  .navber_left {
    @apply flex items-center;
    a {
      @apply flex items-center text-[0px];
      h1 {
        @apply text-[29.05px] font-semibold text-[#1a1a1a];
      }
    }
  }
  .navber_rigth {
    ul {
      li {
        @apply ml-[40px];
        .show_k {
          &::before {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            top: -2px;
          }
          a {
            @apply hover:text-[#2c54fc];
          }
        }
        &:hover {
          .show_k {
            @apply h-[55px];
          }
        }
        a {
          font-family: ".PingFang", "SC";
          // color: #424242;
          // color: #252525;
          @apply text-[15px] font-semibold text-[#252525];
        }
        &.active {
          & > a {
            color: #2c54fc;
          }
        }
      }
    }
  }
}
</style>
