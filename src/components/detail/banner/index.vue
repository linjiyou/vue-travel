<template>
  <div>
    <div class="banner" @click="handleGallaryOpen">
      <img
        src="//img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_600x330_6f6a4baa.jpg"
        alt
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">kkkkkkkkkk</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <commom-gallary
     @close="handleGallaryClose"
     v-show="showGallary"
    ></commom-gallary>
  </div>
</template>
<script>
import CommomGallary from "@/commom/gallary";
export default {
  data() {
    return {
        showGallary:false
    };
  },
  components: {
    CommomGallary
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