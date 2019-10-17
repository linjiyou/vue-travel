<template>
    <div>
       <city-header></city-header>
       <city-search></city-search>
       <city-List></city-List>
       <city-alphabet></city-alphabet>
    </div>
</template>
<script>
import CityHeader from "./Header"
import CitySearch from "./Serach"
import CityList from "./List"
import CityAlphabet from "./Alphabet"
export default {
    components:{
        CityHeader,
        CityList,
        CitySearch,
        CityAlphabet
    }
}
</script>
<style lang="stylus" scoped>
   
</style>