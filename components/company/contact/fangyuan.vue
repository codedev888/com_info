<template>
	<view>
			<view class="group">
					<view class="section24 flex-col">
						<view class="names">
								金和瑞瑚琳工业园
						</view>

						<view class="item-box flex-row bd">
							<view class="main2 flex-flex">
								<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa" mode="widthFix"></image>
							</view>
							<view class="main3 flex-col">
								<view class="flex-col flex-1">
									<text class="info5">深业进元大厦</text>
									<view class="outer1 flex-row">
										<view class="mod2 flex-col"><text class="txt8">租售中</text></view>
										<view class="mod2 flex-col"><text class="txt8">198-500</text></view>
										<view class="mod2 flex-col"><text class="txt8">建设中</text></view>
									</view>
								</view>

								<view class="outer2 flex-row">
									<view class="wrap1">
									  <text class="info6">75</text>
									  <text class="info7">元</text>
									  <text class="txt9">/㎡/月起</text>
									</view>
									<view class="wrap2">
									<text class="info6">租</text> 
									</view>
								</view>
							</view>
						</view>
					<view class="layer9 flex-row bd">
						<text class="word7">查看时间&nbsp;2020/5/12&nbsp;14:40:13</text>
						<view class="set flex-row active">
						  <text class="info19">操作</text>
						  <image
							class="label1"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbed6e58f24353c225e678e3eb1d1fd30dc9f7970edbe6b28e657c2064978b04e"
						  ></image>
							<button class="group17 flex-col" @click="onClick_1">
							  <span class="word16">删除</span>
							</button>
						</view>

					</view>
					</view>
					  
					<view class="section24 bd">
						<view class="names">甘坑同富裕工业区</view>
						<view class="item-box flex-row bd">
							<view class="main2 flex-flex">
								<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng41d91673d7be21d120e5a1e39d2f64faf29371787424ccd0978145584de631ad" mode="widthFix"></image>
							</view>
							<view class="main3 flex-col">
								<view class="flex-col flex-1">
									<text class="info5">深业进元大厦</text>
									<view class="outer1 flex-row">
										<view class="mod2 flex-col"><text class="txt8">租售中</text></view>
										<view class="mod2 flex-col"><text class="txt8">198-500</text></view>
										<view class="mod2 flex-col"><text class="txt8">建设中</text></view>
									</view>
								</view>

								<view class="outer2 flex-row">
									<view class="wrap1">
									  <text class="info6">75</text>
									  <text class="info7">元</text>
									  <text class="txt9">/㎡/月起</text>
									</view>
									<view class="wrap2">
									<text class="info6">租</text> 
									</view>
								</view>
							</view>
						</view>
					<view class="layer9 flex-row bd">
						<text class="word7">查看时间&nbsp;2020/5/12&nbsp;14:40:13</text>
						<view class="set flex-row">
						  <text class="info19">操作</text>
						  <image
							class="label1"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbed6e58f24353c225e678e3eb1d1fd30dc9f7970edbe6b28e657c2064978b04e"
						  ></image>
							<button class="group17 flex-col" @click="onClick_1">
							  <span class="word16">删除</span>
							</button>
						</view>

					</view>
					</view>
					<!-- <text class="view-more">查看更多&gt;</text> -->
					
			</view>
			<text class="word19">没有更多了</text>
		</view>

	</view>
</template>

<script>
export default {
  data() {
    return {
      constants: {},
	  TabCur: 0,
	
			checkIndex:0,
			currentItem:0

    };
  },
  methods: {
	
	go(e){
		uni.navigateTo({
			url:e
		})
	},
	onClick_1(e){
		console.log(e)
	}
  }
};
</script>

<style>
.view-more {
	  z-index: 73;
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
.group{background: #ffffff;}
.item-box{width: 750rpx;padding: 10rpx 30rpx;}
.names{width: 750rpx; display: block; font-size: 32rpx; line-height: 72rpx;padding: 30rpx;padding: 10rpx 30rpx;}
.section24 {
	  z-index: auto;
	  width: 750rpx;
	  
	  justify-content: space-between;
	  /* padding: 30rpx; */
	}
	
	.main2 {
	  z-index: 129;
	  margin-right: 40rpx;
	}
	.main2 image{
		width: 210rpx;
		border-radius: 4rpx;
	}
	.main3 {
	  z-index: auto;
	  width: 450rpx;
	  height: 210rpx;
	
	}
	
	.info5 {
	  z-index: 133;
	  width: 296rpx;
	  height: 40rpx;
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
		flex: 1;
	  height: 40rpx;
	  border-radius: 4rpx;
	  background-color: rgba(246, 247, 255, 1);
	  justify-content: center;
	  margin-right: 12rpx;
	  padding:0rpx 12rpx
	}
	
	.txt8 {
	  z-index: 151;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(153, 153, 153, 1);
	  font-size: 22rpx;
	  white-space: nowrap;
	}
	

	
	.paragraph1 {
	  z-index: 157;
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
	  z-index: 137;
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
	
	
	.txt9 {
	  font-size: 20rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.wrap2 {
	  z-index: 141;
	 padding: 0px 20rpx;
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
	


.mod5 {
  z-index: auto;
  width: 750rpx;
  padding: 20rpx 30rpx;
  background: #fff;
}
.sm-nav{  display: inline-block; margin-right: 10rpx;}
.sm-nav.active {
  z-index: 61;
  border-radius: 4rpx;
  background-color: rgba(235, 241, 255, 1);
  justify-content: center;
  align-items: center;

}

.txt3 {
  z-index: 62;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  padding: 10rpx 20rpx;
}
.sm-nav.active .txt3{
	color: rgba(61, 109, 255, 1);
}

.word19 {
  z-index: 88;
 
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 28rpx;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: center;
  align-self: center;
  margin-top: 100rpx;
}	
.set{ position: relative;}
.word19 {
  z-index: 88;
 
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 28rpx;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: center;
  align-self: center;
  margin-top: 100rpx;
}	
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
/* .group17 {
  z-index: 97;
  height: 46rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcf03a94ac2bf92385cdab04e827e983ed6a129ab933261c5527b62ced1b71b8e) -4px -3px
    no-repeat;
  width: 86rpx;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0rpx;
  bottom: -64rpx;
  background: #ffffff;
  box-shadow: #D2D2D2 0rpx 0rpx 8rpx;
} */
.group17{
	display: none;
	border: 2px  solid #fff;
	border-radius: 8rpx;  /*圆角弧度为7px*/
	position: absolute;
	overflow: inherit;
	padding: 2rpx 18rpx;
	right: 0rpx;
	bottom: -56rpx;
	background: #ffffff;
	box-shadow: #D2D2D2 0rpx 0rpx 8rpx;
}
.group17:after{border: 0;}
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
  width: 46rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 22rpx;
  white-space: nowrap;
  line-height: 32rpx;
  text-align: left;
}
.label1 {
  z-index: 89;
  width: 32rpx;
  height: 32rpx;
  margin: 4rpx 0 0 2rpx;
}	
</style>
