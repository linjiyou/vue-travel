<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import AppHome from "./components/home";
export default {
  components: {
    AppHome
  }
};
</script>
