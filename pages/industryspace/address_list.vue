<template>
	<view class="address">
		<view class="top">
			<u-image width="750rpx" height="472rpx" :src="banner"></u-image>
		</view>
		<view class="p30 contact-box">
			<view class="group p30 borderRadius ">
				<view class="title flex-row jc">
					<text class="title-left">产权人联系方式</text>
				</view>
				<view class="intro p-t-b">
					<view class="tel flex-col">
						<text class="name">翁保</text>
						<text class="tel-number">14062132329</text>
					</view>
					<view class="tel flex-col">
						<text class="name">迟家毓</text>
						<text class="tel-number">15654876115</text>
					</view>
					<view class="email">
						<text class="eamil-code">asujedhik@packumo.im</text>
					</view>					 
				</view>
			</view>	
			<view class="height20"></view>
			<view class="group p30 borderRadius ">
				<view class="title flex-row jc">
					<text class="title-left">资产运营单位联系方式</text>
				</view>
				<view class="intro p-t-b">
					<view class="tel flex-col">
						<text class="name">翁保</text>
						<text class="tel-number">14062132329</text>
					</view>
								 
				</view>
			</view>	
			<view class="height20"></view>
			<view class="group p30 borderRadius ">
				<view class="title flex-row jc">
					<text class="title-left">物业管理单位联系方式</text>
				</view>
				<view class="intro p-t-b">
					<view class="tel flex-col">
						<text class="name">翁保</text>
						<text class="tel-number">14062132329</text>
					</view>
								 
				</view>
			</view>				
			<view class="height20"></view>
			<view class="group p30 borderRadius ">
				<view class="title flex-row jc">
					<text class="title-left">房源联系方式</text>
				</view>
				<view class="intro p-t-b">
					<view class="tel flex-col">
						<text class="name">翁保</text>
						<text class="tel-number">14062132329</text>
					</view>
								 
				</view>
			</view>				
			
		</view>

		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				banner:'/static/industryspace/addresslist.png'
			}
		}
	}
</script>

<style lang="scss">
	
	
.top{width: 100%;}
.top image{width: 100%;}	
.contact-box{
	margin-top: -150rpx;
	position: relative;
	z-index: 999;
	.group{
		box-shadow: 0px 2px 4px 0px rgba(213, 213, 213, 0.5)
	}
	.tel{
		background:url(/static/industryspace/phone.png) no-repeat;
		background-size: 60rpx;
		background-position: left center;
		font-size: 28rpx;
		line-height: 1.5;
		padding: 20rpx 0 20rpx 80rpx;
	}
	.email{
		background:url(/static/industryspace/email.png) no-repeat;
		background-size: 60rpx;
		background-position: left center;
		
		padding: 30rpx 0 30rpx 80rpx;
	}
}
.borderRadius{
	border-radius: 16rpx;
}
</style>
