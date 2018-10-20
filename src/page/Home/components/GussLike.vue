<template>
    <div class="guss-like">
        <div class="guss-title">
            <img class="guss-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span class="guss-title-info">猜你喜欢</span>
        </div>
        <div class="guss-list">
            <ul class="guss-list-ul">
                <li class="guss-list-li" v-for="item of GussList" :key="item.id">
                    <router-link to='/' class="guss-route">
                        <div class="guss-img">
                            <img :src="item.imgURL" alt="">
                        </div>
                        <div class="guss-info">
                            <div class="guss-info-title">{{item.name}}</div>
                            <div class="guss-info-comment">
                               <span class="guss-info-comment-star">
                                   ❤❤❤❤❤
                                </span>
                               <span class="guss-info-comment-num">{{item.commentCount}}条评论</span> 
                            </div>
                            <div class="guss-info-local">
                                <span class="guss-info-price">￥{{item.qunarPrice}}起</span>
                                <span class="guss-info-position">{{item.address}}</span>
                            </div>
                            <div class="guss-info-futrue">
                                <span>{{item.sightSimpleDesc}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
 name:'GussList',
 props:{
     GussList:Array
 },
 data(){
     return {
    //     GussLikelist:[{
    //         id:'1',
    //         title:'江西绿地中心303观光厅',
    //         img_url:'//img1.qunarzz.com/sight/p0/1509/f5/f5f99f75ee6fee43.water.jpg_110x110_7db92940.jpg',
    //         comment_num:'234',
    //         price:'58',
    //         position:'红谷滩新区',
    //         future:'江西俯瞰绿地的好去处',
    //         star:'5'
    //     },{
    //         id:'2',
    //         title:'南昌万达电影乐园',
    //         img_url:'//img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_110x110_319d59ab.jpg',
    //         comment_num:'789',
    //         price:'89',
    //         position:'九龙湖新区',
    //         future:'童话世界，从梦幻乐到真实',
    //         star:'5'
    //     },
    //     {
    //         id:'3',
    //         title:'厚田沙漠',
    //         img_url:'//img1.qunarzz.com/sight/p0/1505/d1/d1466018b22cc226.water.jpg_110x110_c0bbd6da.jpg',
    //         comment_num:'234',
    //         price:'58',
    //         position:'东湖区',
    //         future:'江西俯瞰绿地的好去处',
    //         star:'5'
    //     },{
    //         id:'4',
    //         title:'梅林景区',
    //         img_url:'//img1.qunarzz.com/sight/p0/1411/25/0ef2f8ab5cca36253ef726a113c8e6f5.water.jpg_110x110_1c8fe943.jpg',
    //         comment_num:'5556',
    //         price:'128',
    //         position:'新建区',
    //         future:'江西旅游必去景区',
    //         star:'5'
    //     }
    //     ]
     }
 }
}
</script>

<style lang="stylus" scoped>
.guss-like{
    width 100%
    height 6rem
    // background #ccc
}
.guss-title{
    line-height: 0.7rem;
    margin: 0.2rem 0;
}
.guss-title-img{
    display: inline-block;
    overflow: hidden;
    width: 0.3rem;
    height: 0.35rem;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    vertical-align: top;
}
.guss-title-info{
    font-size: 0.3rem;
    position: relative;
    top: 0.02rem;

}
.guss-list-li{
  
    width: 95%;
    padding: 2% 2% 2% 3%;
    background: #fff;
    border-bottom: solid #ccc 1px;
}
.guss-route{
      width 100%
      display flex
}
.guss-img{
    width: 28%;
}
.guss-img img{
    width 100%
    
}
.guss-info{
       width: 80%;
}
.guss-info-local{
       margin-left: 0.3rem;
    margin-top: 0.3rem;
    overflow hidden
}
.guss-info-comment{
    margin-left: 0.3rem;
    margin-top: 0.2rem;
}
.guss-info-title{
    font-size: 0.3rem;
    font-weight: bold;
   
    margin: 0.1rem 0 0.1rem 0.3rem;
}
.guss-info-futrue{
    font-size: 0.2rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
}
.guss-info-price{
    float: left;
    font-size: 0.35rem;
    color: #fda119;
    font-weight: bold;

}
.guss-info-position{
    float right
    font-size: 0.2rem
}
.guss-info-comment-num{
    font-size 0.2rem
    margin-left: 0.3rem;
}

</style>
