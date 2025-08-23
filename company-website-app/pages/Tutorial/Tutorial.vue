<template>
	<view>
		<view class="dhl"><!-- 顶部导航栏 -->
			<view class="zuo">
				<image src="/static/logo橙.png"></image>
			</view>
			<view class="you">
				<view @click="Homepage" class="zzz">主页</view>
				<view @click="goRegarding" class="zzzr">关于</view>
				<view @click="goProduct" class="zzzr">产品</view>
				<view @click="goProject" class="zzzr">项目</view>
				<view @click="goNews" class="zzzr">新闻</view>
				<view @click="goTutorial" class="zzzr">教程</view>
				<view @click="goDownload" class="zzzr">下载</view>
				<view @click="goNews" class="zzzr"><Search ></Search></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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

</style>
