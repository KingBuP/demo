<template>
  <li class="overflow-hidden">
    <img :src="props.dItem.url" class="li_im" />
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
  position: relative;
  width: 236.55px;
  // width: 237.55px;
  height: 302.95px;
  transition: transform 0.2s linear;
  &:hover {
    transform: translateY(-10px);
    div {
      height: 243px;
      transition: 1s all;
    }
  }
  .li_im {
    width: 239.04px;
    height: 302.95px;
    overflow: hidden;
  }
  div {
    transition: 0.6s all;
    position: absolute;
    bottom: 36px;
    left: 30px;
    width: 176.28px;
    height: 100px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    padding-top: 20px;
    padding-left: 15px;
    box-sizing: border-box;
    p {
      font-size: 14.94px;
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
      color: #ececec;
      font-size: 14px;
      transform: scale(0.8);
      margin-left: -16px;
      margin-top: -3px;
      line-height: 22px;
    }
  }
}
</style>
