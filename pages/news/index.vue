<template>
	<view class="news">
		<nav-bar title="看资讯" :isBack="false"></nav-bar>
		<view class="tabs">
			<view class="tabs-t u-border-bottom" style="padding: 0 100rpx;background-color: #fff;">
				<u-tabs-swiper ref="topTabs" :list="topList" :current="topCurrent" @change="topChange"
					:is-scroll="false" swiperWidth="750" :active-item-style="{fontSize:'34rpx',color:'#333'}"
					inactive-color="#999" height="100" :bar-style="{bottom:'10px',backgroundColor:'#627BF8'}"
					font-size="34"></u-tabs-swiper>
			</view>
			<swiper class="tabs_s" :current="swiperTopCurrent" @transition="topTransition"
				@animationfinish="topAnimationfinish">
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;">
						<view class="item-con">
							<view class="news-tab-bar an" :class="{display:display[0]}">
								<u-tabs-swiper class="tab-bar-content" ref="uTabs" :list="newsTabBar" :is-scroll="false"
									:show-bar="false" :font-size="28" height="56" active-color="#3D6DFF"
									inactive-color="#666"
									:active-item-style="{'backgroundColor': '#EBF1FF', 'borderRadius': '2px'}"
									:current="current" @change="tabsChange"></u-tabs-swiper>
								<u-line color="#E7E7E7"></u-line>
							</view>
							<view class="article-nav">
								<text class="on">热门</text>
								<text>最新</text>
								<u-search placeholder="搜索" v-model="keyword" :clearabled="false" :show-action="false"
									height="60" bg-color="#F7F7F7">
								</u-search>
							</view>
							<swiper class="swiper-content" :current="swiperCurrent" @transition="transition"
								@animationfinish="animationfinish">
								<swiper-item class="swiper-item" v-for="(item, index) in newsTabBar" :key="index">
									<scroll-view scroll-y style="height: 100%; width: 100%;"
										@scrolltolower="onreachBottom" @scroll="function (e){return scroll(e, 0)}">
										<view class="view-item" v-for="it in 10">
											<view class="item-text">
												<view class="item-title u-line-2">
													<view class="item-top">置顶</view>
													还有机会！罗湖产业专项升级专项资金延期7天截止申报
												</view>
												<view class="item-hot">
													<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg"
														:lazy-load="true">
														<u-loading slot="loading"></u-loading>
													</u-image>
													<text>热度 92</text>
												</view>
											</view>
											<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg"
												:lazy-load="true">
												<u-loading slot="loading"></u-loading>
											</u-image>
										</view>
									</scroll-view>
								</swiper-item>
							</swiper>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;">
						<view class="news-tab-bar">
							<u-tabs-swiper class="tab-bar-content" ref="uTabs" :list="newsTabBar" :is-scroll="false"
								:show-bar="false" :font-size="28" height="56" active-color="#3D6DFF"
								inactive-color="#666"
								:active-item-style="{'backgroundColor': '#EBF1FF', 'borderRadius': '2px'}"
								:current="current" @change="tabsChange"></u-tabs-swiper>
							<u-line color="#E7E7E7"></u-line>
						</view>
						<view class="article-nav">
							<text class="on">热门</text>
							<text>最新</text>
							<u-search placeholder="搜索" v-model="keyword" :clearabled="false" :show-action="false"
								height="60" bg-color="#F7F7F7">
							</u-search>
						</view>
						<swiper class="swiper-content" :current="swiperCurrent" @transition="transition"
							@animationfinish="animationfinish">
							<swiper-item class="swiper-item" v-for="(item, index) in newsTabBar" :key="index">
								<scroll-view scroll-y style="height: 100%; width: 100%;">
									<view class="view-item" v-for="it in 10">
										<view class="item-text">
											<view class="item-title u-line-2">
												<view class="item-top">置顶</view>
												还有机会！罗湖产业专项升级专项资金延期7天截止申报
											</view>
											<view class="item-hot">
												<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg"
													:lazy-load="true">
													<u-loading slot="loading"></u-loading>
												</u-image>
												<text>热度 92</text>
											</view>
										</view>
										<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg"
											:lazy-load="true">
											<u-loading slot="loading"></u-loading>
										</u-image>
									</view>
								</scroll-view>
							</swiper-item>
						</swiper>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>


		<tab-bar></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				display: [false, false],
				topList: [{
						name: '新鲜资讯'
					},
					{
						name: '通知公告'
					},
				],
				newsTabBar: [{
						name: '全部类型'
					},
					{
						name: '资讯类型1'
					},
					{
						name: '资讯类型2'
					},
					{
						name: '资讯类型3'
					},
				],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				topCurrent: 0,
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				swiperTopCurrent: 0,
				keyword: '',
			}
		},
		methods: {
			// tabs通知swiper切换
			topChange(index) {
				this.swiperTopCurrent = index;
			},
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			topTransition(e) {
				let dx = e.detail.dx;
				this.$refs.topTabs.setDx(dx);
			},
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			topAnimationfinish(e) {
				let current = e.detail.current;
				this.$refs.topTabs.setFinishCurrent(current);
				this.swiperTopCurrent = current;
				this.topCurrent = current;
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			scroll(e, index) {
				console.log(e)
				if (e.target.deltaY > 0) {
					this.$set(this.display, index, false)
				} else {
					this.$set(this.display, index, true)
				}
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		}
	}
</script>
<style lang="scss" scoped>
	uni-page-body {
		height: 100%;
	}

	.news {
		width: 100%;
		height: 100%;
		background-color: #fff;
		display: flex;
		flex-direction: column;

		.tabs {
			flex: 1;
			display: flex;
			flex-direction: column;

			.tabs_s {
				flex: 1;
			}
		}

		.news-tab-bar {
			width: 100%;
			z-index: 10;
			background-color: #fff;
			height: 100rpx;
			display: block;
			opacity: 1;

			&.display {
				display: none;
				height: 0;
				opacity: 0;
			}
		}

		.item-con {
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		.tab-bar-content {
			padding: 28rpx;

		}

		.article-nav {
			padding: 28rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			height:116rpx;
			box-shadow: 0 2px 6px rgba(0,0,0,0.1);

			text {
				width: 88rpx;
				height: 40rpx;
				font-size: 28rpx;
				color: #999;
				line-height: 40rpx;
				text-align: center;
			}

			.on {
				color: #fff;
				background-color: #FBAD0A;
				border-radius: 4rpx;
			}

			/deep/.u-search {
				.u-content {
					flex-direction: row-reverse;
				}
			}
		}

		.swiper-content {
			margin-top: 20rpx;
			padding: 0 28rpx;
			flex: 1;

			.view-item {
				width: 100%;
				height: 134rpx;
				margin-bottom: 38rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.item-title {
				margin-right: 20rpx;
				line-height: 1.5;

				.item-top {
					width: 80rpx;
					height: 34rpx;
					background-color: #83aefd;
					font-size: 24rpx;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					margin-right: 10rpx;
					color: #fff;
					border-radius: 6rpx;
				}
			}

			.item-text {
				flex: 1;

				.item-hot {
					margin-top: 8rpx;
					display: flex;
					align-items: center;

					.u-image {
						width: 20rpx;
						height: 24rpx;
					}

					text {
						margin-left: 10rpx;
						font-size: 26rpx;
						color: #666;
					}
				}
			}

			.u-image {
				width: 210rpx;
				height: 134rpx;
			}
		}
	}
</style>
