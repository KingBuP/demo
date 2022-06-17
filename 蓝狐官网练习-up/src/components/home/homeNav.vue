<template>
  <div class="sidebar">
    <div class="sidebar-l">
      <div>
        <img src="/images/home/kf.png" alt="" />
        <div class="b"></div>
      </div>
      <div>
        <img src="/images/home/wx.png" alt="" />
        <div class="b"></div>
      </div>
    </div>
    <div class="sidebar-img">
      <p>扫描二维码</p>
      <p>关注蓝狐官方微信</p>
      <img src="/images/home/k38.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  //页面滚动
  window.addEventListener("scroll", scroll);
});
const scroll = () => {
  // let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  let top = document.documentElement.scrollTop;
  if (top > 720) {
    let nav = document.querySelector(".sidebar") as HTMLDivElement;
    nav.style.position = "fixed";
    nav.style.top = "0px";
  } else {
    let nav = document.querySelector(".sidebar") as HTMLDivElement;
    nav.style.position = "absolute";
    nav.style.top = "720px";
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 720px;
  width: 50px;
  right: 0;
  height: 160px;
  background: #2c54fc;
  border-radius: 15px 0px 0px 15px;
  cursor: pointer;
  display: flex;
  z-index: 999;
  &:hover {
    .sidebar-img {
      display: block;
    }
  }
  .sidebar-l {
    width: 59px;
    border-radius: 20px 0px 0px 20px;
    div {
      width: 100%;
      height: 50%;
      border-bottom: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-of-type(1) {
        position: relative;
        border-radius: 20px 0px 0px 0px;
        img {
          width: 27px;
          height: 27px;
        }
        .b {
          position: absolute;
          left: 59px;
          top: 0px;
          width: 241px;
          height: 187px;
          background: red;
          border-radius: 0px;
          display: none;
        }
      }
      &:nth-of-type(2) {
        position: relative;
        border-radius: 0px 0px 0px 20px;
        border-bottom: none;
        img {
          width: 27px;
          height: 27px;
        }
        .b {
          position: absolute;
          left: 59px;
          top: -95px;
          width: 241px;
          height: 187px;
          background: green;
          border-radius: 0px;
          display: none;
        }
      }
    }
  }
  .sidebar-img {
    display: none;
    box-sizing: border-box;
    width: 120px;
    height: 160px;
    padding: 10px 0;
    background: white;
    position: absolute;
    left: -140px;
    border-radius: 15px;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0px 6px 24px rgb(44 84 252 / 16%);
    img {
      margin-top: 15px;
      transform: translateX(20px);
    }
  }
}
</style>
