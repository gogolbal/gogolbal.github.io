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
					<view @click="goHomepage(0)" class="zzzr">主页</view>
					<view @click="goRegarding(0)" class="zzzr">关于</view>
					<view @click="goProduct(0)" class="zzzr">产品</view>
					<view @click="goProject(0)" class="zzzr">项目</view>
					<view @click="goNews(0)" class="zzz">新闻</view>
					<view @click="goTutorial(0)" class="zzzr">教程</view>
					<view @click="goDownload(0)" class="zzzr">下载</view>
				</view>
			</view>
			<view class="dhl" v-else><!-- 顶部导航栏 -->
				<view class="zuo2">
					<image src="/static/logo橙.png"></image>
				</view>
				<view class="you2">
					<view @click="goHomepage(1)" class="zzzr2">Home</view>
					<view @click="goRegarding(1)" class="zzzr2">About Us</view>
					<view @click="goProduct(1)" class="zzzr2">Products</view>
					<view @click="goProject(1)" class="zzzr2">Project</view>
					<view @click="goNews(1)" class="zzz2">News</view>
					<view @click="goTutorial(1)" class="zzzr2">Tutorial</view>
					<view @click="goDownload(1)" class="zzzr2">Download</view>
				</view>
			</view>
			<view class="zsl" v-if="value === 0"><!-- 页面指示栏中文 -->
				<view class="zsls">
					<text title="新闻">新闻</text>
				</view>
				<view class="zslx">
					<text class="zslxz" title="首页" @click="goHomepage">首页</text>
					<text class="zslxzj">>></text>
					<text class="zslxy" title="新闻">新闻</text>
				</view>
			</view>
			<view class="zsl" v-else><!-- 页面指示栏英文 -->
				<view class="zsls">
					<text title="News">News</text>
				</view>
				<view class="zslx">
					<text class="zslxz" title="Home" @click="goHomepage">Home</text>
					<text class="zslxzj">>></text>
					<text class="zslxy" title="News">News</text>
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
		data() {
			return {
				value: 1,
				localdata: [
					{ value: 0, text: "简体中文"},
					{ value: 1, text: "English" }
						],
			}
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
		}
	}
</script>


<style>
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
/* 	指示栏 */
	.zsl{
		width: 100%;
		height: 165px;
		background-color: #fff7e5;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.zsls{
		margin-top: 30px;
		font-size: 40px;
		font-weight: 600;
		color: #ffaa00;
	}
	.zslx{
		margin-top: 7px;
	}
	.zslxz:hover{
		margin-top: 7px;
		cursor: pointer;/* 鼠标移入变手 */
		color: #ffaa00; 
		
	}
	.zslxz{
		margin-right: 5px;
	}
	.zslxy{
		margin-left: 5px;
		color: #ffaa00;
		font-weight: 500;
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
