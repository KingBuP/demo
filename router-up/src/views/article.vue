<template>
  <div class="article_0">
    <AnimateList tag="ul">
      <li
        v-for="(article, index) in articles"
        :key="article.id"
        :data-index="index"
      >
        {{ article.title }}--{{ article.id }}
      </li>
    </AnimateList>
  </div>
</template>

<script setup lang="ts">
import articleApi, { Article } from "@/apis/articleApi";
const articles = ref<Article[]>();
articleApi.info().then(({ data }) => (articles.value = data));

//del
// const del = (index: number) => {
//   articles.value?.splice(index, 1);
// };
</script>

<style lang="scss" scoped>
.article_0 {
  position: relative;
  width: 100vw;
  height: 100vh;
  ul {
    @apply p-2;
    li {
      @apply px-2 py-3 mb-2 bg-green-400 rounded-sm text-white font-semibold;
      text-shadow: 2px 2px 4px black;
    }
  }
}
</style>
