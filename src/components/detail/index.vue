<template>
  <div>
    <detail-banner :gallaryImgs="gallaryImgs" :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="contain"></div>
  </div>
</template>
<script>
import DetailBanner from "./banner";
import DetailHeader from "./header"
import DetailList from "./list"
import axios from "axios"
export default {
  name:"Detail",
  data () {
    return {
      categoryList:[],
      gallaryImgs:[],
      bannerImg:"",
      sightName:"",
    }
  },
  components: {
      DetailBanner,
      DetailHeader,
      DetailList
  },
  methods: {
   _getDetailDate(){ 
      axios.get(`/api/detail.json`,{
        params:{
          id:this.$route.params.id
        }
      }).then(this.getDataSucc)
   },
   getDataSucc(response){ 
     const resp=response.data
     if(resp.ret){
      const data=resp.data
      this.categoryList=data.categoryList
      this.gallaryImgs=data.gallaryImgs
      this.bannerImg=data.bannerImg
      this.sightName=data.sightName
     }
     
   }
  },
  created(){
    this._getDetailDate()
  }
}
</script>
<style scoped lang="stylus">
 .contain{
      height 50rem
  }
</style>