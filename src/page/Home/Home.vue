<template>
    <div id="Home">
      <home-header></home-header>
      <Home-Swiper></Home-Swiper>
      <Home-Icons></Home-Icons>
      <Guss-Like></Guss-Like>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import GussLike from './components/GussLike'
// import HomeRecommend from './components/Recommend'
// import HomeWeekend from './components/Weekend'
// import axios from 'axios'
// import { mapState } from 'vuex'
export default {
 name:'Home',
 components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    GussLike
    // HomeRecommend,
    // HomeWeekend
  },
  data(){
    return {}
  }
}
</script>
<style>

</style>
