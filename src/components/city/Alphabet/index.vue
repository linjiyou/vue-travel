<template>
  <ul class="list">
    <li class="item" v-for="(items, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>
<script>
export default {
  props:{
   cities:Object
  },
  data () {
    return {
    }
  },

}
</script>
<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl";
  .list{
      display flex
      flex-direction column
      justify-content center
      position absolute
      top 1.58rem
      right 0
      bottom 0
      width .4rem
      .item{
          line-height .44rem
          text-align center
          color  $bgColor
      }
  }
</style>