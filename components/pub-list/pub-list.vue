<template>
	<view>
		 <view  v-for="(item,index) in list"  class="pub-list">
			 <!--找政府-->
			  <block v-if="type=='gove'">
				  <view class="tips-item bd">
				  	  <view>市内免税店引进品牌奖励</view>
				  	  <view>大型商业网点升级改造扶持！</view>
				  	  <view>商贸企业做大做强奖励</view>
				  </view>
			  </block> 
			   <!--找房源-->
			  <block v-if="type=='house'||type=='house_bnt'">
				     <view class="section24 flex-row bd">
				     	<u-image width="210rpx" height="210rpx" :src="item.gardenImg" ></u-image>
				     	<view class="main3 flex-col">
				     	  <text class="info5">{{item.gardenName}}</text>
				     	  <view class="outer1 flex-row">
				     		<view class="mod2 flex-col"><text class="txt8">租售中</text></view>
				     		<view class="mod2 flex-col"><text class="txt8">198-500</text></view>
				     		<view class="mod2 flex-col"><text class="txt8">建设中</text></view>
				     	  </view>
				     	  <text class="paragraph1">
				     		社会物业&nbsp;|&nbsp;面积&nbsp;{{item.roomTotalArea}}㎡
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
					 
					 <block v-if="type=='house_bnt'">
						 
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
					 </block>
					 
			  </block>
			 
			  
			  
			  <!--找伙伴-->
			  <block v-if="type=='partner'">
				  <view class="section34 flex-row bd">
				  	<view class="group1 flex-col">
				  	<view class="box3 flex-col"><text class="word40">{{item.typeOneName}}</text></view>
				  	<u-image width="210rpx" height="176rpx" :src="item.imgUrl" ></u-image>
				  	</view>
				  	<view class="group2 flex-col">
				  		<view class="flex-col title">
				  		  <text class="txt14">{{item.serviceTitle}}</text>
				  		  <text class="word26">{{item.corpName}}</text>	
				  		</view>
				  		<view class="outer3 flex-row">
				  			<view class="section35">
				  			  <text class="word27">访问</text>
				  			  <text class="word28">{{item.visitCount}}</text>
				  			  <text class="word29">次</text>
				  			</view>
				  			<view class="section36">
				  			  <text class="info13">登记意向</text>
				  			  <text class="word30">{{item.monthHotCount}}</text>
				  			  <text class="info14">个</text>
				  			</view>
				  		</view>
				  	</view>
				  </view>
				  
			  </block>
			  
			  <block v-if="type=='fina'">
				   <!-- <view class="tips-item bd">
				    	  <view>“专精特新”贷利率9.5折优惠</view>
				    	  <view>债转股转股资产交易！</view>
				    	  <view>融资辅导</view>
				    </view>-->
					<view class="section34 flex-row bd">
						<view class="group1 flex-col">
							<view class="box3 flex-col"><text class="word40">{{item.typeOneName}}</text></view>
						 
						    	<u-image width="210rpx" height="210rpx" :src="item.imgUrl" ></u-image>
						</view>
						<view class="group2 flex-col">
							<view class="flex-col title">
							  <text class="txt14">{{item.serviceTitle}}</text>
							  <text class="word26">{{item.corpName}}</text>	
							</view>
							<view class="outer3 flex-row">
								<view class="section35">
								  <text class="word27">访问</text>
								  <text class="word28">{{item.visitCount}}</text>
								  <text class="word29">次</text>
								</view>
								<view class="section36">
								  <text class="info13">登记意向</text>
								  <text class="word30">{{item.monthHotCount}}</text>
								  <text class="info14">个</text>
								</view>
							</view>
						</view>
					</view>
			  </block>
			  
		</view>
	</view>
</template>

