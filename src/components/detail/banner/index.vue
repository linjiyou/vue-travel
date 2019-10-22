<template>
  <div>
    <div class="banner" @click="handleGallaryOpen">
      <img
        :src="bannerImg"
        alt
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <commom-fade>
    <commom-gallary
     @close="handleGallaryClose"
     v-show="showGallary"
     :gallaryImgs="gallaryImgs"
    ></commom-gallary>
    </commom-fade>
  </div>
</template>
<script>
import CommomGallary from "@/commom/gallary";
import CommomFade from "@/commom/fade"
export default {
  props:{
    gallaryImgs:Array,
    bannerImg:String,
    sightName:String
  },
  data() {
    return {
        showGallary:false
    };
  },
  components: {
    CommomGallary,
    CommomFade
  },
  methods: {
      handleGallaryClose(){
       this.showGallary=false
      },
      handleGallaryOpen(){
        this.showGallary=true
      }
  }
};
</script>
<style scoped lang="stylus">
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>