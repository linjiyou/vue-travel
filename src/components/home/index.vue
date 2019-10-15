<template>
  <div>
    <app-header></app-header>
    <app-swiper></app-swiper>
    <app-icons></app-icons>
    <app-recommend></app-recommend>
  </div>
</template>

<script>
import AppHeader from "./Header"
import AppSwiper from "./Swiper"
import AppIcons from "./NavIcons"
import AppRecommend from "./Recommend"

export default {
  components: {
    AppHeader,
    AppSwiper,
    AppIcons,
    AppRecommend
  }
};
</script>
<style lang="stylus" scoped></style>