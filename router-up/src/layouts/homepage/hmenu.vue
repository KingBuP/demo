<template>
  <div
    class="skbg md:!hidden fixed hidden top-0 right-0 h-screen w-screen z-30"
  ></div>
  <div class="user_menu">
    <nav class="smnav" @click="clNav">
      <i class="fab fas fa-list text-xl px-2 py-1"></i>
    </nav>
    <div class="logo">
      <i class="fas fa-list mr-2 text-xl relative">
        <span
          class="absolute top-0 left-0 flex h-full w-full md:hidden"
          @click="rclNav"
        ></span>
      </i>
      <span class="text-sm font-bold">欢迎</span>
    </div>
    <hr class="mt-4 mb-6" />
    <!-- 菜单 -->
    <div class="left-container">
      <dl
        class="text-gray-200 text-sm pl-1 mt-1"
        v-for="(menu, index) in hmenus"
        :key="index"
      >
        <dt class="cursor-pointer">
          <section class="cursor-pointer">
            <div><i :class="menu.icon"></i></div>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i
              :class="{
                'fas fa-angle-down': menu.active,
                'fas fa-angle-up': !menu.active,
              }"
            ></i>
          </section>
        </dt>
        <dd
          v-show="menu.active"
          v-for="(cmenu, index) in menu.children"
          :key="index"
          @click="ckiItem(cmenu)"
        >
          <a
            href="javascript:;"
            :class="{ 'hd-dd': true, active: cmenu.active }"
          >
            {{ cmenu.title }}</a
          >
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
interface IMenuItem {
  title: string;
  icon?: string;
  active?: boolean;
  urlName?: string;
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[];
}

const hmenus = ref<IMenu[]>([
  {
    title: "公告",
    icon: "fas fa-lightbulb",
    active: true,
    children: [
      { title: "新人观看", urlName: "admin-errors/error404" },
      { title: "获取地址", urlName: "admin-errors/error403" },
      { title: "版权声明", urlName: "admin-errors/error500" },
    ],
  },
  {
    title: "视频区",
    active: true,
    icon: "fas fa-video",
    children: [{ title: "水视频" }, { title: "动作" }],
  },
  {
    title: "游戏区",
    active: true,
    icon: "fas fa-dice-d6",
    children: [{ title: "角色扮演" }, { title: "动作冒险" }],
  },
]);

const resetCMenus = () => {
  hmenus.value.forEach((pmenu) => {
    if (pmenu.children) {
      pmenu.children.forEach((m) => {
        m.active = false;
      });
    }
  });
};

// const resetMenus = () => {
// hmenus.value.forEach((pmenu) => {
// pmenu.active = false;
// });
// };
//移动端-侧边栏入
const clNav = () => {
  const userMenu = document.querySelector(".user_menu") as HTMLDivElement;
  const smnav = document.querySelector(".smnav") as HTMLDivElement;
  const skbg = document.querySelector(".skbg") as HTMLDivElement;
  userMenu.classList.add("clmenu");
  smnav.style.display = "none";
  skbg.style.display = "flex";
};
//移动端-侧边栏出
const rclNav = () => {
  const userMenu = document.querySelector(".user_menu") as HTMLDivElement;
  const smnav = document.querySelector(".smnav") as HTMLDivElement;
  const skbg = document.querySelector(".skbg") as HTMLDivElement;
  userMenu.classList.remove("clmenu");
  skbg.style.display = "none";
  setTimeout(() => {
    smnav.style.display = "block";
  }, 400);
};

//pmenu 点击菜单
// const handle = (pmenu: IMenu, cmenu?: IMenuItem) => {
// resetMenus();
//   pmenu.active = true;
// };

//cmenu 点击子菜单
const ckiItem = (cmenu: IMenuItem) => {
  resetCMenus();
  rclNav();
  cmenu.active = true;
};

onMounted(function () {
  const skbg = document.querySelector(".skbg") as HTMLDivElement;
  skbg.addEventListener("click", rclNav);
});
</script>

<style lang="scss">
.user_menu {
  @apply md:hidden w-[190px] h-screen bg-slate-600 fixed top-0 -left-[105%] p-3 flex flex-col duration-500 z-40;
  &.clmenu {
    @apply left-0;
  }
  .smnav {
    @apply fixed top-6 left-5 cursor-pointer md:hidden bg-slate-400 rounded-md;
  }
  .logo {
    @apply text-gray-300 flex items-center;
  }
  .left-container {
    &::-webkit-scrollbar {
      width: 0;
    }
    dl {
      dt {
        @apply text-[14px] font-semibold flex justify-between items-center mt-2;
        section {
          @apply flex items-center;
          div {
            @apply w-3 mr-2 my-1;
            i {
              @apply text-sm m-auto;
            }
          }
        }
      }
      dd {
        a {
          &.hd-dd {
            @apply flex py-2 ml-2 pl-3 bg-cyan-700 text-slate-50 rounded-sm my-2 cursor-pointer hover:bg-cyan-500 duration-300 text-xs;
          }
          &.active {
            @apply bg-cyan-500;
          }
        }
      }
    }
  }
  .left-container {
    @apply flex-1 overflow-y-scroll;
  }
}
</style>

<script lang="ts"></script>
