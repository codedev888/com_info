<template>
	<view class="warp">
		<nav-bar :isBack="true"></nav-bar>
		<view class="group">
			<view class="banner">
				<view class="star"><u-icon name="star"></u-icon></view>
				<view class="u-demo-area">
					<u-toast ref="uToast"></u-toast>
					<u-swiper @change="change" :height="354" :list="lists" :title="title" :effect3d="effect3d" 
							:indicator-pos="indicatorPos" :mode="mode" :interval="3000" @click="click"></u-swiper>
				</view>
			</view>
			<view class="ctitle">
					<text class="bar">供应</text>标题标题标题，标题标题，标题标题，标题标题标题标题，标题标题，标题标题，标题
			</view>
			<view class="flex-row jc p-l-r cate-date">
					<text class="cate">分类一级-分类二级</text>
					<text class="date">2030-7-26 17:08:24</text>
			</view>
			<view class="p-l-r ft-icon">
					<view><u-icon name="star"></u-icon>40</view>
					<view><u-icon name="eye"></u-icon>40</view>
					<view><u-icon name="heart"></u-icon>40</view>
					<view><u-icon name="phone"></u-icon>40</view>
			</view>
		</view>
		<view class="height20"></view>
		<view class="group">
			<view class="company-info p30 bd">
					<view class="shop-title flex-row jc">
						<view class="left flex-row jc">
							<view class="shop-icon">
								<u-image width="120rpx" height="120rpx" :src="'/static/fz.jpg'" borderRadius="60"></u-image>
							</view>
							<view class="flex-col">
								<view class="name-box">
									<text class="shop-name">深圳市罗湖科技有限公司</text>
									<text class="hot">热度199</text>
								</view>
								<view class="bar flex-row jc">
									<text class="likes" @tap="like">关注</text>
									<text class="view">查看公司</text>
								</view>
								
							</view>
						</view>
					</view>
			</view>
			
			<view class="user flex-row bd">
						<view class="info">已有<text>4</text>个用户登记意向</view>
						<view class="face flex-row">
							<u-image width="60rpx" height="60rpx" :src="'/static/fz.jpg'" borderRadius="30"></u-image>
							<u-image width="60rpx" height="60rpx" :src="'/static/fz.jpg'" borderRadius="30"></u-image>
							<u-image width="60rpx" height="60rpx" :src="'/static/fz.jpg'" borderRadius="30"></u-image>
							<u-image width="60rpx" height="60rpx" :src="'/static/fz.jpg'" borderRadius="30"></u-image>
							<u-image width="60rpx" height="60rpx" :src="'/static/fz.jpg'" borderRadius="30"></u-image>
						
						</view>
			</view>
		</view>
		<view class="group p-l-r bd contact">
				<text class="issee" v-if="contact.tel">已查看</text>
			<view class="title flex-row jc">
				<text class="title-left">联系方式</text>
			</view>
			<view class="contact-li flex-row">
				<text>张小姐</text><text>{{contact.tel?contact.tel:'**********'}}</text>
			</view>
			<view class="contact-li flex-row">
				<text>邮箱</text><text>{{contact.eamil?contact.eamil:'**********'}}</text>
			</view>
		</view>
		<view class="group p-l-r ">
			<view class="title flex-row jc">
				<text class="title-left">产品介绍</text>
			</view>
			<view class="product-intro">
				图文介绍图文介绍图文介绍图文介绍图文介绍
			</view>

		</view>
	<!-- 关注 底部弹窗 -->	
	<view class="likebox" v-show="show">
			<view class="bd tips">确定取消关注？</view>
			<view class="text">
				<view class="bd" @tap="vlike(0)">取消关注</view>
				<view @tap="vlike(1)">继续关注</view>
			</view>

	</view>
	<!-- 关注 底部弹窗 -->	
	<!-- 遮罩层 -->
	<u-mask :show="show" @click="show = false"></u-mask>
	<!-- 遮罩层 -->
	<view class="set-bar flex-row">
		<view class="section3 flex-col yellow" @tap="register">意向登记</view>
		<view class="section3 flex-col" @tap="seeContac">查看联系</view>
		<button class="section3 flex-col active" @tap="evaluation">填写评价</button >
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				contact:{
						tel:'',
						email:''
					},
				title: false,
				mode: 'dot',
				indicatorPos: 'bottomCenter',
				effect3d: false,
				lists: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		methods:{
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}张图片`,
					type: 'success'
				})
			},
			change(index) {
				// console.log(index);
			},
			register(){
				uni.navigateTo({
					url:'../supermarket/intent_register'
				})
			},
			seeContac(){
				this.contact.tel = '13152232565';
				this.contact.eamil = '13152232565@qq.com';
			},
			evaluation(){
				uni.navigateTo({
					url:'../supermarket/service_evaluation'
				})	
			},
			like(){
				console.log('关注');
				this.show = !this.show
			},
			vlike(vul){
				//vul= 0,1  0：取关  1：继续关注
				console.log(vul);
				this.show = !this.show
			}
		}
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 150rpx;
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
	.banner{position: relative;
		.star{position: absolute;
			right:20rpx;
			top: 20rpx;
			font-size: 42rpx;
			color: #fff;
			z-index: 998;
		}
	}
	.ctitle{
		line-height: 40rpx;
		font-size: 30rpx;
		font-weight: 600;
		padding: 20rpx 30rpx;
		.bar{
			
			background: #4967FA;
			padding:5rpx 10rpx;
			color: #fff;
			border-radius: 6rpx;
			margin-right: 10rpx;
			font-size: 24rpx;
			font-weight: normal;
		}
		
	}
	.cate-date{
		margin-bottom: 10rpx;
		.cate{color: #666666;
			font-size: 26rpx;
		}
		.date{
			font-size: 22rpx;
		}
	}
	.ft-icon{
		font-size: 30rpx;
		padding-bottom: 30rpx;
		display: flex;
		view{margin-right: 10rpx;}
		
		
	}
	.shop-title{
		.shop-icon .u-image{
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
				background: #FEA251;
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
		
		.hot{
			background: url(/static/fire.png) no-repeat;
			background-size:28rpx;
			background-position: left center;
			padding-left: 30rpx;
			color: rgba(254, 162, 81, 1);
			font-size: 24rpx;
			
		}
		.hot{

			font-size: 26rpx;
		}
	}
	.user{
		padding: 30rpx;
		.info{
			font-size: 30rpx;
			color: #F5CB4A;
			margin-right: 80rpx;
			line-height: 60rpx;
			text{font-size: 36rpx; margin:0rpx 5rpx}
		}
		.face{
			.u-image{width: 60rpx; height:60rpx;
			margin-left: -40rpx;
			box-shadow:-6rpx 0px 6rpx 0px rgba(102, 102, 102, 0.2);
			border-radius: 30rpx;
			overflow: hidden;
			border:#ffffff solid 2rpx
			}
		}

	}
	.product-intro{
		padding-bottom: 20rpx;
	}
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 100rpx; text-align: center; font-size: 34rpx;color: rgba(100, 130, 255, 1); border-left: #f2f2f2 solid 2rpx;}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.section3:after{ border: 0; border-radius: 0rpx;}
.section3:first{border: 0;}
.yellow{color: #F5CB4A;}
.contact{
	position: relative;
	line-height: 60rpx;
	
	padding-bottom: 20rpx;
	.contact-li text{display: block;
	font-size: 28rpx;
	}
	.contact-li text:first-child{ width: 160rpx;
	font-weight: 600;
	}
	.issee{
		position: absolute;
		right:30rpx;
		top: 30rpx;
		display:flex;
		background: #E6E3E0;
		border-radius: 30rpx;
		padding: 0rpx 20rpx;
		line-height: 1.5;
		color: #fff;
		
	}
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
