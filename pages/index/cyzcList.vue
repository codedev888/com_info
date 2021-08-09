<template>
	<view class="main">
		<nav-bar :isBack="true"></nav-bar>
		<view class="se pad28">
			<navigator url="/pages/index/cyzcSearchList" hover-class="" class="se-con">
				<u-icon name="nav-back" color="#666" size="44"></u-icon>
				<view class="se-con-right">
					<u-icon name="search" color="#999" size="28"></u-icon>
					<text>搜索产业政策</text>
				</view>
			</navigator>
		</view>
		<view class="zcjsq pad28 mt10">
			<i-title title="政策计算器"></i-title>
			<view class="con">
				<view class="item">
					<navigator url="/pages/index/cyzcList" hover-class="" class="url u-border-right">
						<u-image width="80rpx" height="80rpx" src="/static/index/cyzc/list/b1.png"></u-image>
						<view class="title h3">贷款服务</view>
						<view class="des h4">
							一键匹配，快速测评
						</view>
					</navigator>
				</view>
				<view class="item">
					<navigator url="/pages/index/cyzcList" hover-class="" class="url">
						<u-image width="80rpx" height="80rpx" src="/static/index/cyzc/list/b2.png"></u-image>
						<view class="title h3">问答匹配</view>
						<view class="des h4">
							层定制题目，全面测评
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="flcx pad28 mt10">
			<i-title title="分类查询">
				<navigator url="/pages/index/cyzcSearch" hover-class="" class="title-url">
					更多<u-icon name="arrow-right-double" color="#4967FA" size="28"></u-icon>
				</navigator>
			</i-title>
			<view class="con">
				<u-grid :col="4" :border="false" hover-class="girdOn">
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'centercenter'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a1.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'center'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a2.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'center'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a3.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'center'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a4.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'center'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a5.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'center'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a6.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'center'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a7.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
					<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',textAlign:'center'}">
						<navigator url="" hover-class="" class="flex-column">
							<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/list/a8.png"></u-image>
							<view class="grid-text">贷款服务</view>
						</navigator>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<view class="bmcx pad28 mt10">
			<i-title title="部门查询">
				<navigator url="/pages/index/departmentSearch" hover-class="" class="title-url">
					更多<u-icon name="arrow-right-double" color="#4967FA" size="28"></u-icon>
				</navigator>
			</i-title>
			<view class="con">
				<navigator url="" hover-class="" class="item">
					深圳市人力资源局
				</navigator>
				<navigator url="" hover-class="" class="item">
					深圳市人力资源局
				</navigator>
				<navigator url="" hover-class="" class="item">
					深圳市人力资源局
				</navigator>
				<navigator url="" hover-class="" class="item">
					深圳市人力资源局
				</navigator>
				<navigator url="" hover-class="" class="item">
					深圳市人力资源局
				</navigator>
			</view>
		</view>
		<view class="tabs">
			<view class="tabs-t u-border-bottom" style="padding: 0 50rpx;background-color: #fff;">
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
					swiperWidth="750" :active-item-style="{fontSize:'28rpx',color:'#333'}" inactive-color="#999"
					height="100" :bar-style="{bottom:'10px',backgroundColor:'#627BF8'}"></u-tabs-swiper>
			</view>
			<swiper class="tabs_s" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom"
						@scroll="function (e){return scroll(e, 0)}">
						<view class="zcfg">
							<view class="zcfg-c an" :class="{sticky:sticky[0]}">
								<view class="choose u-border">
									<u-dropdown ref="uDropdown">
										<u-dropdown-item v-model="value1" title="罗湖区" :options="options1" height="600">
										</u-dropdown-item>
										<u-dropdown-item v-model="value2" title="部门" :options="options2">
										</u-dropdown-item>
										<u-dropdown-item v-model="value3" title="分类" :options="options3">
										</u-dropdown-item>
										<u-dropdown-item v-model="value4" title="日期" :options="options4">
										</u-dropdown-item>
									</u-dropdown>
								</view>
								<view class="type">
									<view class="item" v-for="(item,index) in options55" :key="item.value"
										@click="typeOn(index)" :class="{on:index == indexOn}">
										{{item.name}}
									</view>
								</view>
							</view>
							<view class="list2">
								<view class="item pad28 u-border-bottom" v-for="it in 10" @click="goDetail(0)">
									<view class="h33 u-line-1">深圳市罗湖区新能源汽车充电设施建设运营管深圳市罗湖区新能源汽车充电设施建设运营管</view>
									<view class="con">
										<view class="info">
											<view class="h44 u-line-1">发布部门：罗湖区发展和改革局展和改革局展和改展和改革局</view>
											<view class="h44">发布时间：2020-09-31</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom"
						@scroll="function (e){return scroll(e, 1)}">
						<view class="zcfg">
							<view class="zcfg-c" :class="{sticky:sticky[1]}">
								<view class="choose u-border">
									<u-dropdown ref="uDropdown">
										<u-dropdown-item v-model="value1" title="罗湖区" :options="options1" height="600">
										</u-dropdown-item>
										<u-dropdown-item v-model="value5" title="部门" :options="options5">
										</u-dropdown-item>
										<u-dropdown-item v-model="value6" title="分类" :options="options6">
										</u-dropdown-item>
										<u-dropdown-item v-model="value6" title="日期" :options="options6">
										</u-dropdown-item>
									</u-dropdown>
								</view>
							</view>
							<view class="list">
								<view class="item pad28 u-border-bottom" v-for="it in 10" @click="goDetail(1)">
									<view class="info">
										<view class="h3 u-line-1">view项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称</view>
										<view class="h4 u-line-1">发布部门：罗湖区发展和改革局罗湖区发展和改革局罗湖区发展和改革局罗湖区发展和改革局</view>
										<view class="h4">申报期限：2020/09/30 ~ 2020/12/30</view>
									</view>
									<view class="status" :class="[{orange:true}]">未开始</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
						<view class="zcfg">
							<view class="list2">
								<view class="item pad28 u-border-bottom" v-for="it in 10" @click="goDetail(2)">
									<view class="h33 u-line-1">深圳市罗湖区新能源汽车充电设施建设运营管深圳市罗湖区新能源汽车充电设施建设运营管</view>
									<view class="con">
										<view class="info">
											<view class="h44 u-line-1">发布部门：罗湖区发展和改革局展和改革局展和改展和改革局</view>
											<view class="h44">实施日期：2020-09-31</view>
										</view>
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
				list: [{
					name: '政策法规'
				}, {
					name: '扶持项目'
				}, {
					name: '政策解读'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的

				value1: 1,
				value2: 2,
				value3: 2,
				value4: 1,
				value5: 2,
				value6: 2,
				options1: [{
						label: '罗湖区委（政府）办公室',
						value: 1,
					},
					{
						label: '罗湖区发展和改革局',
						value: 2,
					},
					{
						label: '罗湖区工业和信息化局',
						value: 3,
					},
					{
						label: '罗湖区科技创新局',
						value: 4,
					},
					{
						label: '罗湖区人力资源局',
						value: 5,
					},
					{
						label: '罗湖区住房和建设局',
						value: 6,
					},
					{
						label: '罗湖区工业和信息化局',
						value: 7,
					}
				],
				options2: [{
						label: '部门1',
						value: 1,
					},
					{
						label: '部门2',
						value: 2,
					},
				],
				options3: [{
						label: '一周内',
						value: 1,
					},
					{
						label: '一月内',
						value: 2,
					},
				],
				options4: [{
						label: '部门1',
						value: 1,
					},
					{
						label: '部门2',
						value: 2,
					},
				],
				options5: [{
						label: '部门1',
						value: 1,
					},
					{
						label: '部门2',
						value: 2,
					},
				],
				options6: [{
						label: '一周内',
						value: 1,
					},
					{
						label: '一月内',
						value: 2,
					},
				],
				options55: [{
						name: "可测评",
						value: "1"
					},
					{
						name: "可线上申报",
						value: "2"
					}
				],
				indexOn: 0,
				sticky: [
					true,
					true,
					true
				]
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
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log(1)
			},
			scroll(e, index) {
				if (e.target.deltaY > 0) {
					this.$set(this.sticky, index, false)
				} else {
					this.$set(this.sticky, index, true)
				}
			},
			goDetail(index){
				if(index == 0){
					uni.navigateTo({
					    url: '/pages/index/zcfgDetail',
					});
				}else if ( index == 1){
					uni.navigateTo({
					    url: '/pages/index/fcxmDetail',
					});
				}else if ( index == 2){
					uni.navigateTo({
					    url: '/pages/index/zcjdDetail',
					});
				}else{
					uni.navigateTo({
					    url: '/',
					});
				}
			}
		},
		onPageScroll(e) {

		},
		onShow() {

		},
		onHide() {},
		onLaunch() {},
		mounted() {
			console.log(this.$mp.page)
		}
	}
