<template>
	<view class="warp">
		<view class="list-con mt10" id="tab">
			<u-sticky ref="sticky">
				<view class="an">
				
					<view class="tab-con" v-show="chShow">
						<view class="choose u-border">
							<u-dropdown ref="uDropdown" class="u-dropdown">
								<u-dropdown-item v-model="value1" title="罗湖区" :options="options1" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value2" title="用途" :options="options2" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value3" title="面积租用" :options="options3" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value4" title="更多" :options="options4" height="600">
								</u-dropdown-item>

							</u-dropdown>
							<view class="absolute" @tap="sortChang">
								<u-image width="22rpx" height="30rpx" :src="sort"></u-image>
							</view>
						</view>

					</view>
				</view>
			</u-sticky>
			<view class="type">
				<view class="item" v-for="(item,index) in options5" :key="item.value" @click="typeOn(index)"
					:class="{on:index == indexOn}">
					{{item.name}}
				</view>
			</view>
		<view class="pad28 listHeight">
		<view class="modecotent group">

					<view class="section24 flex-row bd">
						<view class="main2 flex-flex">
							<u-image border-radius="6" width="210rpx" height="210rpx" :src="'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa'"></u-image>
						</view>
						<view class="main3 flex-col">
						  <text class="info5">深业进元大厦</text>
							<view class="mod2 flex-row">
								<text class="txt8">社会物业&nbsp;|&nbsp;面积&nbsp;79048㎡</text>
								<text class="txt8">清水河街道&nbsp;|&nbsp;办公&nbsp;、商铺</text>
							</view>
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
							<u-image border-radius="6" width="210rpx" height="210rpx" :src="'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa'"></u-image>
						</view>
						<view class="main3 flex-col">
						  <text class="info5">深业进元大厦</text>
						
							<view class="mod2 flex-row">
								<text class="txt8">社会物业&nbsp;|&nbsp;面积&nbsp;79048㎡</text>
								<text class="txt8">清水河街道&nbsp;|&nbsp;办公&nbsp;、商铺</text>
							</view>
	
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

					<!-- <text class="view-more">查看更多&gt;</text> -->
					
			</view>	

	
					  
					
					<!-- <text class="view-more">查看更多&gt;</text> -->
		
			<text class="view-more">没有更多了</text>

			</view>
		</view>

	</view>
</template>

<script>
	export default{
		data(){
			return{
				custonStyle:'',
				keyword:'',
				bg:'none',
				sort:'/static/sort.png',
				  list: [
					{
					  label: "买房",
					  icon:'/static/industryspace/buyhouse/mf.png'
					},
					{
					  label: "办公",
					  icon:'/static/industryspace/buyhouse/bg.png'
					},
					{
					  label: "研发",
					  icon:'/static/industryspace/buyhouse/yf.png'
					},
					{
					  label: "厂房",
					  icon:'/static/industryspace/buyhouse/cf.png'
					},
					{
					  label: "仓库",
					  icon:'/static/industryspace/buyhouse/mf.png'
					},
					{
					  label: "商铺",
					  icon:'/static/industryspace/buyhouse/sp.png'
					},
					
				  ],
				current: 0,
				value1: 1,
				value2: 2,
				value3: 2,
				value4: 2,
				options1: [{
						label: '罗湖区委（政府）办公室',
						value: 1,
					},
					{
						label: '罗湖区发展和改革局',
						value: 2,
					},
					{
						label: '罗湖区工业和信息化局',
						value: 3,
					},
					{
						label: '罗湖区科技创新局',
						value: 4,
					},
					{
						label: '罗湖区人力资源局',
						value: 5,
					},
					{
						label: '罗湖区住房和建设局',
						value: 6,
					},
					{
						label: '罗湖区工业和信息化局',
						value: 7,
					}
				],
				options2: [{
						label: '部门1',
						value: 1,
					},
					{
						label: '部门2',
						value: 2,
					},
				],
				options3: [{
						label: '类型1',
						value: 1,
					},
					{
						label: '类2',
						value: 2,
					},
				],
				options4: [{
						label: '类型4',
						value: 1,
					},
					{
						label: '类2',
						value: 2,
					},
				],
				options5: [{
						name: "有空置房政府产权",
						value: "1"
					},
					{
						name: "政府产权",
						value: "2"
					},
					{
						name: "有租金补贴",
						value: "3"
					}
				],
				top: 0,
				height: 0,
				indexOn: 0,
				chShow: true
			}
		},
		methods:{


			typeOn(i) {
				this.indexOn = i
			},
			sortChang(){
				console.log('排序')
			}
		}
		
	}
