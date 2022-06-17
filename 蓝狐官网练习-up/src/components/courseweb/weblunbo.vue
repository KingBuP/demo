<template>
  <div class="weblunbo">
    <div class="lunbo-nav">
      <div class="">
        <ul class="flex gap-3 w-[900px] mx-auto justify-between">
          <li class="">
            <img src="/images/courseweb/q1.png" class="w-[188px] h-[188px]" />
            <p class="text-center text-[18px] font-bold mt-[15px]">
              紧跟企业需求
            </p>
            <p class="text-center text-[16px]">"就好业"的人才</p>
            <p class="text-center text-[16px]">培养体系</p>
          </li>
          <li class="">
            <img src="/images/courseweb/q1.png" class="w-[188px] h-[188px]" />
            <p class="text-center text-[18px] font-bold mt-[15px]">
              紧跟企业需求
            </p>
            <p class="text-center text-[16px]">"就好业"的人才</p>
            <p class="text-center text-[16px]">培养体系</p>
          </li>
          <li class="">
            <img src="/images/courseweb/q1.png" class="w-[188px] h-[188px]" />
            <p class="text-center text-[18px] font-bold mt-[15px]">
              紧跟企业需求
            </p>
            <p class="text-center text-[16px]">"就好业"的人才</p>
            <p class="text-center text-[16px]">培养体系</p>
          </li>
          <li class="">
            <img src="/images/courseweb/q1.png" class="w-[188px] h-[188px]" />
            <p class="text-center text-[18px] font-bold mt-[15px]">
              紧跟企业需求
            </p>
            <p class="text-center text-[16px]">"就好业"的人才</p>
            <p class="text-center text-[16px]">培养体系</p>
          </li>
        </ul>
      </div>
    </div>
    <el-carousel
      indicator-position="outside"
      :autoplay="false"
      @change="updateNav"
      class="mt-[31px]"
      height="363.76px"
    >
      <el-carousel-item v-for="(item, index) in dataUrls" :key="index">
        <img :src="item.url" class="w-[1200px]" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from "vue";
interface UrL {
  url: string;
}

const dataUrls = [
  { url: "/images/courseweb/lb0.png" },
  { url: "/images/courseweb/lb1.png" },
  { url: "/images/courseweb/lb2.png" },
  { url: "/images/courseweb/lb3.png" },
] as UrL[];

onUpdated(() => {
  //数据发生更新更新事件
  addEventLiNavs();
});

onMounted(() => {
  addEventLiNavs();
  updateNav();
});

const updateNav = () => {
  const liMain = document.querySelectorAll(".weblunbo .el-carousel__item");
  const lisNav = document.querySelectorAll(".weblunbo .lunbo-nav ul li");

  liMain.forEach((liM) => {
    let ind = liM.getAttribute("data-index") as any;
    ind = parseInt(ind);
    let nub: any = ind;
    nub = nub == `${lisNav.length}` ? 0 : nub;
    nub = parseInt(nub);
    //异步加载一下
    setTimeout(() => {
      if (liM.classList.contains("is-active")) {
        const liNav = lisNav[nub] as HTMLLIElement;

        const li = liNav as HTMLLIElement;
        li.querySelector("img")!.src = `/images/courseweb/q${nub + "1"}.png`;
        li.style.color = `#F76F44`;
      } else {
        let id = nub;
        const liNav = lisNav[nub] as HTMLLIElement;
        clearLi(liNav, id);
      }
    });
  });
};

const clearLi = (lis: any, id?: any) => {
  const li = lis as HTMLLIElement;
  li.querySelector("img")!.src = `/images/courseweb/q${id}.png`;
  li.style.color = ``;
};

const addEventLiNavs = () => {
  const lis = document.querySelector(
    ".weblunbo .el-carousel__indicators "
  ) as HTMLUListElement;
  const lisNav = document.querySelectorAll(".weblunbo .lunbo-nav ul li");

  const liMain = document.querySelectorAll(".weblunbo .el-carousel__item");

  liMain.forEach((item, index) => {
    item.setAttribute("data-index", `${index}`);
  });

  lisNav.forEach((item: any, index: number) => {
    item.addEventListener("mouseenter", () => {
      const li = lis.children[index] as HTMLLIElement;

      // 触发元素的非click事件 -- 实现步骤
      // 1、创建一个自定义事件对象，HtmlEvents--说明要触发的是事件中的元素的事件
      let ev = document.createEvent("HtmlEvents");
      // 2、进行事件的初始化：配置事件的属性，如事件类型，是否冒泡，是否能阻止默认行为
      // ev.initEvent('事件类型',是否允许冒泡,是否允许阻止默认行为)
      ev.initEvent("mouseenter", false, true);
      // 3、触发事件--代码方式触发事件
      // 元素.dispatchEvent(ev)
      li.dispatchEvent(ev);
    });
  });
};
</script>

<style lang="scss">
.weblunbo {
  .el-carousel__button {
    transition: all 0s !important;
  }
  .el-carousel__indicator {
    button {
      width: 11px;
      height: 11px;
      background-color: #cecece;
      border-radius: 50%;
      margin: 20px 20px 0 0;
    }
  }
  .el-carousel__container {
    .el-carousel__arrow {
      display: none;
    }
  }
  .el-carousel__item {
    transition: all 0s !important;
  }

  .el-carousel__indicator.is-active button {
    background-color: #f76f44 !important;
  }
}
</style>
