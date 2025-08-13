<template>
	 <view id="zt"><!-- 主体 -->
	        <view class="dbxxl"><!-- 顶部信息栏 -->
	            <view class="dbxxl-1">
					<view class="dbxxl-1-1">
						<view class="PhoneIcon">
	<!-- 						<PhoneIcon class="pi"/> -->
							<image src="/static/dh.png" class="pi2"></image>
							<view class="pi">+86 13415753194</view>
						</view>
						<view class="Email">
							<image src="/static/yj.png" class="pi2"></image>
							<view class="pi">798409680@qq.com</view>
						</view>
					</view>
					<view class="dbxxl-1-2">
						<view class="pi" @click="goContact" v-if="value === 0">
							联系我们
						</view>
						<view class="pi" @click="goContact" v-else>
							Contact Us
						</view>
						<view class="pi" @click="goQuestion" v-if="value === 0">
							常见问题
						</view>
						<view class="pi" @click="goQuestion" v-else>
								FAQ
						</view>
						<view class="pi33">
								<uni-data-select
									 v-model="value"
									:localdata="localdata"
									:clear="false"
								></uni-data-select>
							<image class="pi44" src="/static/cn.png" v-if="value === 0"></image>
							<image class="pi44" src="/static/mg.png" v-else></image>
						</view>
					</view>
	            </view>
	        </view>
			<view class="dhl" v-if="value === 0"><!-- 顶部导航栏 -->
				<view class="zuo">
					<image src="/static/logo橙.png"></image>
				</view>
				<view class="you">
					<view @click="goHomepage" class="zzz">主页</view>
					<view @click="goRegarding" class="zzzr">关于</view>
					<view @click="goProduct" class="zzzr">产品</view>
					<view @click="goProject" class="zzzr">项目</view>
					<view @click="goNews" class="zzzr">新闻</view>
					<view @click="goTutorial" class="zzzr">教程</view>
					<view @click="goDownload" class="zzzr">下载</view>
				</view>
			</view>
			<view class="dhl" v-else><!-- 顶部导航栏 -->
				<view class="zuo2">
					<image src="/static/logo橙.png"></image>
				</view>
				<view class="you2">
					<view @click="goHomepage" class="zzz2">Home</view>
					<view @click="goRegarding" class="zzzr2">About Us</view>
					<view @click="goProduct" class="zzzr2">Products</view>
					<view @click="goProject" class="zzzr2">Project</view>
					<view @click="goNews" class="zzzr2">News</view>
					<view @click="goTutorial" class="zzzr2">Tutorial</view>
					<view @click="goDownload" class="zzzr2">Download</view>
				</view>
			</view>
			<view><!-- 轮播图 -->
				<view class="lbt">
					<swiper class="swiper" indicator-dots indicator-color="#fff4f3" duration="2000" indicator-active-color="#ffaa00" autoplay="ture" interval="4000" circular="ture" easing-function="easeInOutCubic">
						<swiper-item>
							<image  class="lbt-1" src="/static/blj1.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image  class="lbt-2" src="/static/blj2.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image  class="lbt-3" src="/static/blj3.jpg"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="nrla"><!-- 内容栏 -->
				<view class="nrl-1">
					<view class="nrl-1-zuo">
						  <!-- 父容器：控制宽高比 -->
						  <div class="img-container"> 
							<!-- 图片：自动缩放，不变形 -->
							<image src="/static/玻璃夹图片.jpg" class="scale-img"></image>
						  </div>
					</view>

					<view class="nrl-1-you" v-if="value === 0">
						<view class="nrl-1-you1">
							<text class="nrl-1-you-text1">公司简介</text>
							<text class="nrl-1-you-text2">我们以精湛工艺打造每一款配件，精选不锈钢、合金等优质材料，确保产品兼具耐用性与美观性。从家装场景的个性化适配，到工程项目的批量精准供应，无论是追求精致设计的家居爱好者，还是注重效率与品质的专业施工方，都能在我们这里找到契合需求的五金解决方案，助力空间美学与功能稳固完美融合 。</text>
						</view>
						<button class="nrl-1-you-btn" @tap="goRegarding">阅读全文</button>
					</view>
					<view class="nrl-1-you" v-else>
						<view class="nrl-1-you1">
							<text class="nrl-1-you-text1">Company Profile</text>
							<text class="nrl-1-you-text2">We meticulously craft each accessory with superior craftsmanship, using high-quality materials such as stainless steel and alloys to ensure that the products are both durable and aesthetically pleasing. From personalized adaptation for home decoration scenarios to precise supply for engineering projects, whether you are a home enthusiast seeking exquisite design or a professional contractor focusing on efficiency and quality, you can find the hardware solutions that meet your needs here, helping to seamlessly integrate aesthetic appeal with functional stability.</text>
						</view>
						<button class="nrl-1-you-btn" @tap="goRegarding">Read more</button>
					</view>
				</view>
			</view>
			<view class="nrlb"><!-- 内容栏 -->
					<view class="nrlb-top">
						<text class="nrl-1-you-text11">产品列表</text>
						<text class="nrl-1-you-text22">我们严格从中国境内的可靠供应商处采购所有原材料，从开始生产到交付始终确保最高质量标准。</text>
					</view>
					<view class="nrlb-zj">
						<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#ffaa00"></uni-segmented-control>
					        <view class="content">
					            <view v-show="current === 0">
									<scroll-view class="xhbox01" :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
										<view class="xhbox">
											<view v-for="product in products0" :key="product.id" @click="goToProduct(product.id)">
												<view class="xhbox-1">
													<image :src="product.image" mode="aspectFill"></image>
													<text>{{product.name}}</text>
												</view>														
											</view>
										</view>
									</scroll-view>
									<button @tap="goTop" class="butt">
										返回顶部
									</button>
					            </view>
					            <view v-show="current === 1">
									<scroll-view class="xhbox01" :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
										<view class="xhbox">
											<view v-for="product in products1" :key="product.id" @click="goToProduct(product.id)">
												<view class="xhbox-1">
													<image :src="product.image" mode="aspectFill"></image>
													<text>{{product.name}}</text>
												</view>														
											</view>
										</view>
									</scroll-view>
									<button @tap="goTop" class="butt">
										返回顶部
									</button>
					            </view>
					            <view v-show="current === 2">
									<scroll-view class="xhbox01" :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
										<view class="xhbox">
											<view v-for="product in products2" :key="product.id" @click="goToProduct(product.id)">
												<view class="xhbox-1">
													<image :src="product.image" mode="aspectFill"></image>
													<text>{{product.name}}</text>
												</view>														
											</view>
										</view>
									</scroll-view>
									<button @tap="goTop" class="butt">
										返回顶部
									</button>
					            </view>
					        </view>
					</view>
					<view class="nrlb-bu">
						
					</view>
			</view>
			<view class="nrla2"><!-- 内容栏 -->
				<view class="nrlb-top">
					<text class="nrl-1-you-text1">新闻信息</text>
					<text class="nrl-1-you-text2">产品信息产品信息产品信息产品信息产品信息产品信息</text>
				</view>
				<view class="nrla2-1">
					<view class="nrla2-1-zuo">
						<video src="/static/videos/7.15.mp4"></video>
					</view>
					<view class="nrla2-1-you">
						<view class="nrla2-1-top">
							<text>Our hardware store is your one-stop destination for purchasing high-quality products. We offer a wide range of meticulously crafted items, from stylish glass clips to sturdy decorative covers. All products are made of high-quality materials such as stainless steel, combining functionality with aesthetics.</text>
						</view>
						<view class="nrla2-1-btt">
							<image src="/static/3.jpg"></image>
							<image src="/static/2.jpg"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="dibu"><!-- 底部 -->
				<view class="dibu-sm">
					<view class="dibuz">
						<view class="dibuzimg">
							<image src="/static/logo橙.png"></image>
						</view>
						<view class="dibuztx1" v-if="value === 0" title="版权所有 © 佛山市出海科技有限公司 保留所有权利。">
						  版权所有 © 佛山市出海科技有限公司 保留所有权利。
						</view>
						<view class="dibuztx1" v-else title="Copyright © Foshan Go Global Technology Co., Ltd. All Rights Reserved.">
						  Copyright © Foshan Go Global Technology Co., Ltd. All Rights Reserved.
						</view>
						<!-- <text class="dibuztx1">佛山市出海科技有限公司</text> -->
						<view class="dibuz-tu">
							<image class="tuwa " src="/static/WhatsApp.png" title="WhatsApp"></image>
							<image class="tuwa " src="/static/微信.png" title="WeChat"></image>
							<image class="tuwa " src="/static/TIKTOK.png" title="TikTok"></image>
							<image class="tuwa " src="/static/facebook.png" title="Facebook"></image>
						</view>
					</view>
					<view class="dibuy" v-if="value === 0">
						<text class="dibuytx1" title="导航">导航</text>
						<text class="dibuytx2" @click="goHomepage">主页</text>
						<text class="dibuytx2" @click="goRegarding">关于</text>
						<text class="dibuytx2" @click="goProduct">产品</text>
						<text class="dibuytx2" @click="goProject">项目</text>
						<text class="dibuytx2" @click="goNews">新闻</text>
						<text class="dibuytx2" @click="goTutorial">教程</text>
						<text class="dibuytx2" @click="goDownload">下载</text>
					</view>
					<view class="dibuy" v-else>
						<text class="dibuytx1yy" title="Navigation">Navigation</text>
						<text class="dibuytx2y" @click="goHomepage" title="Home">Home</text>
						<text class="dibuytx2y" @click="goRegarding" title="About Us">About Us</text>
						<text class="dibuytx2y" @click="goProduct" title="Products">Products</text>
						<text class="dibuytx2y" @click="goProject" title="Project">Project</text>
						<text class="dibuytx2y" @click="goNews" title="News">News</text>
						<text class="dibuytx2y" @click="goTutorial" title="Tutorial">Tutorial</text>
						<text class="dibuytx2y" @click="goDownload" title="Download">Download</text>
					</view>
					
					<view class="dibuyy" v-if="value === 0">
						<text class="dibuytx1" title="联系我们">联系我们</text>
						<text class="dibuyytx2" title="+86 13415753194">手机: +86 13415753194</text>
						<text class="dibuyytx2" title="Ch19886473134">微信: Ch19886473134</text>
						<text class="dibuyytx2" title="+86 13415753194">WhatsApp: +86 13415753194</text>
						<text class="dibuyytx2" title="798409680@qq.com">邮箱: 798409680@qq.com</text>
						<text class="dibuyytx2">地址: 广东省佛山市禅城区石湾街道汾江南路38号世博金融中心14楼A029</text>

					</view>
					<view class="dibuyy" v-else>
						<text class="dibuytx1yy" title="Contact Us">Contact</text>
						<text class="dibuyytx2yt" title="+86 13415753194">Mobile: +86 13415753194</text>
						<text class="dibuyytx2yt" title="Ch19886473134">WeChat: Ch19886473134</text>
						<text class="dibuyytx2yt" title="+86 13415753194">WhatsApp: +86 13415753194</text>
						<text class="dibuyytx2yt" title="798409680@qq.com">E-mail: 798409680@qq.com</text>
						<text class="dibuyytx2yt">Add: No. A029, 14th Floor, Shengbo Finance Center, 38th Street, Jinan South Road, Shiwang Subdistrict, Chancheng District, Foshan City, Guangdong Province, China</text>
					</view>
				</view>
				<view class="dibu-di"></view>
			</view>
			
	</view>
