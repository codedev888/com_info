<template>
	<view class="main">
		<nav-bar :isBack="true">
			<u-icon :name="icon" color="#666" size="48" @click="handle"></u-icon>
		</nav-bar>
		<view class="section01">
			<view class="con pad28">
				<view class="title">
					罗湖区产业转型升级专项资金科技创新实施细
				</view>
				<view class="p">
					<text>主管部门： </text>龙华区科技创新局
				</view>
				<view class="p">
					<text>发布地区： </text>龙华区
				</view>
			</view>

			<u-line color="#e8e8e8"></u-line>
			<view class="gz pad28">
				<view class="left">
					<text>关键词1</text><text>关键词2</text>
				</view>
				<view class="right">
					<u-icon name="star" color="#666" size="40"></u-icon>12
					<u-icon name="eye" color="#666" size="40"></u-icon>200
				</view>

			</view>
		</view>
		<view class="tabs">
			<view class="tabs-t u-border-bottom" style="padding: 0 100rpx; background-color: #fff;">
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
					swiperWidth="750" :active-item-style="{fontSize:'28rpx',color:'#333'}" inactive-color="#999"
					height="100" :bar-style="{bottom:'10px',backgroundColor:'#627BF8'}"></u-tabs-swiper>
			</view>
			<swiper class="tabs_s" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;background-color: #fff;">
						<view class="swiper-item-style pad28 u-border-bottom">
							<i-title title="申报内容"></i-title>
							<view class="con">
								对纳入算费、验、网疫情防控五十金障册第任奖图新内册第、变疫情影响严五图位强册第，年提银丙当码融二构经增贷款（六期视同经增），按其实际支付错升图90L，日号贴收最总200进规图再升来术；者合我新为作担金二构集用担金委生图担金手续下，按其实际支付担金手续下图90L，日号以贴收最总10进规图再金来术。
							</view>
						</view>
						<view class="swiper-item-style pad28 u-border-bottom">
							<i-title title="申报信息"></i-title>
							<view class="step">
								<view class="p">
									<text class="t">申报方式</text>
									<view class="a">
										线上申报
									</view>
									<view class="a">
										立即申报>>
									</view>
								</view>
								<view class="p">
									<text class="t">申报状态</text><text style="color: #FA9F6E;">申报中</text>
								</view>
								<view class="p">
									<text class="t">申报期限</text>2020-12-01 ~ 2020-12-31
								</view>
							</view>
						</view>
						<view class="swiper-item-style pad28 u-border-bottom">
							<i-title title="申报信息"></i-title>
							<u-empty text="暂未公布申报信息" mode="order"></u-empty>
						</view>
						<view class="swiper-item-style pad28 u-border-bottom">
							<i-title title="申报条件"></i-title>
							<view class="con">
								对纳入算费、验、网疫情防控五十金障册第任奖图新内册第、变疫情影响严五图位强册第，年提银丙当码融二构经增贷款（六期视同经增），按其实际支付错升图90L，日号贴收最总200进规图再升来术；者合我新为作担金二构集用担金委生图担金手续下，按其实际支付担金手续下图90L，日号以贴收最总10进规图再金来术。
							</view>
							<view class="btn">
								<u-button>名称匹配</u-button>
								<u-button type="primary">条件测评</u-button>
							</view>
						</view>
						<view class="swiper-item-style pad28 u-border-bottom">
							<i-title title="申报流程"></i-title>
							<view class="con">
								对纳入算费、验、网疫情防控五十金障册第任奖图新内册第、变疫情影响严五图位强册第，年提银丙当码融二构经增贷款（六期视同经增），按其实际支付错升图90L，日号贴收最总200进规图再升来术；者合我新为作担金二构集用担金委生图担金手续下，按其实际支付担金手续下图90L，日号以贴收最总10进规图再金来术。
							</view>
						</view>
						<view class="swiper-item-style pad28 u-border-bottom">
							<i-title title="申报资料"></i-title>
							<view class="con">
								资料描述内容。资料描述内容。资料描述内容。资料描述内容。资料描述内容。
							</view>
							<view class="down">
								<view class="p">
									<u-image width="32rpx" height="38rpx" src="/static/index/cyzc/other/down.png"></u-image>资料文件下载.pdf
								</view>
								<view class="p">
									<u-image width="32rpx" height="38rpx" src="/static/index/cyzc/other/down.png"></u-image>资料文件下载显示资料名称.pdf
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;background-color: #fff;"
						@scrolltolower="onreachBottom">
						<view class="list2">
							<view class="item pad28 u-border-bottom" v-for="it in 10">
								<view class="h33 u-line-1">罗湖区产业转型升级专项资金科技创新实施细</view>
								<view class="con">
									<view class="info">
										<view class="h44 u-line-1">发布部门：罗湖区发展和改革局展和改革局展和改展和改革局</view>
										<view class="h44">发布日期：2020-09-31</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;background-color: #fff;"
						@scrolltolower="onreachBottom">
						<view class="list2">
							<view class="item pad28 u-border-bottom" v-for="it in 10">
								<view class="h33 u-line-1">罗湖区产业转型升级专项资金科技创新实施细</view>
								<view class="con">
									<view class="info">
										<view class="h44 u-line-1">发布部门：罗湖区发展和改革局展和改革局展和改展和改革局</view>
										<view class="h44">发布日期：2020-09-31</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {},
		props: {},
		data() {
			return {
				icon: "star", //star-fill
				list: [{
					name: '项目详情'
				}, {
					name: '政策依据'
				}, {
					name: '相关资讯'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			}
		},
		watch: {},
		computed: {},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			onreachBottom() {
				console.log(1)
			}
		},
		onShow() {},
		onHide() {},
		onLaunch() {}
	}
