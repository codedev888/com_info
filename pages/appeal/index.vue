<template>
	<view class="warp">
		<view class="top">
			<text>立即提交诉求</text>
			<image src="../../static/sq.png" mode="widthFix"></image>
		</view>
		
		<view class="group appeal-list">
			<view class="item flex-row jc p-l-r">
				<view class="flex-col left">
					<text class="name">诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题</text>
					<text class="date">诉求类型 · 2021-5-11 17:</text>
				</view>
				<text class="status">受理中</text>
			</view>
		<view class="height20"></view>
			<view class="item flex-row jc p-l-r">
				<view class="flex-col left">
					<text class="name">诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题</text>
					<text class="date">诉求类型 · 2021-5-11 17:</text>
				</view>
				<text class="status ok">已完成</text>
			</view>
		<view class="height20"></view>
			<view class="item flex-row jc p-l-r">
				<view class="flex-col left">
					<text class="name">诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题</text>
					<text class="date">诉求类型 · 2021-5-11 17:</text>
				</view>
				<text class="status">受理中</text>
			</view>
			
			<view class="height20"></view>
			
			<view class="item flex-row jc p-l-r">
				<view class="flex-col left">
					<text class="name">诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题诉求标题</text>
					<text class="date">诉求类型 · 2021-5-11 17:</text>
				</view>
				<text class="status">受理中</text>
			</view>
			
			
			
		</view>
		

		<view class="robot">
			<view class="relative">
				<image src="../../static/jqr.png" mode="widthFix"></image>
				<text class="tip">有什么问题可以向我提喔！</text>
			</view>
			
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
	.appeal-list{
		
		.item{
			
			padding: 30rpx;
		}
		.left{
			line-height: 40rpx;
			.name{
				font-size: 30rpx;
				font-weight: 600;
				margin-bottom: 20rpx;
			}
		}
		.status{
				display: block;
				width: 220rpx;
				line-height: 60rpx;
				text-align:right;
				color: #6482FF;
				font-size: 28rpx;
				font-weight: 600;
		}
		.status.in{
			color:#F8B964
		}
		.status.ok{
			color:#2CCEC5
		}
	}
	.robot{
		height: 120rpx;
		width: 120rpx;
		position: fixed;
		left:30rpx;
		bottom: 20%;
		image{
			width: 120rpx;
		}
		z-index: 999;
		.relative{
			position: relative;
			height: 120rpx;
			.tip{
				position: absolute;
				right: -330rpx;
				top: 80rpx;
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
		}
	}
	uni-image{
		width: 100% !important;
	}
	
	
</style>