</script>
<style lang="scss" scoped>
	.title-url {
		font-size: 28rpx;
		color: #4967FA;
	}

	.se-con {
		display: flex;
		justify-content: space-between;

		.se-con-right {
			flex: 1;
			height: 60rpx;
			border-radius: 60rpx;
			background-color: #f7f7f7;
			color: #999;
			display: flex;
			align-items: center;
			font-size: 24rpx;

			.u-icon {
				margin: 0 20rpx 0 30rpx;
			}
		}
	}

	.zcjsq {
		.con {
			display: flex;
			justify-content: space-between;
			padding: 20rpx 0;

			.item {
				width: 50%;
				position: relative;

				.url {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.title {
						margin-top: 10rpx;
					}
				}

			}
		}
	}

	.bmcx {
		.con {
			display: flex;
			justify-content: space-between;
			padding: 20rpx 0;
			flex-wrap: wrap;
			align-items: center;

			.item {
				width: calc((100% - 16rpx)/2);
				font-size: 28rpx;
				color: #666;
				height: 60rpx;
			}
		}
	}

	.tabs {
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

	.type {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20rpx 0;

		.item {
			width: 320rpx;
			height: 60rpx;
			margin: 0 20rpx;
			line-height: 60rpx;
			color: #666;
			font-size: 28rpx;
			background-color: #F3F3F3;
			border-radius: 60rpx;
			text-align: center;

			&.on {
				background-color: #627BF8;
				color: #fff;
			}
		}
	}

	.zcfg {
		.zcfg-c {
			position: sticky;
			left: 0;
			width: 100%;
			top: 0;
			z-index: 10;
			background-color: #fff;

			&.sticky {
				position: relative;
			}
		}
	}

	.list {
		position: relative;
		z-index: 8;
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
		position: relative;
		z-index: 8;
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
