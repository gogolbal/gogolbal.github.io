<template>
	<view style="display: flex; align-items: center; flex-direction: column;">
		<view class="zhu">
			
			<view class="zhu01">
				<image src="/static/1.jpg" mode="widthFix" ></image>
				<view class="biaot">
					<text class="bt01">价格：￥100/个</text>
					<text class="bt02">名称：黑色玻璃夹不锈钢304</text>
					<text class="bt03">信息信息信息信息信息</text>
				</view>
				<view class="zhu02">
					<uni-goods-nav :fill="true" :options="options" :button-group="customButtonGroup" @click="onClick"
						@buttonClick="buttonClick" />
				</view>
			</view>


		</view>
	</view>


				
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				options: [{
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				customButtonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
						color: '#fff'
					}
				],
				
			}
		},
		onLoad() {},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},

		}
	}
</script>

<style scoped>
	.zhu{
		display: flex;
		align-items: center;
		flex-direction:column;
		flex-wrap: wrap; /* 超出自动换行 */
		border: 3px solid #7a7679;
	}
	.zhu01{
		display: flex;
		align-items: center;
		flex-direction:column;
		padding-bottom: 20px;
		width: 600px;
		background-color: #f0f0f0;
		
	}
	.zhu01 image{
		width: 100%;
		
	}
	.zhu02{
		width: 100%;
		
	}
	
	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
	.biaot{
		/* padding-left: 30px; */
		display: flex;
		flex-direction:column;
		width: 100%;
		height: 260px;
		background-color: #ffffff;
		margin-bottom: 10px;
	}
	.bt01{
		margin-left: 20px;
		margin-top: 5px;
		font-size: 30px;
		font-weight: 600;
		color: #ffaa00;
	}
	.bt02{
		margin-left: 20px;
		margin-top: 5px;
		font-size: 26px;
		font-weight: 600;
		color: #000000;
	}
	.bt03{
		margin-left: 20px;
		margin-top: 5px;
		font-size: 20px;
		font-weight: 400;
		color: #7a7679;
	}
</style>