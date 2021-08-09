<template>
	<view class="warp">

 <view class="wrap">
 	<view class="u-tabs-box bd">
 		<u-tabs-swiper activeColor="#5D7EFF" ref="tabs" :font-size="32" :list="clist" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
 	</view>
 	<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
 		<swiper-item class="swiper-item">
 			<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
				<essevaluate :list="list"></essevaluate>
 			</scroll-view>
 		</swiper-item>
 		<swiper-item class="swiper-item">
 			<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
 				<essevaluatedp :list="list" ></essevaluatedp>
 			</scroll-view>
 		</swiper-item>
 	</swiper>
 </view> 
		

		
		
	</view>
</template>

<script>
	import essevaluate from '../../components/company/ess/essevaluate.vue';
	import essevaluatedp from '../../components/company/ess/essevaluatedp.vue';
	import {
	pubPostpage,
	} from '@/api/store';
	import {
		oloadingFun
	} from '@/utils/tools';
	import {
		loadingType
	} from '@/utils/type';
    var url="park/recommend/list";
	export default {
		data() {
			return {
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
			clist:[
				{
					name:'服务',
					check:true
				},
				{
					name:'店铺',
					check:false
				}
			],
			
			 status: loadingType.LOADING,
			 total:0,
			 page:1,
			 list:[],
			}
		},
		components:{
			essevaluate,
			essevaluatedp
		},
	    onLoad() {
		   this.getListFun();
		 },
	   onPullDownRefresh(){
		  this.page++;
		  this.getListFun();
		 },
	 methods: {
	  tabSelect(e) {
	  	this.TabCur = e.currentTarget.dataset.id;
		this.currentItem =  e.currentTarget.dataset.id;
	  	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
	  },		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			//this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		 animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		async getListFun() {
			let {
				page,
				list,
				total,
				status
			} = this;
			if (status == loadingType.FINISHED) return;
			const params = {
				 page: page,
				 searchType:"project"
			}
			var pdata={url:url,params:params};
			const data = await oloadingFun(pubPostpage, page, list, status, pdata,total)
			if (!data) return
			this.page = data.page
			this.list = data.dataList
			this.status = data.status
			this.total=data.rtotal;
		}
		
	  }
	}
</script>

<style>
page{height: 100%;}
.banner image{width: 100%;}

.navbox{width: 100%; padding: 30rpx;}
.block{text-align: center; padding: 30rpx 0rpx; font-size: 28rpx; color: #333333;}
.info2{font-size: 32rpx; font-weight: bold;}
.row1{ background-color: rgba(241, 248, 244, 1);}
.row2{ background-color: rgba(254, 249, 247, 1); margin: 0rpx 30rpx;}
.row3{ background-color: rgba(242, 246, 247, 1);}
.row1 .main1{color: #178B50;}
.row2 .main1{color: #E57631;}
.row3 .main1{color: #4E5A65;}
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
</style>
