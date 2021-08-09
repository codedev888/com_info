<template>
	<view class="content">
		  <view class="top">
			<image src="../../static/BANNER-HOME1.png" mode="widthFix"></image>
		  </view>
		<view class="home">
			<view class="group p-l-r">
				<view class="NavList">
					<view class="box" v-for="(item,index) in list" :key="index">
					  <image :src="item.icon" alt=""></image>
					  <view>{{item.label}}</view>
					</view>
				</view>	
	
				<view class="banner">
					<view class="u-demo-area">
						<u-toast ref="uToast"></u-toast>
						<u-swiper @change="change" :height="250"  name="coverImg" :list="index_data.informations" :title="title" :effect3d="effect3d" 
						:indicator-pos="indicatorPos" :mode="mode" :interval="3000" @click="click"></u-swiper>
					</view>
				</view>
			</view>
			<view class="height20"></view>
			<!-- 政策日历 -->
			<view class="group zfcalendar p-l-r">
				<view class="title flex-row jc">
					<text class="title-left">政策日历</text>
					<text class="title-right">本周截止 23 个</text>
				</view>
				<view class="swiperText">
					<view class='swiper'>
						<mosowe-swiper
							:lists="text"
							:touchable="true"
							vertical
							swiperType="text"
							textKey="title"
							:height="80"
							/>
					</view>
				</view>
				<view class="navbar flex-row">
					<view class="bar1">保障房政策</view>
					<view class="bar2">人才扶持政策</view>
					<view class="bar3">产业转型扶持</view>
					<view class="bar4">政策计算器</view>
				</view>
			</view>
			<view class="height20"></view>
			<!-- 政策日历结束 -->
			<!-- 企业动态 -->
			<view class="group dynamic p-l-r">
				<view class="title flex-row jc">
					<text class="title-left">行业动态</text>
					
				</view>

				<view class="dtlist">
					<view class="listItem">
						
						
						
					</view>
					<view class="card-wrap">
						<view class="u-body-item flex-row jc">
							<view class="flex-row jc">
							<image src="../../static/icon1.png"></image>
							<view class="flex-col textbox">
								<view class="fw">诉求反馈已解决</view>
								<view>诉求反馈已评价，非常满意</view>
							</view>
							</view>
							<text class="dates">1小时前</text>
						</view>
						
						<view class="u-body-item flex-row jc">
							<view class="flex-row jc">
							<image src="../../static/icon2.png"></image>
							<view class="flex-col textbox">
								<view class="fw">高级珠宝定制20000｜次</view>
								<view>诉求反馈已评价，非常满意</view>
							</view>
							</view>
							<text class="dates">1小时前</text>
						</view>
						<view class="u-body-item flex-row jc">
							<view class="flex-row jc">
							<image src="../../static/icon3.png"></image>
							<view class="flex-col textbox">
								<view class="fw">世界金融中心</view>
								<view>诉求反馈已评价，非常满意</view>
							</view>
							</view>
							<text class="dates">1小时前</text>
						</view>
						
						
					</view>
				</view>
			</view>	

		</view>
	</view>
</template>

<script>
    import {
    		pubGet
    	} from '@/api/store';
	export default {
		components:{
/* 			scrollnotice,
			swiper */
		},
		data() {
			return {
				//title: 'Hello',
				title: true,
				mode: 'none',
				indicatorPos: 'bottomCenter',
				effect3d: false,
				index_data:{},
				  list: [
					{
					  label: "新鲜资讯",
					  icon:'../../static/ICON-HOME-NAV1.png'
					},
					{
					  label: "通知公告",
					  icon:'../../static/ICON-HOME-NAV2.png'
					},
					{
					  label: "诉求心声",
					  icon:'../../static/ICON-HOME-NAV3.png'
					},
					{
					  label: "找政策",
					  icon:'../../static/ICON-HOME-NAV4.png'
					},
					{
					  label: "找空间",
					  icon:'../../static/ICON-HOME-NAV5.png'
					},
					{
					  label: "找服务",
					  icon:'../../static/ICON-HOME-NAV6.png'
					}
				  ],
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
				text: [
					{
						title: '车静安寺客户嘎哈放框架傲胜',
						s: '111'
					}
				],

	

			
			}
		},
		onLoad() {
          this.init();
		},
		methods: {
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}张图片`,
					type: 'success'
				})
			},
			change(index) {
				// console.log(index);
			},
			init(){
				pubGet({url:"api/index/get"}).then(res=>{
					  this.index_data=res.data;
					 // console.log(this.index_data.informations);
				})
			}
		}
	}
</script>

<style scoped lang='scss'>
	page{padding-bottom: 100rpx;}
	.item {
		margin: 30rpx 0;
	}
.title{
	line-height: 80rpx;
	.title-left{font-size: 34rpx;
	background:url(../../static/icon-title.png) no-repeat;
	background-position: left center;
	background-size: 26rpx 26rpx;
	padding-left:36rpx;
	font-weight:600;
	}

	.title-right{
		font-size: 24rpx;
		position:relative;
		
		.blue{color: #627BF8;}
		
	}
	.title-right:before{content: ""; position: absolute; left:-20rpx; top:45%;
	height: 8rpx;
	width: 8rpx;
	border-radius: 4rpx;
	background:#666666
	}
}
.zfcalendar{
	.swiperText{background: #F7F7F7;}
	.navbar{flex-wrap: wrap; padding:30rpx 0;
		view{width: 50%;
			height: 128rpx;
			line-height: 128rpx;
			font-size: 30rpx;
			font-weight:600;
			padding-left: 30rpx;
			}
		view.bar1{
			background: url(../../static/index-navbar1.png) no-repeat;
			background-position: left top;
			background-size: 100% 100%;
		}
		view.bar2{
			background: url(../../static/index-navbar2.png) no-repeat;
			background-position: left top;
			background-size: 100% 100%;
		}
		view.bar3{
			background: url(../../static/index-navbar3.png) no-repeat;
			background-position: left top;
			background-size: 100% 100%;
		}
		view.bar4{
			background: url(../../static/index-navbar5.png) no-repeat;
			background-position: left top;
			background-size: 100% 100%;
		}
	}
}
.dynamic{
.card-wrap { padding: 1px;}
	.u-body-item {
			font-size: 32rpx;
			color: #333;
			padding: 20rpx 10rpx;
	}	
	.u-body-item image {
			width: 100rpx;
			flex: 0 0 100rpx;
			height: 100rpx;
			border-radius: 4rpx;
			margin-left: 12rpx;
	}
	.u-body-item .textbox{height: 100rpx;
	flex-flow: column; 
	flex-direction: column; 
	padding-left: 30rpx; 
	font-size: 14rpx;
	line-height: 40rpx;
	font-size: 28rpx;
	}	
	.dates{font-size: 28rpx;
	color: #999999;}
}
.home {width: 100%;
  .NavList {
    margin-top:-60rpx;
    position: relative;
  }

  .mainBox {
    padding: 0.4rem;
  }
}	
.NavList {
  height: 300rpx;
  width: 100%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0rpx 20rpx rgba(226, 231, 253, 1);
  border-radius: 8rpx;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  > .box {
    text-align: center;
    width: 33%;
    font-size: 28rpx;
    color: #353535;
    > image {
      width: 72rpx;
      height: 72rpx;
    }
    > view {
      margin-top: 0.12rem;
    }
  }
}	


.banner{
		width: 100%;
		/* box-shadow:0px 0px 12px 0px rgba(0,48,107,0.3); */
		margin: 30rpx 0rpx;
}
.top{width: 100%;}
.top image{width: 100%;}

</style>
