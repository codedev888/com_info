<template>
  <view class="main">
	  <nav-bar></nav-bar>
	  <view class="list">
	  	<view class="item pad28 u-border-bottom">
	  		住房和建设局
	  	</view>
		<view class="item pad28 u-border-bottom">
			金融服务署（投资推广和企业服务署）
		</view>
		<view class="item pad28 u-border-bottom">
			层工业和信息化局
		</view>
		<view class="item pad28 u-border-bottom" v-for="item in 10">
			市场监督管理局罗湖监管局
		</view>
		<view class="item pad28 u-border-bottom">
			发展改革局
		</view>
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
  methods:{},
  onShow(){},
  onHide(){},
  onLaunch(){}
}
</script>
<style lang="scss" scoped>
	.main {
		padding-bottom: 140rpx;
	}
	.item {
		padding-top: 28rpx;
		padding-bottom: 28rpx;
	}
</style>