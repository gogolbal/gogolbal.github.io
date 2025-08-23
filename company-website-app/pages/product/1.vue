<template>
	<view style="display: flex; align-items: center; flex-direction: column;">
		<view class="zhu">
			
			<view class="zhu01">
				<scroll-view class="ucrovi" :scroll-top="scrollTop" scroll-y="true" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
					<image :src="pageContent.img" mode="widthFix" ></image>
				</scroll-view>

				<view class="biaot">
					<text class="bt01">价格：{{pageContent.Price}}</text>
					<text class="bt02">产品编码：{{pageContent.title}}</text>
					<text class="bt03">材质：{{pageContent.Material}}</text>
					<text class="bt03">规格：{{pageContent.Specification}}</text>
					<text class="bt03">样式：{{pageContent.Style}}</text>
					<text class="bt03">最小起订量：{{pageContent.Minimum}}</text>
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
				pageContent: {
						img: '',
						Price: '',
						title: '',
						Material:'',
						Specification: '',
						Style: '',
						Minimum: '',
				      // 其他需要展示的内容字段
				    }
				
			}
		},
		onLoad(options) {
			  // 获取传递过来的id
			    const id = options.id;
			    // 调用方法根据id设置内容
			    this.setContentByid(id);
		},
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
			  setContentByid(id) {
				// 方式1：if-else判断
				if (id === '1') {
				  this.pageContent = {
					img: '/static/chimg/chblj01.jpg',
					Price: '￥50/个',
					title: 'CHYBLJ001',
					Material:'SS304',
					Specification: '高度：160mm；重量：1000g',
					Style: '镜光',
					Minimum: '100个',
				  };
				} else if (id === '2') {
				  this.pageContent = {
					img: '/static/chimg/chblj02.jpg',
					Price: '￥44/个',
					title: 'CHYBLJ002',
					Material:'SS304',
					Specification: '高度：160mm；重量：1000g',
					Style: '哑黑',
					Minimum: '100个',
				  };
				} else if (id === '3') {
				  this.pageContent = {
					img: '/static/chimg/chblj03.jpg',
					Price: '￥43/个',
					title: 'CHYBLJ003',
					Material:'SS304',
					Specification: '高度：160mm；重量：1000g',
					Style: '拉丝',
					Minimum: '100个',
				  };
				} else if (id === '4') {
				  this.pageContent = {
					img: '/static/chimg/chblj04.jpg',
					Price: '￥44/个',
					title: 'CHYBLJ004',
					Material:'SS304',
					Specification: '高度：160mm；重量：800g',
					Style: '镜光',
					Minimum: '100个',
				  };
				} else if (id === '5') {
				  this.pageContent = {
					img: '/static/chimg/chblj05.jpg',
					Price: '￥38/个',
					title: 'CHYBLJ005',
					Material:'SS304',
					Specification: '高度：160mm；重量：800g',
					Style: '哑黑',
					Minimum: '100个',
				  };
				} else if (id === '6') {
				  this.pageContent = {
					img: '/static/chimg/chblj06.jpg',
					Price: '￥37/个',
					title: 'CHYBLJ006',
					Material:'SS304',
					Specification: '高度：160mm；重量：800g',
					Style: '拉丝',
					Minimum: '100个',
				  };
				} else if (id === '7') {
				  this.pageContent = {
					img: '/static/chimg/chblj07.png',
					Price: '￥54/个',
					title: 'CHYBLJ007',
					Material:'SS304',
					Specification: '高度：160mm；重量：1800g',
					Style: '拉丝',
					Minimum: '100个',
				  };
				} else if (id === '8') {
				  this.pageContent = {
					img: '/static/chimg/chblj08.jpg',
					Price: '￥52/个',
					title: 'CHYBLJ008',
					Material:'SS304',
					Specification: '高度：160mm；重量：1800g',
					Style: '黑色',
					Minimum: '100个',
				  };
				} else if (id === '9') {
				  this.pageContent = {
					img: '/static/chimg/chblj09.jpg',
					Price: '￥33/个',
					title: 'CHYBLJ009',
					Material:'SS304',
					Specification: '高度：160mm；重量：890g',
					Style: '黑色',
					Minimum: '100个',
				  };
				  } else if (id === '10') {
				    this.pageContent = {
				  	img: '/static/chimg/chblj10.jpg',
				  	Price: '￥35/个',
				  	title: 'CHYBLJ010',
				  	Material:'SS304',
				  	Specification: '高度：200mm；重量：1000g',
				  	Style: '黑色',
				  	Minimum: '100个',
				    };
				} else if (id === '11') {
				  this.pageContent = {
					img: '/static/chimg/chblj11.png',
					Price: '￥3.2/个',
					title: 'CHYBLJ011',
					Material:'SS304',
					
					Style: '银色',
					Minimum: '100个',
				  };
				  } else if (id === '12') {
				    this.pageContent = {
				  	img: '/static/chimg/chblj12.png',
				  	Price: '￥4.2/个',
				  	title: 'CHYBLJ012',
				  	Material:'SS304',
				  	
				  	Style: '黑色',
				  	Minimum: '100个',
				    };
				  } else if (id === '13') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz01.png',
				  	Price: '￥251/根',
				  	title: 'CHLZ001',
				  	Material:'SS304+MS',
				  	Specification: '90*1200mm',
				  	Style: '黄色',
				  	Minimum: '100根',
				    };
				  } else if (id === '14') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz02.png',
				  	Price: '￥140/根',
				  	title: 'CHLZ002',
				  	Material:'SS304+PC',
				  	Specification: '90*1200mm',
				  	Style: '黄色',
				  	Minimum: '100根',
				    };
				  } else if (id === '15') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz03.png',
				  	Price: '￥103/根',
				  	title: 'CHLZ003',
				  	Material:'SS304+MS',
				  	Specification: '90*1200mm',
				  	Style: '白色',
				  	Minimum: '100根',
				    };
				  } else if (id === '16') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz04.png',
				  	Price: '￥169/根',
				  	title: 'CHLZ004',
				  	Material:'SS316+MS',
				  	Specification: '90*1200mm',
				  	Style: '白色',
				  	Minimum: '100根',
				    };
				  } else if (id === '17') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz05.png',
				  	Price: '￥123/根',
				  	title: 'CHLZ001',
				  	Material:'SS304+MS',
				  	Specification: '100*850mm',
				  	Style: '白色',
				  	Minimum: '100根',
				    };
				  } else if (id === '18') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz06.png',
				  	Price: '￥189/根',
				  	title: 'CHLZ006',
				  	Material:'SS316+MS',
				  	Specification: '100*850mm',
				  	Style: '黄色',
				  	Minimum: '100根',
				    };
				  } else if (id === '19') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz07.png',
				  	Price: '￥111/根',
				  	title: 'CHLZ007',
				  	Material:'SS304+MS',
				  	Specification: '90*1200mm',
				  	Style: '白色',
				  	Minimum: '100根',
				    };
				  } else if (id === '20') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz08.png',
				  	Price: '￥117/根',
				  	title: 'CHLZ008',
				  	Material:'SS316+MS',
				  	Specification: '90*1200mm',
				  	Style: '黄色',
				  	Minimum: '100根',
				    };
				  } else if (id === '21') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz11.jpg',
				  	Price: '￥300/根',
				  	title: 'CHLZ009',
				  	Material:'SS304',
				  	Specification: '',
				  	Style: '拉丝',
				  	Minimum: '100根',
				    };
				  } else if (id === '22') {
				    this.pageContent = {
				  	img: '/static/chimg/chlz12.jpg',
				  	Price: '￥75/根',
				  	title: 'CHLZ010',
				  	Material:'SS304',
				  	Specification: '',
				  	Style: '镜光',
				  	Minimum: '100根',
				    };
				  } else if (id === '23') {
				    this.pageContent = {
				  	img: '/static/chimg/chtlm01.jpg',
				  	Price: '￥235/套',
				  	title: ' CHTLM001',
				  	Material:'SS304',
				  	Style: '钛金镜面',
				  	Minimum: '100套',
				    };
				} else if (id === '24') {
				  this.pageContent = {
					img: '/static/chimg/chtlm02.jpg',
					Price: '￥190/套',
					title: 'CHTLM002',
					Material:'SS304',
					Style: '亮光',
					Minimum: '100套',
				  };
				} else if (id === '25') {
				  this.pageContent = {
					img: '/static/chimg/chtlm03.jpg',
					Price: '￥180/套',
					title: 'CHTLM003',
					Material:'SS304',
					Style: '黑色',
					Minimum: '100套',
				  };
				} else if (id === '26') {
				  this.pageContent = {
					img: '/static/chimg/chtlm04.jpg',
					Price: '￥170/套',
					title: 'CHTLM004',
					Material:'SS304',
					Style: '拉丝',
					Minimum: '100套',
				  };
				} else if (id === '27') {
				  this.pageContent = {
					img: '/static/chimg/chtlm05.jpg',
					Price: '￥95/套',
					title: 'CHTLM005',
					Material:'SS304',
					Style: '亮光',
					Minimum: '100套',
				  };
				} else if (id === '28') {
				  this.pageContent = {
					img: '/static/chimg/chtlm06.jpg',
					Price: '￥95/套',
					title: 'CHTLM006',
					Material:'SS304',
					Style: '钛金镜面',
					Minimum: '100套',
				  };
				} else if (id === '29') {
				  this.pageContent = {
					img: '/static/chimg/chtlm07.jpg',
					Price: '￥95/套',
					title: 'CHTLM007',
					Material:'SS304',
					Style: '黑色',
					Minimum: '100套',
				  };
				  } else if (id === '30') {
				    this.pageContent = {
					img: '/static/chimg/chtlm08.jpg',
					Price: '￥95/套',
					title: 'CHTLM008',
					Material:'SS304',
					Style: '拉丝',
					Minimum: '100套',
				    };
				} else if (id === '31') {
				  this.pageContent = {
					img: '/static/chimg/chtlm09.jpg',
					Price: '￥490/套',
					title: 'CHTLM009',
					Material:'SS304',
					Specification: '大小：131*26*16CM；重量：19kg',
					Style: '镜面',
					Minimum: '100套',
				  };
				}else {
				  // 默认内容
				  this.pageContent = {
				  	img: '/static/chimg/chblj01.jpg',
				  	Price: '￥50/个',
				  	title: 'CHYBLJ001',
				  	Material:'SS304',
				  	Specification: '高度：160mm；重量：1000g',
				  	Style: '镜光',
				  	Minimum: '100个',
				  };
				}
				}

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
		width: 500px;
		background-color: #f0f0f0;
		
	}
	.zhu01 image{
		width: 100%;
		
	}
	.ucrovi{
		height: 600px;
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
		height: 240px;
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