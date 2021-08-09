<template>
	<view class="i-title">
		<view class="left" :class="{icon:icon}">
			{{title}}
		</view>
		<view class="right">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			icon: {
				type: Boolean,
				default: true
			}
		},
		methods: {}
	}
</script>
<style lang="scss" scoped>
	.i-title {
		display: flex;
		height: 80rpx;
		justify-content: space-between;
		align-items: center;
	}

	.left {
		font-size: 34rpx;
		color: #333;

		&.icon {
			padding-left: 32rpx;
			background: url(../../static/common/title.png) no-repeat left center/28rpx;
		}
	}
</style>
