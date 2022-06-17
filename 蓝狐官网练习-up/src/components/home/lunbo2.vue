<template>
  <div class="home_lunbo2">
    <el-carousel
      trigger="click"
      :interval="2100"
      type="card"
      :pause-on-hover="true"
    >
      <el-carousel-item v-for="(item, index) in lunbo2Ds" :key="index">
        <div class="con w-full h-full grid grid-cols-2">
          <div class="left p-2">
            <div class="tit">
              <span class="text-[39.84px] font-semibold text-[#424242]">{{
                item.str1
              }}</span>
              <p class="mt-[8px] text-[19.92px] text-[#424242]">
                来自<i id="in-color " class="text-[#f76f44]">{{ item.str2 }}</i>
              </p>
            </div>
            <div
              class="txt text-[14.94px] mt-[50px] mb-[40.67px] text-[#757575]"
            >
              {{ item.str3 }}
            </div>
            <p class="p text-[19.92px]">
              就职于<i class="">上海某上市科技公司</i>
              <span class="ml-[29.05px]"
                >年薪<em class="in-color">{{ item.str4 }}</em></span
              >
            </p>
          </div>
          <div class="pic flex justify-center p-2">
            <img :src="item.url" class="object-cover" />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
interface lunbo2Data {
  str1: string;
  str2: string;
  str3: string;
  str4: string;
  url: string;
}

const lunbo2Ds = [
  {
    str1: "李同学",
    str2: "商丘师范学院",
    str3: "在这三个月里，内心还是承受了很大的压力的，来蓝狐教育之前也有很多种选择，最后综合各种对比选择了蓝狐。很开心认识了蓝狐的老师，其实差一点就没来的，选择真的很重要，其次是努力，真的会改变人生。感谢蓝狐让我找到了人生的新方向。",
    str4: "18W",
    url: "/images/home/39.png",
  },
  {
    str1: "刘同学",
    str2: "郑州科技学院",
    str4: "18W",
    str3: "当时听同学提到的蓝狐教育就上网查了下，选择恐惧症的我那时做了人生中最重要也是最正确的选择。来到蓝狐教育认识很多老师与小伙伴，那里的学习氛围很浓厚，大家一起为梦想努力学习，丝毫不会懈怠。直到现在，依旧不会忘记那时候我们一起并肩奋斗的情景！",
    url: "/images/home/l.png",
  },
  {
    str1: "柳同学",
    str2: "河南工程学院",
    str3: "曾经了解过很多机构最终选择了蓝狐教育，在这里每位老师都很负责，课后老师有问必答，课上课下都有老师辅导，还有像素妹儿值班，虽然大家每天做作业熬到很晚，但是都毫无怨言。学校的环境氛围非常好，还有完美的后勤保障让我们省去了很多生活琐碎的烦恼。",
    str4: "16W",
    url: "/images/home/l2.png",
  },
  {
    str1: "袁同学",
    str2: "郑州升达经贸管理学院",
    str3: "怀着忐忑的心情来到了一个陌生的城市，从最初的忐忑到如今的满怀希望，从最初的纠结善变到现在沉稳的性格只经历了三个月。感谢每位老师的倾囊相授，让我摆脱了以往对传统培训机构的排斥。蓝狐教育对我来说现在已经被赋予了新的意义。蓝狐教育，感谢有你。",
    str4: "17W",
    url: "/images/home/y.png",
  },
  {
    str1: "梁同学",
    str2: "郑州工业应用技术学院",
    str3: "我是今年才毕业的，上半年疫情原因实习也不好找工作，加上对UI感兴趣，对比了2家后感觉这边学习环境、教室、电脑这些可以，还有老师说话比较靠谱，就和同学一起来这学习了。毕业后这份工作我还是很满意了，因为应届生嘛成都这边给都低，我身边的都是3-4K，我现在的公司转正后底薪加上项目提成一个月能有7-8千左右。",
    str4: "16W",
    url: "/images/home/l3.png",
  },
  {
    str1: "雷同学",
    str2: "平顶山学院",
    str3: "认真对待模拟面试，增加后期面试的自信心。利用模拟面试梳理自己的项目，整理自己的语言；充分了解自己的作品集，清楚每个项目针对的用户群体。",
    str4: "16W",
    url: "/images/home/30-5.png",
  },
  {
    str1: "张同学",
    str2: "河南城建学院",
    str3: "要学会自信，只有自己认可自己，企业才会相信你能够胜任这份工作。在面试之前一定要熟悉自己的作品集，因为每个企业问的点都不一样。回答问题前理清自己的思路，哪怕是说话慢一点也没关系。",
    str4: "16W",
    url: "/images/home/30-6.png",
  },
  {
    str1: "朱同学",
    str2: "万方科技学院",
    str3: "我之前是做平面设计的，平面设计师一直做下去到后期感觉对今后的发展有些限制。加上渐渐地在网上了解到UI，各方面都了解了下发现UI行业前景好一点。所以就想到了转行，来学习下UI，提升提升自己",
    str4: "16W",
    url: "/images/home/30-7.png",
  },
  {
    str1: "黄同学",
    str2: "中原工学院",
    str3: "刚开始很担心自己会跟不上课，没想到老师们不停地告诉我一定要坚持下去。所以自己也很努力，不辜负自己，不辜负老师。我终于明白一个人能走多远，是看与谁同行，一个人有多优秀，看有什么人指点。超低调，超神秘，印象中的UI界黄埔军校，蓝狐教育做到了。",
    str4: "16W",
    url: "/images/home/30-8.png",
  },
  {
    str1: "范同学",
    str2: "河南科技大学",
    str3: "在来蓝狐教育之前，人生陷入了迷茫期，不知是该从事自己不喜欢的专业还是趁年轻自己出去闯荡一番做自己的事业。这一次，决心只身一人来到了郑州这个陌生的城市学习UI，我为人生做了一次正确的选择，感谢蓝狐教育，未来我们一起走下去。",
    str4: "16W",
    url: "/images/home/30-9.png",
  },
] as lunbo2Data[];
</script>

<style lang="scss">
.home_lunbo2 {
  @apply w-full h-full;
  .el-carousel__item {
    width: 740px;
    height: 400px;
    @apply rounded-md bg-[#f5f6fa] shadow-sm;
  }
  .el-carousel {
    @apply w-full h-full relative;
    .el-carousel__indicators {
    }
    .el-carousel__container {
      @apply h-[450px];
      .el-carousel__arrow--left {
        left: 48px;
        width: 72px;
        height: 72px;
      }
      .el-carousel__arrow--right {
        right: 48px;
        height: 72px;
        width: 72px;
      }
      .el-icon {
        width: 2em !important;
        height: 2em !important;
        line-height: 2em !important;
        svg {
          width: 2em !important;
          height: 2em !important;
          line-height: 2em !important;
        }
      }
    }
  }
}
</style>
