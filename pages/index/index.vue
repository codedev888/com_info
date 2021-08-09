<template>
	<view class="">
		<view :class="['top',{topOn:isSticky}]">
			<view class="sticky">
				罗i企
			</view>
		</view>
		<u-swiper :list="banner" height="380" :autoplay="false"></u-swiper>
		<view class="choose">
			<view class="con">
				<u-grid :col="3" :border="false" @click="girdClick" hover-class="girdOn">
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx'}">
						<u-image width="72rpx" height="72rpx" src="/static/index/a1.png"></u-image>
						<view class="grid-text">新鲜资讯</view>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx'}">
						<u-image width="72rpx" height="72rpx" src="/static/index/a2.png"></u-image>
						<view class="grid-text">通知公告</view>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx'}">
						<u-image width="72rpx" height="72rpx" src="/static/index/a3.png"></u-image>
						<view class="grid-text">诉求心声</view>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx'}">
						<navigator url="/pages/index/cyzcList" hover-class="">
						<u-image width="72rpx" height="72rpx" src="/static/index/a4.png"></u-image>
						<view class="grid-text">找政策</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx'}">
						<u-image width="72rpx" height="72rpx" src="/static/index/a5.png"></u-image>
						<view class="grid-text">找空间</view>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx'}">
						<u-image width="72rpx" height="72rpx" src="/static/index/a6.png"></u-image>
						<view class="grid-text">找服务</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<view class="notice">
			<u-swiper :list="notice" height="220" :title="true" mode="none"></u-swiper>
		</view>
		<view class="date">
			<i-title title="政策日历">
				<text class="title">• 本周截止<text class="blue">23</text>个</text>
			</i-title>
			<view class="info">
				<view class="left u-line-1">
					项目项目项目项目项目项目项目项目项目项目
				</view>
				<view class="right u-text-right">
					<text class="a">9天截止</text><text class="b">热度92</text>
				</view>
			</view>
			<view class="con">
				<view class="item" style="background-image: url(../../static/index/b1.png);">
					<text>保障房政策</text>
				</view>
				<view class="item" style="background-image: url(../../static/index/b2.png);">
					<text>人才扶持政策</text>
				</view>
				<view class="item" style="background-image: url(../../static/index/b3.png);">
					<text>房产转型扶持</text>
				</view>
				<view class="item" style="background-image: url(../../static/index/b4.png);">
					<text>政策计算器</text>
				</view>
			</view>
		</view>
		<view class="news">
			<i-title title="企业动态"></i-title>
			<view class="con">
				<view class="item" v-for="item in 3" :key="item">
					<view class="left">
						<u-image border-radius="10" width="100rpx" height="100rpx" src="/static/index/d1.png"></u-image>
					</view>
					<view class="right">
						<view class="a">
							<text class="u-line-1">高级珠宝定制20000｜次</text>
							<text class="u-text-right">6小时前</text>
						</view>
						<view class="b u-line-1">诉求反馈已评</view>
					</view>
				</view>
			</view>
		</view>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSticky: false,
				banner: [{
						image: '/static/index/banner01.png',
						title: ''
					}
				],
				notice: [],
				news:[],
			};
		},
		components: {

		},
		methods: {
/* 			getHome(){
				this.$u.api.indexAPi.getHome().then(res=>{
					console.log(res)
					this.notice = res.data.carousels.map(el=>{
						return {
							image:el.coverImg,
							title:el.informationTitle,
							id:el.informationId
						}
					})
					this.news = []
				}).catch(err=>{
					console.log(err)
				})
			}, */
			girdClick(index) {
				console.log(index)
			}
		},
		onPageScroll: function(Object) {
			if (Object.scrollTop > uni.upx2px(360)) {
				this.isSticky = true
			} else {
				this.isSticky = false
			}
		},
		onLoad() {
			//this.getHome()
			//console.log(uni.upx2px(360))
			//this.$u.vuex('vuex_user.name', '诗圣');
			//console.log(this.$u.checkMobile("18052728537"))
		}
	};
</script>
<style lang="scss" scoped>
	.top {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 960;
		transition: all 0.3s ease-out 0s;

		&.topOn {
			background-color: #007aff;
			background-image: linear-gradient(45deg, #007aff, #39b9fe);
			;
			position: fixed;
		}

		.sticky {
			font-size: 36rpx;
			color: #fdfffe;
			text-align: center;
			height: 88rpx;
			line-height: 88rpx;

		}
	}

	.choose {
		padding: 0 28rpx 28rpx;
		background-color: #fff;

		.con {
			margin-top: -40rpx;
			background-color: #fff;
			padding: 0 0 10rpx;
			overflow: hidden;
			border-radius: 8rpx;
			z-index: 951;
			box-shadow: 0 3px 4px rgba(26, 26, 26, 0.2);

			.grid-text {
				font-size: 24rpx;
				color: #353535;
			}

			.girdOn {
				.grid-text {
					color: #007aff;
				}

			}
		}

	}

	.notice {
		padding: 0 28rpx 28rpx;
		background-color: #fff;
	}

	.date {
		margin-top: 30rpx;
		background-color: #fff;
		padding: 14rpx 28rpx;

		.title {
			font-size: 24rpx;
			color: #333;

			.blue {
				color: #5e83fe;
				padding: 0 10rpx;
			}
		}

		.info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #F7F7F7;
			border-radius: 6rpx;
			height: 80rpx;
			padding: 0 24rpx;

			.left {
				color: #333;
				font-size: 28rpx;
				flex: 1;
			}

			.right {
				width: 320rpx;

				text {
					padding-left: 30rpx;
				}

				.a {
					background: url(../../static/index/c1.png) no-repeat left center/24rpx;
				}

				.b {
					background: url(../../static/index/c2.png) no-repeat left center/24rpx;
					margin-left: 6rpx;
				}
			}
		}

		.con {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 20rpx 0 10rpx;

			.item {
				width: 50%;
				height: 128rpx;
				display: flex;
				align-items: center;
				font-size: 30rpx;
				color: #333;
				padding: 0 28rpx;
				line-height: 40rpx;
				background-position:center ;
				background-size: cover;
				background-repeat:no-repeat ;
			}
		}
	}

	.news {
		margin-top: 30rpx;
		margin-bottom: 20rpx;
		background-color: #fff;
		padding: 14rpx 28rpx 8rpx;

		.con {
			margin-top: 10rpx;

			.item {
				display: flex;
				justify-content: space-between;
				margin-bottom: 32rpx;

				.left {
					width: 120rpx;
				}

				.right {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.a {
						display: flex;
						justify-content: space-between;
						line-height: 40rpx;

						text:nth-child(1) {
							font-size: 30rpx;
							color: #333;
						}

						text:nth-child(2) {
							font-size: 28rpx;
							color: #999;
						}
					}

					.b {
						line-height: 40rpx;
						font-size: 28rpx;
						color: #999;
					}
				}
			}
		}
	}
</style>
