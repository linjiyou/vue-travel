<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import AppHome from "./components/home";
import AppCity from "./components/city";
export default {
  components: {
    AppHome,
    AppCity
  }
};
</script>
