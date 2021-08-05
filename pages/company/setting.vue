<template>
  <view class="page flex-col">
    <view class="outer1 flex-col">
      <view class="bd3">
        <view class="group2 flex-col">
          <view class="main1 flex-row bd">
            <text class="info2">修改密码</text>
            <image
              class="icon1"
              mode="widthFix"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"></image>
          </view>
          <view class="main1 flex-row bd">
            <text class="info2">修改注册号码</text>
            <image class="icon1"
              mode="widthFix"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"></image>
          </view>

        </view>
      </view>
      <button class="bd4 flex-col" @click="onClick_1">
        <text class="info3">退出登录</text>
      </button>
    </view>
    <image
      class="label4"
      mode="widthFix"
      src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng20ecb6981f9438a14d7e4590943633dde497317db45de9db9518d90b2b86057e"></image>
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
    onClick_1() {
      //alert(1);
	  console.log('退出成功')
    }
  }
};
</script>
<style>
page{
	height: 100%;
}

.outer1 {
  z-index: auto;
  width: 750rpx;
  height: 590rpx;
}




.bd3 {

  background-color: rgba(255, 255, 255, 1);
  width: 750rpx;

}

.group2 {
  z-index: auto;
  width: 750rpx;
  height: 202rpx;
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



.main3 {
  z-index: auto;
  width: 750rpx;
  height: 40rpx;
  justify-content: space-between;
  margin: 40rpx 0 0 28rpx;
}

.word4 {
  z-index: 55;
  width: 172rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 28rpx;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
}

.icon2 {
  z-index: 59;
  width: 32rpx;
  height: 32rpx;
  margin-top: 4rpx;
}



.bd4 {
  z-index: 67;
  height: 100rpx;
  border-radius: 50rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdfabe70706fff57ea2017410603d670ff3036153e55f50b43d18d406854f555c)
    0px 0px no-repeat;
	background-size: 100%;
  align-self: center;
  margin-top: 120rpx;
  width: 320rpx;
  justify-content: center;
  align-items: center;
}
.bd4::after{border: 0; height: auto; width: auto;}
.info3 {
  z-index: 68;
  width: 144rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 34rpx;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 48rpx;
  text-align: center;
}

.label4 {
  z-index: 16;
  position: absolute;
  left: 30rpx;
  top: 657px;
  width: 48rpx;
  height: 40rpx;
}

	
</style>
