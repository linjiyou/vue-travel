<template>
  <div>
    <app-header></app-header>
    <app-swiper :swiperList="swiperList"></app-swiper>
    <app-icons :iconList="iconList"></app-icons>
    <app-recommend :recommendList="recommendList"></app-recommend>
    <app-weekend :weekendList="weekendList"></app-weekend>
  </div>
</template>

<script>
import AppHeader from "./Header"
import AppSwiper from "./Swiper"
import AppIcons from "./NavIcons"
import AppRecommend from "./Recommend"
import AppWeekend from "./WeekEnd"
import axios from "axios"

export default {
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  created(){
    this._getHomeData()
  },
  methods:{
    _getHomeData(){
      axios.get('api/index.json').then(this.getHomeSuccess)
    },
    getHomeSuccess(response){
       const resp=response.data
       if(resp.ret){
         this.city=resp.data.city
         this.swiperList=resp.data.swiperList
         this.iconList=resp.data.iconList
         this.recommendList=resp.data.recommendList
         this.weekendList=resp.data.weekendList
       }  
    }
  },
  components: {
    AppHeader,
    AppSwiper,
    AppIcons,
    AppRecommend,
    AppWeekend
  }
};
</script>
<style lang="stylus" scoped></style>