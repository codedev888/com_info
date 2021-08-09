<template>
	<view class="">
		<view class="group">
			<view class="box flex-row jc">
				<view class="left">
				<u-image border-radius="6" width="160rpx" height="140rpx" :src="'/static/fz.jpg'"></u-image>
				</view>
				<view class="right">
					<view class="name">商标注册</view>
					<view class="info"><text>地址：</text>深南大道</view>
					<view class="info"><text>最近登陆：</text>2020-06-22 09:34:15</view>
				</view>
				
			</view>
		</view>
		<view class="height20"></view>
		<view class="group p-l-r score-box">
			<view class="flex-row jc score-total">
				<view class="left">综合评分 <text>{{comprehensiveScore}}</text></view>
				<view class="right" :class="isok ? 'isok' :2">{{isok ? "提交成功" : "请评分！"}}</view>
			</view>
			<view class="flex-row jc">
				<text class="score-name">态度</text>
				<view class="flex-row">
					<u-rate v-model="value1" :active-color="activeColor" :size="size" :inactive-color="inactiveCcolor" @change="change1" ></u-rate>
					<text class="score">{{starNum1 + ".0"}}</text>
				</view>
				
			</view>
			<view class="flex-row jc"><text class="score-name">专业</text>
				<view class="flex-row">
				<u-rate v-model="value2" :active-color="activeColor" :size="size" :inactive-color="inactiveCcolor" @change="change2" ></u-rate>
				<text class="score">{{starNum2 + ".0"}}</text>
				</view>
			</view>
			<view class="flex-row jc">
				<text class="score-name">响应</text>
				<view class="flex-row">
					<u-rate v-model="value3" :active-color="activeColor" :size="size" :inactive-color="inactiveCcolor" @change="change3" ></u-rate>
					<text class="score">{{starNum3 + ".0"}}</text>
				</view>
			</view>
			<view class="flex-row jc"><text class="score-name">价格</text>
				<view class="flex-row">
					<u-rate v-model="value4" :active-color="activeColor" :size="size" :inactive-color="inactiveCcolor" @change="change4" ></u-rate>
					<text class="score">{{starNum4 + ".0"}}</text>
				</view>
			</view>
		</view>
	<view class="set-bar flex-row">
		<view class="section3 flex-col">取消</view>
		<button :disabled="isok" class="section3 flex-col active" @tap="setdata">提交</button >
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isok:false,
				comprehensiveScore:'5.2',
				starNum1:1.0,
				starNum2:1.0,
				starNum3:1.0,
				starNum4:1.0,
				count: 5,
				value1: 1,
				value2: 1,
				value3: 1,
				value4: 1,
				//选中星星的颜色
				activeColor:"#4967FA",
				//未选中星星的颜色
				inactiveCcolor:"#C2C2C2",
				//星星大小
				size:44,
				
			}
		},
		methods:{
			change1(e){
				console.log(e)
				this.starNum1 = e;
			},
			change2(e){
				console.log(e)
				this.starNum2 = e;
			},	
			change3(e){
				console.log(e)
				this.starNum3 = e;
			},
			change4(e){
				console.log(e)
				this.starNum4 = e;
			},
			setdata(){
				this.isok = !this.isok;
				this.comprehensiveScore = ((this.starNum1 + this.starNum2 + this.starNum3 + this.starNum4) * 0.8).toFixed(1)
			}
		}
	}
</script>

<style lang="scss">
	.box{ padding:30rpx;
		.left image{
			width: 160rpx;
			height: 140rpx;
		}
		.right{
			width:520rpx;
			padding-left: 10rpx;
			
			.name{font-weight:600; font-size: 30rpx;
			padding-bottom: 20rpx;}
		}
	}
	.score-box{padding:20rpx 30rpx;line-height: 80rpx;
	.score-name{
		font-size: 30rpx;
		font-weight: 600;
		
	}
	.score-total{
		font-size: 28rpx;
		 .left text{ font-size: 32rpx;
		color: #FF2419;
		font-weight: 600;
		}
		.right{color: #FF2419;}
	}
	}
	.score{color: #4967FA;
	margin-left: 20rpx;
	font-size: 32rpx;}
	.right.isok{
		color:#FEA251
	}
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 100rpx; text-align: center; font-size: 28rpx;color: rgba(100, 130, 255, 1); border-left: #f2f2f2 solid 2rpx;}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.section3:after{ border: 0; border-radius: 0rpx;}
.section3:first{border: 0;}
uni-button{border-radius: 0;}
</style>
)