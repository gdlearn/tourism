<template>
    <div class="Home">
        <div class="lb-header">
		<router-link class="lb-header-left" to="/"></router-link>
		<div class="lb-header-search">
			<input type="text" name="keyword" id="lb-input-search" placeholder="请输入城市或景点">
		</div>
		<span class="lb-header-right">
			<a href="" class="lb-search-submit">搜索</a>
		</span>	
	</div>

	<!-- 分类栏 -->
	<div class="lb-filter">
		<div class="lb-filter-select lb-filter-left">
			<span>全部分类</span>
			<img src="http://mquanquan.com/static/image/erma/ly-iconleft.png">
		</div>
		<div class="lb-filter-select lb-filter-right">
			<span>推荐排序</span>
			<img src="http://mquanquan.com/static/image/erma/ly-iconleft.png">
		</div>
	</div>

	<!-- 列表栏 -->
	<div class="lb-list">
		<ul class="lb-view-list">
			<li class="lb-sight-group" v-for="item of GussList" :key="item.id">
				<div class="lb-item-content">
					<div class="lb-sight-info">
						<a href="#" class="lb-sight-link">
							<div class="lb-sight-img">
								<img :src="item.imgURL">
								<span class="lb-sight-bookingflag" v-if="item.bookingTag.label">{{item.bookingTag.label}}</span>
							</div>
							<div class="lb-sight-detail">
								<h1 class="lb-sight-name">{{item.name}}</h1>
								<div class="lb-sight-comments">
									<span class="lb-sight-level">星星星星星</span>
									<span class="lb-comments-num">{{item.commentCount}}评论</span>
								</div>
								<div class="lb-sight-pricecon">
									<div class="lb-sight-price">
										￥<em>{{item.qunarPrice}}</em>
										<span> 起</span>
									</div>
									<div class="lb-sight-location">
										<span>{{item.address}}</span>
									</div>
								</div>
								<div class="lb-sight-taglist">
									<span class="lb-sight-tag lb-tag-button"  v-for="tags of item.tagList" :key="tags.index"><em>tags.label</em></span>
									<!-- <span class="lb-sight-tag lb-tag-button2"><em>赠券</em></span>
									<span class="lb-sight-tag lb-tag-button3"><em>醉美花海</em></span> -->
								</div>
							</div>
						</a>
					</div>
					<div class="lbf-border-top" v-for="tablist of item.priceList" :key="tablist.ticketTypeId">
						<a href="#" class="lb-linkarea">
							<h2 class="lb-ticket-name">{{tablist.ticketTypeName}}</h2>
							<span class="lb-ticket-qunarprice">￥<em>{{tablist.qunarPrice}}</em></span>
						</a>
					</div>
					<!-- <div class="lbf-border-top">
						<a href="#" class="lb-linkarea">
							<h2 class="lb-ticket-name">【提前订】滕王阁成人票</h2>
							<span class="lb-ticket-qunarprice">￥<em>45</em></span>
						</a>
					</div> -->
				</div>
			</li>
			
			
		</ul>
		
		<span>132123 {{this.$route.params.keywords}}</span>
	</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
	name:"Tablist",
	data(){
		return {
			GussList:[]
		}
	},
	created(){
		console.log('tablist')
		this.sendAjax(this.$route.params.keywords)
	},
	mounted(){
		
	},
	computed:{
		
	},
	watch:{
    $route(to,from){
			// console.log(to,from);
			if(to.name=="TabList"){
				console.log(this.$route.params.keywords)
				this.sendAjax(this.$route.params.keywords)
			}
    	}
	},
	methods:{
		sendAjax:function(params){
			this.$http.get('/api/touch/list.json?',{
				params: {
				region:'南昌',
				isForeign:false,
				page:1,
				pageSize:10,
				keyword:params
        		}
			}).then((response)=>{
			let res_data=response.data.data
			this.GussList=res_data.sightList
			console.log(this.GussList)
			}).catch(function(error){
			console.log(error)
			});
		}
	}

}
</script>

