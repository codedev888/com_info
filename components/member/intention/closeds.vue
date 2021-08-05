<template>
	<view class="">
		
		<view class="group">
			<view class="search">
				<u-search placeholder="搜索产业空间" height="56" v-model="keyword" :show-action="false"></u-search>
				<image
				          class="icon3"
				          mode="widthFix"
				          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2690181eba97564869061c465b2cad9c0423c6512eda1655f3184f8a27bf30e3"
				        ></image>
			</view>

            <view class="pake flex-row">
				<view class="main1 flex-row">
					<view class="layer2 flex-row">
						<u-select v-model="shows" :list="list"></u-select>
						<u-button @click="shows = true">{{selectname}}</u-button>
					</view>
					<view class="main2 flex-col">
						<u-button class="txt2" @click="show = true">选择时间</u-button>
						<u-calendar v-model="show" :mode="mode" @change="change"></u-calendar>
					</view>
				</view>
				<view class="word9 flex-row">
					<text>按登记时间排序</text>
				<image
                class="icon2"
                mode="widthFix"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7a380d34b17176d504352aa00134c203e54ee546862b9b02dea60b8dc94f601a"
              ></image></view>
          
            </view>
		</view>
		<view class="height20"></view>
			<view class="group">
				<view class="word14_box">
				  <view class="main12 flex-row">
					<text class="info5 fw">产业空间名称产业空间</text>
					<text class="word15">已关闭</text>
				  </view>
				  <view class="main13 flex-row">
					<text class="txt6">价格:<text class="fw">21元/㎡/月</text></text>
					<text class="txt6">面积:<text class="fw">550㎡</text></text>
					<text class="txt6">楼层:<text class="fw">低层</text></text>
				  </view>
				  <view class="main14 flex-row">
					<text class="txt9">预约时间:2020-6-5 13:45</text>
				   
				  </view>	
				</view>
				<view class="nav_button flex-row">
					 <text class="info6">删除</text>
					 
				</view>
			</view>
		<view class="height20"></view>
			<view class="group">
				<view class="word14_box">
				  <view class="main12 flex-row">
					<text class="info5 fw">产业空间名称产业空间</text>
					<text class="word15">已关闭</text>
				  </view>
				  <view class="main13 flex-row">
					<text class="txt6">价格:<text class="fw">21元/㎡/月</text></text>
					<text class="txt6">面积:<text class="fw">550㎡</text></text>
					<text class="txt6">楼层:<text class="fw">低层</text></text>
				  </view>
				  <view class="main14 flex-row">
					<text class="txt9">预约时间:2020-6-5 13:45</text>
				   
				  </view>	
				</view>
				<view class="nav_button flex-row">
					 <text class="info6">删除</text>
					 
				</view>
			</view>
		<view class="height20"></view>		
			<view class="group">
				<view class="word14_box">
				  <view class="main12 flex-row">
					<text class="info5 fw">产业空间名称产业空间</text>
					<text class="word15">已关闭</text>
				  </view>
				  <view class="main13 flex-row">
					<text class="txt6">价格:<text class="fw">21元/㎡/月</text></text>
					<text class="txt6">面积:<text class="fw">550㎡</text></text>
					<text class="txt6">楼层:<text class="fw">低层</text></text>
				  </view>
				  <view class="main14 flex-row">
					<text class="txt9">预约时间:2020-6-5 13:45</text>
				   
				  </view>	
				</view>
				<view class="nav_button flex-row">
					 <text class="info6">删除</text>
					 
				</view>
			</view>
		<view class="height20"></view>		
	</view>

</template>

<script>
  export default {
    data() {
      return {
      			show: false,
      			mode: 'date',
				shows: false,
				value2: 2,
				selectname:"全部",
				keyword:"",
				list: [
					{
						value: '1',
						label: '测试1'
					},
					{
						value: '2',
						label: '测试2'
					}
				],
		
      }
    },
    methods: {
			change(e) {
				console.log(e);
			},
			open(index) {
				// 展开某个下来菜单时，先关闭原来的其他菜单的高亮
				// 同时内部会自动给当前展开项进行高亮
				this.$refs.uDropdown.highlight();
			},
			close(index) {
				// 关闭的时候，给当前项加上高亮
				// 当然，您也可以通过监听dropdown-item的@change事件进行处理
				this.$refs.uDropdown.highlight(index);
			},
	
    }
  }
</script>

<style>
.search{padding:20rpx 30rpx; position: relative;}
.search image{width: 90rpx; height: 52rpx; position: absolute; top: 22rpx; right: 32rpx;}
.u-icon-wrap{display: none;}
.u-clear-icon{display: none;}
.pake{padding: 30rpx; justify-content: space-between;}
.word9{justify-content: space-between;line-height: 36rpx; width: 220rpx;}
.word9 text{font-size: 28rpx; margin-right: 10rpx; }
.word9 image{height: 34rpx; width: 28rpx; vertical-align: middle;}
.main2 .u-size-default{height: 50rpx !important;
justify-items: left;
 padding-right: 50rpx;
}
.txt2{
	height: 50rpx;
background: url("https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4e6030ccdb0273e28cf7f5df18b5a98111b8cd26d59831ac416e1db96e1efc3f") no-repeat;
background-position: 95% center;
text-align:left;
padding-left: 20rpx;
justify-content:left;

}
.layer2{
text-align:left;

justify-content:left;	
margin-right: 20rpx;

}	
.layer2 .u-size-default{height: 50rpx !important;
background: url("https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb361e5b5b0e35441b45a8de5f865f7b25b637cfa76234f999ca15da793de3983") no-repeat;
background-position: 90% center;
background-size: 18rpx 14rpx;
justify-items: left;
}
.layer2 .u-btn{padding: 0rpx 40rpx 0 20rpx;}
.u-dropdown__menu{width: 750rpx;}
.group7 {
 
  height: 60rpx;
  border-radius: 30rpx;
  background-color: rgba(247, 247, 247, 1);
  align-self: center;
  padding-left: 16rpx;
  width: 750rpx;
  justify-content: center;
  align-items: flex-start;
  padding-left: 40rpx;
}

.word8 {
  
  width: 176rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-family: PingFang-SC-Regular;
  white-space: nowrap;
  line-height: 34rpx;
  text-align: left;
}
.group8{width: 750rpx;}


.group{background: #ffffff;}
.word14 {
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 30rpx;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 21px;
  text-align: left;
  align-self: flex-start;
  
  padding:30rpx;
}

.main11 {
 
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
 
 
  display: block;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 26rpx;
  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;
  
}

.word16 {
  
  
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
  
  display: block;
  width: 100%;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28rpx;
  white-space: nowrap;
  line-height: 90rpx;
  text-align: center;
  align-self: flex-start;
  border-top:2rpx solid #f7f7f7;


}
		.info6:hover{color:#007AFF}
</style>
