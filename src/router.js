import Vue from "vue";
import Router from "vue-router";
import AppHome from "./components/home"
import AppCity from "./components/city"

Vue.use(Router);

export default new Router({
  routes: [
<<<<<<< HEAD
    {
     path:"/",component:AppHome
    },
    {
      path:"/city",component:AppCity
    }
=======
    { path: "/", component: AppHome },
    { path: "/city", component: AppCity }
>>>>>>> city-search
  ]
});
