<template>
  <div class="webbox1">
    <div class="wcon1 cw">
      <p class="text-[41.5px] font-bold text-[#636363] text-center">
        0基础学IT，优选前端工程师
      </p>
      <p class="text-center mt-[15px] text-[18.26px] text-[#636363]">
        已有<span class="text-[#f76f44]">10000+</span>人选择在蓝狐学前端
      </p>
      <div class="mt-[56px]">
        <ul class="flex justify-around">
          <li
            class="web1-item hover:opacity-[0.6] relative w-[338.64px] h-[298.8px] cursor-pointer bg-cover"
            style="background-image: url('/images/courseweb/bgi.png')"
          >
            <div class="t mt-[51.46px]">
              <p class="text-center font-bold text-[#f76f44] text-[18px]">
                就业方向广
              </p>
              <p class="text-center mt-[10.79px] text-[16px] text-[#f76f44]">
                需求广泛，多领域
              </p>
              <p class="text-center text-[16px] text-[#f76f44]">
                多岗位都可就业
              </p>
            </div>
            <div class="b mt-[33.2px]">
              <p class="text-[#424242] text-center font-normal text-[16px]">
                前端工程师
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                Web全栈工程师
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                H5/小程序开发工程师
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                Node.js工程师
              </p>
            </div>
          </li>
          <li
            class="web1-item hover:opacity-[0.6] relative w-[338.64px] h-[298.8px] cursor-pointer bg-cover"
            style="background-image: url('/images/courseweb/bgi.png')"
          >
            <div class="t mt-[51.46px]">
              <p class="text-center font-bold text-[#f76f44] text-[18px]">
                职业前景好
              </p>
              <p class="text-center mt-[10.79px] text-[16px] text-[#f76f44]">
                人才长期稀缺
              </p>
              <p class="text-center text-[16px] text-[#f76f44]">
                未来发展持续看好
              </p>
            </div>
            <div class="b mt-[33.2px]">
              <p class="text-[#424242] text-center font-normal text-[16px]">
                入行工资可观
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                几乎所有行业都离不开前端
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                前端不会被淘汰
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                职业发展路线更长更广
              </p>
            </div>
          </li>
          <li
            class="web1-item hover:opacity-[0.6] relative w-[338.64px] h-[298.8px] cursor-pointer bg-cover"
            style="background-image: url('/images/courseweb/bgi.png')"
          >
            <div class="t mt-[51.46px]">
              <p class="text-center font-bold text-[#f76f44] text-[18px]">
                学习门槛低
              </p>
              <p class="text-center mt-[10.79px] text-[16px] text-[#f76f44]">
                前端从业者背景多样
              </p>
              <p class="text-center text-[16px] text-[#f76f44]">没有限制</p>
            </div>
            <div class="b mt-[33.2px]">
              <p class="text-[#424242] text-center font-normal text-[16px]">
                非IT背景？可学
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                IT背景？要可学
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                想转行？首选前端
              </p>
              <p class="text-[#424242] text-center font-normal text-[16px]">
                没有大学学历？可学
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.webbox1 {
  @apply w-full bg-white;
  .wcon1 {
    @apply py-[97px];
    .web1-item {
      &::after {
        content: "";
        width: 32px;
        height: 2px;
        background: #f76f44;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
