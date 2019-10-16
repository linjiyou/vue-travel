<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import AppHome from "./components/home";
import AppCity from "./components/city"
export default {
  components: {
    AppHome,
    AppCity
  }
};
</script>
