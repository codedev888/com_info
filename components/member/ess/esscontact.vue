<template>
	<view class="warp">
		<view class="group">
			<view class="card-wrap">
				<view class="title">
					指北针生活服务880店铺
				</view>
				<view class="u-body-item flex-row bd">
					<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
					<view class="flex-col textbox">
						<view class="flex-1 fw">
							服务标题服务标题服务标题
						</view>
						<view class="flex-1">
							需求400箱，什么时候能出货？
						</view>
					</view>
				</view>
			</view>
			<view class="layer9 flex-row bd">
				<text class="word7">查看时间&nbsp;2020/5/12&nbsp;14:40:13</text>
				<view class="set flex-row active">
					<text class="info19">操作</text>
					<image class="label1" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbed6e58f24353c225e678e3eb1d1fd30dc9f7970edbe6b28e657c2064978b04e"></image>
					<view class="group17 flex-col">
						<span class="word16" @click="update()">更新状态</span>
						<span class="word16" @click="edit()">修改</span>
						<span class="word16" @click="del()">删除</span>
					</view>
				</view>

			</view>
			<view class="height20"></view>
			<view class="card-wrap">
				<view class="title">
					指北针生活服务880店铺
				</view>
				<view class="u-body-item flex-row">
					<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
					<view class="flex-col textbox">
						<view class="flex-1 fw">
							服务标题服务标题服务标题
						</view>
						<view class="flex-1">
							需求400箱，什么时候能出货？
						</view>
					</view>
				</view>
			</view>
			<view class="layer9 flex-row bd">
				<text class="word7">查看时间&nbsp;2020/5/12&nbsp;14:40:13</text>
				<view class="set flex-row active">
					<text class="info19">操作</text>
					<image class="label1" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbed6e58f24353c225e678e3eb1d1fd30dc9f7970edbe6b28e657c2064978b04e"></image>
					<view class="group17 flex-col">
						<!-- <span class="word16" @click="update()">更新状态</span>
						<span class="word16" @click="edit()">修改</span> -->
						<span class="word16" @click="del()">删除</span>
					</view>
				</view>

			</view>
		</view>
		<view class="no-more">
			没有更多了
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
		/* 	update(){
				
			},
			edit(){
				
			}, */
			del(){
				
			},
		}
	}
</script>

<style>
	page{height: 100%;}
	.title{padding:20rpx ; font-size: 30rpx; font-weight: bold;}
.set{ position: relative;}
.no-more{text-align: center; padding: 100rpx 0rpx;}
.layer9 {
  z-index: auto;
  width: 750rpx;
  justify-content: space-between;
  padding: 20rpx;
}

.word7 {
  z-index: 85;
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
 
  white-space: nowrap;
  line-height: 34rpx;
  text-align: left;
  margin-top: 2rpx;
}

.info19 {
  z-index: 87;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 26rpx;

  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;

}

.group17{
	display: none;
	border: 2px  solid #fff;
	border-radius: 8rpx;  /*圆角弧度为7px*/
	position: absolute;
	overflow: inherit;
	padding: 2rpx 18rpx;
	right: 0rpx;
	top: 54rpx;
	background: #ffffff;
	box-shadow: #D2D2D2 0rpx 0rpx 8rpx;
}
.group17:after{border: 0;}
.group17 .word16:hover{color: #007AFF;}
.set:hover .group17{display: block;}
.group17:before{
	content: '';
	width: 0;
	height: 0;
	border: 10rpx solid;
	position: absolute;
	top: -20rpx;
	right: 10rpx;
	z-index: 2;
	border-color:  transparent transparent #ffffff;
}	
.word16 {
  z-index: 100;
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 22rpx;
  white-space: nowrap;
  line-height: 32rpx;
  text-align: center;
  padding: 10rpx 20rpx;
}
.label1 {
  z-index: 89;
  width: 32rpx;
  height: 32rpx;
  margin: 4rpx 0 0 2rpx;
}		
	.card-wrap { 
	
		padding: 1px;
	}
		
	.u-body-item {
			font-size: 32rpx;
			color: #333;
			padding: 20rpx 10rpx;
	}
			
	.u-body-item image {
			width: 140rpx;
			flex: 0 0 140rpx;
			height: 100rpx;
			border-radius: 4rpx;
			margin-left: 12rpx;
	}
	.u-body-item .textbox{height: 100rpx;flex-flow: column; flex-direction: column; padding-left: 30rpx; font-size: 14rpx;}
</style>
