<template>
  <view class="page flex-col">
	<scroll-view scroll-x class="bg-white nav flex-row bd" scroll-with-animation show-scrollbar="false" :scroll-left="scrollLeft">
			<view class="cu-item flex-flex" :class="index==TabCur?'cur':''" v-for="(item,index) in list" :key="index" @tap="tabSelect" :data-id="index">
				{{item.name}}
			</view>
	</scroll-view>
	<view class="modecotent">
		<view class="mode1" v-if="currentItem === 0">
		<!-- 工作统计 -->
			<view class="group">
				<view class="main8 flex-flex">
					<view class="main8_box">
					   <view class="bd2 flex-col">
						  <view class="group1 flex-row">
							<text class="txt4">工作统计</text>
							<view class="main9 flex-col">
							  <view class="group2 flex-row">
								<text class="info1">今日</text>
								<text class="info1">本周</text>
								<text class="info3">本月</text>
								<text class="info1">累计</text>
							  </view>
							</view>
						  </view>
					
						  <view class="group4 flex-row">
							<text class="word7">预约</text>
							<text class="word8">带看</text>
							<text class="word9">跟进</text>
							<text class="info4">已关闭</text>
						  </view>
						  <view class="group5 flex-row">
							<text class="word10">2</text>
							<text class="word11">2</text>
							<text class="word12">1</text>
							<text class="word13">0</text>
						  </view>
						</view>
					</view>
		 
				</view> 	
			</view>
		 
			  <!-- 工作统计 -->
			  <view class="height20"></view>
			<view class="group">
				  <view class="word14 bd">今日待办（0）</view>
				<view class="word14_box">
				  <view class="main12 flex-row">
					<text class="info5">产业空间名称产业空间</text>
					<text class="word15">待确认</text>
				  </view>
				  <view class="main13 flex-row">
					<text class="txt6">价格:21元/㎡/月</text>
					<text class="txt6">面积:550㎡</text>
					<text class="txt6">楼层:低层</text>
					
				  </view>
				  <view class="main14 flex-row">
					<text class="txt9">预约时间:2020-6-5 13:45</text>
				   
				  </view>	
				</view>
				<view class="nav_button flex-row">
					 <text class="info6">取消预约</text>
					 <text class="info6">编辑</text>
				</view>
			</view>
		</view>
		<view class="mode2" v-if="currentItem === 1">
			<unconfirmed></unconfirmed>
		</view>
		<view class="mode3" v-if="currentItem === 2">
			<untakelook></untakelook>
		</view>
		<view class="mode4" v-if="currentItem === 3">
			<unfollowup></unfollowup>
		</view>
		<view class="mode4" v-if="currentItem === 4">
			<closeds></closeds>
		</view>
	</view> 

  </view>
</template>

<script>
import unconfirmed from '../../components/member/intention/unconfirmed.vue';
import untakelook from '../../components/member/intention/untakelook.vue';
import unfollowup from '../../components/member/intention/unfollowup.vue';
import closeds from '../../components/member/intention/closeds.vue';
export default {
  data() {
    return {
      constants: {},
	  TabCur: 0,
	  scrollLeft: 0,
			list:[
				{
					name:'今日待办',
					check:true
				},
				{
					name:'待确认',
					check:false
				},
				{
					name:'待带看',
					check:false
				},
				{
					name:'待跟进',
					check:false
				},
				{
					name:'已关闭',
					check:false
				},
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
	unconfirmed,
	untakelook,
	unfollowup,
	closeds
  }
};
</script>
<style>
	
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
	  margin-left: 318rpx; */
}
.cur{
	color: #333333;
	
}
	
.page {
  z-index: 1;
  position: relative;
  width: 750rpx;
 
  background-color: rgba(247, 247, 247, 1);
  overflow: hidden;
  justify-content: flex-start;
  padding-top: 0;
}

.main8 {
  z-index: 21;
  height: 274rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga28e113fb91df61611405c29f2fc8e7d7cd9e985ab8f62160542fe57f3097148) -4px -2px
    no-repeat;
	background-size:contain;
	background-position: top center;
  align-self: center;
  margin-top: 30rpx;
  margin-bottom: 30rpx;
  width: 750rpx;
  justify-content: flex-start;
  padding-top: 20rpx;
 padding: 10rpx;
}
.main8_box{padding: 30rpx; width: 100%;}
.bd2 {
  z-index: auto;
  
  height: 214rpx;
 
}

.group1 {
  z-index: auto;
/*  width: 648rpx;
  height: 60rpx; */
  
  justify-content: space-between;
  padding: 0rpx 30rpx;
  width: 100%;
}

