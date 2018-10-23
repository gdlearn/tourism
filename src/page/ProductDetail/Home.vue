<template>
    <div class="main">
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
        <!-- 详情页标题 -->
        <div class="mp-prdcard-con">
        <div class="mp-prdcard-title mp-ellipsis2">篁岭成人票+索道上下行成人票</div>
        <div class="mp-prdcard-pricecon">
            <em class="mp-prdcard-priceicon">¥</em>
            <span class="mp-prdcard-pricetext">140</span>
        </div>
        <div class="mp-prddetail-tagarea">   
                <div class="mp-prddetail-ul">
                    <div class="mp-prddetail-li">
                        <img class="mp-playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
                    </div>
                    <div class="mp-prddetail-li">
                        <img class="mp-playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png">自营
                    </div>
                    <div class="mp-prddetail-li">
                        <img class="mp-playlimit-icon" src="//img1.qunarzz.com/piao/fusion/1804/68/e49cdb22eaa16802.png">条件退
                    </div>
                </div>
            </div>
        </div>
        <!-- 评分和评论 -->
        <div class="mp-commentsinfo-con">
            <a href="https://touch.piao.qunar.com/touch/getCommentsAndTravelTips.htm?fromType=PRODUCT&amp;productId=1092428737&amp;navigation=%7B%22title%22%3A%7B%22style%22%3A%22text%22%2C%22text%22%3A%22%E8%AF%84%E8%AE%BA%22%7D%7D&amp;cat=from_area%3Dts_type_nav%26from_index%3D7%26from_value%3D%25E5%25A9%25BA%25E6%25BA%2590%26dist_city%3D%25E5%258D%2597%25E6%2598%258C%26list_index1%3D0%26list_index2%3D0" class="mpg-linkarea" mp-role="mp-select-comment" data-click="t_comment_top"></a>
            <span class="mp-comment-icon"></span>
            <span class="mpf-starlevel">
                <span class="mpg-iconfont mpf-starlevel-gain" data-score="4.0" style="width:100%">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing.png" alt="">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing.png" alt="">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing.png" alt="">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing.png" alt="">
                </span>
                <span class="mpg-iconfont mpf-starlevel-total">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing2.png" alt="">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing2.png" alt="">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing2.png" alt="">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing2.png" alt="">
                    <img src="http://mquanquan.com/static/image/erma/tourism/icon-xing2.png" alt="">
                </span>
            </span>
            <span class="mp-comments-tagscore">4.0分</span>
            <span class="mp-comments-totalnum">535条评论&nbsp;
            <span class="mp-iconfont mp-comments-rightarrow">F</span>
            </span>
        </div>
        <!-- 使用须知 -->
        <div class="mp-prddetail-group">
            <h3 class="mp-prddetail-title mp-border-bottom">购票须知</h3>
            <div class="mp-ticketcontent">
                    <div class="mp-ticketcontent-item">
                        <p class="mp-ticketcontent-title">预订说明</p>
                            <div class="mp-ticketcontent-line">
                                <div class="mp-ticketcontent-keyword">预订时间：</div>
                                <div class="mp-ticketcontent-con">
                                    <div class="mp-ellipsis">
                                        <span class="mp-ticketcontent-light">可订明日</span>
                                    </div>
                                    <p class="mp-ticketcontent-desc">需要在游玩当天的08:00前预订</p>
                                </div>
                            </div>
                            <div class="mp-ticketcontent-line">
                                <div class="mp-ticketcontent-keyword">有 效 期：</div>
                                <div class="mp-ticketcontent-con">
                                    <p class="mp-ticketcontent-desc">游玩日期当天有效</p>
                                </div>
                            </div>
                            <div class="mp-ticketcontent-line">
                                <div class="mp-ticketcontent-keyword">限购政策：</div>
                                <div class="mp-ticketcontent-con">
                                    <p class="mp-ticketcontent-desc">每笔订单最多购买10份</p>
                                </div>
                            </div>
                    </div>

                    <div class="mp-ticketcontent-item">
                        <p class="mp-ticketcontent-title">入园须知</p>
                            <div class="mp-ticketcontent-line">
                                <div class="mp-ticketcontent-keyword">入园方式：</div>
                                <div class="mp-ticketcontent-con">
                                    <div class="mp-ticketcontent-lightcon mp-ellipsis">
                                        <span class="mp-ticketcontent-light">需提前换票入园</span>
                                    </div>
                                </div>
                            </div>
                                    <p class="mp-ticketcontent-sepline">
                                        <span class="mp-ticketcontent-linetag"><img class="mp-ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/4f/60b1629ae5d22702.png"></span>凭商家确认短信、身份证到景区售票处进行换票
                                    </p>
                                    <p class="mp-ticketcontent-sepline">
                                        <span class="mp-ticketcontent-linetag"><img class="mp-ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/e2/8f4c1d0b353c9402.png"></span>在检票口凭票入园
                                    </p>

                            <p class="mp-ticketcontent-line"><span class="mp-ticketcontent-keyword">商家短信：</span></p>
                            <p class="mp-ticketcontent-desc">商家确认短信会在下单成功后2分钟内发送</p>

                            <p class="mp-ticketcontent-line"><span class="mp-ticketcontent-keyword">景区开放时间：</span></p>
                            <p class="mp-ticketcontent-desc">07:30～17:00开放；</p>
                        


                    </div>
                    <div class="mp-ticketcontent-item">
                        <p class="mp-ticketcontent-title">退款说明</p>
                            <div class="mp-ticketcontent-line">
                                <div class="mp-ticketcontent-keyword">退款规则：</div>
                                <div class="mp-ticketcontent-con">
                                    <div class="mp-ellipsis">
                                        <span class="mp-ticketcontent-light">条件退</span>
                                    </div>
                                    <p class="mp-ticketcontent-desc">使用日期截止后30天00:00前可申请退款<br>不支持部分退款<br></p>
                                </div>
                            </div>
                            <div class="mp-ticketcontent-line">
                                <div class="mp-ticketcontent-keyword">极速处理：</div>
                                <div class="mp-ticketcontent-con">
                                    <p class="mp-ticketcontent-desc">去哪儿网承诺，提交申请后一个工作日内完成退款申请的审核</p>
                                </div>
                            </div>
                    </div>

                    <div class="mp-ticketcontent-item">
                        <p class="mp-ticketcontent-title">费用说明</p>
                        <p class="mp-ticketcontent-line" mp-role="feeDesc">篁岭成人票+索道上下行一张</p>
                    </div>

                        <div class="mp-ticketcontent-item"  mp-role="usingDescArea">
                            <p class="mp-ticketcontent-title">使用说明</p>
                            <p class="mp-ticketcontent-line">a. 1.2米（含）～1.5米（不含）的儿童享优惠票。<br>b. 外省初中以下学生，60岁以上老人请（凭相关证件）享优惠门票。<br>c. 1.2米（不含）以下的儿童免票。<br>d. 残疾人、现役军人（在建军节）凭相关证件免费。<br>* 以上信息仅供参考，具体以景区当日信息为准。</p>
                        </div>
            
                <div class="mp-ticketcontent-more" mp-role="useDescMoreBtn" style="display: block;">
                    <div mp-role="moreShaddow" class="mp-ticketcontent-shadow"></div>
                    <span mp-role="moreText">更多购票须知</span><span class="mp-iconfont mp-ticketcontent-arrow" mp-role="useDescMoreArrow">E</span>
                </div>
                </div>
                
            </div>
            <div class="mp-prddetail-group">
                    <h3 class="mp-prddetail-title">景区信息</h3>
                    <div class="mp-prddetail-content mp-border-top">
                        <div class="mp-sightlist">
                            <span class="mp-sightlist-item mp-border-left">
                                <a href="//touch.piao.qunar.com/touch/detail_2871359243.html" class="mp-sightlist-link">
                                <span class="mp-oneday-iconfont mp-sightlist-temple"></span>
                                婺源篁岭(4A)</a></span>
                        </div>
                    </div>
            </div>
            <div class="mp-prddetail-group" style="position:relative">
                <h3 class="mp-prddetail-title">供应商：华东兴兴自营店</h3>
                <div class="mp-prddetail-content mp-border-top">
                    <div class="mp-sullier" mp-role="supllierInfo">
                        消费者成功预订门票并按产品规则使用，出游当日无法按照原订单入园，联系供应商（或去哪儿网）后10分钟未解决，消费者可在景区购买门市价入园并保留票根，去哪儿网将双倍赔付差价。
                    </div>
                </div>

                <div class="mp-supplier-more" mp-role="supplierDescMoreBtn">
                    <div mp-role="moreShaddow" class="mp-supplier-shadow" style="display: none;"></div>
               </div>
            </div>
            <!-- 温馨提示 -->
            <div class="mp-risktip-con" mp-role="riskTipArea">
                <div class="mp-risktip-titlecon" mp-role="riskTipUnfoldArea" data-fold="true">
                    温馨提示<span class="mp-risktip-arrowright mpg-iconfont">E</span>
                </div>
                <div class="mp-risktip-content">
                1.去哪儿网提醒您注意人身安全，参加有一定危险性的室内或户外活动（如跳伞、潜水、滑雪等）前，请务必仔细阅读<a target="_blank" href="https://yun.qunar.com/uploads2/notice/20180801/HighRiskProjectWarning.pdf " class="mp-risklink" mp-role="riskLink">《风险提示》</a>。<br>2.为普及旅游安全知识及旅游文明公约，使您的旅程顺利圆满完成，特制定<a target="_blank" href="https://yun.qunar.com/uploads2/notice/20180711/travelnotes.pdf " class="mp-risklink" mp-role="riskLink">《去哪儿网旅游安全手册》</a>，请您认真阅读并切实遵守。
                </div>
            </div>
            <!-- 用户评论 -->
            <div class="mp-prddetail-group" id="comments-con">
            <h3 class="mp-prddetail-title mp-border-bottom">用户评论</h3>
            <div class="mp-prddetail-content">
                <div class="mp-comments-item" style="position:relative;">
                    <div class="mp-content-level">
                        <span class="mpf-starlevel">
                            <strong class="mpg-iconfont mpf-starlevel-gain" style="width:100%"></strong>
                            <span class="mpg-iconfont mpf-starlevel-total"></span>
                        </span>
                        <span class="mp-comments-date">s*g&nbsp;&nbsp;2018-08-05</span>
                    </div>
                    <p class="mp-comments-text mp-ellipsis2">没碰上油菜花开的季节，但景色也很美，一大早作为第一个坐上景点缆车的游客可以仔细游览，要早点去，我们下山的时候看到大批的旅游团开始上山，庆幸避开他们。山上风景很好，很值得来</p>
                    <div class="mp-comments-imgs">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/41/609902d23bbff502.jpg_240x240_28370c69.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/5c/9a32f540ab9ebc02.jpg_240x240_2a5f8c87.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/f6/61cffbe3b398a02.jpg_240x240_219556c8.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/f0/5d6e98c1110c2002.jpg_240x240_f97ac4b4.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/73/98b2d68e69448d02.jpg_240x240_2dbe9c60.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/89/740588efb4f67602.jpg_240x240_9bce2de2.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/1c/66886a5c5f4bfa02.jpg_240x240_2c47f6e3.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/e3/6d22e3349490de02.jpg_240x240_cdcf5381.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1808/cc/ba7313a9aeae4002.jpg_240x240_27614167.jpg">
                    </div>
                </div>
                <div class="mp-comments-item" style="position:relative;">
                    <div class="mp-content-level">
                        <span class="mpf-starlevel">
                            <strong class="mpg-iconfont mpf-starlevel-gain" style="width:100%"></strong>
                            <span class="mpg-iconfont mpf-starlevel-total"></span>
                        </span>
                        <span class="mp-comments-date">u*4&nbsp;&nbsp;2018-02-19</span>
                    </div>
                    <p class="mp-comments-text mp-ellipsis2">篁岭索道取票方便，离周边民宿也近，索道缓慢，挺安全的。有了索道，免于爬山了，能有更好的体力去欣赏山上的风景。山上的篁岭村很美，俗话说晒秋人家，可惜现在不是秋收季节，晒出来的谷物也是摆摆样子供游人拍照用的。所以色泽上没有网上图片这么鲜艳，(网上图片也可能是摄影师技术好调过色)鲜花小镇，鲜花💐很多已经开了。山上有个晒秋美宿，实际是以前的民居改建的。山上还不断有正在改造的民居，相信改造完后又能呈现给大家一个更美的篁岭。梯田风光是最有特色的，还有一个垒心桥，中间是玻璃栈道，江边是木头栈道。桥建在两座大山之间，走在上面摇摇晃晃，胆小者勿入啊。怪屋比较有意思里面的东西都是倒的，走在里面头晕目眩。总之这次篁岭之行也很值，很满意。去哪儿网出票很快，值得信赖！</p>
                    <div class="mp-comments-imgs">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/2f/6f348d57bafc4702.jpg_240x240_107aa723.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/8b/1d8218ee2ffb5302.jpg_240x240_a0c1e36f.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/f1/c35b8de29092a602.jpg_240x240_3405a4f1.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/c8/948a78bf3b072902.jpg_240x240_085a61db.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/14/2b630b82c7009302.jpg_240x240_91fa2147.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/e1/e313ddadd8096802.jpg_240x240_c55d0702.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/48/6dff6969c6600f02.jpg_240x240_48915f53.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/94/07ea66525577e02.jpg_240x240_e4a9d415.jpg">
                        <img class="mp-comments-img" src="https://imgs.qunarzz.com/piao/fusion/1802/c0/540575fa5a2fc02.jpg_240x240_0f856be8.jpg">
                    </div>
                </div>
            </div>
            <div class="mp-more mp-border-top">
                <a href="https://touch.piao.qunar.com/touch/getCommentsAndTravelTips.htm?fromType=PRODUCT&amp;productId=1092428737&amp;navigation=%7B%22title%22%3A%7B%22style%22%3A%22text%22%2C%22text%22%3A%22%E8%AF%84%E8%AE%BA%22%7D%7D" class="mpg-linkarea" mp-role="mp-select-comment" data-click="t_comment_bottom"></a>
                查看更多评论<span class="mpg-iconfont mp-prddetail-arrow"></span>
            </div>
        </div>
        <!-- 更多报价 -->
        <div class="mp-prddetail-group" id="moreprice-con">
                <h3 class="mp-prddetail-title mp-border-bottom">更多报价</h3>
                <div class="mp-productlist-content">
                    <div class="mp-productlist-item">
                        <a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=2877783020" class="mp-linkarea" data-click="t_more_price">
                            <div class="mp-productprices-info mp-border-bottom">
                                <h3 class="mp-productprices-name mpg-ellipsis2">【立即取票】婺源篁岭景区成人票+往返索道或观光车 成人票</h3>
                                    <ul class="mp-ticket-light">
                                        <span class="mp-ticket-desctag">
                                            <img class="mp-ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
                                        </span>
                                    </ul>
                                    <ul class="mp-ticket-labelcon">
                                        <span class="mp-ticket-label mp-border mp-label14">随时退</span>
                                    </ul>
                                <div class="mp-productprices-supplier mpg-ellipsis">松都票务</div>
                                <div class="mp-productprices-disandprice">
                                    <span class="mp-product-price"><span class="mp-price">¥<em class="mp-price-num">145</em></span></span>
                                    <span class="mpg-iconfont mp-product-arrow">F</span>
                                    <br>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mp-productlist-item">
                        <a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=2858807326" class="mp-linkarea" data-click="t_more_price">
                            <div class="mp-productprices-info mp-border-bottom">
                                <h3 class="mp-productprices-name mpg-ellipsis2">婺源篁岭门票+（双程）索道票成人票</h3>
                                    <ul class="mp-ticket-light">
                                        <span class="mp-ticket-desctag">
                                            <img class="mp-ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
                                        </span>
                                    </ul>
                                    <ul class="mp-ticket-labelcon">
                                        <span class="mp-ticket-label mp-border mp-label14">随时退</span>
                                    </ul>
                                <div class="mp-productprices-supplier mpg-ellipsis">蓝精灵</div>
                                <div class="mp-productprices-disandprice">
                                    <span class="mp-product-price"><span class="mp-price">¥<em class="mp-price-num">140</em></span></span>
                                    <span class="mpg-iconfont mp-product-arrow">F</span>
                                    <br>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mp-productlist-item">
                        <a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=758586587" class="mp-linkarea" data-click="t_more_price">
                            <div class="mp-productprices-info">
                                <h3 class="mp-productprices-name mpg-ellipsis2">篁岭景区成人套票（门票+索道）电子票【当日0745前可订】</h3>
                                    <ul class="mp-ticket-light">
                                        <span class="mp-ticket-desctag">
                                            <img class="mp-ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
                                        </span>
                                    </ul>
                                    <ul class="mp-ticket-labelcon">
                                        <span class="mp-ticket-label mp-border mp-label14">条件退</span>
                                    </ul>
                                <div class="mp-productprices-supplier mpg-ellipsis">我爱遛遛</div>
                                <div class="mp-productprices-disandprice">
                                    <span class="mp-product-price"><span class="mp-price">¥<em class="mp-price-num">145</em></span></span>
                                    <span class="mpg-iconfont mp-product-arrow">F</span>
                                    <br>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="mp-more mp-border-top">
                <a href="/touch/oneDayTour/pricelist.htm?productId=1092428737" class="mpg-linkarea" data-click="t_more_price" mp-role="mp-select-moreprice"></a>
                查看全部<span class="mpg-iconfont mp-prddetail-arrow">F</span>
                </div>
            </div>
            <!-- 底部下单 -->
            <div class="mp-fixbooking-con mpg-flexbox" >
                <div class="mp-fixbooking-pricecon mp-border-top">
                    <span class="mp-fixbooking-priceitem ">
                        价格<em class="mp-fixbooking-priceicon">¥</em><span class="mp-fixbooking-price">140</span>
                    </span>

                </div>
                <div class="mp-fixbooking-btn">
                    <a href="/touch/order/form.htm?pid=1092428737&amp;priceId=3345015796&amp;classify=1&amp;supplierId=15877&amp;isTuan=false&amp;sid=2871359243 &amp; tuanId = &amp;cat=from_area%3Dts_type_nav%26from_index%3D7%26from_value%3D%25E5%25A9%25BA%25E6%25BA%2590%26dist_city%3D%25E5%258D%2597%25E6%2598%258C%26list_index1%3D0%26list_index2%3D0" class="mp-booking-link" mp-role="booking-link" data-teamtype="0" data-click="t_goumai">立即预订</a>
                </div>

                <div class="mp-weekend-collection"></div>
            </div>
        </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return{

        }
    },
   created(){
        console.log(this.$route.params.ProductId)
        // this.lisenToMyBoy()
		// this.sendAjax(this.$route.params.keywords)
	},
	mounted(){
		
	},
	computed:{
		
	},
	watch:{
    $route(to,from){
			// console.log(to,from);
			if(to.name=="ProductDetail"){
				console.log(this.$route.params.ProductId)
				// this.sendAjax(this.$route.params.keywords)
			}
    	}
	
	},
	methods:{
		lisenToMyBoy:function(msg){
           
        },
        goback:function(){
           this.$router.back(-1)
        }
	}
    
}
</script>

