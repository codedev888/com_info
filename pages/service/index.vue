<template>
	<view class="">
		<nav-bar :isBack="false"></nav-bar>
		<view class="date">
			<i-title title="找空间"></i-title>
			<view class="con">
				<view class="item" style="background-image: url(../../static/service/a1.png);">
					<text>办公</text>
					<text>23套</text>
				</view>
				<view class="item" style="background-image: url(../../static/service/a2.png);">
					<text>研发</text>
					<text>23套</text>
				</view>
				<view class="item" style="background-image: url(../../static/service/a3.png);">
					<text>厂房</text>
					<text>23套</text>
				</view>
				<view class="item" style="background-image: url(../../static/service/a4.png);">
					<text>仓库</text>
					<text>23套</text>
				</view>
				<view class="item" style="background-image: url(../../static/service/a5.png);">
					<text>商铺</text>
					<text>23套</text>
				</view>
				<view class="item" style="background-image: url(../../static/service/a6.png);">
					<text>买房</text>
					<text>23套</text>
				</view>
				<view class="item" style="background-image: url(../../static/service/a7.png);">
					<text>提需求</text>
				</view>
				<view class="item" style="background-image: url(../../static/service/a8.png);">
					<text>地图找房</text>
				</view>
			</view>
		</view>
		<view class="service">
			<i-title title="找服务"></i-title>
			<view class="con">
				<view class="item" style="background-color: #fffbf3;color: #EB5E00;">
					<view class="title">
						<text class="a">金融服务</text>
						<text class="b u-border">23 个</text>
					</view>
					<view class="list">
						<u-grid :col="4" :border="false" hover-class="girdOn">
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#fffbf3'}" @click="girdClick">
								<u-image width="60rpx" height="60rpx" src="/static/service/b1.png"></u-image>
								<view class="grid-text">贷款服务</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#fffbf3'}" @click="girdClick">
								<u-image width="60rpx" height="60rpx" src="/static/service/b2.png"></u-image>
								<view class="grid-text">股权融资</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#fffbf3'}" @click="girdClick">
								<u-image width="60rpx" height="60rpx" src="/static/service/b3.png"></u-image>
								<view class="grid-text">货币金融</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#fffbf3'}" @click="girdClick">
								<u-image width="60rpx" height="60rpx" src="/static/service/b4.png"></u-image>
								<view class="grid-text">票据贴现</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
				<view class="item" style="background-color:#f9fbff;color: #4285FC;">
					<view class="title">
						<text class="a">科技创新</text>
						<text class="b u-border">23 个</text>
					</view>
					<view class="list">
						<u-grid :col="4" :border="false" @click="girdClick" hover-class="girdOn">
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9fbff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/c1.png"></u-image>
								<view class="grid-text">产学研</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9fbff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/c2.png"></u-image>
								<view class="grid-text">技术转化和成果转化</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9fbff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/c3.png"></u-image>
								<view class="grid-text">信息技术</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9fbff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/c4.png"></u-image>
								<view class="grid-text">创新资源共享</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
				<view class="item" style="background-color: #f8fcfd;color: #2FAADF;">
					<view class="title">
						<text class="a">法律服务</text>
						<text class="b u-border">23 个</text>
					</view>
					<view class="list">
						<u-grid :col="4" :border="false" @click="girdClick" hover-class="girdOn">
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f8fcfd'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/d1.png"></u-image>
								<view class="grid-text">公证服务</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f8fcfd'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/d2.png"></u-image>
								<view class="grid-text">法律援助</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f8fcfd'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/d3.png"></u-image>
								<view class="grid-text">诉讼代理</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f8fcfd'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/d4.png"></u-image>
								<view class="grid-text">法律咨询</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
				<view class="item" style="background-color: #f9faff;color: #447BFE;">
					<view class="title">
						<text class="a">综合商务</text>
						<text class="b u-border">23 个</text>
					</view>
					<view class="list">
						<u-grid :col="4" :border="false" @click="girdClick" hover-class="girdOn">
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9faff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/e1.png"></u-image>
								<view class="grid-text">人力资源</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9faff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/e2.png"></u-image>
								<view class="grid-text">货物运输及代理</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9faff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/e3.png"></u-image>
								<view class="grid-text">贸易代理</view>
							</u-grid-item>
							<u-grid-item :custom-style="{padding: '20rpx 0 10rpx',background:'#f9faff'}">
								<u-image width="60rpx" height="60rpx" src="/static/service/e4.png"></u-image>
								<view class="grid-text">建筑装饰</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
			</view>
		</view>
		<view class="need">
			<view class="con">
				<text>未找到合适服务？</text>
				<text>发布需求</text>
			</view>
		</view>
		<tab-bar></tab-bar>
	</view>
</template>
<script>
	export default {
		name: "",
		components: {},
		props: {},
		data() {
			return {}
		},
		watch: {},
		computed: {},
		methods: {
			girdClick(index) {
				console.log(index)
			}
		},
		onShow() {},
		onHide() {},
		onLaunch() {}
	}
</script>
<style lang="scss" scoped>
	.date {
		background-color: #fff;
		padding: 14rpx 28rpx 0;

		.con {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 20rpx 0 0;

			.item {
				width: calc((100% - 16rpx)/2);
				margin-bottom: 16rpx;
				height: 128rpx;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				font-size: 30rpx;
				color: #333;
				padding: 0 28rpx;
				line-height: 40rpx;
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				border-radius: 8rpx;

				text:nth-child(1) {
					color: #666;
					font-size: 26rpx;
				}

				text:nth-child(2) {
					color: #333;
					font-size: 30rpx;
				}
			}
		}
	}

	.service {
		margin-top: 20rpx;
		background: #fff;
		padding: 14rpx 28rpx 8rpx;

		.item {
			padding: 20rpx 0;
			border-radius: 8rpx;
			margin-bottom: 20rpx;

			.title {
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 20rpx;

				.a {
					font-size: 30rpx;
					color: #333;
				}

				.b {
					color: inherit;
					font-size: 24rpx;
					padding: 0 20rpx;
					height: 40rpx;
					line-height: 40rpx;

					&.u-border:after {
						border-color: inherit;
						border-radius: 40rpx;
					}
				}
			}

			.list {
				padding: 14rpx 0 0;
			}

			.grid-text {
				color: #333;
				font-size: 24rpx;
				text-align: center;
				height: 64rpx;
			}

			.girdOn {
				.grid-text {
					color: inherit;
				}
			}
		}
	}

	.need {
		padding: 28rpx;
		background-color: #fff;
		border-radius: 8rpx;
		margin: 20rpx 0;

		.con {
			height: 160rpx;
			background: url(../../static/service/need.png) no-repeat center/cover;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 40rpx;

			text:nth-child(1) {
				font-size: 40rpx;
				font-weight: 500;
				color: #333;
			}

			text:nth-child(2) {
				width: 140rpx;
				height: 44rpx;
				background: #62A5FC;
				border-radius: 24rpx;
				font-size: 24rpx;
				color: #fff;
				line-height: 44rpx;
				text-align: center;
				margin-top: 10rpx;
			}
		}
	}
</style>
