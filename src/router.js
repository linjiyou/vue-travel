import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: "/", component: ()=> import("./components/home") 
    },
    {
      path: "/city", component:()=>import("./components/city") 
    },
    {
      path:'/detail/:id',component:()=>import("./components/detail")
    },
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
});
