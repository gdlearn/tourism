import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import TabList from '@/page/tablist/Home'
import TourDetail from '@/page/tourdetail/Home'
// import City from '@/page/city/City'
// import Detail from '@/page/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TabList',
    name: 'TabList',
    component: TabList
  },
  {
    path: '/TourDetail',
    name: 'TourDetail',
    component: TourDetail
  }
  // , {
  //   path: '/city',
  //   name: 'City',
  //   component: City
  // }, {
  //   path: '/detail/:id',
  //   name: 'Detail',
  //   component: Detail
  // }
],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})