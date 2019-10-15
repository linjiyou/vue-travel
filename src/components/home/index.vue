<template>
  <div>
    <home-header></home-header>
    <app-swiper></app-swiper>
    <nav-icons></nav-icons>
    <app-recommend></app-recommend>
  </div>
</template>

<script>
import HomeHeader from "./Header"
import AppSwiper from "./Swiper"
import NavIcons from "./NavIcons"
import AppRecommend from "./Recommend"

export default {
  components: {
    HomeHeader,
    AppSwiper,
    NavIcons,
    AppRecommend
  }
};
</script>
<style lang="stylus" scoped></style>