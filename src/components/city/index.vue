<template>
    <div>
       <city-header></city-header>
       <city-search :cities="cities"></city-search>
       <city-List :cities="cities" :hot="hotCities" :letter="letter"></city-List>
       <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from "./Header"
import CitySearch from "./Serach"
import CityList from "./List"
import CityAlphabet from "./Alphabet"
import axios from "axios"
export default {
    components:{
        CityHeader,
        CityList,
        CitySearch,
        CityAlphabet,
       
    },
    data(){
       return{
           cities:{},
           hotCities:[],
            letter:'',
       }
    },
    created(){
        this._getCityInfo()
    },
    methods:{
        _getCityInfo(){
            axios.get("/api/city.json").then(this.handeleGetCityInfoSucc)
        },
        handeleGetCityInfoSucc(response){
          const resp=response.data
            if(resp.ret){
                const data=resp.data
                this.cities=data.cities
                this.hotCities=data.hotCities
            }
        },
        handleLetterChange(letter){
           this.letter=letter
        }
    }
}
</script>
<style lang="stylus" scoped>
   
</style>