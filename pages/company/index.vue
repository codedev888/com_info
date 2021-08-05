<template>
	<view class="page flex-col">
			<view class="box1 flex-col">
				<!-- 用户账号信息开始 -->
			  <view v-if="isLogin" class="section3 flex-row bd">
				<view class="userinfo flex-flex">
					<view class="section4 flex-col">
						<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd1fe087671bd8852d108646b5073bfeecd3d6b5381285ebaecdda36f8c54f90a" mode="widthFix"></image>
						
					</view>
					<view class="section5 flex-col">
					  <text class="word2 fw">用户名</text>
					  <text class="word3">罗湖区科技创新有限公司</text>
					</view>
				</view>
				<text class="word4" @tap="go('../company/setting')">退出登录</text>
				
				
			  </view>
			  <view v-else class="section3 flex-row bd">
			  				<view class="userinfo flex-flex">
			  					<view class="section4 flex-col">
			  						<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd1fe087671bd8852d108646b5073bfeecd3d6b5381285ebaecdda36f8c54f90a" mode="widthFix"></image>
			  						
			  					</view>
			  					<view class="section5 flex-col">
			  					  <text class="word2 fw">用户名</text>
			  					  <text class="word3">游客</text>
			  					</view>
			  				</view>
			  				<text class="word4" @tap="goLogin">登录</text>
			  				
			  				
			  </view>
			  
			  
			<!-- 用户账号信息结束 -->
			<!-- 菜单开始 -->
			  <view class="section7 bd">
				<view class="item" @tap="go('../company/collection')">
					<image
					  class="icon"
					  mode ="aspectFit"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9dc780dae7c1e93d5e65eaccaa2c02c28e77fdd03a385a2c856e13d598352d01"
					></image>
					<text class="word">我的收藏</text>
				</view>
				<view class="item" @tap="go('../company/industrial_space')">
				  <image
					class="icon"
					mode ="aspectFit"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga0796e9e6b2d9bd62d199155451ad5694cc6c16a065ddd49cc2ed38e4164e95b"
				  ></image>
				  <text class="word">产业空间</text>
				</view>
				<view class="item" @tap="go('../company/ess')">
				  <image
					class="icon"
					mode ="aspectFit"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng01f475858e45973a5a649d3bca451361a13dca5c7f4275d64db06b0b112347f3"
				  ></image>
				  <text class="word">企服超市</text>
				</view>
				<view class="item">
				  <image
					class="icon"
					mode ="aspectFit"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngae60570b820838e5e89286f406b67b3553118db3789d56cbfdea05664d1797f1"
				  ></image>
				  <text class="word">帮助中心</text>
				</view>
			  </view>
			 
			  <view class="section9 flex-row bd">
				<view>
					<image
					  class="icon"
					  mode ="aspectFit"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng402cb5065af8d363438e8bc9e7d8dc2966dac587026888713351cb23b8ce0597"
					></image>
					<text class="txt3 fw">空间发布</text>
				</view>
				
				<image
				  class="icon-right"
				  mode ="widthFix"
				  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"
				></image>
			  </view>

			  <view class="section9 flex-row bd">
				<view>  
					<image
					  class="icon"
					  mode ="aspectFit"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng59ff3d93fdd415ab3d718751172bba1feeff3aef03db40a03aac9240f4119aa0"
					></image>
					<text class="txt3 fw">服务发布</text>
				</view>
				<image
				  class="icon-right"
				  mode ="widthFix"
				  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"
				></image>
			  </view>

			  <view class="section9 flex-row bd">
				<view> 
					<image
					  class="icon"
					  mode ="aspectFit"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5c9a7ce38819f4cfbbf5f4422c99112905900a191a9dd88bb8e20604fa60e73e"
					></image>
					<text class="txt3 fw">消息中心</text>
				</view>
				<image
				  class="icon-right"
				  mode ="widthFix"
				  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"
				></image>
				
			  </view>
			   <!-- 菜单结束 -->
				<!-- 消息提示开始 -->
			  <view class="tips-item bd">
				  <view>你提交的房源意向登记已被跟进</view>
				  <view class="active">收到一条新的通知消息！</view>
				  <view>你关注的中设广场房源上新了！</view>
			  </view>
			 <view class="view-more">查看更多&gt;</view>
			  <!-- 消息提示结束 -->
			<view class="height20"></view>
			 <!-- 找政府开始 -->
			<view class="group">
				<view class="section18 flex-row bd">
					<view class="section18-left" @tap="go('../company/find_government')">
						
						<text class="icon szf"></text>
						<text class="txt6 fw">找政府</text>
						<text class="word10">为你智能匹配推荐4条政策扶持</text>
					</view>

					<image
					  class="icon7"
					  mode="widthFix"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"
					></image>
				</view>
				<view class="tips-item bd">
					  <view>市内免税店引进品牌奖励</view>
					  <view>大型商业网点升级改造扶持！</view>
					  <view>商贸企业做大做强奖励</view>
				</view>
				<view class="view-more" @tap="go('../company/find_government')">查看更多&gt;</view>
			</view>
			 <!-- 找政府结束 -->
			<view class="height20"></view>
			<!-- 找找房源开始 -->
			<view class="group">
				<view class="section18 flex-row bd">
					<view class="section18-left" @tap="go('../company/find_house')">
						<text class="icon sfz"></text>
						
						<text class="txt6 fw">找房源</text>
						<text class="word10">根据你的偏好，智能匹配推荐20个房源</text>
					</view>

					<image
					  class="icon7"
					  mode="widthFix"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"
					></image>
				</view>
				<view class="section24 flex-row bd">
					<view class="main2 flex-flex">
						<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa" mode="widthFix"></image>
					</view>
					<view class="main3 flex-col">
					  <text class="info5">深业进元大厦</text>
					  <view class="outer1 flex-row">
						<view class="mod2 flex-col"><text class="txt8">租售中</text></view>
						<view class="mod2 flex-col"><text class="txt8">198-500</text></view>
						<view class="mod2 flex-col"><text class="txt8">建设中</text></view>
					  </view>
					  <text class="paragraph1">
						社会物业&nbsp;|&nbsp;面积&nbsp;79048㎡
						<br />
						清水河街道&nbsp;|&nbsp;办公&nbsp;、商铺
					  </text>
					  <view class="outer2 flex-row">
						<view class="wrap1">
						  <text class="info6">75</text>
						  <text class="info7">元</text>
						  <text class="txt9">/㎡/月起</text>
						</view>
						<view class="wrap2">
						  <text class="word17">在租</text>
						  <text class="info8"></text>
						  <text class="info6">4</text>
						  <text class="info9">套</text>
						</view>
					  </view>
					</view>
				</view>
				  
				<view class="section24 flex-row bd">
					<view class="main2 flex-flex">
						<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng41d91673d7be21d120e5a1e39d2f64faf29371787424ccd0978145584de631ad" mode="widthFix"></image>
					</view>
					<view class="main3 flex-col">
					  <text class="info5">深业进元大厦</text>
					  <view class="outer1 flex-row">
						<view class="mod2 flex-col"><text class="txt8">租售中</text></view>
						<view class="mod2 flex-col"><text class="txt8">198-500</text></view>
						<view class="mod2 flex-col"><text class="txt8">建设中</text></view>
					  </view>
					  <text class="paragraph1">
						社会物业&nbsp;|&nbsp;面积&nbsp;79048㎡
						<br />
						清水河街道&nbsp;|&nbsp;办公&nbsp;、商铺
					  </text>
					  <view class="outer2 flex-row">
						<view class="wrap1">
						  <text class="info6">75</text>
						  <text class="info7">元</text>
						  <text class="txt9">/㎡/月起</text>
						</view>
						<view class="wrap2">
						  <text class="word17">在租</text>
						  <text class="info8"></text>
						  <text class="info6">4</text>
						  <text class="info9">套</text>
						</view>
					  </view>
					</view>
				</view>
				<text class="view-more">查看更多&gt;</text>
			</view>
			<!-- 找找房源结束 -->
			<view class="height20"></view>
			<!-- 找伙伴源开始 -->
			<view class="group">
				<view class="section18 flex-row bd">
					<view class="section18-left" @tap="go('../company/find_partner')">
						<text class="icon shb"></text>
						
						<text class="txt6 fw">找伙伴</text>
						<text class="word10">根据你的偏好，智能匹配推荐9个企业服务</text>
					</view>

					<image
					  class="icon7"
					  referrerpolicy="no-referrer"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"
					></image>
				</view>		  
				<view class="section34 flex-row bd">
					<view class="group1 flex-col">
						<view class="box3 flex-col"><text class="word40">法律服务</text></view>
						<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
					</view>
					<view class="group2 flex-col">
						<view class="flex-col title">
						  <text class="txt14">服务标题服务标题服务标题服务标题</text>
						  <text class="word26">创新科技旗舰店</text>	
						</view>
						<view class="outer3 flex-row">
							<view class="section35">
							  <text class="word27">访问</text>
							  <text class="word28">430</text>
							  <text class="word29">次</text>
							</view>
							<view class="section36">
							  <text class="info13">登记意向</text>
							  <text class="word30">43</text>
							  <text class="info14">个</text>
							</view>
						</view>
					</view>
				</view>
				<view class="section34 flex-row bd">
					<view class="group1 flex-col">
						<view class="box3 flex-col"><text class="word40">法律服务</text></view>
						<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
					</view>
					<view class="group2 flex-col">
						<view class="flex-col title">
						  <text class="txt14">服务标题服务标题服务标题服务标题</text>
						  <text class="word26">创新科技旗舰店</text>	
						</view>
						<view class="outer3 flex-row">
							<view class="section35">
							  <text class="word27">访问</text>
							  <text class="word28">430</text>
							  <text class="word29">次</text>
							</view>
							<view class="section36">
							  <text class="info13">登记意向</text>
							  <text class="word30">43</text>
							  <text class="info14">个</text>
							</view>
						</view>
					</view>
				</view>
				<text class="view-more" @tap="go('../company/find_partner')">查看更多&gt;</text>	
			</view>
			<!-- 找伙伴源结束 -->
			<view class="height20"></view>
			<!-- 找融资源开始 -->
			<view class="group">
				<view class="section18 flex-row bd">
					<view class="section18-left" @tap="go('../company/find_financing')">
						<text class="icon srz"></text>
						
						<text class="txt6 fw">找融资</text>
						<text class="word10">根据你的偏好，智能匹配推荐3个融资服务</text>
					</view>

					<image
					  class="icon7"
					  referrerpolicy="no-referrer"
					  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8058361730b2f967efe7b955a8e1ea1ff83a3e5cc3c48e08f71570d338e5b7be"
					></image>
				</view>
				<view class="tips-item bd">
					  <view>“专精特新”贷利率9.5折优惠</view>
					  <view>债转股转股资产交易！</view>
					  <view>融资辅导</view>
				</view>
				<view class="view-more" @tap="go('../company/find_financing')">查看更多&gt;</view>
			</view>
			<!-- 找融资源开始 -->
		</view>
		<!-- 底部菜单开始 -->	
		<u-tabbar
			v-model="current"
			:show="show"
			:bg-color="bgColor"
			:border-top="borderTop"
			:list="list"
			:mid-button="midButton"
			:inactive-color="inactiveColor"
			:activeColor="activeColor"
		></u-tabbar>	
		<!-- 底部菜单结束 -->
	</view>
	
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import {
		getUser
	} from '@/api/user'; 
	import {
		showLoginDialog
	} from '@/utils/wxutil'
	import Cache from '@/utils/cache'
	const app = getApp()
	export default{
	  data() {
	    return {
				current: 0,
				show: true,
				bgColor: '#ffffff',
				borderTop: true,
				list: [{
						iconPath: "/static/tabbar/home.png",
						selectedIconPath: "/static/tabbar/home-active.png",
						//pagePath:'/page/company/index',
						text: '首页',
						//count: 2,
						//isDot: true,
						customIcon: false,
					},
					{
						iconPath: "/static/tabbar/service.png",
						selectedIconPath: "/static/tabbar/service-active.png",
						//pagePath:'/page/company/index',
						text: '找服务',
						customIcon: false,
					},
					{
						iconPath: "/static/tabbar/robot.png",
						selectedIconPath: "/static/tabbar/robot.png",
						//pagePath:'/page/company/index',
						text: '机器人',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "/static/tabbar/info.png",
						selectedIconPath: "/static/tabbar/info-active.png",
						//pagePath:'/page/company/index',
						text: '看资讯',
						customIcon: false,
					},
					{
						iconPath: "/static/tabbar/member.png",
						selectedIconPath: "/static/tabbar/member-active.png",
						//pagePath:'/page/company/index',
						text: '主页',
						//count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				midButton: true,
				inactiveColor: '#909399',
				activeColor: '#5098FF'
	    };
	  },
	  methods: {
		 goLogin() {
				let {
					isLogin
				} = this;
				if (!isLogin) {
					 console.log(1111);
				}
				 
		   },

		go(e){
			uni.navigateTo({
						url:e
			})
		},

		  
	  },
	  computed: {
	  			...mapGetters(["userInfo"])
	  		}
	};
	
</script>
<style scoped lang="scss">
	.u-demo-area {
		margin: 0 -40rpx;
	}
</style>
<style>

	.page {
	  padding-bottom: 160rpx;
	}
	.group{background: #ffffff;}
	.tips-item {
		padding:20rpx 30rpx;
		line-height: 46rpx;
	font-size: 28rpx;}
	.tips-item .active{color: #5C7EFE;}
	.box1 {
	  z-index: auto;
	  width: 750rpx;
	  background: #fff;
	}
	
	.txt1 {
	  z-index: 37;
	  width: 318rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(0, 0, 0, 1);
	  font-size: ;
	  font-family: PingFang-SC-Bold;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: right;
	  margin-left: 8rpx;
	}
	
	.icon1 {
	  z-index: 21;
	  width: 54rpx;
	  height: ;
	  margin: 6rpx 0 0 2rpx;
	}
	

	
	.section3 {
	  z-index: auto;
	  width: 750rpx;
	 justify-content: space-between;
	  padding:15rpx 30rpx
	}
	
	.section4 {
	  z-index: 48;
	  width: 88rpx;
	  height: 88rpx;
	  border-radius: 50rpx;
	  box-shadow: #E3E3E3 0rpx 4rpx 8rpx;
	  overflow: hidden;
	}
	.section4 image{
		width: 88rpx;
		height: 88rpx;
	}	
	.section5 {
	  z-index: auto;
	  width: 268rpx;
	  height: 80rpx;
	  margin: 4rpx 0 0 16rpx;
	}
	
	.word2 {
	  z-index: 61;
	  width: 418rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 28rpx;
	  white-space: nowrap;
	  line-height: 34rpx;
	  
	  margin-top: 6rpx;
	}
	
	.word3 {
	  z-index: 47;
	  width: 268rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: #666666;
	  font-size: ;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	  margin-top: 4rpx;
	}
	
	.word4 {
	  z-index: 84;
	  
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(93, 123, 255, 1);
	  font-size: ;
	  white-space: nowrap;
	  
	  text-align: right;
	  margin: 50rpx 0 0 0rpx;
	}

	
	.section7 {
		display: flex;
	  z-index: auto;
	  width: 750rpx;
	
	  padding:30rpx;
	  justify-content: space-between;
	}
	.section7 .item{
		display: flex;
		flex-flow: column;
		text-align: center;
		align-items: center;
		font-size: 24rpx;
		color: #666666;
	}
	.section7 .item .icon{
		width: 64rpx;
		height: 64rpx;
	}


	.section9 {
	  z-index: auto;
	  width: 750rpx;
	  padding: 28rpx 30rpx;
	  justify-content: space-between;
	  
	}
	.section9 view{display: flex;}
	.section9 image.icon{
		width:36rpx;
		height: 36rpx;
	}
	.section9 image.icon-right{
		width:32rpx;
		height: 32rpx;
		display: flex;
	}

	
	.txt3 {
	  z-index: 89;
	  width: 104rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Semibold;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  margin: 2rpx 0 0 22rpx;
	}
	
	.view-more {
	  z-index: 73;
	  width: 750rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 28rpx;
	  white-space: nowrap;

	  text-align: center;
	  align-self: center;
	  padding: 20rpx;
	}
	

	.section18 {
	  z-index: auto;
	  width: 750rpx;

	  padding: 20rpx 30rpx;
	  justify-content: space-between;
	
	}
	.section18-left{justify-content: space-between;display: flex;}
	.section18-left .icon, .section18-left.text{display: flex;}
	.section18-left .icon{
	  z-index: 257;
	  width: 38rpx;
	  height: 38rpx;
	  margin-top: 0rpx;

	}
	.section18-left .icon.szf{
	  background:url("https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng00651486d3e8c5e10d0ea7fd9f8e96a9ccc97caba7c2e53baa958315f582de65") no-repeat;
	  background-size: 36rpx 38rpx;
	}
	.section18-left .icon.sfz{
	  background:url("https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8d9174754b14260af8493f8fb7ed9ca411266d1e5282a5b73225097e655f2169") no-repeat;
	  background-size: 36rpx 34rpx;
	}
	.section18-left .icon.srz{
	  background:url("https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdd0fa8cf824c17d2cc593e6d954a1d28a5e2c3a49c88124c082784e4226c87f4") no-repeat;
	  background-size: 36rpx 36rpx;
	}
	.section18-left .icon.shb{
	  background:url("https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7f7bfbd3bab6723220c18375de7164468598afc6c2e86450e1be6e3cb5c1e2a8") no-repeat;
	  background-size: 38rpx 32rpx;
	}
	.txt6 {
	  z-index: 106;
	  width: 86rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Semibold;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  margin-left: 22rpx;
	}
	
	.word10 {
	  z-index: 125;
	  width: 232rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 24rpx;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	  margin: 4rpx 0 0 18rpx;
	}
	
	.icon7 {
	  z-index: 113;
	  width: 32rpx;
	  height: 32rpx;
	  margin: 2rpx 0 0 162rpx;
	}
	
	.section24 {
	  z-index: auto;
	  width: 750rpx;
	  
	  justify-content: space-between;
	  padding: 30rpx;
	}
	
	.main2 {
	  z-index: 129;
	}
	.main2 image{
		width: 210rpx;
		border-radius: 4rpx;
	}
	.main3 {
	  z-index: auto;
	  width: 450rpx;

	}
	
	.info5 {
	  z-index: 133;
	  width: 296rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Medium;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  align-self: flex-start;
	}
	
	.outer1 {
	  z-index: auto;
	  width: 164rpx;
	  height: 40rpx;
	  margin-top: 10rpx;
	  justify-content: space-between;
	}
	
	.mod2 {
	  height: 40rpx;
	  border-radius: 4rpx;
	  background-color: rgba(246, 247, 255, 1);
	  justify-content: center;
	  margin-right: 12rpx;
	  padding:0rpx 12rpx
	}
	
	.txt8 {
	  z-index: 151;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(153, 153, 153, 1);
	  font-size: 22rpx;
	  white-space: nowrap;
	}
	

	
	.paragraph1 {
	  z-index: 157;
	  width: 296rpx;
	  height: 72rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 26rpx;
	  line-height: 36rpx;
	  text-align: left;
	  align-self: flex-start;
	  margin-top: 6rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.outer2 {
	  z-index: auto;
	  width: 462rpx;
	  height: 50rpx;
	  justify-content: space-between;
	}
	
	.wrap1 {
	  z-index: 137;
	  width: 188rpx;
	  height: 50rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.info6 {
	  font-size: 36rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.info7 {
	  font-size: 26rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.txt9 {
	  font-size: 20rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.wrap2 {
	  z-index: 141;
	  width: 108rpx;
	  height: 50rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  font-size: 0;
	}
	
	.word17 {
	  font-size: 20rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 28rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.info8 {
	  font-size: 26rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 28rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	

	
	.info9 {
	  font-size: 26rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 28rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
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
	  z-index: 167;
	  width: 98rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(255, 255, 255, 1);
	  font-size: 24rpx;
	  font-family: PingFangSC-Regular;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	
	}

	.group2 {
	  z-index: auto;
	  width:450rpx;

	}
	
	.txt14 {
	  z-index: 134;

	  display: flex;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	 
	  font-family: PingFangSC-Medium;
	  white-space: nowrap;
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
	  
	  justify-content: space-between;
	}
	
	.section35 {
	  z-index: 138;
	  width: 148rpx;
	  height: 36rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.word27 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.word28 {
	  font-size: 26rpx;
	  font-family: PingFangSC-Semibold;
	  color: rgba(93, 126, 255, 1);
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
	
	.section36 {
	  z-index: 142;
	  width: 188rpx;
	  height: 36rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.info13 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.word30 {
	  font-size: 26rpx;
	  font-family: PingFangSC-Semibold;
	  color: rgba(93, 126, 255, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.info14 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	

	.section39 {
	  z-index: 163;
	  width: 750rpx;
	  height: 4rpx;
	  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6eeb5cba2c925f32e31245a3df8ea6994cd3687a8ef75a714774644ea8652bb)
	    100% no-repeat;
	  margin-top: 18rpx;
	}
	
	.box5 {
	  height: 100rpx;
	  background:#fff
	    100% no-repeat;
	  width: 750rpx;
	  position: fixed;
	  left: 0;
	  bottom:0rpx;
	  justify-content: space-between;
	  z-index: 998;
	  padding: 10rpx 30rpx;
	}
	.tabbar-item{
		display: flex;
		flex-flow: column;
		text-align: center;
		align-items: center;
		font-size: 24rpx;
	}
	.tabbar-item .robot{margin-top: -30rpx;border-radius: 100rpx; padding-left:5rpx; 
	background: #007AFF; height: 76rpx; width: 76rpx; text-align: center; vertical-align: middle; display: flex;
	border:4rpx solid #fff}
	.tabbar-item .robot .icon{ height: 60rpx;width: 66rpx; align-items: center; vertical-align: middle; align-self: center;}
	.tabbar-item .icon,.tabbar-item text{display: flex;}
	.tabbar-item .icon{height: 48rpx; width: 48rpx;}

</style>
