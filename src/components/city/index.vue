<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./Header";
import CitySearch from "./Serach";
import CityList from "./List";
import CityAlphabet from "./Alphabet";
export default {
  data() {
    return {};
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {}
};
</script>
<style scoped>
</style>