<template>
  <view class="page flex-col">

	<view class="group p-l-r">
		<view class="info-item flex-col">
			<view class="date flex-row">2021-5-11 17:39:17 <text class="status">签收</text></view>
			<view class="flex-row">
				<text class="fw">主管部门</text>  <text>金融服务署</text>
			</view>
			<view class="flex-row">
				<text class="fw">办理意见</text>  <text>办结中</text>
			</view>
		</view>
		<view class="info-item flex-col">
			<view class="date flex-row">2021-5-11 17:39:17 <text class="status">签收</text></view>
			<view class="flex-row">
				<text class="fw">主管部门</text>  <text>金融服务署</text>
			</view>
			<view class="flex-row">
				<text class="fw">办理意见</text>  <text>办结中</text>
			</view>
		</view>
	</view>


  </view>
</template>
<script>

export default {
	onload(){

	},
  data() {
    return {
 

    };
  },
  methods: {

  },
  components:{
  }
};
</script>


<style lang="scss">
page{padding-bottom: 100rpx;}
.info-item{
	margin: 60rpx 0;
	border-left:rgba(100,125,250,0.2) solid 10rpx;
	position:relative;
	padding-left: 60rpx;
	line-height: 60rpx;
	font-size: 28rpx;
	.date{
		line-height: 1;
		padding-bottom: 16rpx;
		.status{
			margin-left: 100rpx;
			color: #627BF8;
		}
	}
	text:first-child{
		margin-right: 30rpx;
	}
}
.info-item:before{
	position: absolute;
	left: 30rpx;
	top: 0rpx;
	width: 12rpx;
	height: 12rpx;
	border-radius: 10rpx;
	content: "";
	background: rgba(100,125,250,0.2);
	z-index: 2;
}
</style>
