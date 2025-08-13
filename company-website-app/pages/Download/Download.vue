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
		  components: {
			PhoneIcon,
			Email,
			Search,
		  },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
/* 	导航栏样式 */
	.dhl{
		width: 70%;
		height: 220rpx;
		display: flex;
		flex-direction: row;
		padding-left: 15%;
		background-color: #ffffff;
	}
	
	.zuo{
		display:flex;
		width:35%;
		height:220rpx;
		align-items: center;/* 垂直居中 */
		justify-content: center;/* 水平居中 */
	}
	.you{
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width:75%;
		height:220rpx;
		
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
</style>
