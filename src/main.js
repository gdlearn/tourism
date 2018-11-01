// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
// import 'babel-polyfill'
// import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
// import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
axios.defaults.headers.post['Content-type']="application/json";
Vue.prototype.$http= axios

if (location.hostname === 'localhost') {
axios.defaults.baseURL = process.env.API_ROOT
} else if (location.hostname === 'gdlearn.com') {
axios.defaults.baseURL = process.env.API_ROOT
} 
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
