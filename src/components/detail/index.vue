<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="contain"></div>
  </div>
</template>
<script>
import DetailBanner from "./banner";
import DetailHeader from "./header"
export default {
  data () {
    return {
    }
  },
  components: {
      DetailBanner,
      DetailHeader
  },
  methods: {}
}
</script>
<style scoped lang="stylus">
 .contain{
      height 50rem
  }
</style>