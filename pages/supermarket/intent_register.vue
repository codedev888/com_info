<template>
	<view class="warp">
		<nav-bar :isBack="true"></nav-bar>
		<view class="tips">
			企业将收到您的登记，与您主动建立联系！
		</view>
		<view class="group p-l-r">
			<view class="title flex-row jc">
				<text class="title-left">意向服务</text>
			</view>
			<view class="box flex-row jc">
				<view class="left">
					<u-image width="160rpx" height="140rpx" :src="'/static/fz.jpg'"></u-image>
				</view>
				<view class="right">
					<view class="name">商标注册</view>
					<view class="tags"><text>品牌保障</text><text>科技创新券服务机构</text></view>
					<view class="info"><text>指北针生活服务880店铺</text></view>
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
				<view class="left flex-row">
					<text class="required"></text><text>企业名称</text>
				</view>
				<view class="input">
					<u-input :border="false"  v-model="company" :height="60" />
				</view>
			</view>
			<view class="input-box flex-row jc">
				<view class="left flex-row">
					<text class="required"></text><text>意向详情</text>
				</view>
				<view class="input">
				<u-input type="textarea" :border="false" :height="200" placeholder="请填写简介" v-model="intro" />
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
			intro:'',
			aaa:'{border-radius:10rpx}'
				
			}
		},
		methods:{
			setdata(){
				console.log(this.phone,this.names,this.company,this.intro);
				uni.navigateTo({
					url:'../supermarket/intention_registration_successful'
				})
			},
			cancel(){
			this.phone="";
			this.names="";
			this.company="";
			this.intro="";
			}
		}
	}
</script>

<style lang="scss">
	.box{ padding:30rpx 0;
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
.input-box{
	margin: 20rpx 0;
	.left{
		width: 180rpx;
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
