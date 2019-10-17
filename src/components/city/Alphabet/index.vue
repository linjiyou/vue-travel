<template>
  <ul class="list">
    <li class="item">l</li>
  </ul>
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