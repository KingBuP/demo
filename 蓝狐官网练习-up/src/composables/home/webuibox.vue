<template>
  <li class="overflow-hidden">
    <!-- :style="'background-image:' + 'url(' + props.dItem.url + ')'" -->
    <img :src="props.dItem.url" class="li_im object-cover" />
    <div>
      <p>
        {{ props.dItem.name }}
        <img
          src="/images/home/33.png"
          class="w-[10px] h-[10px]"
          v-for="(n, index) in props.dItem.nub"
          :key="index"
        />
      </p>
      <section>{{ props.dItem.conText }}</section>
    </div>
  </li>
</template>

<script setup lang="ts">
export interface dIte {
  url: string;
  nub: number;
  name: string;
  conText: string;
}
const props = defineProps<{
  dItem: dIte;
}>();
</script>

<style lang="scss" scoped>
li {
  overflow: hidden;
  position: relative;
  width: 19%;
  height: 303.78px;
  background-size: cover;
  transition: transform 0.2s linear;
  &:hover {
    // transform: translateY(-10px);
    div {
      height: 100%;
      transition: 1s all;
    }
  }
  .li_im {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  div {
    transition: 0.6s all;
    position: absolute;
    bottom: 0px;
    // left: 30px;
    width: 100%;
    height: 62px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 22px;
    padding-left: 15px;
    box-sizing: border-box;
    p {
      font-size: 18px;
      color: #ececec;
      display: flex;
      align-items: center;
      img {
        vertical-align: middle;
        &:nth-of-type(1) {
          @apply ml-[5px];
        }
      }
    }
    section {
      //   width: 100%;
      color: #ffffff;
      font-size: 18px;
      transform: scale(0.8);
      margin-left: -22px;
      margin-top: 22px;
      line-height: 22px;
    }
  }
}
</style>
