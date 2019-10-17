<template>
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
</style>