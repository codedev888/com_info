<template>
  <view class="page flex-col">
    <view class="outer1 flex-col">
      <view class="bd3">
        <view class="group2 flex-col">
          <view class="main1 flex-row bd" @tap="go('../../pages/company/views')">
            <text class="info2">查看联系</text>
			<view class="flex-row text-right">
			<text>3条</text>
			<image
			  class="icon1"
			  mode="widthFix"
			  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"></image>
			</view>
            
          </view>
          <view class="main1 flex-row bd" @tap="go('../../pages/company/intent_register')">
            <text class="info2">意向登记</text>
			<view class="flex-row text-right">
			<text>3条</text>
			<image
			  class="icon1"
			  mode="widthFix"
			  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"></image>
			</view>
          </view>
          <view class="main1 flex-row bd" @tap="go('../../pages/company/demand')">
            <text class="info2">我的需求</text>
			<view class="flex-row text-right">
			<text>3条</text>
			<image
			  class="icon1"
			  mode="widthFix"
			  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"></image>
			</view>
          </view>
        </view>
      </view>

    </view>
  
  </view>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    };
  },
  methods: {
	go(e){
		uni.navigateTo({
			url:e
		})
	}
  }
};
</script>
<style>
page{
	height: 100%;
}
.text-right{line-height: 32rpx;}
.text-right text{display: inline-block; padding-top: 4rpx;}
.outer1 {
  z-index: auto;
  width: 750rpx;
  
}




.bd3 {

  background-color: rgba(255, 255, 255, 1);
  width: 750rpx;

}

.group2 {
  z-index: auto;
  width: 750rpx;
  
}

.main1 {
  z-index: auto;
  width: 750rpx;

  justify-content: space-between;
  padding: 30rpx 30rpx;
}

.info2 {
  z-index: 54;
  width: 114rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 28rpx;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
}

.icon1 {
  z-index: 56;
  width: 32rpx;
  height: 32rpx;
  margin-top: 4rpx;
}


</style>
