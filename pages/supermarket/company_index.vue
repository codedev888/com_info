<template>
	
	<view class="warp">
		<nav-bar :isBack="true"></nav-bar>
		<view class="group">
			<view class="company-info p30 bd">
					<view class="shop-title flex-row jc">
						<view class="left flex-row jc">
							<view class="shop-icon">
								<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9582fb2704521079aa2817ff315a3ced2560bd03d7a258542c8578ade1560ede" mode="widthFix">
								</image>
							</view>
							<view class="flex-col">
								<view class="name-box">
									<text class="shop-name">深圳市罗湖科技有限公司</text>
									
								</view>
								<view class="bar flex-row jc">
									<text class="likes" @tap="like">收藏</text>

								</view>
								
							</view>
						</view>
					</view>
			</view>
			<view class="evbox flex-row">
				<view class="li">
					<view class="fb">4.2</view>
					<view>热度</view>
					
				</view>
				<view class="li">
					<view class="fb">4.2</view>
					<view>服务</view>
					
				</view>
				<view class="li">
					<view class="fb">4.2</view>
					<view>关注</view>
					
				</view>
				<view class="li">
					<view class="fb">4.2</view>
					<view>评价</view>
					
				</view>				
						
				
			</view>
			<view class="lastLogin">
				最近登陆 2030-7-26 17:08
			</view>

		</view>
		<view class="height20"></view>
		<view class="group p-l-r bd contact">
				
			<view class="title flex-row jc">
				<text class="title-left">企业地址</text>
			</view>
			<view class="address flex-row jc">
				<text>深圳市罗湖区黄贝街道深南大道2000号深圳市罗湖区黄贝街道深南大道2000号</text>
				<text class="map">到这去</text>

			</view>

		</view>
		<view class="group p-l-r ">
			<view class="title flex-row jc">
				<text class="title-left">企业简介</text>
			</view>
			<view class="product-intro">
				图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍
			</view>

		</view>
		<view class="group p-l-r ">
			<view class="title flex-row jc">
				<text class="title-left">服务</text>
			</view>
			<view class="product-intro">
				图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍
			</view>

		</view>
 		<view class="screen p-l-r">
			<view class="categorize" @tap="statusChange(0)">分类筛选</view>
			<view class="hot_order">排序</view>
			
		</view>
		<!-- select分类选择器 -->
		<u-select v-model="show" mode="single-column" :list="list" @confirm="confirm"></u-select>
		<!-- select分类选择器 -->
		<view class="group">
			<view class="section34 flex-row bd">
				<view class="group1 flex-col">
					<view class="box3 flex-col"><text class="word40">融资服务</text></view>
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
				</view>
				<view class="group2 flex-col">
					<view class="flex-col title">
					  <text class="txt14">服务标题服务标题服务标题服务标题</text>
					  <text class="word26">创新科技旗舰店</text>	
					</view>
					<view class="outer3 flex-row">
						<view class="section35">
						  <text class="">访问</text>
						  <text class="word28">430</text>
						  <text class="">次</text>
						</view>
						<view class="section35">
						  <text class="">登记意向</text>
						  <text class="word28">430</text>
						  <text class="">个</text>
						</view>
					</view>
				</view>
			</view>
			<view class="section34 flex-row bd">
				<view class="group1 flex-col">
					<view class="box3 flex-col"><text class="word40">融资服务</text></view>
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
				</view>
				<view class="group2 flex-col">
					<view class="flex-col title">
					  <text class="txt14">服务标题服务标题服务标题服务标题</text>
					  <text class="word26">创新科技旗舰店</text>	
					</view>
					<view class="outer3 flex-row">
						<view class="section35">
						  <text class="">访问</text>
						  <text class="word28">430</text>
						  <text class="">次</text>
						</view>
						<view class="section35">
						  <text class="">登记意向</text>
						  <text class="word28">430</text>
						  <text class="">个</text>
						</view>
					</view>
				</view>
			</view>
			<view class="section34 flex-row bd">
				<view class="group1 flex-col">
					<view class="box3 flex-col"><text class="word40">融资服务</text></view>
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
				</view>
				<view class="group2 flex-col">
					<view class="flex-col title">
					  <text class="txt14">服务标题服务标题服务标题服务标题</text>
					  <text class="word26">创新科技旗舰店</text>	
					</view>
					<view class="outer3 flex-row">
						<view class="section35">
						  <text class="">访问</text>
						  <text class="word28">430</text>
						  <text class="">次</text>
						</view>
						<view class="section35">
						  <text class="">登记意向</text>
						  <text class="word28">430</text>
						  <text class="">个</text>
						</view>
					
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default{
		data(){
			return{
				show: false,
				result: '尚未选择',
				defaultValue: [3],
				mode: 'single-column', // single-column, mutil-column, mutil-column-auto
				list: [
					{
						value: '1',
						label: '分类1'
					},
					{
						value: '2',
						label: '分类2'
					}
				],
			}
		},

		methods:{
			//分类选择
		statusChange(index) {
			this.show = !index;
		},
		//分类选择结果
		confirm(e) {

			this.result = '';
			e.map((val, index) => {
				this.result += this.result == '' ? val.label : '-' + val.label;
			})
			
		},
		//取消选择
		cancel(e) {
			console.log(e);
		}
		}
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 150rpx;
	}
	.lastLogin{
		padding:0rpx 30rpx;
		padding-bottom: 30rpx;
		color: #B4B6BE;
		font-size: 24rpx;
	}
	.evbox{padding: 20rpx; text-align: center; line-height: 50rpx;}
	.evbox view{font-size: 26rpx; color: #999999;}
	.evbox view.fb{font-size: 28rpx; color: #333333; font-weight: bold;}
	.evbox .li{
		width: 50%;
		margin-right: 50rpx;
	}
	.likebox{
		background: #ffffff;
		z-index: 10071;
		position: fixed;
		bottom:0px;
		left: 0;
		width: 750rpx;
		line-height: 100rpx;
		.text{text-align:center;
		font-size: 30rpx;}
		.text view:last-child{
			color: #4967FA;
		}
		.tips{
			font-size: 32rpx;
			line-height: 100rpx;
			color: #333333;
		}
	}

	.address{
		padding: 20rpx 0 30rpx 0;
		.map{
			border-radius: 30rpx;
			height: 56rpx;
			line-height: 56rpx;
			display: block;
			border:#4967FA solid 2rpx;
			padding:0rpx 20rpx 0rpx 50rpx;
			background:url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng44a757594bf7cc9722171de7c7360ddf3a995eb2405a66411cee0cf15e24a2cc) no-repeat;
			background-position: 20rpx center;
			width: 240rpx;
		}
	}
	.ft-icon{
		font-size: 30rpx;
		padding-bottom: 30rpx;
		display: flex;
		view{margin-right: 10rpx;}
		
		
	}
	.shop-title{
		.shop-icon image{
			width:120rpx;
			height:120rpx;
			margin-right: 20rpx;
			}
			.name-box{position:relative;
			width: 550rpx;
				.hot{
					position: absolute;
					right: 0rpx;
					top: 15rpx;
				}
			}
		.shop-name{
			font-size: 30rpx;
			font-weight: 600;
			line-height: 60rpx;
			width: 70%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: block;


		}
		.bar{padding: 0rpx;
		width: 360rpx;
			line-height: 60rpx;
			.likes{
				background: rgba(73, 103, 250, 1);
				color: #fff;
			
			}
			.view{
				background: #97C3FF;
				color: #fff;
			}
		}
		.bar text{
			display:block;
			line-height: 60rpx;
			padding: 0rpx 40rpx;
			border-radius: 30rpx;
		}
	
	}

	.product-intro{
		padding-bottom: 20rpx;
	}

.yellow{color: #F5CB4A;}

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
		  color: #FFFFFF;
		  font-size: 24rpx;
		  display: block;
		  line-height: 40rpx;
		  text-align: left;
		
		}
	
		.group2 {
		  z-index: auto;
		  width:450rpx;
	
		}
		
		.txt14 {
		  color: rgba(51, 51, 51, 1);
		  font-size: 28rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 95%;
		  display: block;
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
		  
		  /* justify-content: space-between; */
		}
		
		.section35 {

		  height: 36rpx;
		  overflow-wrap: break-word;
		  text-align: left;
		  white-space: nowrap;
		  font-size: 0;
		  color: #FEA251;
		  font-size: 26rpx;
		  font-weight: bold;
		  margin-right: 30rpx;
		}
		
		.word27 {
		  font-size: 26rpx;
		  color: rgba(51, 51, 51, 1);
		  line-height: 36rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		.word28 {
		  font-size: 32rpx;
		  font-family: PingFangSC-Semibold;
		  color:#FEA251;
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
		.screen{

		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx rgba(121, 121, 121, 0.2);
		 margin-bottom: 20rpx;
		 text-align: center;
		
		}
	.screen view{font-size: 28rpx;
	display: inline-block;
	line-height: 100rpx;
	text-align: center;
	background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8f3bf33343e3196004a4280a227e24030b5bb6b8a2f1666d380a10c7aa32b038) no-repeat;
	background-position: right center;
	padding-right: 30rpx;
	color: #999999;
	margin: 0rpx 60rpx;
	}	
	.screen view.categorize{
	background: url(../../static/arrow-top.png) no-repeat;
	background-size: 32rpx 32rpx;
	background-position: right center;
	color: #007AFF;
	}
uni-button{border-radius: 0;}
	.tips{
		font-size: 28rpx;
		color: #EB5E00;
		 background-color: rgba(235, 94, 0, 0.02);
		 line-height: 60rpx;
		 padding: 0rpx 30rpx;
	}
	.u-indicator-item-dot{background: #f00;}
</style>
