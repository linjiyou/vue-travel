<template>
  <div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  methods: {}
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.header{
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size .32rem
  .header-back{
   position absolute
   left 0
   top 0
   font-size .4rem
   width .64rem
   color #fff
  }
}
</style>