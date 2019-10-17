import Vue from "vue";
import Router from "vue-router";
import AppHome from "./components/home"
import AppCity from "./components/city"

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: "/", component: AppHome
    },
    {
      path: "/city", component: AppCity
    }


  ]
});