</script>

<style lang="scss">
	page{
		min-height: 100%;
	}
	.warp{
		.NavList {
		  width: 100%;
		  margin: auto;
		  border-radius: 8rpx;
		  display: flex;
		}
	.u-dropdown{
		padding-right: 80rpx;
	}

	.u-grid{
		background: #ffffff;
		box-shadow: 0px 10rpx 10rpx 0rpx rgba(226, 231, 253, 1);
		border-radius: 20rpx;
		padding: 30rpx 0;
	}
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
		background: none !important;
		color: #999999;
	}
	.grid,.u-grid-item-box{
		background: none !important;
	}

	.an{
		background: #ffffff;
	}
	.type {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 20rpx;
		.item {
			
			height: 60rpx;
			margin: 0 10rpx;
			line-height: 60rpx;
			text-align: center;
			color: #666;
			font-size: 28rpx;
			background-color: #F3F3F3;
			border-radius: 60rpx;
			padding:0rpx 30rpx;
			&.on {
				background-color: #627BF8;
				color: #fff;
			}
		}
	}
	.choose {
		margin: 20rpx 0;
		box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.05);
		position: relative;
		.absolute{
			position: absolute;
			right:0rpx;
			top:0rpx;
			display: block;
			padding:24rpx 30rpx;
			z-index: 999999;
			text-align: center;
		}
	}
}

.section24 {

		  width: 750rpx;
		  justify-content: space-between;
		  padding: 30rpx;
		.main2 {
		  margin-right: 40rpx;
		}
	
		.info5 {
		  color: rgba(51, 51, 51, 1);
		  font-size: 28rpx;
		  line-height: 50rpx;
		  text-align: left;
		  align-self: flex-start;
		}
		.mod2 {
		flex-wrap: wrap;
		}
		.mod2 .txt8{
			background-color: rgba(246, 247, 255, 1);
			padding:5rpx 12rpx;
			margin: 6rpx 8rpx 6rpx 0;
			border-radius: 8rpx;
			display: block;
			  color: rgba(153, 153, 153, 1);
			  font-size: 22rpx;
		}
		
		.outer2 {
		  z-index: auto;
		  width: 462rpx;
		  height: 50rpx;
		  justify-content: space-between;
		}
	
		.wrap1 {
		  height: 50rpx;
		  overflow-wrap: break-word;
		  text-align: left;
		  white-space: nowrap;
		  font-size: 0;
		  color: rgba(251, 150, 115, 1);
		}
		
		.info6 {
		  font-size: 36rpx;
		  line-height: 50rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		.info7 {
		  font-size: 26rpx;
		  line-height: 50rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		.info8 {
		  font-size: 26rpx;
		  line-height: 28rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		.info9 {
		  font-size: 26rpx;
		  line-height: 28rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		
		.txt9 {
		  font-size: 20rpx;
		  color: rgba(251, 150, 115, 1);
		  line-height: 50rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		.wrap2 {
		 padding: 0px 20rpx;
		  height: 50rpx;
		  overflow-wrap: break-word;
		  text-align: left;
		  font-size: 0;
		  color: #627BF8;
		}
		
		.word17 {
		  font-size: 20rpx;
		  line-height: 28rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
	}
</style>
