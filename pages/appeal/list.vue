<template>
	<view class="warp">
		<view class="top">
			<text>立即提交诉求</text>
			<image src="../../static/sq.png" mode="widthFix"></image>
		</view>
		
		<view class=" appeal-list">
	
		<view class="robot">
			<view class="relative">
				<view class="icon">
					<image src="../../static/rbt.png" mode="widthFix"></image>
				</view>
				<text class="tip">有什么问题可以向我提喔！</text>
			</view>
		</view>	

			
			
		</view>
		
		<view class="no flex-col">
			<image src="../../static/no-icon.png" mode="widthFix"></image>
			<text>未提过诉求</text>
			<text>个人账号无法提交企业诉求</text>
			<text>请登录法人或代办人账号</text>
		</view>

		
	</view>

</template>

<script>
	export default{
		data(){
			return{
				show:false
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.top{
		width: 100%;
		position: relative;
		.top image{width: 750rpx;}
		text{
			position: absolute;
			left: 80rpx;
			top: 60%;
			z-index: 9;
			display: block;
			background: #fff;
			padding:0rpx 30rpx;
			border-radius: 50rpx;
			line-height: 48rpx;
			font-size: 24rpx;
		}
	}

		.no {
		position: absolute;
		top: 50%;
		left: 0%;
		display: block;
		width: 100%;
		height: 292rpx;
		text-align: center;
		margin-top: -146rpx;
		color: #999999;
			image{
				width: 312rpx !important;
			}
			text{
				display: block;
			}
		}
		
	.robot{
		
		padding:20rpx;
		image{
			width: 100rpx;
		}
		z-index: 999;
		.relative{
			position: relative;
			height: 120rpx;
			.tip{
				position: absolute;
				left: 90rpx;
				top: 60rpx;
				z-index: 999;
				background: #fff;
				display: block;
				width: 360rpx;
				font-size: 28rpx;
				border-radius: 0rpx 30rpx 30rpx 30rpx;
				box-shadow: 0rpx 0rpx 8rpx 2rpx rgba(191, 190, 190, 0.5);
				text-align: center;
				line-height: 60rpx;
			}
			.icon{width: 90rpx;}
		}
	}
	uni-image{
		width: 100% !important;
	}
	
	
</style>
