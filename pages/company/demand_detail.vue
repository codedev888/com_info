<template>
  <view class="page flex-col">

	<view class="group">
		<view class="info-item bd">
			<text class="fw">主要用途：</text><text>办公，研发</text>
		</view>
		<view class="info-item">
			<text class="fw">需求类型：</text><text class="">用房和用地均可</text>
		</view>		
	</view>
	<view class="height20"></view>
	<view class="group">
		<view class="info-item bd">
			<text class="fw">用房意向</text>
		</view>
		<view class="info-item bd">
			<text>租赁性质：</text><text class="">出租和出售</text>
		</view>	
		<view class="info-item bd">
			<text>面积（㎡）：</text><text class="fw">500-1000</text>
		</view>		
		<view class="info-item bd">
			<text>产权性质：</text><text class="">不限</text>
		</view>
		<view class="info-item bd">
			<text>租金（元/㎡/月）：</text><text class="">不限</text>
		</view>	
	</view>
	
	<view class="height20"></view>
	<view class="group">
		<view class="info-item bd">
			<text class="fw">用地意向</text>
		</view>
		<view class="info-item bd">
			<text>面积（㎡）：</text><text class="">500-1000</text>
		</view>		
		<view class="info-item bd">
			<text>拟投建项目：</text><text class="">黄贝产业升级综合办公用房</text>
		</view>	
	</view>
	<view class="height20"></view>
	<view class="group">
		<view class="info-item bd flex-row jc">
			<text class="fw">当前状态：</text><text class="status">待入驻</text>
		</view>
		<view class="info-item bd">
			<text>入驻园区/不入驻原因：</text><text class=""></text>
		</view>		
		<view class="info-item bd">
			<text>登记时间：</text><text class="">2020年6月5日 13:47</text>
		</view>	
		<view class="info-item bd">
			<text>更新时间：</text><text class="">2020年6月5日 13:47</text>
		</view>
	</view>
	<view class="height20"></view>	
	<view class="group">
		<view class="set-itme">
			<text class="word13">操作记录</text>
			<view class="box9">
				
				<view class="box9-item">
					<view>账号名【企业记录】</view>
					<view>修改了意向登记信息</view>
					<view>2020-6-14&nbsp;22:21:44</view>
				</view>
				<div class="line"></div>
				<view class="box9-item">
					<view>账号名【管理单位记录】</view>
					<view>确认意向登记信息，更新状态为待带看</view>
					<view>2020-6-14&nbsp;22:21:44</view>
				</view>
			</view>
		</view>

		
	</view>
	<view class="set-bar flex-row">
		<view class="section3 flex-col">编辑</view>
		<view class="section3 flex-col">删除需求</view>
		<view class="section3 flex-col active">取消预约</view>
	</view>
  </view>
</template>
<script>
import demand from '../../components/company/demand/demand.vue';
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


<style>
page{padding-bottom: 100rpx;}
.status{color:#F8B964}
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 90rpx; text-align: center; font-size: 28rpx;color: rgba(100, 130, 255, 1); border-left: #f2f2f2 solid 2rpx;}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.section3:first{border: 0;}
.info-item{line-height: 80rpx; padding: 0rpx 30rpx;}
 .set-itme{padding: 0rpx 30rpx;}
 .word13{font-size: 32rpx; padding: 20rpx 0rpx 10rpx 0rpx; display: block;}
 .box9{}
 .box9-item{
	 background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdf066cf97096a97ced6e749b316739f7e70db2bbeccaf6cc3c61cd04f2a3c55d) no-repeat;
	 background-size: 40rpx 40rpx;
	 padding:0rpx 0rpx 20rpx 60rpx;
	 line-height: 42rpx;
	 font-size: 28rpx;
	 margin-top: 20rpx;
 }


</style>