</script>
<style lang="scss" scoped>
	.section01 {
		background-color: #fff;

		.con {
			.title {
				color: #333;
				font-size: 30rpx;
				line-height: 40rpx;
				margin-bottom: 10rpx;
			}

			.p {
				color: #666;
				font-size: 28rpx;
				line-height: 50rpx;
			}

		}

		.gz {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 28rpx;

			.left {
				text {
					display: inline-block;
					background-color: #eef1ff;
					font-size: 24rpx;
					color: #5D7BFF;
					height: 40rpx;
					line-height: 40rpx;
					border-radius: 4rpx;
					padding: 0 20rpx;
					margin-right: 10rpx;
					margin-bottom: 10rpx;
				}
			}

			.right {
				font-size: 28rpx;
				color: #666;
				display: flex;
				align-items: center;

				.u-icon {
					margin: 0 10rpx 0 20rpx;
				}
			}

		}
	}

	.tabs {
		margin-top: 20rpx;
		height: calc(100vh - 44px);
		display: flex;
		flex-direction: column;

		.tabs_t {
			height: 100rpx;
		}

		.tabs_s {
			flex: 1;
		}
	}

	.swiper-item-style {
		padding-bottom: 40rpx;

		.con {
			font-size: 28rpx;
			color: #666;
			line-height: 1.5;
		}

	}

	.list2 {
		.item {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 20rpx 28rpx;

			view {
				line-height: 46rpx;
			}

			.h33 {
				font-size: 30rpx;
				color: #333;
				width: 100%;
			}

			.con {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.info {
					flex: 1;
					width: 0;

					.h44 {
						margin-top: 6rpx;
						font-size: 28rpx;
						color: #666;
						width: 100%;
					}
				}

			}

		}
	}

	.step {
		.p{
			display: flex;
			line-height: 2;
			font-size: 28rpx;
			color: #666;
			text.t {
				width: 180rpx;
			}
			.a,.b{
				color:#627BF8;
				text-decoration: underline;
				margin-right: 20rpx;
			}
		}
	}
	.btn {
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
		.u-btn {
			margin: 0 40rpx;
		}
		.u-btn--default {
			color: #627bf8;
			border-color: #627bf8;
			
		}
	}
	.down {
		margin-top: 20rpx;
		margin-bottom: 60rpx;
		.p {
			display: flex;
			font-size: 28rpx;
			color: #627BF8;
			line-height: 1.5;
			padding: 10rpx 0;
			.u-image {
				margin-right: 10rpx;
			}
		}
	}
</style>
