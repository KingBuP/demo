<template>
  <div class="box3item">
    <ul class="conbox3">
      <li>
        <span>姓名</span>
        <span>专业</span>
        <span class="!flex-[1.5]">就业单位</span>
        <span>入职时间</span>
        <span class="!flex-[0.5]">薪资</span>
      </li>
    </ul>
    <div class="messbox3">
      <ul>
        <li v-for="(item, index) in hDatas" :key="index">
          <span>{{ item.str1 }}</span>
          <span>{{ item.str2 }}</span>
          <span class="!flex-[1.5]">{{ item.str3 }}</span>
          <span>{{ item.str4 }}</span>
          <span class="!flex-[0.5] text-[#f49221] font-semibold">{{
            item.nub
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hData } from "../home/homeForm.vue";

const hDatas = [
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "魏*珂",
    str2: "软件技术",
    str3: "上海实***有限公司",
    str4: "UI设计师",
    nub: 15000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "李*阳",
    str2: "机械制造及自动化",
    str3: "江苏华*信息科技有限公司",
    str4: "前端开发工程师",
    nub: 8700,
  },
  {
    str1: "武恺",
    str2: "计算机科学与技术",
    str3: "上海国金黄金司",
    str4: "UI设计师",
    nub: 13000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "武*辉",
    str2: "移动商务UI方向",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 10000,
  },
  {
    str1: "李倩",
    str2: "移动商务UI方向",
    str3: "五八集团",
    str4: "UI设计师",
    nub: 18500,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "魏*珂",
    str2: "软件技术",
    str3: "上海实***有限公司",
    str4: "UI设计师",
    nub: 15000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "李*阳",
    str2: "机械制造及自动化",
    str3: "江苏华*信息科技有限公司",
    str4: "前端开发工程师",
    nub: 8700,
  },
  {
    str1: "武恺",
    str2: "计算机科学与技术",
    str3: "上海国金黄金司",
    str4: "UI设计师",
    nub: 13000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "武*辉",
    str2: "移动商务UI方向",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 10000,
  },
  {
    str1: "李倩",
    str2: "移动商务UI方向",
    str3: "五八集团",
    str4: "UI设计师",
    nub: 18500,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "魏*珂",
    str2: "软件技术",
    str3: "上海实***有限公司",
    str4: "UI设计师",
    nub: 15000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "李*阳",
    str2: "机械制造及自动化",
    str3: "江苏华*信息科技有限公司",
    str4: "前端开发工程师",
    nub: 8700,
  },
  {
    str1: "武恺",
    str2: "计算机科学与技术",
    str3: "上海国金黄金司",
    str4: "UI设计师",
    nub: 13000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "武*辉",
    str2: "移动商务UI方向",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 10000,
  },
  {
    str1: "李倩",
    str2: "移动商务UI方向",
    str3: "五八集团",
    str4: "UI设计师",
    nub: 18500,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "魏*珂",
    str2: "软件技术",
    str3: "上海实***有限公司",
    str4: "UI设计师",
    nub: 15000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "李*阳",
    str2: "机械制造及自动化",
    str3: "江苏华*信息科技有限公司",
    str4: "前端开发工程师",
    nub: 8700,
  },
  {
    str1: "武恺",
    str2: "计算机科学与技术",
    str3: "上海国金黄金司",
    str4: "UI设计师",
    nub: 13000,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "武*辉",
    str2: "移动商务UI方向",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 10000,
  },
  {
    str1: "李倩",
    str2: "移动商务UI方向",
    str3: "五八集团",
    str4: "UI设计师",
    nub: 18500,
  },
  {
    str1: "杨*月",
    str2: "计算机应用",
    str3: "江苏华*信息科技有限公司",
    str4: "UI设计师",
    nub: 9000,
  },
  {
    str1: "李*阳",
    str2: "机械制造及自动化",
    str3: "江苏华*信息科技有限公司",
    str4: "前端开发工程师",
    nub: 8700,
  },
] as hData[];
</script>

<style lang="scss">
.box3item {
  @apply h-[1143.89px] rounded-[8px] overflow-hidden  border-[1px] border-[#ddd] border-t-[0px];
  .conbox3 {
    li {
      display: flex;
      height: 58.29px;
      font-size: 14.94px;
      line-height: 58.29px;
      color: #ffffff;
      font-weight: 700;
      padding-left: 41.5px;
      background-color: rgba(44, 84, 252, 0.9);
      span {
        flex: 1;
      }
    }
  }
  .messbox3 {
    overflow: hidden;
    &:hover {
      ul {
        animation-play-state: paused;
      }
    }
    ul {
      animation: updowm2 18s ease infinite forwards;
      li {
        display: flex;
        padding-left: 41.5px;
        border-top: 1px solid #e3e3e3;
        height: 52.29px;
        font-size: 13.28px;
        line-height: 52.29px;
        color: #333333;
        span {
          flex: 1;
        }
      }
    }
  }
}
@keyframes updowm2 {
  0% {
    transform: translateY(0%);
  }
  5% {
    transform: translateY(-3%);
  }
  15% {
    transform: translateY(-6%);
  }
  25% {
    transform: translateY(-9%);
  }
  35% {
    transform: translateY(-12%);
  }
  45% {
    transform: translateY(-15%);
  }
  55% {
    transform: translateY(-18%);
  }
  65% {
    transform: translateY(-21%);
  }
  75% {
    transform: translateY(-24%);
  }
  85% {
    transform: translateY(-27%);
  }
  95% {
    transform: translateY(-30%);
  }
  100% {
    transform: translateY(-33%);
  }
}
</style>
