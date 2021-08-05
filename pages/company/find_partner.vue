<template>
	<view class="warp">
		
		<view class="group">
			<view class="tips">
				根据你的偏好，智能匹配推荐9个企业服务
			</view>
			<view class="section34 flex-row bd">
				<view class="group1 flex-col">
					<view class="box3 flex-col"><text class="word40">法律服务</text></view>
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
				</view>
				<view class="group2 flex-col">
					<view class="flex-col title">
					  <text class="txt14">服务标题服务标题服务标题服务标题</text>
					  <text class="word26">创新科技旗舰店</text>	
					</view>
					<view class="outer3 flex-row">
						<view class="section35">
						  <text class="word27">访问</text>
						  <text class="word28">430</text>
						  <text class="word29">次</text>
						</view>
						<view class="section36">
						  <text class="info13">登记意向</text>
						  <text class="word30">43</text>
						  <text class="info14">个</text>
						</view>
					</view>
				</view>
			</view>
			<view class="section34 flex-row bd">
				<view class="group1 flex-col">
					<view class="box3 flex-col"><text class="word40">法律服务</text></view>
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
				</view>
				<view class="group2 flex-col">
					<view class="flex-col title">
					  <text class="txt14">服务标题服务标题服务标题服务标题</text>
					  <text class="word26">创新科技旗舰店</text>	
					</view>
					<view class="outer3 flex-row">
						<view class="section35">
						  <text class="word27">访问</text>
						  <text class="word28">430</text>
						  <text class="word29">次</text>
						</view>
						<view class="section36">
						  <text class="info13">登记意向</text>
						  <text class="word30">43</text>
						  <text class="info14">个</text>
						</view>
					</view>
				</view>
			</view>

		</view>


	</view>
</template>

<script>
</script>

<style scoped>
	.tips{
		font-size: 28rpx;
		color: #EB5E00;
		 background-color: rgba(235, 94, 0, 0.02);
		 line-height: 60rpx;
		 padding: 0rpx 30rpx;
	}

	page{height: 100%;}
	.section34 {
	  z-index: auto;
	  width: 750rpx;
	
	  justify-content: space-between;
	  padding: 30rpx;
	}
		.group1 {
		  z-index: 130;
		  position:relative
		}
		.group1 image{
		  width: 210rpx;
		  border-radius: 4rpx;	
		}
	.box3 {
	  z-index: 165;
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
		  z-index: 167;
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
		  z-index: 134;
	
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
		  z-index: 158;
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
		  z-index: 138;
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
		
</style>
