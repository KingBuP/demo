<template>
  <div class="home_form">
    <div class="home_form_con cw">
      <div class="home_form_con_hd">
        <div class="form_mess">
          <ul class="form_mess_ul">
            <li>
              <span>姓名</span>
              <span>专业</span>
              <span class="!flex-[1.5]">就业单位</span>
              <span>入职时间</span>
              <span class="!flex-[0.5]">薪资</span>
            </li>
          </ul>
          <div class="form_mess_box">
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
        <div class="excellent">
          <div class="top_text">优秀学员案例分享</div>
          <ul>
            <li>
              <div class="con">
                <div class="item">
                  <img src="/images/home/13-1.png" />
                  <div class="l-con">
                    <p>王欣毅 <i>年薪22W+</i></p>
                    <div class="text">
                      设计是恒久的，在经过很长一段岁月后仍然具有耐看的质感。
                    </div>
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="item">
                  <img src="/images/home/14-1.png" />
                  <div class="l-con">
                    <p>刘明锐 <i>年薪17W+</i></p>
                    <div class="text">
                      眼高手低主要是由于见识太少，声名显赫主要是由于厚积薄发，设计师切忌浮躁。
                    </div>
                  </div>
                </div>
              </div>
              <div class="con">
                <div class="item">
                  <img src="/images/home/15-1.png" />
                  <div class="l-con">
                    <p>刘春琦 <i>年薪15W+</i></p>
                    <div class="text">
                      在行业中建立你的口碑，这需要靠人格，设计作品只是一个认识你的渠道而已。
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li></li>
          </ul>
          <div class="ft_div">
            <span>
              <img src="/images/home/lf0.png" />
            </span>
            <span><img src="/images/home/ri0.png" /></span>
          </div>
        </div>
      </div>
      <div class="home_form_con_bd">
        <ul>
          <li>
            <img src="/images/home/b1.png" />
            <span>01</span>
            <div>
              <p>提供</p>
              <p>企业项目实调平台</p>
            </div>
          </li>
          <li>
            <img src="/images/home/b2.png" />
            <span>02</span>
            <div>
              <p>实操</p>
              <p>真实商业课程案例</p>
            </div>
          </li>
          <li>
            <img src="/images/home/b3.png" />
            <span>03</span>
            <div>
              <p>打磨</p>
              <p>高质量商业作品集</p>
            </div>
          </li>
          <li>
            <img src="/images/home/b4.png" />
            <span>04</span>
            <div>
              <p>推荐</p>
              <p>全国就业渠道</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface hData {
  str1: string;
  str2: string;
  str3: string;
  str4: string;
  nub: number;
}
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
.home_form {
  @apply w-full pb-[37.35px] box-border;
  .home_form_con {
    @apply mt-[80px] overflow-hidden pl-[30px] box-border;
    .home_form_con_hd {
      @apply flex;
      .form_mess {
        @apply w-[696.37px] h-[472.27px] rounded-[8px] overflow-hidden  border-[1px] border-[#ddd] border-t-[0px];
        .form_mess_ul {
          li {
            display: flex;
            height: 52.29px;
            font-size: 14.94px;
            line-height: 52.29px;
            color: #ffffff;
            font-weight: 700;
            padding-left: 41.5px;
            background-color: rgba(44, 84, 252, 0.9);
            span {
              flex: 1;
            }
          }
        }
        .form_mess_box {
          overflow: hidden;
          &:hover {
            ul {
              animation-play-state: paused;
            }
          }
          ul {
            animation: updowm 18s ease infinite forwards;
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
      .excellent {
        border-color: rgba(44, 84, 252, 0.1);
        box-shadow: 0px 6px 20px rgb(44 84 252 / 10%);
        @apply overflow-hidden relative w-[338.64px] ml-[20px] border-[1px] rounded-[10px];

        .top_text {
          @apply relative text-[14.94px] text-[#424242] top-[20px] left-[10px] pl-[14px] box-border;
          &::after {
            content: "";
            position: absolute;
            top: 3px;
            left: 2px;
            width: 2px;
            height: 16.6px;
            background-color: rgba(44, 84, 252, 0.9);
          }
        }
        .ft_div {
          @apply flex absolute bottom-[30px] left-1/2 -translate-x-1/2;
          span {
            &:nth-of-type(1) {
              @apply mr-[25px];
            }
            img {
              @apply w-[23.24px] h-[23.24px];
            }
          }
        }

        ul {
          @apply flex absolute;
          li {
            @apply w-[342px] p-[14px] box-border;
            .con {
              .item {
                padding: 9px 10px 9px 3px;
                border: 1px solid transparent;
                width: 309.59px;
                margin: 24px 0 0 0;
                box-sizing: border-box;
                display: flex;
                border-radius: 6px;
                box-shadow: 0px 3px 6px rgb(44 84 252 / 16%);
                border-width: 1px;
                img {
                  width: 74.7px;
                  height: 74.7px;
                  margin-right: 8px;
                }
                .l-con {
                  p {
                    font-weight: 600;
                    color: #333333;
                    font-size: 13.28px;
                    margin-bottom: 5px;
                    i {
                      font-style: normal;
                      font-weight: 600;
                      color: #f49221;
                      font-size: 11.62px;
                      margin-left: 20px;
                    }
                  }
                  div {
                    font-weight: 700;
                    color: #999999;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    width: 223px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .home_form_con_bd {
      @apply mt-[30px];
      ul {
        @apply flex -ml-[25px];
        li {
          @apply relative;
          img {
            @apply w-[276.39px] h-[159.36px];
          }
          span {
            @apply absolute top-[22px] left-[45px] font-bold text-white text-[49.8px];
          }
          div {
            @apply absolute top-[54px] left-[109px];
            p {
              @apply font-semibold text-white;
              &:nth-of-type(1) {
                @apply text-[19.92px];
              }
              &:nth-of-type(2) {
                @apply text-[14.94px];
              }
            }
          }
        }
      }
    }
  }
}
@keyframes updowm {
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
