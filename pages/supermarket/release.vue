<template>
	<view class="warp p-l-r">
			<nav-bar :isBack="true"></nav-bar>
		<view class="top">
			启用店铺，在企业超市中发布企业服务，帮助您找到更多合作的伙伴~
		</view>
		
		<view class="tips">
			<text>目前未启用店铺</text>
			<text>立即启用店铺 前往电脑端打开</text>
		</view>

		<image src="/static/fb.jpg" mode="widthFix"></image>
	</view>
</template>

<script>
</script>

<style>
	.warp{
		text-align: center;
		line-height: 50rpx;
	}
	.top{
		color: #FEA251;
		font-size: 30rpx;
		text-align: center;
		
	}
.tips{
	padding: 50rpx 0;	
	}
	.tips text{display: block;}
	.tips text:first-child{font-size: 36rpx;
	font-weight: bold;}
	.tips text:last-child{font-size: 28rpx;
	color: #4967FA;
	font-weight: bold;}
</style>
