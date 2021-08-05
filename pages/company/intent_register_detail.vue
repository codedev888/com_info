<template>
  <view class="page flex-col">
	  
	<view class="group">
          <view class="box2 flex-row">
            <text class="word3">产业空间名称产业空间</text>
            <text class="txt2">待确认</text>
          </view>
	</view>
	<view class="height20"></view>
	<view class="group">
		<view class="item-box">
			<view class="box4 flex-row bd">
				<image class="img1" mode="widthFix" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng140cea8dc9e8d7ee7772b2a0c433edff0802786209cc151dd50111d3ad08f5cf">
				</image>
				<view class="box5">
					<view class="mod2 flex-col">
						<view class="flex-row info">
							<text class="txt3">楼层</text><text class="txt4">A栋-低层</text>
						</view>
						<view class="flex-row info">
							<text class="txt3">面积</text><text class="txt4">500㎡</text>
						</view>
						<view class="flex-row info">
							<text class="txt3">价格</text><text class="txt4">27元/㎡/月</text>
						</view>
					</view>

				</view>
	
				<view class="mod4">
					<text class="word8">查看</text>
				</view>
			</view>
			
			<view class="box4 flex-row bd">
				<image class="img1" mode="widthFix" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ec671156da63b581caa16d22075b42b0626dd7e0b765a86080bf2278fe7477a">
				</image>
				<view class="box5">
					<view class="mod2 flex-col">
						<view class="flex-row info info2">
							<text class="txt3">0</text>
						</view>
						<view class="flex-row info">
							<text class="txt3">预约时间</text><text class="txt4">2020-09-20&nbsp;&nbsp;18:15</text>
						</view>
					</view>
							
				
				</view>

			</view>		
			<view class="box4 flex-row bd">
				<image class="img1" mode="widthFix" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb1590b8621d2c996dc7b836eb8d2d34b6faabdee91f16ca4b6fd00e6ce8c7fba">
				</image>
				<view class="box5">
					
					<view class="mod2 flex-col">
						<view class="flex-row">
							<text class="txt3">联系电话</text><text class="txt4">15512341234</text>
						</view>
						<view class="flex-row">
							<text class="txt3">联系人</text><text class="txt4">张先生</text>
						</view>
						<view class="flex-row info">
							<text class="txt3">企业名称</text><text class="txt4">罗湖科技创新有限公司</text>
						</view>

					</view>	
					
				</view>

			</view>
		</view>

	</view>
	<view class="height20"></view>
	<view class="group">
		<view class="set-itme">
			<text class="word13">操作记录</text>
			<view class="box9">
				
				<view class="box9-item">
					<view>账号名【企业记录】</view>
					<view>修改了意向登记信息</view>
					<view>2020-6-14&nbsp;22:21:44</view>
				</view>
				<div class="line"></div>
				<view class="box9-item">
					<view>账号名【管理单位记录】</view>
					<view>确认意向登记信息，更新状态为待带看</view>
					<view>2020-6-14&nbsp;22:21:44</view>
				</view>
			</view>
		</view>

		
	</view>
	<view class="set-bar flex-row">
		<view class="section3 flex-col"><text class="word17">编辑</text></view>
		<view class="section3 flex-col active"><text class="word17">取消预约</text></view>
	</view>

  </view>
</template>

<script>

export default {
  data() {
    return {
      constants: {},
	  TabCur: 0,
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
	  scrollLeft: 0,
			list:[
				{
					name:'今日待办',
					check:true
				},
				{
					name:'待确认',
					check:false
				},
				{
					name:'待带看',
					check:false
				},
				{
					name:'待跟进',
					check:false
				},
				{
					name:'已关闭',
					check:false
				},
			],
			checkIndex:0,
			currentItem:0

    };
  },
  methods: {
	  tabSelect(e) {
	  	this.TabCur = e.currentTarget.dataset.id;
		this.currentItem =  e.currentTarget.dataset.id;
	  	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
	  }
  },
  components:{

  }
};
</script>
<style>
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 90rpx; text-align: center; font-size: 28rpx;color: rgba(100, 130, 255, 1);}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.box2{
	justify-content: space-between;
	padding: 30rpx;
	font-size: 28rpx;
}
.txt2 {
  z-index: 51;
  display: block;
  overflow-wrap: break-word;
  color: rgba(248, 185, 100, 1);
  font-size: 28rpx;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
}
.item-box{padding: 30rpx;}
.box4{justify-content: space-between; padding: 20rpx 0; position: relative;}
.box5{justify-content: space-between; width:550rpx;}
.txt3{ font-size: 28rpx; padding: 5rpx 0; width: 200rpx;}
.txt4{font-size: 28rpx; padding: 5rpx 0;}
.box4 image{width: 100rpx; height: 100rpx;}
.mod4{height: 44rpx; line-height: 44rpx; padding: 0rpx 20rpx;border-radius: 2px;
  background-color: rgba(100, 130, 255, 0.2);
  position: absolute;
  top: 20rpx;
  right: 0rpx;
  }
 .info2{color: #ffffff;}
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

</style>
