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
					<text>关键字： </text>科技创新，产业发展
				</view>
				<view class="p">
					<text>发布部门： </text>罗湖区发展和改革局
				</view>
				<view class="p">
					<text>发布时间：</text>2020-09-31
				</view>
				<view class="p">
					<text>开始时间： </text>2020-09-31
				</view>
				<view class="p">
					<text>结束时间： </text>2020-09-31
				</view>
			</view>

			<u-line color="#e8e8e8"></u-line>
			<view class="gz pad28">
				<u-icon name="star" color="#666" size="40"></u-icon>12
				<u-icon name="eye" color="#666" size="40"></u-icon>200
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
							<i-title title="政策简介"></i-title>
							<view class="con">
								政策简介
							</view>
						</view>
						<view class="swiper-item-style pad28">
							<i-title title="政策详情"></i-title>
							<view class="con">
								政策详情
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
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;background-color: #fff;"
						@scrolltolower="onreachBottom">
						<view class="list2">
							<view class="item pad28 u-border-bottom" v-for="it in 10">
								<view class="h33 u-line-1">深圳市罗湖区新能源汽车充电设施建设运营管深圳市罗湖区新能源汽车充电设施建设运营管</view>
								<view class="con">
									<view class="info">
										<view class="h44 u-line-1">发布部门：罗湖区发展和改革局展和改革局展和改展和改革局</view>
										<view class="h44">实施日期：2020-09-31</view>
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
					name: '政策详情'
				}, {
					name: '相关扶持'
				}, {
					name: '相关解读'
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
			justify-content: flex-end;
			align-items: center;
			font-size: 28rpx;
			color: #666;
			height: 80rpx;

			.u-icon {
				margin: 0 10rpx 0 20rpx;
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
