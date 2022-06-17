<template>
  <div class="home_map">
    <div class="home_map_con">
      <div class="main">
        <div class="title">
          <p>
            合作企业遍布全国
            <i class="">22</i>
            个省市
          </p>
          <p>每个省市都有蓝狐毕业学子就业</p>
        </div>
        <div class="company">
          <ul>
            <li v-for="(tex, index) in texs" :key="index">
              <i></i>{{ tex.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tex {
  title: string;
}
const texs = [
  { title: "河南巧克饮品有限公司" },
  { title: "河南江林电子科技有限公司" },
  { title: "河南桦林网络科技有限公司" },
  { title: "郑州鸿方网络科技有限公司" },
  { title: "河南春雨计算机科技有限公司" },
  { title: "洛阳白林信息技术有限公司" },
  { title: "河南三木大数据研究院有限公司" },
  { title: "河南佳铭网络科技有限公司" },
  { title: "河南美沁饮品有限公司" },
  { title: "河南楠双电子科技有限公司" },
  { title: "河南图霖网络科技有限公司" },
  { title: "郑州宗发网络科技有限公司" },
  { title: "河南聚创计算机科技有限公司" },
  { title: "洛阳世纪信息技术有限公司" },
  { title: "河南琳芳大数据研究院有限公司" },
  { title: "河南鑫距网络科技有限公司" },
] as Tex[];
</script>

<style lang="scss">
.home_map {
  @apply w-full h-[834px] mt-[60px];
  .home_map_con {
    width: 1500px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    background: url("/images/home/map.png") no-repeat 30px top;
    background-size: 913px 705.5px;
    .main {
      position: absolute;
      top: 70px;
      right: 250px;
      .title {
        p {
          &:nth-of-type(1) {
            color: #424242;
            font-size: 26.56px;
          }
          &:nth-of-type(2) {
            color: #949494;
            font-size: 23.24px;
          }
        }
      }
      .company {
        width: 332px;
        height: 315.4px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 6px 24px rgb(44 84 252 / 16%);
        padding: 18px 15px 0 40px;
        box-sizing: border-box;
        margin-top: 56.44px;
        overflow: hidden;
        ul {
          width: 100%;
          height: 305.44px;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 5px;
            height: 305.44px;
            background-color: rgba(44, 84, 252, 0.1);
            border-radius: 60px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: rgba(44, 84, 252, 0.5);
            -webkit-box-shaow: inset 0 0 5px rgba(44, 84, 15, 0.2);
            border-radius: 60px;
          }
          &::-webkit-scrollbar-track {
            border-radius: 60px;
            -webkit-box-shaow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background-color: rgba(44, 84, 252, 0.1);
          }
          li {
            font-weight: 300;
            color: rgba(0, 0, 0, 0.87);
            font-size: 14.94px;
            margin-bottom: 16.6px;
            i {
              width: 9.96px;
              height: 9.96px;
              display: inline-block;
              background-color: #94adff;
              border-radius: 50%;
              margin-right: 12.45px;
            }
          }
        }
      }
    }
  }
}
</style>
