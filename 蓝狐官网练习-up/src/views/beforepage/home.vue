<template>
  <div class="lh_home w-full">
    <div class="banner w-full min-w-[1200px] flex flex-col">
      <Lunbo />
      <PicList />
      <HomeCourses />
      <HomeBox />
      <HomeForm />
      <HomeIntroduction />
      <HomeMap />
      <HomeTeam />
      <HomeNav />
    </div>
  </div>
</template>

<script setup lang="ts">
import Lunbo from "@/components/home/lunbo.vue";
import PicList from "@/components/home/picList.vue";
import HomeCourses from "@/components/home/homeCourses.vue";
import HomeBox from "@/components/home/homeBox.vue";
import HomeForm from "@/components/home/homeForm.vue";
import HomeIntroduction from "@/components/home/homeIntroduction.vue";
import HomeMap from "@/components/home/homeMap.vue";
import HomeTeam from "@/components/home/homeTeam.vue";
import HomeNav from "@/components/home/homeNav.vue";
</script>

<style lang="scss" scoped>
.lh_home {
}
</style>
