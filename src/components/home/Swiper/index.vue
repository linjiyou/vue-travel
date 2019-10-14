<template>
   <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" >

    <swiper-slide v-for="item in swiperList" :key="item.id" >
        <a :href="item.link">
          <img :src="item.imgUrl" :alt="item.title" class="swiper-img">
        </a>
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
import  {getSwiper} from '@/api/home'
export default {
    data(){
        return {
         swiperOption:{
             pagination: '.swiper-pagination',
             loop: true,
             autoplay:5000
         },
         swiperList:{}
        } 
    },
    created(){
        this._getDate()
    },
    methods:{
      _getDate(){
          getSwiper().then(response=>{
              const resp=response.data
              if(resp.ret){
                  this.swiperList=resp.data.swiperList
                  console.log(this.swiperList);
                  
              }
              
          })

      }
    }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.25%
    background: #eee
    .swiper-img
      width: 100%
</style>