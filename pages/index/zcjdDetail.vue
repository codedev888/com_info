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
					<text>发布时间： </text>2021/08/05
				</view>
			</view>
			<view class="gz pad28">
				<view class="left">
					<text>科技创新</text><text>产业发展</text>
				</view>
				<view class="right">
					<u-icon name="star" color="#666" size="40"></u-icon>12
					<u-icon name="eye" color="#666" size="40"></u-icon>200
				</view>
			</view>
			<view class="explain pad28 u-border-top">
				<view class="a">
					资讯内容资讯内容资讯内容资讯内容定石示治清路子即育几米新车加成速革克资回种领低火构适发员影度大系级学命精有指一路资取要此回己般比构层候此国各。
				</view>
				<view class="b">
					备注：1.具有深圳户籍；2.在深圳缴纳社保；3.未享受购/租房优惠政策
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
						<view class="list2">
							<view class="item pad28 u-border-bottom" v-for="it in 10">
								<view class="h33 u-line-1">政策解读标题政策解读标题政策解读标题</view>
								<view class="con">
									<view class="info">
										<view class="h44 u-line-1">来源部门：罗湖区发展和改革局展和改革局展和改展和改革局</view>
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
						<view class="list">
							<view class="item pad28 u-border-bottom" v-for="it in 10">
								<view class="info">
									<view class="h3 u-line-1">view项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称</view>
									<view class="h4">申报期限：2020/09/30 ~ 2020/12/30</view>
								</view>
								<view class="status" :class="[{orange:true}]">未开始</view>
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
					name: '相关政策'
				}, {
					name: '相关扶持'
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
		.explain {
			font-size: 28rpx;
			color: #333;
			line-height: 1.5;
			.b{
				font-size: 24rpx;
				color: #FA9F6E;
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

	.list {
		.item {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx 28rpx;

			.info {
				flex: 1;
				width: 0;

				.h3 {
					font-size: 30rpx;
					color: #333;
					height: 50rpx;
					width: 100%;
				}

				.h4 {
					font-size: 28rpx;
					color: #666;
				}
			}

			.status {
				width: 120rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border-radius: 30rpx;
				background-color: #f2f2f2;
				color: #999;
				font-size: 28rpx;
				margin-left: 20rpx;

				&.orange {
					color: #fff;
					background-color: #FB9274;
				}
			}
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
</style>
