<template>
  <view class="page flex-col">
	<view class="" v-for="(item, index) in list" :key="index">
		  <u-cell-group>
			<u-cell-item center :is-link="true" :label="label" :value="item.value" i ndex="index" @tap="go(item.uri)" :hover-class="hoverClass"
			 :arrow="arrow" :title="item.title" :icon="icon">
				<u-badge :absolute="false" v-if="rightSlot == 'badge'" count="105" slot="right-icon"></u-badge>
				<u-switch v-if="rightSlot == 'switch'" slot="right-icon" v-model="checked"></u-switch>
			</u-cell-item>
		  </u-cell-group>	
	</view>  

  </view>
</template>
<script>
export default {
  data() {
    return {
		constants: {},
		icon: '',
		arrow: true,
		label: '',
		rightSlot: true,
		checked: false,
	  list:[
		  {
			  title: '查看联系',
			  value: '3条',
			  uri: '../company/ess_contact'
		  },
		  {
			  title: '意向登记',
			  value: '3条',
			  uri: '../company/ess_registration'
		  },
		  {
			  title: '我的评价',
			  value: '未评价',
			  uri: '../company/ess_evaluate'
		  },
		  {
			  title: '服务订阅',
			  value: '已选3类',
			  uri: '../company/ess_subscribe'
		  },
		  {
			  title: '融资订阅',
			  value: '未订阅',
			  uri: '../company/ess_subscribe'
		  },
	  ],
	  
	  
    };
  },
	computed: {
			hoverClass() {
				// 如果右侧是switch步进器组件的话，去掉cell的点击反馈，因为这个时候点击的反馈应该在switch上
				return this.rightSlot == 'switch' ? 'none' : 'u-cell-hover';
			}
	},
  methods: {
	go(e){
		console.log(e)
		uni.navigateTo({
			url:e
		})
	}
  }
};
</script>
<style lang="scss">
page{
	height: 100%;
}

.u-border-bottom:after{border-top-width:0rpx !important;}
	.gab {
		background-color: rgb(245, 245, 245);
		height: 20rpx;
	}

	.wrap {
		height: 100vh;
		background-color: rgb(241, 241, 241);
	}

	.box {
		padding: 30rpx 00rpx;
		font-size: 28rpx;
		color: $u-type-info;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
