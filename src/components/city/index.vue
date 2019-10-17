<template>
<<<<<<< HEAD
    <div>
       <app-header></app-header>
    </div>
</template>
<script>
import AppHeader from "./Header"
export default {
    components:{
        AppHeader
    }
}
</script>
<style lang="stylus" scoped>
   
=======
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
import CityHeader from "./Header";
import CitySearch from "./Serach";
export default {
  data() {
    return {};
  },
  components: { CityHeader,CitySearch },
  methods: {}
};
</script>
<style scoped>
>>>>>>> city-search
</style>