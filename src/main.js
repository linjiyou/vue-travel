import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import fastClick from 'fastclick'
require('./assets/styles/reset.css')
require('./assets/styles/border.css')
require('./assets/styles/iconfont.css')

fastClick.attach(document.body)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