</template>

<script>
	export default {
		  data(){
			  return{
				   value: 1,
				        localdata: [
				          { value: 0, text: "简体中文"},
				          { value: 1, text: "English" }
				        ],
				  items: ['玻璃夹', '立柱', '推拉门'],
				  current: 0,
				  scrollTop: 0,
				  old: {scrollTop: 0},
				  products0: [
					{ id: 1, name: "玻璃夹1", image: "/static/1.jpg" },
					{ id: 2, name: "玻璃夹2", image: "/static/2.jpg" },
					{ id: 3, name: "玻璃夹3", image: "/static/3.jpg" },
					{ id: 4, name: "玻璃夹2", image: "/static/2.jpg" },
					{ id: 5, name: "玻璃夹2", image: "/static/2.jpg" },
					{ id: 6, name: "玻璃夹2", image: "/static/2.jpg" },
					{ id: 7, name: "玻璃夹2", image: "/static/2.jpg" },
					{ id: 8, name: "玻璃夹1", image: "/static/1.jpg" },
					{ id: 9, name: "玻璃夹1", image: "/static/1.jpg" },
					{ id: 10, name: "玻璃夹1", image: "/static/1.jpg" },
						],
				  products1: [
					{ id: 1, name: "立柱1", image: "/static/6.19-封面.jpg" },
					{ id: 2, name: "立柱2", image: "/static/6.19-封面.jpg" },
					{ id: 3, name: "立柱3", image: "/static/6.19-封面.jpg" },
					{ id: 4, name: "立柱2", image: "/static/6.19-封面.jpg" },
					{ id: 5, name: "立柱2", image: "/static/6.19-封面.jpg" },
					{ id: 6, name: "立柱2", image: "/static/6.19-封面.jpg" },
					{ id: 7, name: "立柱2", image: "/static/6.19-封面.jpg" },
					{ id: 8, name: "立柱1", image: "/static/6.19-封面.jpg" },
					{ id: 9, name: "立柱1", image: "/static/6.19-封面.jpg" },
					{ id: 10, name: "立柱1", image: "/static/6.19-封面.jpg" },
						],
				  products2: [
					{ id: 1, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 2, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 3, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 4, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 5, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 6, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 7, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 8, name: "推拉门1", image: "/static/6.17-封面.jpg" },
					{ id: 9, name: "推拉门1", image: "/static/6.17-封面.jpg"  },
					{ id: 10, name: "推拉门1", image: "/static/6.17-封面.jpg" },
						],
			  };
		  },
		  methods: {
		    goHomepage() {
		      uni.navigateTo({ url: '/pages/index/index'
			  });
		    },
		    goProduct() {
		      uni.navigateTo({ url: '/pages/product/product'
			  });
		    },
			goRegarding() {
			  uni.navigateTo({ url: '/pages/regarding/regarding'
			  });
			},
			goProject() {
			  uni.navigateTo({ url: '/pages/Project/Project'
			  });
			},
			goNews() {
			  uni.navigateTo({ url: '/pages/News/News'
			  });
			},
			goTutorial() {
			  uni.navigateTo({ url: '/pages/Tutorial/Tutorial'
			  });
			},
			goDownload() {
			  uni.navigateTo({ url: '/pages/Download/Download'
			  });
			},
			goContact() {
			  uni.navigateTo({ url: '/pages/Contact/Contact'
			  });
			},
			goQuestion() {
			  uni.navigateTo({ url: '/pages/Question/Question'
			  });
			},
			 onClickItem(e) {
			      if (this.current != e.currentIndex) {
			        this.current = e.currentIndex;
			      }
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
							// 解决view层不同步的问题
							this.scrollTop = this.old.scrollTop
							this.$nextTick(function() {
								this.scrollTop = 0
							});
							uni.showToast({
								icon: "none",
								title: "Has returned to the top."
							})
						},
			goToProduct(id) {
			  uni.navigateTo({
				url: `/pages/product/${id}`
			  });
			},
			   //  handleChange(e) {
					 //  const selectedValue = typeof e === 'number' ? e : e?.detail?.value; 
					 //  // 后续用 selectedValue 做逻辑处理，如跳转等
					 //  if (selectedValue === undefined) {
						// console.error('参数异常，跳过操作');
						// return;
					 //  }
			   //    // 根据不同 value 值跳转不同页面
			   //    switch (selectedValue) {
			   //      case 0:
			   //        // 跳转简体中文对应的页面，这里假设页面路径是 /pages/chinese/chinese
			   //        uni.navigateTo({
			   //          url: '/pages/index/index'
			   //        });
			   //        break;
			   //      case 1:
			   //        // 跳转 English 对应的页面，假设路径是 /pages/english/english
			   //        // uni.navigateTo({
			   //        //   url: '/pages/index/index'
			   //        // });
					 //  // value=1
			   //        break;

			   //      default:
			   //        break;
			   //    }
				  // }
		  },

			
 };
