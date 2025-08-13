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
			
		}
	}
</script>

<style>

</style>
