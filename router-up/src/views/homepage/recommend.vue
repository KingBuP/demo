<template>
  <div>
    <div class="tuijianComponent flex flex-col">
      <h1 class="text-indigo-700 font-bold text-3xl my-2 flex items-center">
        <span class="mx-3 inline-flex justify-center items-center h-full w-8">
          <i-windmill-two
            theme="outline"
            size="30"
            fill="blue"
            class="flex justify-center items-center" /></span
        >推荐
      </h1>
      <div
        class="home_con p-4 grid grid-cols-1 lg:grid-cols-4 gap-3 rounded-md"
      >
        <div
          class="bg-blue-300 h-56 max-h-96 rounded-md hover:shadow-xl overflow-hidden relative bg-cover"
          v-for="(tdata, index) in tdatas"
          :key="index"
        >
          <div
            class="absolute p-4 z-20 h-full w-full justify-between flex flex-col"
          >
            <div class="flex self-end">
              <button
                class="p-2 outline-none backdrop-blur-[3px] bg-gray-800/30 w-12 h-12 justify-center items-center flex rounded-xl border-gray-400/50 border hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
            <div
              class="p-4 rounded-xl w-full hover:shadow-xl bg-slate-900 bg-opacity-30 self-end border-gray-400/50 border"
            >
              <h1
                class="text-slate-100 font-bold text-2xl mb-10 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {{ tdata.title }}
              </h1>
              <div class="flex justify-between">
                <h3
                  class="text-slate-100 font-bold text-lg capitalize cursor-pointer"
                >
                  {{ tdata.userName }}
                </h3>
                <span class="text-slate-100 text-sm font-black capitalize">{{
                  tdata.shiJian
                }}</span>
              </div>
            </div>
          </div>
          <div
            :style="{ backgroundImage: `url(${tdata.imgUrl})` }"
            class="w-full h-full bg-cover absolute top-0 left-0 blur-sm -z-1"
          ></div>
          <div class="w-full h-full p-3 z-10 absolute top-0 left-0">
            <img
              class="object-cover rounded-sm shadow-md shadow-slate-900"
              :src="tdata.imgUrl"
            />
            <div class="w-full flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface tData {
  title: string;
  userName: string;
  shiJian: string;
  imgUrl: string;
}

const tdatas = ref<tData[]>([
  {
    title: "SummerPocket",
    userName: "用户1",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-1.jpeg",
  },
  {
    title: "SummerPocket",
    userName: "用户2",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-2.jpeg",
  },
  {
    title: "SummerPocket",
    userName: "用户3",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-3.jpg",
  },
  {
    title: "SummerPocket",
    userName: "用户5",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-4.jpg",
  },
  {
    title: "SummerPocket",
    userName: "用户1",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-1.jpeg",
  },
  {
    title: "SummerPocket",
    userName: "用户2",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-2.jpeg",
  },
  {
    title: "SummerPocket",
    userName: "用户3",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-3.jpg",
  },
  {
    title: "SummerPocket",
    userName: "用户5",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-4.jpg",
  },
  {
    title: "SummerPocket",
    userName: "用户5",
    shiJian: "2-9 12:00",
    imgUrl: "/images/zhuhome/1-4.jpg",
  },
]);
</script>

<style lang="scss"></style>
