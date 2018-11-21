<template>
    <div>
        <!-- 详情页 -->
	<div class="xq-page">
		<!-- 详情页主体 -->
		<div class="xq-main">
			<!-- 详情页头部 -->
			<div class="xq-headfigure">
				<div class="xq-headfigure-wrap">
					<img class="xq-headfigure-img" src="https://img1.qunarzz.com/sight/p0/1602/49/4917c5b8d400d5b890.img.jpg_600x330_4431296c.jpg">
				</div>
				<div class="xq-headfeagure-info">
					<div class="xq-headfeagure-title">凤凰沟(AAAA景区)</div>
				</div>
				<div class="xq-imgswipeicon">
					<div class="xq-imgswipeicon-img"><img src="http://mquanquan.com/static/image/erma/tourism/ly-iconimg.png"></div>
					<em class="xq-imgswipeicon-number">30</em>
				</div>
				 <div class="goback" v-on:click="goback">
                    <span class="lb-header-left"></span>
                </div>
			</div>
			<!-- 详情页评分、地址栏 -->
			<div class="xq-baseinfo">
				<div class="xq-flexbox">
					<div class="xq-flexbox-item xq-flexbox-left">
						<a class="xq-card-link" href="#"></a>
						<div>
							<span class="xq-commentcard-score">4.9</span><span class="xq-commentcard-text">分</span><span class="xq-commentcard-desc">很棒</span>
						</div>
						<div>
							<span class="xq-totalcommentnum">1540条评论</span><span class="xq-totalcommentnum">5条攻略</span>
							<img class="xq-iconright" src="http://mquanquan.com/static/image/erma/tourism/ly-iconright.png" />
						</div>
					</div>
					<div class="xq-flexbox-item">
						<a class="xq-card-link" href="#"></a>
						<div>
							<span class="xq-sightcard-title">景点简介</span>
						</div>
						<div>
							<span class="xq-sightcard-text">开放时间、贴士</span>
							<img class="xq-iconright" src="http://mquanquan.com/static/image/erma/tourism/ly-iconright.png" />
						</div>
					</div>
				</div>
				<div class="xq-baseinfo-address">
					<p class="xq-baseinfo-address-txt">
						<img class="xq-baseinfo-iconaddress" src="http://mquanquan.com/static/image/erma/tourism/ly-iconaddress.png">江西省南昌市南昌县黄马乡凤凰沟（自驾320国道修路，到银三角上桥，然后从昌南上高速，往上海方向走一段高速，从黄马下）
						<img class="xq-baseinfo-iconright" src="http://mquanquan.com/static/image/erma/tourism/ly-iconright.png">
					</p>
				</div>
			</div>
			<!-- 详情页内容 -->
			<div class="xq-list-container">
				<div class="xq-ticket-container">
					<div class="xq-recommend">
						<h1 class="xq-recommend-name">去哪儿推荐</h1>
						<div class="xq-recommend-item">
							<div class="xq-recommend-main">
								<div>
									<h2 class="xq-recommend-title">【特惠】凤凰沟亲子票（1大1小）</h2>
									<ul class="xq-recommend-light">
										<span class="xq-recommend-desctag">
											<img class="xq-recommend-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/f0/39deb48037c83702.png">
											17:00前可订今日,预订后1小时可用
										</span>
									</ul>
									<ul class="xq-recommend-labecon">
										<span class="xq-recommend-label">
											<img class="xq-recommend-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png">
											自营
										</span>
										<span class="xq-recommend-label">不可退</span>
									</ul>
								</div>
							</div>
							<div class="xq-recommend-side">
								<a href="#" class="xq-recommend-link">
									<strong class="xq-recommend-sale">￥<em class="xq-price-num">39</em></strong>
									<em class="xq-recommend-btn">预定</em>
								</a>
							</div>
						</div>
						<div class="xq-recommend-item">
							<div class="xq-recommend-main">
								<div>
									<h2 class="xq-recommend-title">【特惠】凤凰沟亲子票（1大1小）</h2>
									<ul class="xq-recommend-light">
										<span class="xq-recommend-desctag">
											<img class="xq-recommend-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/f0/39deb48037c83702.png">
											17:00前可订今日,预订后1小时可用
										</span>
									</ul>
									<ul class="xq-recommend-labecon">
										<span class="xq-recommend-label">
											<img class="xq-recommend-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png">
											自营
										</span>
										<span class="xq-recommend-label">不可退</span>
									</ul>
								</div>
							</div>
							<div class="xq-recommend-side">
								<a href="#" class="xq-recommend-link">
									<strong class="xq-recommend-sale">￥<em class="xq-price-num">39</em></strong>
									<em class="xq-recommend-btn">预定</em>
								</a>
							</div>
						</div>
						<div class="xq-recommend-item">
							<div class="xq-recommend-main">
								<div>
									<h2 class="xq-recommend-title">【特惠】凤凰沟亲子票（1大1小）</h2>
									<ul class="xq-recommend-light">
										<span class="xq-recommend-desctag">
											<img class="xq-recommend-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/f0/39deb48037c83702.png">
											17:00前可订今日,预订后1小时可用
										</span>
									</ul>
									<ul class="xq-recommend-labecon">
										<span class="xq-recommend-label">
											<img class="xq-recommend-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png">
											自营
										</span>
										<span class="xq-recommend-label">不可退</span>
									</ul>
								</div>
							</div>
							<div class="xq-recommend-side">
								<a href="#" class="xq-recommend-link">
									<strong class="xq-recommend-sale">￥<em class="xq-price-num">39</em></strong>
									<em class="xq-recommend-btn">预定</em>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
