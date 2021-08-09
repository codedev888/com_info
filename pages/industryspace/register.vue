<template>
	<view class="warp">
		<view class="tips">
			产业空间管理单位将收到您的登记，与您主动
		</view>
		<view class="group p-l-r">
			<view class="title flex-row jc">
				<text class="title-left">意向房源</text>
			</view>
			<view class="box">
				<view class="right">
					<view class="name">园区名称园区名称园区名称园区名称</view>
					<view class="info"><text>楼栋-楼层 | 房源名称房源名称房源名称</text></view>
				</view>
				
			</view>
		</view>
		<view class="height20"></view>
		<view class="group p30">
			<view class="input-box flex-row jc">
				<view class="left flex-row">
					<text class="required">*</text><text>联系电话</text>
				</view>
				<view class="input">
					<u-input :border="false" :required="true" v-model="phone" :height="60" />
				</view>
			</view>
			<view class="input-box flex-row jc">
				<view class="left flex-row">
					<text class="required">*</text><text>联系人</text>
				</view>
				<view class="input">
					<u-input :border="false" :required="true" v-model="names" :height="60" />
				</view>
			</view>		
			<view class="input-box flex-row jc">
				<view class="left flex-row" >
					<text class="required">*</text><text>预约看房时间</text>
				</view>
				<view class="input date">
					
					<u-input :border="false" :required="true" v-model="date" :height="60" @tap="showChange" />
				<u-calendar v-model="show" ref="calendar" :mode="mode" @change="change"
					:start-text="startText" :end-text="endText" :range-color="rangeColor"
					:range-bg-color="rangeBgColor" :max-date="maxDate" :active-bg-color="activeBgColor" :btn-type="btnType"
				>
				</u-calendar>
				</view>
			</view>	
			<view class="input-box flex-row jc">
				<view class="left flex-row">
					<text class="required"></text><text>企业名称</text>
				</view>
				<view class="input">
					<u-input :border="false"  v-model="company" :height="60" />
				</view>
			</view>

		</view>
	<view class="set-bar flex-row">
		<view class="section3 flex-col" @tap="cancel">取消</view>
		<button class="section3 flex-col active" @tap="setdata">提交</button >
	</view>
	</view>
</template>

<script>
	export default{

		data(){
			return{

			phone:'',
			names:'',
			company:'',
				show: false,
				mode: 'date',
				date: "请选择日期",
				maxDate: '2022-09-07',
				startText: '开始',
				endText: '结束',
				rangeColor: '#2979ff',
				rangeBgColor: 'rgba(41,121,255,0.13)',
				activeBgColor: '#2979ff',
				btnType: 'primary',
				
			}
		},
		computed: {
			showBtnStatus() {
				return this.show ? 0 : 1;
			}
		},
		methods:{
			setdata(){
				console.log(this.phone,this.names,this.company,this.intro);
				uni.navigateTo({
					url:'../supermarket/intention_registration_successful'
				})
			},
			showChange(){
				this.show = !this.show;
			},
			cancel(){
			this.phone="";
			this.names="";
			this.company="";
			this.intro="";
			},

			change(e) {
				console.log(e);
				
					this.date = e.result;
			
			}
		}
	}
</script>

<style lang="scss">
	.box{ padding:30rpx 0;

		.right{

			padding-left: 10rpx;
			
			.name{font-weight:600; font-size: 30rpx;
			padding-bottom: 20rpx;}
		}
	}
.input-box{
	margin: 20rpx 0;
	.left{
		width: 200rpx;
		font-size: 26rpx;
		line-height: 60rpx;
		.required{width: 20rpx; display: block;
		color: #FA675C;
		}
		
	}
	.input{border-radius: 8rpx;
		overflow: hidden; 
		border: #f2f2f2 solid 2rpx;
		width: 540rpx;
		padding: 0rpx 20rpx;
		}
}
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 100rpx; text-align: center; font-size: 28rpx;color: rgba(100, 130, 255, 1); border-left: #f2f2f2 solid 2rpx;}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.section3:after{ border: 0; border-radius: 0rpx;}
.section3:first{border: 0;}
.date .u-input{
	background:url(/static/rl-icon@2x.png) no-repeat;
	background-position: 98% center;
	background-size: 32rpx;
}
uni-button{border-radius: 0;}
	.tips{
		font-size: 28rpx;
		color: #EB5E00;
		 background-color: rgba(235, 94, 0, 0.02);
		 line-height: 60rpx;
		 padding: 0rpx 30rpx;
	}
.tags{
	padding-bottom: 12rpx;
	text{background: #E4E8FB;
	border-radius: 6rpx;
	padding: 6rpx 10rpx;
	margin-right: 10rpx;
	color:#939ED1;
	font-size: 22rpx;
	}
	text:last-child{background: #FBF2E4;
	color: #C9AE85;
	}
}
</style>
