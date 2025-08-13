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
					<view @click="goHomepage" class="zzzr">主页</view>
					<view @click="goRegarding" class="zzz">关于</view>
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
					<view @click="goHomepage" class="zzzr2">Home</view>
					<view @click="goRegarding" class="zzz2">About Us</view>
					<view @click="goProduct" class="zzzr2">Products</view>
					<view @click="goProject" class="zzzr2">Project</view>
					<view @click="goNews" class="zzzr2">News</view>
					<view @click="goTutorial" class="zzzr2">Tutorial</view>
					<view @click="goDownload" class="zzzr2">Download</view>
				</view>
			</view>
			<view class="zsl" v-if="value === 0"><!-- 页面指示栏中文 -->
				<view class="zsls">
					<text title="关于我们">关于我们</text>
				</view>
				<view class="zslx">
					<text class="zslxz" title="首页" @click="goHomepage">首页</text>
					<text class="zslxzj">>></text>
					<text class="zslxy" title="关于我们">关于我们</text>
				</view>
			</view>
			<view class="zsl" v-else><!-- 页面指示栏英文 -->
				<view class="zsls">
					<text title="About Us">About Us</text>
				</view>
				<view class="zslx">
					<text class="zslxz" title="Home" @click="goHomepage">Home</text>
					<text class="zslxzj">>></text>
					<text class="zslxy" title="About Us">About Us</text>
				</view>
			</view>
			<view class="bnrll"><!-- 内容栏 -->
				<view class="nrll">
					<view class="nrll-1">
						<image class="img2" src="/static/微信图片_20250528145508.jpg"></image>
					</view>
					<view class="nrll-2" v-if="value === 0">
						<text class="nrll-2-3">佛山市出海科技有限公司</text>
						<text class="nrll-2-2">我们工厂在制造种类繁多的楼梯配件以及时尚、精致的玻璃栏杆方面拥有专业优势。我们的业务不断拓展，遍及各大洲，包括欧洲、美洲、东南亚、中东以及全球众多重要市场。如今，我们已成为当代楼梯和栏杆的卓越且值得信赖的全球供应商，以我们对卓越和创新的坚定承诺而闻名。
我们从可靠的中国供应商处精心采购所有原材料，确保从开始到交付都符合最高质量标准。借助强大的本地生产能力，我们将人类艺术的永恒优雅与前沿技术的精确性和效率完美融合。这种和谐的结合不仅提升了我们产品的美学吸引力，还实现了前所未有的个性化定制水平。因此，设计一个令人惊叹的、定制化的楼梯或栏杆系统，以符合您独特的愿景，从未如此简单或容易实现。
						</text>
					</view>
					<view class="nrll-2" v-else>
						<text class="nrll-2-1">Foshan Go Global Technology Co., Ltd.</text>
						<text class="nrll-2-2">Our factory has professional advantages in manufacturing a wide variety of staircase accessories and stylish, exquisite glass railings. Our business is constantly expanding and covers all continents, including Europe, America, Southeast Asia, the Middle East, and many important markets around the world. Today, we have become an outstanding and reliable global supplier of contemporary stairs and railings, renowned for our firm commitment to excellence and innovation.
We carefully source all raw materials from reliable Chinese suppliers to ensure that they meet the highest quality standards from start to finish. With strong local production capabilities, we seamlessly integrate the eternal elegance of human art with the precision and efficiency of cutting-edge technology. This harmonious combination not only enhances the aesthetic appeal of our products but also achieves unprecedented levels of personalized customization. Therefore, designing an astonishing, customized staircase or railing system to meet your unique vision has never been so simple or easy to achieve.</text>	
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
		data() {
			return {
				value: 1,
				localdata: [
					{ value: 0, text: "简体中文"},
					{ value: 1, text: "English" }
						],
			}
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
/* 	内容栏 */
	.bnrll{
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: start;
		margin-bottom: 20px;
	}
	.nrll{
		flex-wrap: wrap;
		display: flex;
		width: 70%;
		align-items: center;
		justify-content: space-evenly;
	
	}
	.img2{
		width: 400px;
		height: 400px;
		object-fit: cover;
		margin-right: 20px;
		margin-top: 20px;
	}
	.nrll-1{
	
	}
	.nrll-2{
		
		width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
	}
	.nrll-2-1{
	margin-top: 12px;
	margin-bottom: 12px;
	color: #ffaa00;
	font-size: 27px;
	font-weight: 500;
	}
	.nrll-2-2{
	font-size: 20px;
	font-weight: 500;
	color: #616161;
	height: 400px;
overflow-x: hidden; /* 隐藏横向滚动条 */
overflow-y: auto; /* 内容超出时自动显示纵向滚动条 */
	}
	.nrll-2-3{
	margin-bottom: 12px;
	color: #ffaa00;
	font-size: 27px;
	font-weight: 500;
	margin-top: 20px;
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
