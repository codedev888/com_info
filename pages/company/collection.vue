<template>
  <view class="page flex-col">
 
 
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#000000" ref="tabs":bar-style="{color:'#627BF8',background:'#627BF8'}" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item v-for="(item,index) in list" class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" >
						<collection :type="item.row_type" :clist="com_list"></collection>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view> 
		
  </view>
</template>
<script>
import collection from '../../components/company/collection.vue';
import { 
		pubGetpage,
		pubPostpage,
	} from '@/api/store';
import {
		loadingFun
	} from '@/utils/tools';
	import {
		loadingType
	} from '@/utils/type';
export default {
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
					name:'产业空间',
					url:"park/attent/gardenList",
					type:"get",
					row_type:"hous",
					check:true
				},
				{
					name:'企业服务',
					url:"service/list/attent",
					type:"post",
					row_type:"com",
					check:false
				},
				{
					name:'政策扶持',
					check:false
				},
				{
					name:'申报项目',
					check:false
				},
				{
					name:'政策解读',
					check:false
				},
			],
			checkIndex:0,
			currentItem:0,
			status: loadingType.LOADING,
			page:1,
			com_list:[],

    };
  },
  onLoad() {
  	this.getListFun();
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
	  },		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.current=index;
			this.status=loadingType.LOADING;
			this.page=1;
			this.com_list=[];
			this.getListFun();
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			 
			this.$refs.tabs.setFinishCurrent(current);
			this.change(current);
		},
		async getListFun() {
			let {
				page,
				com_list,
				list,
				current,
				status
			} = this;
			if (status == loadingType.FINISHED) return;
			
			var active_list=list[current];
			const params = {
				 page: page
			}
			var pdata={url:active_list.url,params:params};
			var data ="";
			if(active_list.type=="get"){
				  data = await loadingFun(pubGetpage, page, com_list, status, pdata)
			}else{
				  data = await loadingFun(pubPostpage, page, com_list, status, pdata)
			} 
			if (!data) return
			
		 	//console.log(data,"----data----");
			this.page = data.page
			this.com_list = data.dataList
			this.status = data.status
		}
  },
  components:{
	  collection
  }
};
</script>


<style>
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
