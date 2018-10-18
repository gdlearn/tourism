<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgurl" alt="">
        </swiper-slide>
     
       
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!-- <div>testst</div> -->
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
export default {
    name:'HomeSwiper',
    data(){
        return {
            swiperOption:{
               pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: true,
                loop:true,
                speed: 500,
            },
            swiperList:[{
                id:'1',
                imgurl:"//gw.alicdn.com/tfs/TB1h3fPihjaK1RjSZKzXXXVwXXa-1125-352.jpg_790x10000Q75.jpg_.webp"
            },{
                id:'2',
                imgurl:"//gw.alicdn.com/imgextra/i4/O1CN011Tlm8JuHMDoKgSX_!!0-travel.jpg_790x10000Q75.jpg_.webp"
            },{
               id:'3',
               imgurl:"//gw.alicdn.com/tfs/TB1Q3FDEXuWBuNjSszbXXcS7FXa-1125-352.jpg_790x10000Q75.jpg_.webp" 
            }]
        }
    },
   
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff !important;
.swiper-img
    width 100%

</style>
