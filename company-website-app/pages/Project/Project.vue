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
		<uni-card is-full>
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>

		<uni-section title="实心标签" type="line">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="current === 0"><text class="content-text">选项卡1的内容</text></view>
				<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
				<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
			</view>
		</uni-section>

		<uni-section title="Style" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list" @change="styleChange">
				<view v-for="(item, index) in styles" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</view>
		<uni-section title="Color" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list" @change="colorChange">
				<view v-for="(item, index) in colors" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<view :style="{ backgroundColor: item }" class="color-tag" />
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item" :checked="index === colorIndex" />
						</view>
					</view>
				</view>
			</radio-group>
		</view>
	</view>
</template>


<script>
	export default {
		components: {},
		data() {
			return {
				items: ['选项卡1', '选项卡2', '选项卡3'],
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'button'
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			}
		}
	}
</script>



<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 30px;
	}

	.content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: 150px;
		text-align: center;
	}

	.content-text {
		font-size: 14px;
		color: #666;
	}

	.color-tag {
		width: 25px;
		height: 25px;
	}

	.uni-list {
		flex: 1;
	}

	.uni-list-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		background-color: #FFFFFF;
	}


	.uni-list-item__container {
		padding: 12px 15px;
		width: 100%;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
	}

	.uni-list-item__content-title {
		font-size: 14px;
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
</style>


