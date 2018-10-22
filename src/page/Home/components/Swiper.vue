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
                imgurl:"http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg"
            },{
                id:'2',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg"
            },{
               id:'3',
               imgurl:"http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg" 
            },{
                id:'4',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg"
            },{
               id:'5',
               imgurl:"http://img1.qunarzz.com/piao/fusion/1611/b6/38ea2abdaafa0f02.jpg_750x200_f47f3b0a.jpg" 
            }
            ]
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
