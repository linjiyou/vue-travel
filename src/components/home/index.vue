<template>
  <div>
    <home-header></home-header>
    <app-swiper></app-swiper>
    <nav-icons></nav-icons>
  </div>
</template>

<script>
import HomeHeader from "./Header"
import AppSwiper from "./Swiper"
import NavIcons from "./NavIcons"

export default {
  components: {
    HomeHeader,
    AppSwiper,
    NavIcons
  }
};
</script>
<style lang="stylus" scoped></style>