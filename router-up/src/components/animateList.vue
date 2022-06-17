<template>
  <div class="animate-list">
    <TransitionGroup
      appear
      name="animate"
      @before-enter="beforeEnter"
      @enter="enter"
      :tag="props.tag"
    >
      <slot />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { RendererElement } from "vue-demi";

interface props {
  tag?: string | undefined;
  duration?: number;
  delay?: number;
}

const props = withDefaults(defineProps<props>(), {
  tag: undefined,
  duration: 0.5,
  delay: 0.1,
});

const beforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  });
};

const enter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  });
};
</script>

<style lang="scss" scoped>
.animate-list {
  position: relative;
  ul {
    @apply p-2;
  }
  .animate-leave-active {
    transition: all 1s ease;
    position: absolute;
    width: 100%;
  }
  .animate-leave-to {
    opacity: 0;
  }

  .animate-move {
    transition: all 1s ease;
  }
}
</style>
