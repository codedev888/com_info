<template>
  <view class="page flex-col">

	<view class="group">
		<view class="info-item bd flex-row">
			<text class="fw">提交时间 </text><text>2021-5-11 17:39:17</text>
		</view>
		<view class="info-item flex-row">
			<text class="fw">当前状态 </text><text class="status">处理中</text>
		</view>		
	</view>
	<view class="height20"></view>

	<scroll-view scroll-x class="bg-white nav flex-row bd" scroll-with-animation show-scrollbar="false" :scroll-left="scrollLeft">
			<view class="cu-item flex-flex" :class="index==TabCur?'cur':''" v-for="(item,index) in list" :key="index" @tap="tabSelect" :data-id="index">
				{{item.name}}
			</view>
	</scroll-view>
	<view class="modecotent">
		<view class="mode1" v-if="currentItem === 0">
			<detail></detail>
		</view>
		<view class="mode2" v-if="currentItem === 1">
			<progresss></progresss>
		</view>
		<view class="mode3" v-if="currentItem === 2">
			<evaluation></evaluation>
		</view>

	</view>


  </view>
</template>
<script>
import detail from '../../components/appeal/detail.vue';
import evaluation from '../../components/appeal/evaluation.vue';
import progresss from '../../components/appeal/progress.vue';
export default {
	onload(){

	},
  data() {
    return {
      constants: {},
	  TabCur: 0,
	  scrollLeft: 0,
			list:[
				{
					name:'诉求内容',
					check:true
				},
				{
					name:'诉求进度',
					check:false
				},
				{
					name:'诉求评价',
					check:false
				}
			],
			checkIndex:0,
			currentItem:0
    };
  },
  methods: {
	  tabSelect(e) {
	  	this.TabCur = e.currentTarget.dataset.id;
		this.currentItem =  e.currentTarget.dataset.id;
	  	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
	  },
	  checkOne(index){
	  			 this.checkIndex=index;
				 console.log(index)
	  }
  },
  components:{
	  detail,
	  evaluation,
	  progresss
	  
  }
};
</script>


<style lang="scss">
page{padding-bottom: 100rpx;}
.status{color:#F8B964}

.info-item{
	line-height: 80rpx; padding: 0rpx 30rpx;
		text{
			margin-right: 80rpx;
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


.nav {
	width: 750rpx;
	white-space: nowrap;
	background: #ffffff;
}

::-webkit-scrollbar {
	display: none;
}

.nav .cu-item {
	height: 90upx;
	display: inline-block;
	line-height: 90upx;
	margin: 0 10upx;
	padding: 0 20upx;
	font-size:24rpx;
	font-family:Source Han Sans CN;
	font-weight:400;
	color:#666666;
}

.nav .cu-item.cur {
	
	font-size: 28rpx;
	color:rgba(98, 123, 248, 1);
	position: relative;
}
.nav .cu-item.cur:after
{
	content:" ";
	  z-index: 2;
	  width: 40rpx;
	  height: 6rpx;
	  border-radius: 6rpx;
	  background-color: rgba(98, 123, 248, 1);
	  position: absolute;
	  left: calc(50% - 20rpx);
	  bottom: 0rpx;
/* 	  align-self: flex-start;
	  margin-left: 39px; */
}
.cur{
	color: #333333;
	
}
</style>