<style lang="stylus" scoped>
.xq-headfigure{
		position: relative;
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
    // 详情页标题
.mp-prdcard-con {
    position: relative;
    margin-top: -.1rem;
    padding: .2rem .2rem 0 .2rem;
    background: #fff;
    -webkit-border-radius: .1rem .1rem 0 0;
    -moz-border-radius: .1rem .1rem 0 0;
    border-radius: .1rem .1rem 0 0;
}
.mp-prdcard-title {
    padding-bottom: .1rem;
    line-height: .5rem;
    font-size: .36rem;
}
.mp-ellipsis2, .mpg-ellipsis2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mp-prdcard-pricecon {
    line-height: .48rem;
}
.mp-prdcard-priceicon {
    color: #ff8300;
    font-size: .24rem;
}
.mp-prdcard-pricetext {
    margin-left: -.06rem;
    color: #ff8300;
    font-size: .48rem;
}
.mp-prddetail-tagarea {
    padding-top: .04rem;
}
.mp-prddetail-ul {
    overflow: hidden;
    margin-left: -.4rem;
    padding-bottom: .2rem;
    color: #9e9e9e;
    font-size: 0;
}
.mp-prddetail-li {
    display: inline-block;
    padding: .04rem 0;
    margin-left: .4rem;
    margin-top: .06rem;
    font-size: .24rem;
    white-space: nowrap;
}
.mp-playlimit-icon {
    width: .22rem;
    max-height: .22rem;
    margin-right: .04rem;
    vertical-align: 0;
}
// 评分和评论
.mp-commentsinfo-con {
    position: relative;
    margin-top: .2rem;
    padding-top: .02rem;
    background-color: #fff;
    line-height: .8rem;
}
.mpg-linkarea {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.mp-commentsinfo-con .mpf-starlevel {
    width: 1.66rem;
    top: .04rem;
}
.mpf-starlevel-gain {
    letter-spacing: .06rem;
}
.mpf-starlevel-gain {
    z-index: 2;
    color: #ffb436;
}
.mpg-iconfont img{
    width 20%;
}
.mpf-starlevel-gain, .mpf-starlevel-total {
    overflow: hidden;
    position: absolute;
    top: .04rem;
    left: 0;
    height: .38rem;
}
.mpf-starlevel-total {
    color: #e0e0e0;
    letter-spacing: .06rem;
}
.mpf-starlevel-total {
    z-index: 1;
    color: #e0e0e0;
}
.mpf-starlevel-gain, .mpf-starlevel-total {
    overflow: hidden;
    position: absolute;
    top: .04rem;
    left: 0;
    height: .28rem;
}
.mpg-iconfont {
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
.mpg-iconfont {
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
.mpf-starlevel {
    display: inline-block;
    position: relative;
    width: 1.5rem;
    height: .28rem;
    line-height: .28rem;
    font-size: .28rem;
    letter-spacing: .02rem;
    -webkit-transform: scale(.83);
    -moz-transform: scale(.83);
    -ms-transform: scale(.83);
    -o-transform: scale(.83);
    transform: scale(.83);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
}
.mp-comments-tagscore {
    display: inline-block;
    margin-left: .1rem;
    color: #616161;
}
.mp-comments-totalnum {
    float: right;
    position: relative;
    top: .25rem;
    display: inline-block;
    line-height: .28rem;
    font-size: .28rem;
    margin-left: .16rem;
    margin-right: .2rem;
    color: #616161;
}
.mp-comments-rightarrow {
    position: relative;
    top: .02rem;
    font-size: .24rem;
    color: #9e9e9e;
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
.mp-comment-icon {
    position: relative;
    top: .08rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
    margin-left: .2rem;
    background-size: .4rem 3rem;
}

// 购票须知
.mp-prddetail-group {
    margin-top: .2rem;
    padding: .01rem 0;
    background-color: #fff;
}
.mp-prddetail-title {
    margin-left: .2rem;
    padding: .2rem 0;
    color: #616161;
    font-size: .32rem;
    line-height: .44rem;
}
.mp-border, .mp-border-top, .mp-border-right, .mp-border-bottom, .mp-border-left, .mp-border-topbottom, .mp-border-rightleft, .mp-border-topleft, .mp-border-rightbottom, .mp-border-topright, .mp-border-bottomleft {
    position: relative;
}
.mp-ticketcontent {
    position: relative;
    padding: 0 .38rem .3rem .38rem;
}
.mp-ticketcontent-item {
    padding-bottom: .2rem;
}
.mp-ticketcontent-title {
    position: relative;
    margin-top: .3rem;
    height: .48rem;
    color: #212121;
    font-size: .34rem;
    line-height: .48rem;
}
.mp-ticketcontent-title::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -.18rem;
    width: .06rem;
    height: .32rem;
    background: #00bcd4;
    border-radius: .06rem;
    -webkit-transform: translateY(-.16rem);
    -moz-transform: translateY(-.16rem);
    -ms-transform: translateY(-.16rem);
    transform: translateY(-.16rem);
}
.mp-ticketcontent-line, .mp-ticketcontent-sepline {
    overflow: hidden;
    margin-top: .2rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    word-break: break-all;
    word-wrap: break-word;
}
.mp-ticketcontent-keyword {
    float: left;
    width: 1.4rem;
    color: #212121;
    text-align: justify;
}
.mp-ticketcontent-line, .mp-ticketcontent-sepline {
    overflow: hidden;
    margin-top: .2rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    word-break: break-all;
    word-wrap: break-word;
}
.mp-ticketcontent-con {
    overflow: hidden;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.mp-ticketcontent-innericon {
    width: .26rem;
    height: .26rem;
    vertical-align: top;
    margin-top: .06rem;
}
img, object, input, textarea, button, select {
    vertical-align: middle;
}
fieldset, img {
    border: 0;
}
.mp-ticketcontent-light {
    display: inline-block;
    height: .38rem;
    padding: 0 .1rem;
    color: #fff;
    font-size: .24rem;
    line-height: .38rem;
    border-radius: .02rem;
    background-image: -webkit-gradient(linear,left top,right bottom,from(#ffab1e),to(#ff8c12));
    background-image: -webkit-linear-gradient(-60deg,#ffab1e 37%,#ff8c12 100%);
    background-image: -moz-linear-gradient(-60deg,#ffab1e 37%,#ff8c12 100%);
    background-image: -o-linear-gradient(-60deg,#ffab1e 37%,#ff8c12 100%);
    background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
}
.mp-prddetail-content {
    color: #9e9e9e;
    font-size: .28rem;
    line-height: .44rem;
    overflow: hidden;
    padding: .15rem 0;
    margin: 0 .2rem;
}
.mp-sightlist {
    overflow: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
}
.mp-sightlist-item:last-of-type {
    padding-right: .2rem;
}
.mp-sightlist-item:first-of-type {
    padding-left: .2rem;
}
.mp-sightlist-item {
    display: inline-block;
    padding: 0 .4rem;
    margin: .15rem 0;
    line-height: .4rem;
    font-size: .28rem;
}
.mp-sightlist-link {
    color: #212121;
}
.mp-sightlist-temple {
    color: #bdbdbd;
    position: relative;
    top: .02rem;
    margin-right: .1rem;
}
.mp-prddetail-content {
    color: #9e9e9e;
    font-size: .28rem;
    line-height: .44rem;
    overflow: hidden;
    padding: .15rem 0;
    margin: 0 .2rem;
}
// 温馨提示

    .mp-risktip-con {
        background-color: #fff;
        margin: .2rem 0;
        padding: 0 .24rem;
        color: #616161;
    }
    .mp-risktip-con-fold {
        height: 1rem;
        overflow: hidden;
    }
    .mp-risktip-titlecon {
        height: 1rem;
        line-height: 1rem;
        color: #212121;
        font-size:.34rem;
    }
    .mp-risktip-arrowright {
        float: right;
        height: 1rem;
        line-height: 1rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
    .mp-risktip-content {
        line-height: .4rem;
        margin-bottom: .3rem;
        display: inline-block;
    }
    .mp-risklink {
        color:#00bcd4;
        text-decoration: none;
    }
// 用户评论
.mp-comments-item:first-child {
    padding-top: 0;
}
.mp-comments-item {
    color: #616161;
    padding: .2rem 0;
    border-bottom: 1px dashed #ccc;
}
.mp-comments-item {
    color: #616161;
    padding: .2rem 0;
    border-bottom: 1px dashed #ccc;
}
.mp-comments-text {
    font-size: .28rem;
    line-height: .4rem;
    margin: .1rem 0;
}
.mp-ellipsis2, .mpg-ellipsis2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mpf-starlevel {
    display: inline-block;
    position: relative;
    width: 1.5rem;
    height: .28rem;
    line-height: .28rem;
    font-size: .28rem;
    letter-spacing: .02rem;
    -webkit-transform: scale(.83);
    -moz-transform: scale(.83);
    -ms-transform: scale(.83);
    -o-transform: scale(.83);
    transform: scale(.83);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
}
.mp-comments-date {
    float: right;
    margin-left: .2rem;
    color: #9e9e9e;
}
.mp-comments-imgs {
    overflow: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 0;
    white-space: nowrap;
}
.mp-comments-img {
    width: 1.6rem;
    height: 1.6rem;
}
img, object, input, textarea, button, select {
    vertical-align: middle;
}
.mp-comments-img:not(:first-child) {
    margin-left: .2rem;
}
.mp-comments-item:first-child {
    padding-top: 0;
}
.mp-comments-item {
    color: #616161;
    padding: .2rem 0;
    border-bottom: 1px dashed #ccc;
}
.mp-more {
    position: relative;
    text-align: center;
    color: #9e9e9e;
    padding: .28rem;
}
.mpg-linkarea {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
// 更多报价
.mp-productlist-content {
    margin: 0 .2rem;
}
.mp-productlist-item {
    overflow: hidden;
    position: relative;
}
.mp-productprices-info {
    overflow: hidden;
    padding: .24rem 1.6rem .2rem 0;
}
.mp-productprices-name {
    color: #212121;
    font-size: .28rem;
    line-height: .4rem;
}
.mp-ellipsis2, .mpg-ellipsis2 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mp-ticket-desctag {
    display: inline-block;
    height: .32rem;
    color: #616161;
    font-size: .24rem;
    line-height: .32rem;
    white-space: nowrap;
}
.mp-productprices-supplier {
    margin-top: .1rem;
    color: #616161;
    font-size: .24rem;
    line-height: .34rem;
}
.mpg-ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-productprices-disandprice {
    position: absolute;
    top: 50%;
    right: 0;
    color: #9e9e9e;
    font-size: .22rem;
    line-height: .3rem;
    text-align: right;
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    transform: translate(0,-50%);
}
.mp-product-price {
    text-align: right;
}

.mp-product-arrow {
    position: absolute;
    top: 50%;
    right: .06rem;
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    transform: translate(0,-50%);
}
.mp-ticket-desctag .mp-ticket-tagicon, .mp-ticket-label .mp-ticket-tagicon {
    display: inline-block;
    width: .2rem;
    max-height: .2rem;
    margin-right: .04rem;
    vertical-align: 0;
}
.mp-product-price .mp-price-num {
    margin: 0 .04rem 0 .06rem;
    font-size: .4rem;
}
.mp-product-price .mp-price {
    padding-right: .3rem;
    color: #ff8300;
    font-size: .18rem;
    vertical-align: -.02rem;
}
.mp-price-num {
    font: .28rem Tahoma,Helvetica,sans-serif;
}
#moreprice-con{
    margin-bottom:0.88rem;
}
// 底部下单 
.mp-fixbooking-con {
    position: fixed;
    z-index: 82;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .88rem;
    line-height: .88rem;
}
.mp-fixbooking-pricecon {
    float: left;
    height: .88rem;
    width: 56%;
    background: #fff;
    color: #ff8300;
    text-indent: .2rem;
}
.mp-fixbooking-btn {
    overflow: hidden;
    width: 44%;
    height: .88rem;
    background: #ff9800;
    font-size: .36rem;
    text-align: center;
}
.mp-weekend-collection {
    position: fixed;
    line-height: .6rem;
    font-size: .3rem;
    width: 2.5rem;
    padding: 0 .05rem;
    bottom: 50%;
    left: 50%;
    margin-left: -1.3rem;
    display: none;
    opacity: 0;
    border-radius: .1rem;
    text-align: center;
    color: #fff;
    background: #333;
    z-index: 3;
    word-wrap: break-word;
    word-break: break-all;
}
.mp-booking-link {
    display: block;
    color: #fff;
}
.mp-fixbooking-priceitem {
    color: #616161;
    line-height: .88rem;
    font-size: .28rem;
}
.mp-fixbooking-priceicon {
    margin-left: .1rem;
    color: #ff8300;
    font-size: .24rem;
}
.mp-fixbooking-price {
    margin-right: .1rem;
    font-size: .4rem;
    color: #ff8300;
}
</style>
