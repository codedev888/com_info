<template>
	<view class="news">
		<nav-bar title="看资讯" :isBack="false"></nav-bar>
		<view class="news-nav">
			<text class="on">新鲜资讯</text>
			<text>通知公告</text>
		</view>
		<view class="news-tab-bar">
			<u-line color="#E7E7E7"></u-line>
			<u-tabs-swiper class="tab-bar-content" ref="uTabs" :list="newsTabBar" :is-scroll="false" :show-bar="false"
				:font-size="28" height="56" active-color="#3D6DFF" inactive-color="#666"
				:active-item-style="{'backgroundColor': '#EBF1FF', 'borderRadius': '2px'}" :current="current"
				@change="tabsChange"></u-tabs-swiper>
			<u-line color="#E7E7E7"></u-line>
		</view>
		<view class="article-nav">
			<text class="on">热门</text>
			<text>最新</text> 
			<u-search placeholder="搜索" v-model="keyword" :clearabled="false" :show-action="false" height="60"
				bg-color="#F7F7F7">
			</u-search>
		</view>

		<swiper class="swiper-content" :current="swiperCurrent" @transition="transition"
			@animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in newsTabBar" :key="index">
				<scroll-view scroll-y style="height: 100%; width: 100%;">
					<view class="view-item">
						<view class="item-text">
							<text class="item-title u-line-2">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg" :lazy-load="true">
									<u-loading slot="loading"></u-loading>
								</u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title u-line-2">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg" :lazy-load="true">
									<u-loading slot="loading"></u-loading>
								</u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title u-line-2">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg" :lazy-load="true">
									<u-loading slot="loading"></u-loading>
								</u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title u-line-2">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg" :lazy-load="true">
									<u-loading slot="loading"></u-loading>
								</u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title u-line-2">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg" :lazy-load="true">
									<u-loading slot="loading"></u-loading>
								</u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title u-line-2">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg" :lazy-load="true">
									<u-loading slot="loading"></u-loading>
								</u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg">
									<u-loading slot="loading"></u-loading>
								</u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg"></u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg" :lazy-load="true">
						</u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg"></u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg"></u-image>
					</view>
					<view class="view-item">
						<view class="item-text">
							<text class="item-title">
								还有机会！罗湖产业专项升级专项资金延期7天截止申报
								<text class="item-top">置顶</text>
							</text>
							<text class="item-hot">
								<u-image width="20rpx" height="24rpx" src="./static/news_hot.jpg"></u-image>
								<text>热度 92</text>
							</text>
						</view>
						<u-image width="210rpx" height="134rpx" src="./static/news_img_1.jpg"></u-image>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>

		<tab-bar></tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				keyword: '',
			}
		},
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
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.news {
		width: 100%;
		height: 100%;
		background-color: #fff;

		.news-nav {
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				position: relative;
				height: 100rpx;
				font-size: 28rpx;
				color: #999;
				line-height: 100rpx;
				padding: 0 48rpx;
			}

			.on {
				font-size: 34rpx;
				color: #333;
				font-weight: bold;

				&::before {
					content: '';
					position: absolute;
					transform: translateX(-50%);
					left: 50%;
					bottom: 20rpx;
					width: 40rpx;
					height: 6rpx;
					background-color: #627BF8;
					border-radius: 3rpx;
				}
			}
		}

		.tab-bar-content {
			padding: 28rpx;
		}

		.article-nav {
			padding: 28rpx;
			display: flex;
			justify-content: center;
			align-items: center;

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
			padding: 0 28rpx;
			height: calc(100vh - 352rpx);

			.view-item {
				width: 100%;
				height: 134rpx;
				margin-bottom: 38rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.item-text {
				flex: 1;

				.item-hot {
					margin-top: 8rpx;
					display: flex;
					.u-image {
						display: inline-block;
						margin-left: auto;
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
				margin-left: 28rpx;
				width: 210rpx;
				height: 134rpx;
			}
		}
	}
</style>