<style lang="stylus" scoped>
	em{
		font-style: normal;
	}
	.lb-header-left{
		background: url('http://mquanquan.com/static/image/erma/ly-iconleft.png') no-repeat left 50%; background-size: 80%; width: .5rem; height: 100%;
		padding-left: .1rem;
	}
	.lb-header{
		width: 100%; height: .8rem; display: flex; align-items: center; justify-content: space-around;
		padding-top: .1rem; background-color: #fff;
	}
	.lb-header-search{
		width: 80%;
	}
	.lb-header-search input{
		width: 100%; height: .4rem; border: none; background-color: #f2f2f2; border-radius: .4rem; padding: .1rem 0;
		text-align: center; font-size: .28rem;outline:none; font-family: "Microsoft Yahei",Arial;
	}
	.lb-header-right{
		display: inline-block; height: .88rem; line-height: .88rem; padding: 0 .1rem;
	}
	.lb-search-submit{
		display: inline-block; width: .74rem; margin-right: .04rem; color: #212121; font-size: .28rem;
	}
	.lb-filter{
		width: 100%; height: .8rem; display: flex; align-items: center; border-top: solid 1px #eaeaea; border-bottom: solid 1px #eaeaea; background-color: #fff;
	}
	.lb-filter-select{
		width: 50%; height: 80%; box-sizing: border-box; display: flex; align-items: center; justify-content: center;
		font-size: .3rem;
	}
	.lb-filter-select img{
		transform:rotate(-90deg); width: .3rem;
	}
	.lb-filter-left{
		border-right: solid 1px #eaeaea;
	}

	.lb-list{
		width: 100%;
	}
	ul{
		list-style: none;
	}
	.lb-sight-group{
		margin-bottom: .2rem; background-color: #fff;
	}
	.lb-sight-info{
		overflow: hidden; padding: .2rem .22rem;
	}
	.lb-sight-link{
		display: block;
	}
	.lb-sight-img{
		width: 2rem; height: 2rem; position: relative; float: left;
	}
	.lb-sight-img img{
		width: 100%;
	}
	.lb-sight-bookingflag{
		position: absolute; left: 0; top: 0; background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png); width: 1.04rem; height: .38rem; background-size: 100%; background-repeat: no-repeat; color: #fff;
		font-size: .2rem; line-height: .38rem; text-indent: .08rem;
	}
	.lb-sight-detail{
		position: relative; overflow: hidden; padding-left: .2rem;
	}
	.lb-sight-name{
		overflow: hidden; height: .44rem; color: #212121; font-size: .32rem; line-height: .44rem; white-space: nowrap;
		text-overflow: ellipsis;
	}
	.lb-sight-comments{
		margin-top: .14rem; height: .34rem; font-size: 0; line-height: .34rem;
	}
	.lb-sight-level{
		width: 1.48rem; height: .28rem; font-size: .28rem; letter-spacing: .02rem;
	}
	.lb-comments-num{
		position: relative; top: -.04rem; margin-left: .18rem; color: #616161; font-size: .24rem;
	}
	.lb-sight-pricecon{
		position: relative; margin-top: .18rem;
	}
	.lb-sight-price{
		height: .36rem; color: #ff8300; font-size: .2rem; line-height: .4rem;
	}
	.lb-sight-price em{
		font-size: .4rem;
	}
	.lb-sight-price span{
		color: #616161; font-size: .24rem; vertical-align: .02rem;
	}
	.lb-sight-location{
		position: absolute; bottom: 0; right: 0; color: #616161; font-size: 0; white-space: nowrap;
	}
	.lb-sight-location span{
		font-size: .24rem;
	}
	.lb-sight-taglist{
		margin-top: .18rem; display: flex;
	}
	.lb-sight-tag{
		display: inline-block; margin-top: .04rem; height: .32rem; font-size: 0; margin-right: .08rem;
		box-sizing: border-box;
	}
	.lb-sight-tag em{
		display: inline-block; height: .336rem; font-size: .24rem; transform: scale(.83); line-height: .32rem;
	}
	.lb-tag-button1{
		background-color: #f0fbfd; color: #00bcd4;
	}
	.lb-tag-button2{
		color: #ff8a00; border: solid .01rem #ff8a00;
	}
	.lb-tag-button3{
		color: #00afc7; border: solid .01rem #00afc7;
	}
	.lb-linkarea{
		display: block; height: 100%; color: inherit;
	}
	.lbf-border-top{
		border-top: 1px solid #eaeaea; box-sizing: border-box; position: relative; height: .96rem; margin-left: .2rem;
	}
	.lb-ticket-name{
		overflow: hidden; margin-right: 1.4rem; height: .96rem; color: #616161; font-size: .28rem; line-height: .96rem;
		white-space: nowrap; text-overflow: ellipsis;
	}
	.lb-ticket-qunarprice{
		overflow: hidden; position: absolute; top: 0; right: .2rem; width: 1.2rem; height: .96rem; text-align: right;
		line-height: .96rem; font-size: .2rem; color: #ff8300;
	}
	.lb-ticket-qunarprice em{
		font-size: .32rem;
	}
</style>
