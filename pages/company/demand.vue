<template>
  <view class="page flex-col">

 <view class="wrap">
 	<view class="u-tabs-box bd">
 		<u-tabs-swiper activeColor="#000000" ref="tabs":bar-style="{color:'#627BF8',background:'#627BF8',borderRadius:'6rpx',}" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
 	</view>
 	<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
 		<swiper-item class="swiper-item">
 			<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
				<demand :type="0"></demand>
 			</scroll-view>
 		</swiper-item>
 		<swiper-item class="swiper-item">
 			<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
 				<demand :type="1"></demand>
 			</scroll-view>
 		</swiper-item>
		 <swiper-item class="swiper-item">
			<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
				<demand :type="2"></demand>
			</scroll-view>
		 </swiper-item>	
 	</swiper>
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
      constants: {},
	  TabCur: 0,
	  scrollLeft: 0,
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
			list:[
				{
					name:'全部',
					check:true
				},
				{
					name:'待入驻',
					check:false
				},
				{
					name:'不入驻',
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
	  },		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		}
  },
  components:{
	  demand
  }
};
</script>


<style>
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
.u-scroll-bar{color: #007AFF !important;}
.page {
  z-index: 1;
  position: relative;
  width: 750rpx;
  height: 100%;
  background-color: rgba(247, 247, 247, 1);
  overflow: hidden;
  justify-content: flex-start;
  padding-top: 0;
}

.nav {
	width: 750rpx;
	white-space: nowrap;
	background: #ffffff;
	text-align: center;
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
	color:rgba(153,153,153,1);
}

.nav .cu-item.cur {
	
	font-size: 28rpx;
	color:rgba(0,0,0,1);
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
	  bottom: 20rpx;
/* 	  align-self: flex-start;
	  margin-left: 39px; */
}
.cur{
	color: #333333;
	
}




</style>