.txt4 {
  z-index: 66;
  width: 114rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 28rpx;
  letter-spacing: 0.18148154020309448px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 10rpx;
}

.main9 {
  z-index: 67;
  height: 60rpx;
  border-radius: 30rpx;
  background-color: rgba(246, 248, 255, 1);
  
  justify-content: center;
  align-items: center;
  padding: 0rpx 20rpx;
}

.group2 {
  z-index: auto;
  
  height: 40rpx;
  justify-content: space-between;
}

.info1 {
  z-index: 68;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28rpx;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-right: 10rpx;
}



.info3 {
  z-index: 70;
  width: 58rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(98, 123, 248, 1);
  font-size: 28rpx;
  letter-spacing: 0.18148154020309448px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
   margin-right: 10rpx;
}



.group3 {
  z-index: 51;
  width: 750rpx;
  height: 1px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8b76878fb687e558bbd2ed2d73aa2fbb4b77fa45c9c562e17fb6b4ac02b0e42e) -1px
    0px no-repeat;
  margin-top: 20rpx;
}

.group4 {
  z-index: auto;
  width: 570rpx;
  height: 36rpx;
  justify-content: space-between;
  margin: 22rpx 0 0 60rpx;
}

.word7 {
  z-index: 73;
  width: 54rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
}

.word8 {
  z-index: 76;
  width: 54rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
}

.word9 {
  z-index: 79;
  width: 54rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
}

.info4 {
  z-index: 82;
  width: 80rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
}

.group5 {
  z-index: auto;
  width: 534rpx;
  height: 56rpx;
  margin: 18rpx 0 0 76rpx;
}

.word10 {
  z-index: 74;
  width: 26rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(96, 144, 254, 1);
  font-size: 40rpx;
  letter-spacing: 0.25925934314727783px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 56rpx;
  text-align: left;
}

.word11 {
  z-index: 77;
  width: 26rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(39, 199, 195, 1);
  font-size: 40rpx;
  letter-spacing: 0.25925934314727783px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 56rpx;
  text-align: left;
  margin-left: 148rpx;
}

.word12 {
  z-index: 80;
  width: 18rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(249, 133, 0, 1);
  font-size: 40rpx;
  letter-spacing: 0.25925934314727783px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 56rpx;
  text-align: left;
  margin-left: 138rpx;
}

.word13 {
  z-index: 83;
  width: 26rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(234, 189, 42, 1);
  font-size: 40rpx;
  letter-spacing: 0.25925934314727783px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 56rpx;
  text-align: left;
  margin-left: 160rpx;
}
	

.group{background: #ffffff;}
.word14 {
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 30rpx;
  letter-spacing: 0.19444450736045837px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 21px;
  text-align: left;
  align-self: flex-start;
  
  padding:30rpx;
}

.main11 {
  z-index: 48;
  width: 750rpx;
  height: 4rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng84e2bb1bf8dd82df3b37c29b86d98164a4385e5581a0c27251f52fdf963330ed)
    100% no-repeat;
  margin-top: 28rpx;
}

.main12 {
  z-index: auto;
  height: 60rpx;
  justify-content: space-between;
 line-height: 60rpx;
 
}

.info5 {
  z-index: 84;
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 28rpx;
  letter-spacing: 0.18148154020309448px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
}

.word15 {
  z-index: 93;
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(248, 185, 100, 1);
  font-size: 28rpx;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
}

.main13 {
  z-index: auto;

  height: 60rpx;
justify-content: space-between;
}

.txt6 {
  z-index: 85;
 
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
  
}

.word16 {
  z-index: 89;
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
  margin-left: 8px;
}

.txt7 {
  z-index: 87;
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
  margin-left: 49px;
}

.word17 {
  z-index: 91;
 
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
  margin-left: 8px;
}

.word18 {
  z-index: 88;
 
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
  margin-left: 50px;
}

.txt8 {
  z-index: 92;

  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
  margin-left: 8px;
}

.main14 {
  z-index: auto;

  height: 36rpx;
  justify-content: space-between;
  
}

.txt9 {
  z-index: 86;

  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
}

.txt10 {
  z-index: 90;

  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  letter-spacing: 0.1685185730457306px;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
}


.word14_box{padding: 30rpx;}
.info6 {
  z-index: 94;
  display: block;
  width: 50%;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28rpx;
  white-space: nowrap;
  line-height: 90rpx;
  text-align: center;
  align-self: flex-start;
  border-top:2rpx solid #f7f7f7;
  border-right: 1rpx solid #f7f7f7;

}	
</style>
