<template>
	<view class="warp">
		<nav-bar :isBack="true"></nav-bar>
		<view class="group p30">
			<!-- 搜索开始 -->
			<view class="search">
				<u-search placeholder="搜索产业空间" height="60" v-model="keyword" :show-action="false" :showAction="true" :clearabled="true"></u-search>

			</view>

		</view>
		<view class="height20"></view>
		<!-- 分类 -->
		<view class="group">
			<view class="title flex-row jc p-l-r">
				<text class="title-left">分类</text>
			</view>
			<view class="NavList">
				<view class="box" v-for="(item,index) in list" :key="index">
					 <image :src="item.icon" alt=""></image>
					 <view>{{item.label}}</view>
				</view>
			</view>	
		</view>
		<view class="height20"></view>
		<!-- 分类结束 -->
		<!-- 分类 -->
		<view class="group">
			
			 <view class="wrap">
				<view class="u-tabs-box bd">
					<u-tabs-swiper activeColor="#000000" ref="tabs" :bar-style="{color:'#627BF8',background:'#627BF8'}" :list="tablist" :current="current" @change="change" swiperWidth="750"></u-tabs-swiper>
				</view>
				<view class="screen flex-row jc p-l-r">
					<view class="hot_order">热度排序</view>
					<view class="new_order">最新上架</view>
					<view class="categorize">分类筛选</view>
				</view>
				<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" :is-scroll="false">
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 300rpx;width: 100%;" @scrolltolower="reachBottom">
							<service></service>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 300rpx;width: 100%;" @scrolltolower="reachBottom">
							<shop></shop>
						</scroll-view>
					</swiper-item>
				
				</swiper>
			 </view> 
		</view>
		<view class="height20"></view>
		<!-- 分类结束 -->
		
	</view>
</template>

<script>
	import service from '../../components/supermarket/service.vue';
	import shop from '../../components/supermarket/shop.vue';
export default{
	data(){
		return{
				  list: [
					{
					  label: "金融服务",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3eeb2ba1112e1bbaec4edbc066c5fc6d7db057711cd7d421b2a1d9926bff0122'
					},
					{
					  label: "法律服务",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7bd7a692492a789ed827683f7f54a58d24f9d762bda1c963e29a706180bd350a'
					},
					{
					  label: "综合商务",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngee267eb5796b2d30e0a7508da9bc58740a03a1184b09df44373417a40ad49013'
					},
					{
					  label: "文化旅游",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8d93c7b0cec82ad3908c2acfa060fc5773d9d681218cfd67c72d04560ff9dde4'
					},
					{
					  label: "科技创新",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9b1343c9e71dea5996298c37606b5c0d3055197cc8600eaf6e13d8bfdbf9840d'
					},
					{
					  label: "黄金珠宝",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0cb3b65715661c0884ad7c7bc4e74fef9cae8c9a40a6a1778732949a8644d6ef'
					},
					{
					  label: "知识产权",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngeb449520f2e6f78f02f4c213378dcb3353a32fb8303651419a0249c74ba52183'
					},
					{
					  label: "全部分类",
					  icon:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb800e270bf6f6e943f60b1426db4f2478b1d3ed37970c99d2c8eb1ac5f5b1990'
					}
				  ],
				constants: {},
				TabCur: 0,
				scrollLeft: 0,
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				
				loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
				
				tablist:[
					{
						name:'服务',
						check:true
					},
					{
						name:'店铺',
						check:false
					},
				],
				checkIndex:0,
				currentItem:0,
				keyword:''
		}
	},
	methods:{
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
	}
},
  components:{
	  service,
	  shop
  }
}
</script>

<style lang="scss">
	.screen view{font-size: 28rpx;
	line-height: 100rpx;
	background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8f3bf33343e3196004a4280a227e24030b5bb6b8a2f1666d380a10c7aa32b038) no-repeat;
	background-position: right center;
	padding-right: 30rpx;
	color: #999999;
	}	
	.screen view.categorize{
	background: url(../../static/arrow-top.png) no-repeat;
	background-size: 32rpx 32rpx;
	background-position: right center;
	color: #007AFF;
	}
.NavList {
  height: 360rpx;
  width: 100%;
  margin: auto;
padding: 20rpx 0rpx;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  > .box {
    text-align: center;
    width: 25%;
    font-size: 28rpx;
    color: #353535;
    > image {
      width: 72rpx;
      height: 72rpx;
    }
    > view {
      margin-top: 0.12rem;
    }
  }
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
</style>