</script>

<style>
	
	#zt{
/* 		padding-left: 5px;
		background-color: #a8a8a8; */
	}
	.dbxxl{
		align-items: center;
		justify-content: center;
		display: flex;
		width: 100%;
		height: 55px;
		border-bottom:2px solid #c2c2c2;
		background-color: #ffffff;
	}
	.dbxxl-1{
		height: 100%;
		width: 70%;
		align-items: center;
		justify-content: space-around;
		display: flex;
		flex-direction: row;
/* 		overflow: hidden; */
	}
	.dbxxl-1-1 {
		width: 56%;
		display: flex;
		flex-direction: row;
		justify-content: start;
	}
	.dbxxl-1-2 {
		width: 38%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.dbxxl-1 view{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	/* 	导航栏样式 */
	.PhoneIcon{
		
		margin-right: 10rpx;
	}
	.Email{
		
		padding-right: 100rpx;
	}
	.pi{
		margin-right: 10rpx;
		font-size: 14px;
		font-weight: 500;
		
	}
	.pi:hover{
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffaa00; 
		font-weight: 600;
	}
	.pi2{
		width: 30px;
		height: 40px;
		margin-right: 10rpx;
		
	}
	.pi33{
		width: 143px;
		font-weight: 600;
	}
	.pi44{
		margin-left: 5px;
		width: 48px;
		height: 32px;
	}
	.dhl{
		width: 70%;
		height: 110px;
		display: flex;
		flex-direction: row;
		padding-left: 15%;
		background-color: #ffffff;
	/* 	background-color: #616161; */
	}
	
	.zuo{
		display:flex;
		width:35%;
		height:110px;
		align-items: center;/* 垂直居中 */
		justify-content: center;/* 水平居中 */
	}
	.you{
		margin-left: 5%;
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width:60%;
		height:110px;
		
	}
	.zzzr{
		display:flex;
		width: 100%;
		height: 55%;
		justify-content: center;
		align-items: center;
		border-radius: 13px;
		font-size: 25px;
		font-weight: 400;
		color: #2f2f2f;
	}
	.zzz{
		display:flex;
		width: 100%;
		height: 55%;
		justify-content: center;
		align-items: center;
		border-radius: 13px;
		font-size: 25px;
		font-weight: 500;
		background-color: #ffaa00;
		color: #ffffff;
	}
	.zzzr:hover{
		background-color: #ffaa00;
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffffff; 
		font-weight: 500;
	}
	.zuo2{
		display:flex;
		width:20%;
		height:110px;
		align-items: center;/* 垂直居中 */
		justify-content: center;/* 水平居中 */
	}
	.you2{
		margin-left: 5%;
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width:80%;
		height:110px;
		
	}
	.zzzr2{
		display:flex;
		width: 100%;
		height: 55%;
		justify-content: center;
		align-items: center;
		border-radius: 13px;
		font-size: 15px;
		font-weight: 500;
		color: #2f2f2f;
	}
	.zzz2{
		display:flex;
		width: 100%;
		height: 55%;
		justify-content: center;
		align-items: center;
		border-radius: 13px;
		font-size: 18px;
		font-weight: 500;
		background-color: #ffaa00;
		color: #ffffff;
	}
	.zzzr2:hover{
		font-size: 15px;
		background-color: #ffaa00;
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffffff; 
		font-weight: 500;
	}
	.zuo2 image{
		width:80px;
		height:80px;
		object-fit: cover;
	}
	.zuo image{
		width:80px;
		height:80px;
		object-fit: cover;
	}
	.lbt{
		  width: 100%;
		    /* 宽高比 16:9 → padding-top = 9/16 * 100% = 56.25% 
		       若图片是其他比例（如 4:3 → 75%，1:1 → 100% ）按需调整 */
		  padding-top:35%;
		  position: relative;
		  overflow: hidden;
	}
	.lbt swiper{
		  position: absolute;
		  top: 0; 
		  left: 0;
		  width: 100%;
		  height: 100%;
		  display: flex;
	}
	.lbt-1{
		  flex-shrink: 0;
		  width: 100%;
		  height: 100%;
		  display: flex;
		  justify-content: center;
		  align-items: center;
	}
	.lbt-2{
		  flex-shrink: 0;
		  width: 100%;
		  height: 100%;
		  display: flex;
		  justify-content: center;
		  align-items: center;
	}
	.lbt-3{
		  flex-shrink: 0;
		  width: 100%;
		  height: 100%;
		  display: flex;
		  justify-content: center;
		  align-items: center;
	}
	.nrla{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 800px;
		background-color: #ffffff;
	}
	.nrla2{
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		width: 100%;
		height: 780px;
		background-color: #ffffff;
	}
	.nrla2-1{
		width:1000px;
		display: flex;
		flex-direction: row;
	}
	.nrla2-1-zuo{
		width: 30%;
	}
	.nrla2-1-you{
		width: 70%;
	}
	.nrla2-1-top{
		width: 100%;
		height: 180px;
		
	}
	.nrla2-1-top text{
		margin-top: 90px;
		font-size: 20px;
		font-weight: 500;
		color: #616161;
	}
	.nrla2-1-btt{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 300px;
		
	}
	.nrla2-1-btt image{
		height:100%;
		width: 48%;
	}
	.nrla2-1-zuo video{
		width: 270px;
		height: 480px;
	}
	
	.nrlb{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 1000px;
		background-color: #f0f0f0;
	}
	.nrl-1{
		display: flex;
		flex-direction: row;
		width: 70%;
		height: 100%;
		
	}
	.nrlb-top{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 40px;
		padding-bottom: 40PX;
		
	}
	.nrlb-bu{
		width: 100%;
		background-color: #c2c2c2;
	}
	.nrl-1-zuo{
		width: 55%;
	}
	/* 父容器：宽 100%，固定宽高比（如 16:9） */
	.img-container {
		  width: 100%;
		  padding-top: 100%;  
		  position: relative;
	}
	/* 图片：宽度填充满，自动按比例缩放 */
	.scale-img {
		  position: absolute;
		  top: 150px;
		  width: 100%;
		  height: 100%;
		  object-fit: contain;
		  max-width: 500px;
		  max-height: 500px;
	}
	.nrl-1-you{
		display: flex;
		flex-direction: column;
		justify-content: start;
		width: 45%;
		height: 100%;
		}
	.nrl-1-you1{
		display: flex;
		flex-direction: column;
		justify-content: start;
		width: 100%;
		height: 60%;
		overflow: hidden;
	
		}	
	.nrl-1-you-text1{
		color: #ffaa00;
		font-size: 50px;
		font-weight: 500;
	}
	.nrl-1-you-text2{
		display: flex;
		margin-top: 10px;
		color: #2d2a2a;
		font-size: 20px;
		flex-wrap: wrap; 
		
		line-height: 40px;
	}
	.nrl-1-you-text11{
		color: #ffaa00;
		font-size: 50px;
		font-weight: 500;
	}
	.nrl-1-you-text22{
		margin-top: 10px;
		color: #2d2a2a;
		font-size: 20px;
		flex-wrap: wrap;
	}
	.nrl-1-you-btn{
		width: 260px;
		height: 60px;
		font-size:23px;
		margin-top: 40px;
		color: #000000;
		background-color: #ffaa00;
		font-weight: 500;
	}
	.nrlb-zj{
		width: 70%;
		margin-left: 15%;
		height: 100%;
	}
	.xhbox{
		padding: 10px;
		display: flex;
		flex-direction: row;
		width: 100%;
		background-color: #ffffff;
		flex-wrap: wrap; /* 超出自动换行 */
		justify-content: space-around;
		gap: 20px;
	}
	.scc{
		overflow-x: hidden; /* 隐藏横向滚动条 */
		overflow-y: auto; /* 内容超出时自动显示纵向滚动条 */
		height: 800px;
	}
	.xhbox-1{
		width: 270px;
		height: 300px;
		border-radius: 8%;
		display: flex;
		flex-direction:column;
		align-items: center;
		border:2.5px solid #a8a8a8;
	}
	.xhbox-1 image{
		width: 270px;
		border-radius: 8% 8% 0 0; 
	}
	.xhbox-1 text{
		width: 270px;
		display: flex;
		flex-direction:column;
		align-items: center;
		padding-top: 5px;
		font-size: 25px;
		border-top:2.5px solid #a8a8a8;
	}
	.xhbox01{
		width: 100%;
		height: 650px;
	
	}
	.scroll1{
		height: 650px;
	}
	.butt{
		margin-top: 30px;
		margin-left:70%;
		width:40%;
		color: #ffffff;
		background-color: #ffaa00;
	}
	/* 底部样式 */
	.dibu{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f0f0f0;
		width: 100%;
		height: 600px;
	}
	.dibu-sm{
		display: flex;
		flex-direction: row;
		width: 80%;
		height: 500px;
	
	}
	.dibuz{
		flex-grow: 0;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items:center;
		justify-content: start;
		height: 500px;
		width: 30%;
/* 		flex-shrink: 0;
		flex-grow: 0; */
	}
	.dibuzimg{
		  width: 200px;
		  /* 16:9 比例 → padding-top = 9/16 = 56.25% */
	/* 	  padding-top: 100%; */
		  height: 200px;
		  display: flex;
		  flex-direction: column;
		  align-items:center;
		  /* position: relative;	 */ 
	}
	.dibuzimg image{
/* 		  position: absolute;
		  top: 65px; */
		  margin-top: 50px;
		  width: 60%;
		  height: 60%;
		  object-fit: contain;
/* 		  max-width: 250px;
		  max-height:250px; */
		}
/* 	.dibuz image{
		margin-top: 50px;
		width: 200px;
		height: 400rpx;
	} */
	.dibuz .dibuztx1{
		/* 	width: 300px; */
			/* height: 100px; */
		    margin-top: 20px;
			font-size: 20px;
			font-weight: 500;
			color: #616161;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
	}
	.dibuz .dibuztx2{
		    margin-top: 80px;
			font-size: 15px;
			font-weight: 500;
			color: #616161;
	}
	.dibuz-tu{
		margin-top: 10px;
		width: 100%;
/* 		display: flex;
		flex-direction: row; */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.dibuz-tu .tuwa{
		object-fit: cover;
		width: 75px;
		height: 65px;
		margin-right: 10px;
		margin-top: 10px;
		
	}
	.tuwa:hover{
		background-color: #ffaa00;
		cursor: pointer;/* 鼠标移入变手 */
	}
	.dibuyy{
			width: 40%;
	/* 		flex-shrink: 1;
			flex-grow: 1; */
			display: flex;
			flex-direction: column;
			align-items: start;
			height: 500px;
			overflow: hidden;
		}
	.dibuy{

		/* height: 600px; */
		width: 30%;
/* 		flex-shrink: 1;
		flex-grow: 1; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.dibuytx1{
		
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 35px;
		font-weight: 500;
		color: #ffaa00;

	}
	.dibuytx1yy{
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 22px;
		font-weight: 500;
		color: #ffaa00;
	
	}
	.dibuytx2{
		margin-bottom: 20px;
		font-size: 27px;
		font-weight: 500;
		color: #616161;
		border-radius: 5px;
		
	}
	.dibuytx2:hover{
		background-color: #ffaa00;
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffffff;
		border-radius: 5px;
	}
	.dibuytx2y{
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 500;
		color: #616161;
		border-radius: 5px;
		
	}
	.dibuytx2y:hover{
		background-color: #ffaa00;
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffffff;
		border-radius: 5px;
	}
	.dibuyytx2{
		width: 100%;
		flex-wrap: wrap; /* 超出自动换行 */
		margin-bottom: 25px;
		font-size: 20px;
		font-weight: 500;
		flex-wrap: wrap;
		color: #616161;
		/* word-break: break-all; */
	}
	.dibuyytx2:hover{
		background-color: #ffaa00;
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffffff;
		border-radius: 5px;
	}
	.dibuyytx2yt{
		width: 100%;
		flex-wrap: wrap; /* 超出自动换行 */
		margin-bottom: 15px;
		font-size: 20px;
		font-weight: 500;
		flex-wrap: wrap;
		color: #616161;
		/* word-break: break-all; */
	}
	.dibuyytx2yt:hover{
		background-color: #ffaa00;
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffffff;
		border-radius: 5px;
	}
	.dibu-di{
		background-color: #ffaa00;
		width: 100%;
		height: 100px;
	}

</style>