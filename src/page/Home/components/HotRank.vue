<template>
    <div>
        <div class="mp-group lazy-load">
            <div class="mp-group-title image-ready">
                <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
                <span class="mp-title">本周热门榜单</span>
                <a class="mp-title-more" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=南昌">全部榜单<span class="mp-iconfont mp-more-icon">></span></a>
            </div>
            <ul class="mp-hotsale-list">
                <li class="mp-hotsale-item" v-for="(item,index) of HotRank" :key="item.id">
                    <router-link :to="'/TourDetail/' + item.id" class="mp-fulllink"  data-click="ts_hotsale" data-click-index="0">
                        <div class="mp-hotsale-tag image-ready" v-if="index<3">
                            <img class="mp-hotsale-tagimg" :src="'http://mquanquan.com/static/image/erma/tourism/top'+(index+1)+'.png'">
                        </div>
                        <div class="mp-hotsale-imgcon image-ready">
                            <img :src="item.imgURL" >
                        </div>
                        <div class="mp-hotsale-sight mp-ellipsis">{{item.name}}</div>
                        <div class="mp-hotsale-price">
                        <span class="mpg-price">¥<em class="mpg-price-num">{{item.qunarPrice}}</em></span>起
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HotRank',
  props: {
    HotRank: Array
  },
  data () {
    return {
      // HotRank:[]
    }
  },
  created () {
    console.log('46456', this.HotRank)
  }
}
</script>

<style lang="stylus" scoped>
mp-group:not(:first-child) {
    margin-top: .2rem;
}
.mp-group {
    background: #fff;
    margin: 0.3rem 0;
}
.image-ready {
    background: none !important;
}
.mp-group-title {
    position: relative;
    padding: .24rem 0 .26rem;
}
.mp-hotsale-list {
    padding: 0 .24rem;
    overflow-x: scroll;
    white-space: nowrap;
}
ul, ol, menu {
    list-style: none;
}
.mp-hotsale-item {
    position: relative;
    display: inline-block;
    padding: .06rem 0 .2rem;
    width: 2rem;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.mp-fulllink {
    display: block;
    width: 100%;
    height: 100%;
}
.image-ready {
    background: none !important;
}
.mp-hotsale-tag {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: .84rem;
    height: .4rem;
}
.image-ready img {
    opacity: 1;
}
.mp-hotsale-list img[data-v-6574da09] {
    opacity: 0;
}
.image-ready img[data-v-6574da09] {
    opacity: 1;
}
img, object, input, textarea, button, select {
    vertical-align: middle;
}
.mp-hotsale-list img {
    opacity: 0;
}
.mp-hotsale-tagimg {
    width: 100%;
}
.image-ready {
    background: none !important;
}
.mp-hotsale-imgcon {
    overflow: hidden;
    width: 2rem;
    height: 0;
    padding-bottom: 100%;
    background: #f0f5f8;
}
.mp-hotsale-sight {
    margin-top: .12rem;
    color: #212121;
    font-size: .24rem;
    line-height: .32rem;
    text-align: center;
}
.mp-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-hotsale-price {
    color: #616161;
    font-size: .24rem;
    line-height: .36rem;
    text-align: center;
}
.image-ready {
    background: none !important;
}
.mp-group-title {
    position: relative;
    padding: .24rem 0 .26rem;
}
.mp-group-title .mp-title-img {
    display: inline-block;
    overflow: hidden;
    width: .3rem;
    height: .3rem;
    margin-left: .2rem;
    vertical-align: top;
}
.image-ready img {
    opacity: 1;
}
.mp-group-title .mp-title {
    display: inline-block;
    margin-left: .08rem;
    height: .44rem;
    color: #212121;
    font-size: .32rem;
    line-height: .44rem;
}
.mp-group-title .mp-title-more {
    position: absolute;
    top: .36rem;
    right: .32rem;
    color: #616161;
    font-size: .24rem;
    line-height: .28rem;
}
.mp-group-title .mp-more-icon {
    margin-left: .04rem;
}
.mp-iconfont {
    font-family: 'mpiconfont';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.mp-group-title .mp-title-more {
    position: absolute;
    top: .36rem;
    right: .32rem;
    color: #616161;
    font-size: .24rem;
    line-height: .28rem;
}
.mp-hotsale-item:not(:first-child) {
    margin-left: .12rem;
}
</style>
