<template>
  <view class="search">
	  <nav-bar :isBack="true"></nav-bar>
	  <i-title title="关键字" :icon="false"></i-title>
	  <view class="con">
	  	<u-grid :col="4" :border="false" hover-class="girdOn">
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a1.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a2.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a3.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a4.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a5.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a6.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a7.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
	  		<u-grid-item :custom-style="{textAlign:'center'}">
	  			<navigator url="" hover-class="" class="flex-column">
	  				<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a8.png"></u-image>
	  				<view class="grid-text">贷款服务</view>
	  			</navigator>
	  		</u-grid-item>
			<u-grid-item :custom-style="{textAlign:'center'}">
				<navigator url="" hover-class="" class="flex-column">
					<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a8.png"></u-image>
					<view class="grid-text">贷款服务</view>
				</navigator>
			</u-grid-item>
			<u-grid-item :custom-style="{textAlign:'center'}">
				<navigator url="" hover-class="" class="flex-column">
					<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a8.png"></u-image>
					<view class="grid-text">贷款服务</view>
				</navigator>
			</u-grid-item>
			<u-grid-item :custom-style="{textAlign:'center'}">
				<navigator url="" hover-class="" class="flex-column">
					<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a8.png"></u-image>
					<view class="grid-text">贷款服务</view>
				</navigator>
			</u-grid-item>
			<u-grid-item :custom-style="{textAlign:'center'}">
				<navigator url="" hover-class="" class="flex-column">
					<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a8.png"></u-image>
					<view class="grid-text">贷款服务</view>
				</navigator>
			</u-grid-item>
			<u-grid-item :custom-style="{textAlign:'center'}" v-for="item in 30">
				<navigator url="" hover-class="" class="flex-column">
					<u-image width="68rpx" height="68rpx" src="/static/index/cyzc/search/a8.png"></u-image>
					<view class="grid-text">贷款服务</view>
				</navigator>
			</u-grid-item>
	  	</u-grid>
	  </view>
  </view>
</template>

<script>
export default {
  name:"" ,
  components:{},
  props:{},
  data(){
    return {

    }
  },
  watch:{},
  computed:{},
  methods:{

  },
  onShow(){},
  onHide(){},
  onLaunch(){}
}
</script>
<style lang="scss" scoped>
	.search {
		background-color: #fff;
	}
	/deep/.i-title {
		padding:0 28rpx;
		margin-top: 30rpx;
	}
</style>