import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/store"
import "babel-polyfill"
import fastClick from 'fastclick'
import AwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(AwesomeSwiper)

fastClick.attach(document.body)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
