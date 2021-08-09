<template>
	<view class="group flex-flex">
		<view class="tipMsgBox">
			<u-image width="298rpx" height="256rpx" :src="src"></u-image>
			<view class="tipTitle">
				提交成功
			</view>
			<view class="tipMsg">
				<text>将根据您的需求</text><text>为您定制推荐适合的产业空间</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default{
		data(){
			return{
				src:'/static/3@2x.png'
			}
		}
	}
</script>

<style>
	page{
		background: #ffffff;
		height: 100%;
	}
	.group{
		text-align: center;
		justify-items: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.tipMsgBox{
		margin: auto;
	}
	.tipTitle{
		font-size: 40rpx;
		line-height: 120rpx;
	}
	.tipMsg{
		margin: 0px auto;
	}
	.tipMsg text{
		display: block;
		color: #999999;
	}
	.u-image{
		margin: auto;
	}
</style>
