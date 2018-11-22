<template>
    <div id="Home">
      <home-header></home-header>
      <Home-Swiper></Home-Swiper>
      <Home-Icons></Home-Icons>
      <Hot-Rank v-if="ShowGussList" v-bind:HotRank="GussList"></Hot-Rank>
      <Guss-Like v-if="ShowGussList" v-bind:GussList="GussList"></Guss-Like>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import GussLike from './components/GussLike'
import HotRank from './components/HotRank'
// import {HomeHot} from '../../source/getData'
// import HotRank from './components/hotrank'
// import HomeWeekend from './components/Weekend'
// import axios from 'axios'
// import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    GussLike,
    HotRank

  },
  data () {
    return {
      name: 'ddddd',
      GussList: []

    }
  },
  created () {
    console.log(123132)
  },
  mounted () {
    this.GussLike()
  },
  computed: {
    ShowGussList () {
      return this.GussList.length
    }
  },
  methods: {
    GussLike () {
      this.$http.get(this.$env_url + '/index.php/index/touch', {
        params: {
          type: 'list',
          region: '南昌',
          isForeign: false,
          page: 1,
          pageSize: 5,
          keyword: '江西'
        }

      }).then((response) => {
        // let res_datas = response.data.data
        this.GussList = response.data.data.sightList
        console.log('res', response.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
<style>

</style>
