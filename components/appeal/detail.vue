<template>
  <view class="page flex-col">

	<view class="group">
		<view class="info-item flex-row">
			<text>企业名称：</text><text>罗湖区科技创新服务有限公司</text>
		</view>
		<view class="info-item flex-row">
			<text>信用代码：</text><text class="">1234abcdeffg</text>
		</view>		
	
		<view class="info-item flex-row">
			<text>联系人名称：</text><text class="">张潇潇</text>
		</view>	
		<view class="info-item flex-row">
			<text>联系人电话：</text><text>13812341234</text>
		</view>		
		<view class="info-item flex-row">
			<text>诉求标题：</text><text class="">诉求标题诉求标题诉求标题诉求标题</text>
		</view>
		<view class="info-item flex-row">
			<text>诉求分类：</text><text class="">属地服务</text>
		</view>	
		<view class="info-item flex-row">
			<text>受理部门：</text><text class="">罗湖区企服中心</text>
		</view>		
		<view class="info-item flex-row">
			<text>诉求描述：</text><text class="">诉求描述诉求描述诉求描述诉求描述诉求 描诉求描述诉求描述诉求描述诉求描述诉求 描诉求描述诉求描述诉求描述诉求描述诉求 描诉求描述诉求描述诉求描述诉求描述诉求 描</text>
		</view>	

		<view class="info-item flex-row">
			<text>企业期望：</text><text class="">企业期望企业期望企业期望企业期望企业 期企业期望企业期望企业期望企业期望企业 期企业期望企业期望企业期望企业期望企业 期</text>
		</view>		
		<view class="info-item flex-row">
			<text>与相关职能\n部门前期沟\n通情况：</text><text class="">与相关职能部门前期沟通情况与相关职能 部与相关职能部门前期沟通情况与相关职能 部与相关职能部门前期沟通情况与相关职能 部</text>
		</view>	
		<view class="info-item flex-row">
			<text>更新时间：</text><text class="">2020年6月5日 13:47</text>
		</view>
	</view>

	<view class="group">
		<view class="set-itme">
			<text class="word13">附件</text>
			<view class="imgbox flex-row">
				<view class="li">
					<image src="../../static/uview/common/logo.png" mode="widthFix"></image>
				</view>
				<view class="li">
					<image src="../../static/uview/common/logo.png" mode="widthFix"></image>
				</view>
				<view class="li">
					<image src="../../static/uview/common/logo.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="set-itme">
			<text class="word13">其他文件附件</text>
			<view class="filebox flex-col">
				<view class="li">
					<text class="pdf"></text>文件名称文件名称.pdf
				</view>
				<view class="li">
					<text class="pdf"></text>文件名称文件名称.pdf
				</view>
				<view class="li">
					<text class="pdf"></text>文件名称文件名称.pdf
				</view>
			</view>
		</view>
		
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


<style lang="scss">
page{padding-bottom: 100rpx;}
.status{color:#F8B964}

.info-item{line-height: 50rpx; padding: 20rpx 30rpx;
font-size: 28rpx;
	text:first-child{
		width: 180rpx;
		display: block;
	}
	text:last-child{
		width: 500rpx;
		display: block;
		
	}
}

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
.imgbox{
	  flex-wrap: wrap;
	  align-items: center;
	.li{width: 25%; padding:10rpx}
	.li image{
		width: 100%;
	}
}
.filebox{
	line-height: 50rpx;
	padding: 20rpx 0;
	text{padding:20rpx}
	.pdf{
		background:url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng26d9fa489d9af449260d0280b589835123c54f0a44034e451cc23ac5c0a1a8e5) no-repeat;
		background-position: left center;
		background-size: 32rpx;
	}
}
</style>
