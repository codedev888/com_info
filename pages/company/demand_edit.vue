<template>
  <view class="page flex-col">

	<view class="group">
		<view class="info-item">
			<text class="fw">需求状态：</text>
		</view>
		<view class="info-item">
			<u-radio-group v-model="value" @change="radioGroupChange">
				<u-radio 
					@change="radioChange" 
					v-for="(item, index) in list" :key="index" 
					:name="item.name"
					:disabled="item.disabled"
					:active-color="item.color"
				>
					{{item.name}}
				</u-radio>
			</u-radio-group>
			
		</view>	
		<view class="info-item">
		<u-input v-model="values" :type="type" :border="border" :placeholder="placeholder" :customStyle="customstyle"/>
		</view>	
		<view class="info-item flex-flex">
		<!--	<text class="changelist" @tap = "chage(index)" v-for="(item,index) in chlist" :key="index">{{item.name}}</text> 
		 	<text class="changelist" @tap = "chage(2)">已入驻其他区域</text>
			<text class="changelist" @tap = "chage(3)">没有满足需求的园区</text>
			<text class="changelist" @tap = "chage(4)">不符合本地落户条件</text> -->
			<view class="item-box">
				<view class="item" :class="[item.active ? 'active' : '']" @tap="tagClick(index)" v-for="(item, index) in chlist" :key="index">
					{{item.name}}
				</view>
			</view>
		</view>	
	</view>


	<view class="set-bar flex-row">
		<view class="section3 flex-col">取消</view>
		<view class="section3 flex-col active">保存</view>
	</view>
  </view>
</template>
<script>
import demand from '../../components/company/demand/demand.vue';
export default {
	onload(){

	},
  data() {
    return {
				value: '',
				type: 'text',
				border: true,
				values:'',
				placeholder:'填写不入驻原因',
 			list: [
 				{
 					name: '考虑中',
 					disabled: false,
					color: '#6482FF'
 				},
 				{
 					name: '不入驻',
 					disabled: false,
					color: '#6482FF'
 				},
 				{
 					name: '已入驻',
 					disabled: false,
					color: '#6482FF'
 				}
 			],
			chlist: [
					{
						name: '入驻需求取消',
						checked: false,
						active: false
					},
					{
						name: '已入驻其他区域',
						checked: false,
						active: false
					},
					{
						name: '没有满足需求的园区',
						checked: false,
						active: false
					},
					{
						name: '不符合本地落户条件',
						checked: false,
						active: false
					}
			],
 			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
 			value: 'orange',
			activeColor: '#6482FF'

    };
  },
  methods: {
	chage(val){
		console.log(val);
		
	},
	tagClick(index) {
		this.chlist[index].active = !this.chlist[index].active;
	},
  },
  components:{
  }
};
</script>


<style lang="scss">
page{padding-bottom: 100rpx;}
.changelist{padding: 10rpx 20rpx; background: #F7F7F7; margin-right: 20rpx; display: flex;}
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 90rpx; text-align: center; font-size: 28rpx;color: rgba(100, 130, 255, 1); border-left: #f2f2f2 solid 2rpx;}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.section3:first{border: 0;}
.info-item{line-height: 80rpx; padding: 0rpx 30rpx;flex-wrap: wrap;}
 .set-itme{padding: 0rpx 30rpx;}
 .word13{font-size: 32rpx; padding: 20rpx 0rpx 10rpx 0rpx; display: block;}
 .box9{}
 .box9-item{
	 background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdf066cf97096a97ced6e749b316739f7e70db2bbeccaf6cc3c61cd04f2a3c55d) no-repeat;
	 background-size: 40rpx 40rpx;
	 padding:0rpx 0rpx 20rpx 60rpx;
	 line-height: 42rpx;
	 font-size: 28rpx;
	 margin-top: 20rpx;
 }

		.item-box {
			margin-bottom: 50rpx;
			display: flex;
			flex-wrap: wrap;
			/* justify-content: space-between; */
			
			.item {
				border: 1px solid #F7F7F7;
				/* color: $u-type-primary; */
				padding: 0rpx 20rpx;
				margin-top: 20rpx;
				font-size: 28rpx;
				margin-right: 20rpx;
				line-height: 60rpx;
				background: #F7F7F7;
			}
			
			.active {
				color: #FFFFFF;
				background-color: #6482FF;
			}
		}
</style>
