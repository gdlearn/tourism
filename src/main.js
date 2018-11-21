// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import config from '../config'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import {env_url} from './config/env.js'
// import 'babel-polyfill'
// import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
// import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
axios.defaults.headers.post['Content-type']="application/json";
axios.defaults.headers.get['Content-type']="application/json";
Vue.prototype.$http= axios
Vue.prototype.$env_url= env_url
console.log('888888',process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  console.log('dev')
// axios.defaults.baseURL = 'http://touch.piao.qunar.com'
// axios.defaults.baseURL = 'http://wx.gdlearn.com/index.php/index'
} else if (process.env.NODE_ENV === 'production') {
  console.log('build')
  // axios.defaults.baseURL = 'http://wx.gdlearn.com/index.php/index'
  axios.defaults.baseURL="http://wx.gdlearn.com"
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
