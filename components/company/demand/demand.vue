<template>
	
	<view class="warp">
		<view class="height20"></view>
		<view class="group">
			<view class="item-box bd">
				<view class="tags flex-row">
					<text class="tag_txt">用房需求</text>
					<text class="tag_txt">租赁</text>
					<text class="tag_txt">厂房</text>
					<text class="word8">待入驻</text>
				</view>
	
				<view class="area flex-row">
				  <text class="word9">面积:</text>
				  <text class="word10">800-1200㎡</text>
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
		</view>
		<view class="height20"></view>
		<view class="group">
			<view class="item-box bd">
				<view class="tags flex-row">
					<text class="tag_txt">用房需求</text>
					<text class="tag_txt">租赁</text>
					<text class="tag_txt">厂房</text>
					<text class="word8">待入驻</text>
				</view>
	
				<view class="area flex-row">
				  <text class="word9">面积:</text>
				  <text class="word10">800-1200㎡</text>
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
		</view>		
	</view>
</template>

<script>
export default{
	props:{
		type : {type : Number, default : 0}
	},
	components:{
		
	},
	created(){
		//console.log(type);
		//console.log(this.type)
	},
	methods: {
		update(e){
			console.log('你点了更新')
		},
		edit(e){
			console.log('你点了修改')
		},
		del(e){
			console.log('你点了删除')
		},
	}
}
</script>

<style>
.item-box{padding: 0rpx 30rpx;}
.tags{padding: 20rpx 0rpx; position: relative; font-size: 13rpx;}
.tag_txt{display:flex; padding: 10rpx 20rpx; background-color: rgba(235, 241, 255, 1); color: rgba(98, 123, 248, 1); margin-right: 20rpx;}
.word8 {
 
  overflow-wrap: break-word;
  color: rgba(248, 185, 100, 1);
  font-size: 28rpx;

  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 54rpx;
	position: absolute;
	right: 0rpx;
	top: 20rpx;
}
.area{padding: 20rpx 0rpx;}
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