<script>
	export default {
		name:"pub-list",
		props: {
		   type: {
				type: String,
				default: 'gove'
			   },
			list: {
				type: Array,
				default: () => []
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>


<style lang="scss">
	.u-demo-area {
		margin: 0 -40rpx;
	}

	.page {
	  padding-bottom: 160rpx;
	}
	.tips-item {
		padding:20rpx 30rpx;
		line-height: 46rpx;
		font-size: 28rpx;
	}
	.tips-item .active{
		color: #5C7EFE;
		}
	.box1 {
	  z-index: auto;
	  width: 750rpx;
	  background: #fff;
	}
		
.txt1 {
	 
	  width: 318rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(0, 0, 0, 1);
	  font-family: PingFang-SC-Bold;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: right;
	  margin-left: 8rpx;
	}
	
	.icon1 {

	  width: 54rpx;
	  margin: 6rpx 0 0 2rpx;
	}
	
	.section3 {
	  z-index: auto;
	  width: 750rpx;
	 justify-content: space-between;
	  padding:15rpx 30rpx
	}
	
	.section4 {

	  width: 88rpx;
	  height: 88rpx;
	  border-radius: 50rpx;
	  box-shadow: #E3E3E3 0rpx 4rpx 8rpx;
	  overflow: hidden;
	}
	.section4 image{
		width: 88rpx;
		height: 88rpx;
	}	
	.section5 {
	  z-index: auto;
	  width: 268rpx;
	  height: 80rpx;
	  margin: 4rpx 0 0 16rpx;
	}
	
	.word2 {
	  width: 418rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 28rpx;
	  white-space: nowrap;
	  line-height: 34rpx;
	  margin-top: 6rpx;
	}
	
	.word3 {
	  width: 268rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: #666666;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	  margin-top: 4rpx;
	}
	
	.word4 {
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(93, 123, 255, 1);

	  white-space: nowrap;
	  
	  text-align: right;
	  margin: 50rpx 0 0 0rpx;
	}

	
	.section7 {
		display: flex;
	  z-index: auto;
	  width: 750rpx;
	
	  padding:30rpx;
	  justify-content: space-between;
	}
	.section7 .item{
		display: flex;
		flex-flow: column;
		text-align: center;
		align-items: center;
		font-size: 24rpx;
		color: #666666;
	}
	.section7 .item .icon{
		width: 64rpx;
		height: 64rpx;
	} 


 	.section9 {
	  z-index: auto;
	  width: 750rpx;
	  padding: 10rpx;
	  padding-left: 50rpx;
	  justify-content: space-between;
	  position: relative;
	  font-weight: 600;
		.u-image{
			position: absolute;
			left: 30rpx;
			top: 46rpx;
		}

	}


	
	.txt3 {
	  width: 104rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Semibold;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  margin: 2rpx 0 0 22rpx;
	}
	
	.view-more {
	  width: 750rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 28rpx;
	  white-space: nowrap;

	  text-align: center;
	  align-self: center;
	  padding: 20rpx;
	}
	

	.section18 {
	  z-index: auto;
	  width: 750rpx;
	  padding: 20rpx 30rpx;
	  justify-content: space-between;
	
	}
	.section18-left{justify-content: space-between;display: flex;}

	.txt6 {
	  width: 86rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Semibold;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  margin-left: 22rpx;
	}
	
	.word10 {
	  width: 232rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 24rpx;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	  margin: 4rpx 0 0 18rpx;
	}
	
	.icon7 {
	  width: 32rpx;
	  height: 32rpx;
	  margin: 2rpx 0 0 162rpx;
	}
	
	.section24 {
	  z-index: auto;
	  width: 750rpx;
	  
	  justify-content: space-between;
	  padding: 30rpx;
	}

	.main3 {
	  z-index: auto;
	  width: 450rpx;

	}
	
	.info5 {
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
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(153, 153, 153, 1);
	  font-size: 22rpx;
	  white-space: nowrap;
	}
	

	
	.paragraph1 {
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
.section34 {
  width: 750rpx;

  justify-content: space-between;
  padding: 30rpx;
}
	.group1 {
	  position:relative
	}
	.group1 image{
	  width: 210rpx;
	  border-radius: 4rpx;	
	}
.box3 {
	z-index: 9;
  height: 40rpx;
  border-radius: 4rpx 0 4rpx 0;
  background-color: rgba(93, 126, 255, 1);
  width: 112rpx;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
}
	.word40 {
	  width: 98rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(255, 255, 255, 1);
	  font-size: 24rpx;
	  font-family: PingFangSC-Regular;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	
	}

	.group2 {
	  z-index: auto;
	  width:450rpx;

	}
	
	.txt14 {

	  display: flex;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	 
	  font-family: PingFangSC-Medium;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	}
	.group2 .title{height: 130rpx;}
	.word26 {
	  display: flex;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 26rpx;
	  white-space: nowrap;
	  line-height: 36rpx;
	  text-align: left;
	  align-self: flex-start;
	   margin-top: 20rpx; 
	}
	
	.outer3 {
	  z-index: auto;
	  /* width: 380rpx; */
	  height: 36rpx;
	  
	  justify-content: space-between;
	}
	
	.section35 {
	  width: 148rpx;
	  height: 36rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.word27 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.word28 {
	  font-size: 26rpx;
	  font-family: PingFangSC-Semibold;
	  color: rgba(93, 126, 255, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.word29 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.section36 {
	  width: 188rpx;
	  height: 36rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.info13 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.word30 {
	  font-size: 26rpx;
	  font-family: PingFangSC-Semibold;
	  color: rgba(93, 126, 255, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.info14 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	

	.tabbar-item{
		display: flex;
		flex-flow: column;
		text-align: center;
		align-items: center;
		font-size: 24rpx;
	}
	.tabbar-item .robot{margin-top: -30rpx;border-radius: 100rpx; padding-left:5rpx; 
	background: #007AFF; height: 76rpx; width: 76rpx; text-align: center; vertical-align: middle; display: flex;
	border:4rpx solid #fff}
	.tabbar-item .robot .icon{ height: 60rpx;width: 66rpx; align-items: center; vertical-align: middle; align-self: center;}
	.tabbar-item .icon,.tabbar-item text{display: flex;}
	.tabbar-item .icon{height: 48rpx; width: 48rpx;}
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
.set{ position: relative;}
.layer9 {
  z-index: auto;
  width: 750rpx;
  justify-content: space-between;
  padding: 20rpx;
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