</template>

<script>
export default {
	name:"tourdetail",
	data(){
		return {
			TourList:[]
		}
	},
	created(){},
	mounted(){
		this.getDetail(this.$route.params.DetailId)
	},
	watch:{
    $route(to,from){
			// console.log(to,from);
			if(to.name=="TourDetail"){
				console.log('id',this.$route.params.DetailId)
				this.getDetail(this.$route.params.DetailId)
			}
    	}
	
	},
	computed:{
		// ShowGussList(){
		// return this.GussList.length
		// }
  	},
	methods:{
		getDetail(DetailId){
			console.log('id',DetailId)
			this.$http.get(this.$env_url+'/index.php/index/detail',{
				params:{
					DetailId
				}
			}).then(response=>{
				console.log('tourlist',response)
				// let datas=JSON.parse(response.data).data
				// this.TourList=datas
			}).catch(function(error){
			console.log(error)
			});
		},
		goback:function(){
           this.$router.push('/')
        }
	}
}
</script>

<style lang="stylus" scoped>
a:hover, a:visited, a:link, a:active {
	    text-decoration:none; color: #000;
	}
	h1,h2,h3,h4,h5,h6{
		font-family: tahoma,arial,"Hiragino Sans GB","\5FAE\8F6F\96C5\9ED1",simsun,sans-serif;
	}
	h1,h2,h3,h4,h5,h6,b,strong{
		font-weight: normal;
	}
	em{
		font-style: normal;
	}
	.goback{
        position:absolute;
        left: 0.2rem;
        top: 0.5rem;
    }
    .lb-header-left{
		background: url('http://mquanquan.com/static/image/erma/ly-iconleft.png') no-repeat left 50%;
            background-size: 100%;
            display: block;
            width: 0.5rem;
            height: 0.5rem;
            padding-left: 0.1rem;
	}  
	.xq-page{
		position: absolute; top: 0; left: 0; width: 100%; min-height: 100%; background-color: #f5f5f5;
	}
	.xq-headfigure{
		position: relative;
	}
	.xq-headfigure-wrap{
		overflow: hidden; height: 0; width: 100%; padding-bottom: 55%;
	}
	.xq-headfigure-img{
		width: 100%; vertical-align: top;
	}
	.xq-headfeagure-info{
		position: absolute; right: .2rem; bottom: .36rem; left: .2rem; min-height: .4rem;
	}
	.xq-headfeagure-title{
		position: relative; z-index: 1; line-height: .4rem; color: #fff; font-size: .36rem; text-shadow: 0 1px 2px rgba(0,0,0,0.70);
	}
	.xq-imgswipeicon{
		position: absolute; left: .2rem; bottom: .86rem; width: 1.2rem; height: .4rem; background: rgba(0,0,0,.5);
		border-radius: .2rem; font-size: .24rem; color: #fff; line-height: .4rem; text-align: center;
		display: flex; align-items: center; justify-content: center;
	}
	.xq-imgswipeicon-img{
		width: .24rem; height: .24rem; background-color: #fff; overflow: hidden;
		display: flex; align-items: center; justify-content: center;
	}
	.xq-imgswipeicon-img img{
		width: 120%; display: block;
	}
	.xq-imgswipeicon-number{
		margin-left: .1rem;
	}
	.xq-baseinfo{
		position: relative; top: -.1rem; padding: .1rem .2rem 0 .2rem; margin-bottom: .1rem; background-color: #fff;
		border-radius: .1rem .1rem 0 0;
	}
	.xq-flexbox{
		padding-top: .1rem; padding-bottom: .2rem; display: flex; width: 100%; box-sizing: border-box; border-bottom: solid 1px #e0e0e0;
	}
	.xq-flexbox-item{
		position: relative; -webkit-box-flex: 1; flex: 1; -moz-box-flex: 1; -webkit-flex: 1; -moz-flex: 1; -ms-flex: 1;
		box-sizing: border-box;
	}
	.xq-flexbox-left{
		border-right: solid 1px #e0e0e0;
	}
	.xq-card-link{
		position: absolute; left: 0; top: 0; width: 100%; height: 100%;
	}
	.xq-commentcard-score{
		font-size: .44rem; color: #ff8300; line-height: .44rem;
	}
	.xq-commentcard-text{
		font-size: .28rem; color: #ff8300; line-height: .48rem;
	}
	.xq-commentcard-desc{
		font-size: .28rem; color: #ff8300; line-height: .48rem; margin-left: .2rem;
	}
	.xq-totalcommentnum{
		font-size: .24rem; color: #9e9e9e; line-height: .32rem; margin-right: .2rem;
	}
	.xq-iconright{
		width: .24rem; position: absolute; top: .3rem; right: .2rem;
	}
	.xq-sightcard-title{
		font-size: .28rem; color: #212121; line-height: .48rem; padding-left: .3rem;
	}
	.xq-sightcard-text{
		color: #9e9e9e; font-size: .24rem; padding-left: .3rem;
	}
	.xq-baseinfo-address{
		position: relative; padding: .2rem 0; line-height: .36rem; color: #212121;
	}
	.xq-baseinfo-iconaddress{
		display: block; width: .3rem; position: absolute; left: 0; top: .16rem; margin-top: -.16rem; margin-right: .2rem;
	}
	.xq-baseinfo-address-txt{
		padding-right: .56rem; position: relative; padding-left: .56rem;
	}
	.xq-baseinfo-iconright{
		width: .24rem; position: absolute; right: 0; top: 50%; margin-top: -.14rem;
	}
	.xq-ticket-container{
		position: relative;
	}
	.xq-recommend{
		position: relative; background-color: #fff; margin-bottom: .2rem; padding-left: .2rem;
	}
	.xq-recommend-name{
		background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII='); background-repeat: no-repeat; background-size: .36rem .36rem; background-position: 0 center; text-indent: .36rem;
		overflow: hidden; position: relative; z-index: 4; margin-bottom: -.02rem; padding: 0 .2rem; height: .88rem;
		color: #333; font-size: .32rem; line-height: .88rem;
	}
	.xq-recommend-item{
		padding: .2rem .2rem .24rem 0; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box;
		display: flex; width: 100%; border-top: solid 1px #e0e0e0;
	}
	.xq-recommend-main{
		box-flex: 2.92; flex: 2.92; -webkit-box-flex: 2.92; -moz-box-flex: 2.92; -webkit-flex: 2.92; -moz-flex: 2.92;
		display: flex; -webkit-box-align: center; align-items: center; width: .02rem;
	}
	.xq-recommend-title{
		margin-right: .1rem; line-height: .52rem; padding: 0; font-size: .3rem; display: -webkit-box; overflow: hidden;
		text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
	}
	.xq-recommend-light{
		overflow: hidden;
	}
	.xq-recommend-desctag{
		display: inline-block; height: .32rem; color: #616161; font-size: .24rem; white-space: nowrap;
	}
	.xq-recommend-tagicon{
		display: inline-block; width: .2rem; max-height: .32rem; margin-right: .04rem; vertical-align: 0;
	}
	.xq-recommend-labecon{
		font-size: 0;
	}
	.xq-recommend-label{
		margin-right: .1rem; display: inline-block; margin-top: .08rem; padding: 0 .04rem; height: .32rem; 
		color: #00afc7; font-size: .2rem; line-height: .32rem; white-space: nowrap; border: solid 1px #00afc7; box-sizing: border-box;
	}
	.xq-recommend-side{
		display: flex; align-items: center; -webkit-box-align: center; width: .2rem; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1;
	} 
	.xq-recommend-link{
		box-sizing: border-box; display: block; width: 100%; padding-left: .2rem;
	}
	.xq-recommend-sale{
		color: #ff9800; height: .4rem; display: block; overflow: hidden; font-size: .24rem; line-height: .28rem;
		text-align: center; font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
	}
	.xq-price-num{
		margin-left: .04rem; font-size: .4rem; line-height: .4rem; font: Tahoma,Helvetica,sans-serif;
	}
	.xq-recommend-btn{
		height: .6rem; color: #fff; line-height: .6rem; border-radius: .08rem; background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%); display: block; overflow: hidden; text-align: center;
	}
</style>
