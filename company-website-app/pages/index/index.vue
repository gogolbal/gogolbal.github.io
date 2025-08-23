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
					<view @click="goHomepage(0)" class="zzz">主页</view>
					<view @click="goRegarding(0)" class="zzzr">关于</view>
					<view @click="goProduct(0)" class="zzzr">产品</view>
					<view @click="goProject(0)" class="zzzr">项目</view>
					<view @click="goNews(0)" class="zzzr">新闻</view>
					<view @click="goTutorial(0)" class="zzzr">教程</view>
					<view @click="goDownload(0)" class="zzzr">下载</view>
				</view>
			</view>
			<view class="dhl" v-else><!-- 顶部导航栏 -->
				<view class="zuo2">
					<image src="/static/logo橙.png"></image>
				</view>
				<view class="you2">
					<view @click="goHomepage(1)" class="zzz2">Home</view>
					<view @click="goRegarding(1)" class="zzzr2">About Us</view>
					<view @click="goProduct(1)" class="zzzr2">Products</view>
					<view @click="goProject(1)" class="zzzr2">Project</view>
					<view @click="goNews(1)" class="zzzr2">News</view>
					<view @click="goTutorial(1)" class="zzzr2">Tutorial</view>
					<view @click="goDownload(1)" class="zzzr2">Download</view>
				</view>
			</view>
			<view><!-- 轮播图 -->
				<view class="lbt">
					<swiper class="swiper" indicator-dots indicator-color="#fff4f3" duration="2000" indicator-active-color="#ffaa00" autoplay="ture" interval="4000" circular="ture" easing-function="easeInOutCubic">
						<swiper-item>
							<image  class="lbt-1" src="/static/cover/cover1.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image  class="lbt-2" src="/static/cover/cover2.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image  class="lbt-3" src="/static/cover/cover11.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image  class="lbt-3" src="/static/cover/cover4.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image  class="lbt-3" src="/static/cover/cover9.jpg"></image>
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
					<view class="nrlb-top" v-if="value === 0">
						<text class="nrl-1-you-text11">产品列表</text>
						<text class="nrl-1-you-text22">我们严格从中国境内的可靠供应商处采购所有原材料，从开始生产到交付始终确保最高质量标准。</text>
					</view>
					<view class="nrlb-top" v-else>
						<text class="nrl-1-you-text11">Product List</text>
						<text class="nrl-1-you-text22">We strictly source all raw materials from reliable suppliers within China, and ensure the highest quality standards throughout the entire production process from start to delivery.</text>
					</view>
					<view class="nrlb-zj">
						<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#ffaa00" v-if="value === 0"></uni-segmented-control>
						<uni-segmented-control :current="current" :values="items2" @clickItem="onClickItem" styleType="button" activeColor="#ffaa00" v-else></uni-segmented-control>
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
									<button @tap="goTop" class="butt" v-if="value === 0">
										返回顶部
									</button>
									<button @tap="goTop" class="butt" v-else>
										Back top
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
									<button @tap="goTop" class="butt" v-if="value === 0">
										返回顶部
									</button>
									<button @tap="goTop" class="butt" v-else>
										Back top
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
									<button @tap="goTop" class="butt" v-if="value === 0">
										返回顶部
									</button>
									<button @tap="goTop" class="butt" v-else>
										Back top
									</button>
					            </view>
					        </view>
					</view>
					<view class="nrlb-bu">
						
					</view>
			</view>
			<view class="nrla2"><!-- 内容栏 -->
				<view class="nrlb-top" v-if="value === 0">
					<text class="nrl-1-you-text1">新闻信息</text>
					<text class="nrl-1-you-text2">专注于高品质五金产品研发、生产与销售的企业，深耕行业多年，凭借精湛的工艺和对品质的严格把控，在五金领域树立了良好的口碑。</text>
				</view>
				<view class="nrlb-top" v-else>
					<text class="nrl-1-you-text1">News Information</text>
					<text class="nrl-1-you-text2">An enterprise specializing in the research, production and sales of high-quality hardware products</text>
				</view>
				<view class="nrla2-1">
					<view class="nrla2-1-zuo">
						<video src="/static/videos/7.15.mp4"></video>
					</view>
					<view class="nrla2-1-you">
						<view class="nrla2-1-top" v-if="value === 0">
							<text>我们的五金店是您购买高品质产品的首选之地。我们提供种类繁多、精心制作的商品，从时尚的玻璃夹子到坚固的装饰罩应有尽有。所有产品均采用优质材料制成，如不锈钢，兼具实用性和美观性。</text>
						</view>
						<view class="nrla2-1-top" v-else>
							<text>Our hardware store is your one-stop destination for purchasing high-quality products. We offer a wide range of meticulously crafted items, from stylish glass clips to sturdy decorative covers. All products are made of high-quality materials such as stainless steel, combining functionality with aesthetics.</text>
						</view>
						<view class="nrla2-1-btt">
							<image src="/static/chimg/chblj03.jpg"></image>
							<image src="/static/chimg/chtlm01.jpg"></image>
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
						<text class="dibuytx2" @click="goHomepage(0)">主页</text>
						<text class="dibuytx2" @click="goRegarding(0)">关于</text>
						<text class="dibuytx2" @click="goProduct(0)">产品</text>
						<text class="dibuytx2" @click="goProject(0)">项目</text>
						<text class="dibuytx2" @click="goNews(0)">新闻</text>
						<text class="dibuytx2" @click="goTutorial(0)">教程</text>
						<text class="dibuytx2" @click="goDownload(0)">下载</text>
					</view>
					<view class="dibuy" v-else>
						<text class="dibuytx1yy" title="Navigation">Navigation</text>
						<text class="dibuytx2y" @click="goHomepage(1)" title="Home">Home</text>
						<text class="dibuytx2y" @click="goRegarding(1)" title="About Us">About Us</text>
						<text class="dibuytx2y" @click="goProduct(1)" title="Products">Products</text>
						<text class="dibuytx2y" @click="goProject(1)" title="Project">Project</text>
						<text class="dibuytx2y" @click="goNews(1)" title="News">News</text>
						<text class="dibuytx2y" @click="goTutorial(1)" title="Tutorial">Tutorial</text>
						<text class="dibuytx2y" @click="goDownload(1)" title="Download">Download</text>
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
				  items2: ['Glass clips', 'Staircase railings', 'Sliding door'],
				  current: 0,
				  scrollTop: 0,
				  old: {scrollTop: 0},
				  products0: [
					{ id: 1, name: "CHYM001", image: "/static/chimg/chblj01.jpg" },
					{ id: 2, name: "CHYM002", image: "/static/chimg/chblj02.jpg" },
					{ id: 3, name: "CHYM003", image: "/static/chimg/chblj03.jpg" },
					{ id: 4, name: "CHYM004", image: "/static/chimg/chblj04.jpg" },
					{ id: 5, name: "CHYM005", image: "/static/chimg/chblj05.jpg" },
					{ id: 6, name: "CHYM006", image: "/static/chimg/chblj06.jpg" },
					{ id: 7, name: "CHYM007", image: "/static/chimg/chblj07.png" },
					{ id: 8, name: "CHYM008", image: "/static/chimg/chblj08.jpg" },
					{ id: 9, name: "CHYM009", image: "/static/chimg/chblj09.jpg" },
					{ id: 10, name: "CHYM010", image: "/static/chimg/chblj10.jpg" },
					{ id: 11, name: "CHYM011", image: "/static/chimg/chblj11.png" },
					{ id: 12, name: "CHYM012", image: "/static/chimg/chblj12.png" },
						],
				  products1: [
					{ id: 13, name: "CHLZ001", image: "/static/chimg/chlz01.png" },
					{ id: 14, name: "CHLZ002", image: "/static/chimg/chlz02.png" },
					{ id: 15, name: "CHLZ003", image: "/static/chimg/chlz03.png" },
					{ id: 16, name: "CHLZ004", image: "/static/chimg/chlz04.png" },
					{ id: 17, name: "CHLZ005", image: "/static/chimg/chlz05.png" },
					{ id: 18, name: "CHLZ006", image: "/static/chimg/chlz06.png" },
					{ id: 19, name: "CHLZ007", image: "/static/chimg/chlz07.png" },
					{ id: 20, name: "CHLZ008", image: "/static/chimg/chlz08.png" },
					{ id: 21, name: "CHLZ009", image: "/static/chimg/chlz11.jpg" },
					{ id: 22, name: "CHLZ010", image: "/static/chimg/chlz12.jpg" },
						],
				  products2: [
					{ id: 23, name: "CHTLM001", image: "/static/chimg/chtlm01.jpg" },
					{ id: 24, name: "CHTLM002", image: "/static/chimg/chtlm02.jpg" },
					{ id: 25, name: "CHTLM003", image: "/static/chimg/chtlm03.jpg" },
					{ id: 26, name: "CHTLM004", image: "/static/chimg/chtlm04.jpg" },
					{ id: 27, name: "CHTLM005", image: "/static/chimg/chtlm05.jpg" },
					{ id: 28, name: "CHTLM006", image: "/static/chimg/chtlm06.jpg" },
					{ id: 29, name: "CHTLM007", image: "/static/chimg/chtlm07.jpg" },
					{ id: 30, name: "CHTLM008", image: "/static/chimg/chtlm08.jpg" },
					{ id: 31, name: "CHTLM009", image: "/static/chimg/chtlm09.jpg"  },
				
						],
			  };
		  },
		  onLoad(options) {
		  	  const value = options.value; // 这里的 value 应该是 "0" 或 "1"（因为 URL 中的参数是字符串）
		  	  const numValue = parseInt(value); // 转换为数字类型
		  	  // 根据 numValue 进行语言切换等操作
		  	  if (numValue === 0) {
		  		// 简体中文逻辑
		  		this.value = 0; 
		  	  } else if (numValue === 1) {
		  		// English 逻辑
		  		this.value = 1; 
		  	  }
		  },
		  methods: {
		    goHomepage(value) {
		      uni.navigateTo({ url: `/pages/index/index?value=${value}`
			  });
		    },
		    goProduct(value) {
		      uni.navigateTo({ url: `/pages/product/product?value=${value}`
			  });
		    },
			goRegarding(value) {
			  uni.navigateTo({ url: `/pages/regarding/regarding?value=${value}`
			  });
			},
			goProject(value) {
			  uni.navigateTo({ url: `/pages/Project/Project?value=${value}`
			  });
			},
			goNews(value) {
			  uni.navigateTo({ url: `/pages/News/News?value=${value}`
			  });
			},
			goTutorial(value) {
			  uni.navigateTo({ url: `/pages/Tutorial/Tutorial?value=${value}`
			  });
			},
			goDownload(value) {
			  uni.navigateTo({ url: `/pages/Download/Download?value=${value}`
			  });
			},
			goContact(value) {
			  uni.navigateTo({ url: `/pages/Contact/Contact?value=${value}`
			  });
			},
			goQuestion(value) {
			  uni.navigateTo({ url: `/pages/Question/Question?value=${value}`
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
								title: "Has returned to the top of the page."
							})
						},
			goToProduct(id) {
			  uni.navigateTo({
				url: `/pages/product/1?id=${id}`
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
		  padding-top:56.25%;
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
		height: 700px;
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
		object-fit: cover;
	}
	.nrla2-1-btt image{
		height:100%;
		width: 48%;
		object-fit: cover;
	}
	.nrla2-1-zuo video{
		width: 270px;
		height: 480px;
	}
	
	.nrlb{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 1050px;
		background-color: #f0f0f0;
	}
	.nrlb2{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 1050px;
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
		height: 80%;
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
		margin-left: 10px;
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
		margin-right: 10px;
		margin-left: 10px;
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
		width: 280px;
		border-radius: 18px;
		display: flex;
		flex-direction:column;
		align-items: center;
		border:2.5px solid #a8a8a8;
	}
	.xhbox-1 image{
		width: 280px;
		height: 360px;
		border-radius: 18px 18px 0 0; 
	}
	.xhbox-1 text{
		width: 280px;
		height: 40px;
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