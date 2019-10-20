<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img
            class="gallary-img"
            src="//img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_600x330_6f6a4baa.jpg"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            class="gallary-img"
            src="//img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_600x330_6f6a4baa.jpg"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props:{
      imgs:{
          type:Array,
          defalut(){
              return []
          }
      }
  },
  data() {
    return {
      swiperOptions: {
        pagination:'.swiper-pagination',
        paginationType:'fraction',
        observeParents:true,
        observer:true

      }
    };
  },
  components: {},
  methods: {
      handleGallaryClick(){
          this.$emit("close")
      }
  }
};
</script>
<style scoped lang="stylus">
.container >>> .swiper-container{
    overflow inherit
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallary-img {
      width: 100%;
    }
    .swiper-pagination{
        color #fff
        bottom -1rem
    }
  }
}
</style>