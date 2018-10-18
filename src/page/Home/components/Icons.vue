<template>
<div>
    <div class="Icons">
        <div class="icon" v-for="item of IconList" :key="item.id">
                <div class="icon-img">
                    <img :src="item.icon_url" alt="">
                </div>
                <p class="icon-desc">{{item.text}}</p>
        </div>
    </div>
    <div class="tab-nav">
        <div class="tab-list">
            <span class="iconfont icon-zhekou">&#xe64a;</span>
            <span>定位失败</span>
        </div>
        <div class="tab-list">
            <span class="iconfont icon-zhekou">&#xe64a;</span>
            <span>5折泡温泉</span>
        </div>
    </div>
    
</div>
</template>
<script>
export default {
 name:"Icons",
 data(){
     return{
       IconList:[{
         id:'1',
         icon_url:'http://gdlearn.com/images/icon-img/icon1.png' ,
         text:'景点门票' 
       },{
         id:'2',
         icon_url:'http://gdlearn.com/images/icon-img/icon2.png',
          text:'泡温泉'  
       },{
         id:'3',
         icon_url:'http://gdlearn.com/images/icon-img/icon3.png',
         text:'分界洲岛' 
       },{
         id:'4',
         icon_url:'http://gdlearn.com/images/icon-img/icon4.png',
          text:'一日游' 
       },{
         id:'5',
         icon_url:'http://gdlearn.com/images/icon-img/icon5.png'  ,
         text:'自然风光' 
       },{
         id:'6',
         icon_url:'http://gdlearn.com/images/icon-img/icon1.png',
         text:'必游榜单'   
       },{
         id:'7',
         icon_url:'http://gdlearn.com/images/icon-img/icon2.png' ,
          text:'大小洞天' 
       },{
         id:'8',
         icon_url:'http://gdlearn.com/images/icon-img/icon3.png' ,
          text:'穷游'  
       }
       ]  
     }
 },
 computed:{
     pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
 }
}
</script>

<style lang="stylus" scoped>
    .Icons{
        overflow: hidden
        width 100%;
        height 3rem;
       
        background #ccc
        display flex
        flex-direction: row;
        flex-wrap: wrap;
    }
    .icon{
        
        width 25%
        height 50%;
        background:#fff
       
    }
    .icon-img{
        width :50%
        margin 0 auto
        margin-top 10%
    }
    .icon-img img{
        width 100%
    }
    .icon-desc{
        width 100%
        text-align center
        margin 5% 0
        color #000
        font-weight bold
    }
//导航切换页样式
.tab-nav{
    width 100%
    height 1rem
    margin-top: 5%;
    background: #efecec;
    display  flex
}
.tab-list{
    width 50%
    text-align center
    line-height 1rem
}
.tab-list:first-child{
    border-right:1px solid #ccc
}  
</style>
