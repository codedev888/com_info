<template>
	<view class="home pad28">
		<nav-bar title="企业主页" :isBack="false"></nav-bar>
		<view class="user">
			<view class="user-content">
				<u-image width="88rpx" height="88rpx" src="" :lazy-load="true">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<view class="user-info">
					<text class="user-name">用户名</text>
					<text class="user-summary u-line-2">罗湖区科技创新有限公司</text>
				</view>

			</view>
			<view class="logout">
				<text>退出登录</text>
			</view>
		</view>
		<tab-bar></tab-bar>
	</view>
</template>

<style lang="scss">
	.user {
		display: flex;
		justify-content: space-between;
		.user-content {
			display: flex;
			.u-image {
				flex-shrink: 0;
			}
			.user-info {
				margin: 2px 0 0 8px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.user-name {
					font-size: 15rpx;
					color: #333;
					font-weight: bold;
				}
				.user-summary {
					font-size: 12rpx;
					color: #666;
				}
			}
		}
		.logout {
			width: 96rpx;
			font-size: 12rpx;
			color: #5D7BFF;
			line-height: 46rpx;
			margin-left: 28rpx;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: flex-end;
		}
	}
</style>
