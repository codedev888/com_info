<template>
	<view class="warp">
		
		<view class="group">
			<view class="tips">
				根据你的偏好，智能匹配推荐20个房源
			</view>
			<view class="section24 flex-row bd">
				<view class="main2 flex-flex">
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa" mode="widthFix"></image>
				</view>
				<view class="main3 flex-col">
				  <text class="info5">深业进元大厦</text>
				  <view class="outer1 flex-row">
					<view class="mod2 flex-col"><text class="txt8">租售中</text></view>
					<view class="mod2 flex-col"><text class="txt8">198-500</text></view>
					<view class="mod2 flex-col"><text class="txt8">建设中</text></view>
				  </view>
				  <text class="paragraph1">
					社会物业&nbsp;|&nbsp;面积&nbsp;79048㎡
					<br />
					清水河街道&nbsp;|&nbsp;办公&nbsp;、商铺
				  </text>
				  <view class="outer2 flex-row">
					<view class="wrap1">
					  <text class="info6">75</text>
					  <text class="info7">元</text>
					  <text class="txt9">/㎡/月起</text>
					</view>
					<view class="wrap2">
					  <text class="word17">在租</text>
					  <text class="info8"></text>
					  <text class="info6">4</text>
					  <text class="info9">套</text>
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
			<view class="section24 flex-row bd">
				<view class="main2 flex-flex">
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng41d91673d7be21d120e5a1e39d2f64faf29371787424ccd0978145584de631ad" mode="widthFix"></image>
				</view>
				<view class="main3 flex-col">
				  <text class="info5">深业进元大厦</text>
				  <view class="outer1 flex-row">
					<view class="mod2 flex-col"><text class="txt8">租售中</text></view>
					<view class="mod2 flex-col"><text class="txt8">198-500</text></view>
					<view class="mod2 flex-col"><text class="txt8">建设中</text></view>
				  </view>
				  <text class="paragraph1">
					社会物业&nbsp;|&nbsp;面积&nbsp;79048㎡
					<br />
					清水河街道&nbsp;|&nbsp;办公&nbsp;、商铺
				  </text>
				  <view class="outer2 flex-row">
					<view class="wrap1">
					  <text class="info6">75</text>
					  <text class="info7">元</text>
					  <text class="txt9">/㎡/月起</text>
					</view>
					<view class="wrap2">
					  <text class="word17">在租</text>
					  <text class="info8"></text>
					  <text class="info6">4</text>
					  <text class="info9">套</text>
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
			<!-- <text class="view-more">查看更多&gt;</text> -->

		</view>
		<view class="bottom">
			<view class="total-msg">已为您推荐312条数据</view>
			<view class="but">保存</view>
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
			update(){
				
			},
			edit(){
				
			},
			del(){
				
			},
		}
	}
</script>

<style scoped>
	.tips{
		font-size: 28rpx;
		color: #EB5E00;
		 background-color: rgba(235, 94, 0, 0.02);
		 line-height: 60rpx;
		 padding: 0rpx 30rpx;
	}
	.total-msg{color: #6482FF; font-size: 20rpx; text-align: center;margin: auto; line-height: 60rpx;}
	.but{width: 80%; line-height: 90rpx; color: #fff; 
	background-color: rgba(100, 130, 255, 1); 
	font-size: 28rpx; text-align: center; justify-items: center;
	margin: auto;border-radius: 8rpx;}
	.bottom{padding-top: 100rpx;}
	page{height: 100%;}
	.section24 {
	  z-index: auto;
	  width: 750rpx;
	  
	  justify-content: space-between;
	  padding: 30rpx;
	}
	
	.main2 {
	  z-index: 129;
	}
	.main2 image{
		width: 210rpx;
		border-radius: 4rpx;
	}
	.main3 {
	  z-index: auto;
	  width: 450rpx;

	}
	
	.info5 {
	  z-index: 133;
	  width: 296rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Medium;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  align-self: flex-start;
	}
	
	.outer1 {
	  z-index: auto;
	  width: 164rpx;
	  height: 40rpx;
	  margin-top: 10rpx;
	  justify-content: space-between;
	}
	
	.mod2 {
	  height: 40rpx;
	  border-radius: 4rpx;
	  background-color: rgba(246, 247, 255, 1);
	  justify-content: center;
	  margin-right: 12rpx;
	  padding:0rpx 12rpx
	}
	
	.txt8 {
	  z-index: 151;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(153, 153, 153, 1);
	  font-size: 22rpx;
	  white-space: nowrap;
	}
	

	
	.paragraph1 {
	  z-index: 157;
	  width: 296rpx;
	  height: 72rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 26rpx;
	  line-height: 36rpx;
	  text-align: left;
	  align-self: flex-start;
	  margin-top: 6rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.outer2 {
	  z-index: auto;
	  width: 462rpx;
	  height: 50rpx;
	  justify-content: space-between;
	}
	
	.wrap1 {
	  z-index: 137;
	  width: 188rpx;
	  height: 50rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.info6 {
	  font-size: 36rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.info7 {
	  font-size: 26rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.txt9 {
	  font-size: 20rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.wrap2 {
	  z-index: 141;
	  width: 108rpx;
	  height: 50rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  font-size: 0;
	}
	
	.word17 {
	  font-size: 20rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 28rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.info8 {
	  font-size: 26rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 28rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	

	
	.info9 {
	  font-size: 26rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 28rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
.set{ position: relative;}
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
</style>
