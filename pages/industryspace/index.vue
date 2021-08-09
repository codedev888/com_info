<template>
	<view class="warp">
		<view class="group">
		<view class="search">
			<u-search placeholder="搜索产业空间" v-model="keyword" :show-action="false"></u-search>
		</view>
		 <view class="NavList"> 
			<u-grid :col="5" :border="false">
				<u-grid-item :bg-color="bg" :custom-style="{padding: '10rpx 0 10rpx',color:'#ffffff'}" v-for="(item,index) in list" :key="index">
					<u-image width="72rpx" height="72rpx" :src="item.icon"></u-image>
					<view class="grid-text">{{item.label}}</view>
				</u-grid-item>
		
			</u-grid>

		</view>	 	
		</view>

		<view class="height20"></view>
		<view class="recommend group p-l-r">
			
				<view class="title flex-row jc">
					<text class="title-left">为您推荐</text>
				</view>
		</view>
		<view class="list-con mt10" id="tab">
			<u-sticky ref="sticky">
				<view class="an">
				
					<view class="tab-con" v-show="chShow">
						<view class="choose u-border" @tap="goTop">
							<u-dropdown ref="uDropdown" class="u-dropdown">
								
								<u-dropdown-item v-model="value1" title="罗湖区" :options="options1" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value2" title="用途" :options="options2" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value3" title="面积租用" :options="options3" height="1000">
								</u-dropdown-item>
								<u-dropdown-item v-model="value4" title="更多"  height="600">
									<scroll-view :scroll-y="true" style="height: 800rpx;">
									<view class="slot-content" style="">
										<view class="">产权性质</view>
										<view class="item-box">
											<view class="item" :class="{active:index == cqIndex}" @tap="cqTagClick(index)" v-for="(item, index) in options4" :key="index">
												{{item.label}}
											</view>
										</view>
										<view class="">建设进度</view>
										<view class="item-box">
											<view class="item" :class="{active:index == jdIndex}" @tap="jdTagClick(index)" v-for="(item, index) in options6" :key="index">
												{{item.label}}
											</view>
										</view>
										<view class="">其他标签</view>
										<view class="item-box">
											<view class="item" :class="{active:index == tagIndex}" @tap="tagClick(index)" v-for="(item, index) in options7" :key="index">
												{{item.label}}
											</view>
										</view>
										<view class="flex-row buttonbox">
											<u-button class="rest" type="primary" @click="closeDropdown">取消</u-button>
											<u-button class="submit" type="primary" @click="closeDropdown">确定</u-button>
										</view>

									</view>
									</scroll-view>
								</u-dropdown-item>

							</u-dropdown>
							<view class="absolute" @tap.stop="sortChang(1)">
								<u-image width="22rpx" height="30rpx" :src="sort"></u-image>
							</view>
						</view>
						<view class="type">
							<view class="item" v-for="(item,index) in options5" :key="item.value" @click="typeOn(index)"
								:class="{on:index == indexOn}">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</u-sticky>
			<view class="pad28 listHeight">

		<view class="modecotent group">
					<view class="section24 flex-row bd">
						<view class="main2 flex-flex">
							<u-image border-radius="6" width="210rpx" height="210rpx" :src="'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa'"></u-image>
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
					<!-- <text class="view-more">查看更多&gt;</text> -->
					
			</view>	

					
		
			<text class="word19">没有更多了</text>

			</view>
		</view>

	</view>
</template>

<script>
	export default{
		data(){
			return{
				keyword:'',
				bg:'none',
				sort:'/static/sort.png',
				lists: [{
						name: '政策法规'
					},
					{
						name: '扶持项目'
					},
					{
						name: '层政策解读'
					},
				],
				  list: [
					{
					  label: "办公",
					  icon:'/static/industryspace/BG.png'
					},
					{
					  label: "研发",
					  icon:'/static/industryspace/YF@2x.png'
					},
					{
					  label: "厂房",
					  icon:'/static/industryspace/CF@2x.png'
					},
					{
					  label: "仓库",
					  icon:'/static/industryspace/CK@2x.png'
					},
					{
					  label: "商铺",
					  icon:'/static/industryspace/SP@2x.png'
					},
					{
					  label: "买房",
					  icon:'/static/industryspace/MF@2x.png'
					},
					{
					  label: "城市更新",
					  icon:'/static/industryspace/CSGX@2x.png'
					},
					{
					  label: "地图找房",
					  icon:'/static/industryspace/DTZF@2x.png'
					},
					{
					  label: "空间需求",
					  icon:'/static/industryspace/KJXQ@2x.png'
					},
					{
					  label: "发布房源",
					  icon:'/static/industryspace/FBFY@2x.png'
					}
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
						label: '不限',
						active: true,
					},
					{
						label: '区属国企',
						active: false,
					},
					{
						label: '区物业办',
						active: false,
					},
					{
						label: '社会物业',
						active: false,
					},
					{
						label: '股份公司',
						active: false,
					}
				],
				options6: [{
						label: '不限',
						active: true,
					},
					{
						label: '区属国企',
						active: false,
					},
					{
						label: '区物业办',
						active: false,
					},
					{
						label: '社会物业',
						active: false,
					},
					{
						label: '股份公司',
						active: false,
					}
				],
				options7: [{
						label: '不限',
						active: true,
					},
					{
						label: '区属国企',
						active: false,
					},
					{
						label: '区物业办',
						active: false,
					},
					{
						label: '社会物业',
						active: false,
					},
					{
						label: '股份公司',
						active: false,
					}
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
				tagIndex:0,
				cqIndex:0,
				jdIndex:0,
				chShow: true
			}
		},
		methods:{
/* 			tabChange(index) {
				index == 2 ? this.chShow = false : this.chShow = true
				this.$refs["sticky"].initObserver()
				this.current = index;
				this.$refs["uDropdown"].close()
				this.goTop()
			}, */
			goTop() {
				
				if (!this.$refs["sticky"].fixed) {
					this.$u.getRect("#tab").then(res => {
						uni.pageScrollTo({
							scrollTop: this.top + res.top - 44,
						})
						setTimeout(() => {
							this.$refs["uDropdown"].getContentHeight()
						}, 500)

					})
				}
			},
			closeDropdown() {
				this.$refs.uDropdown.close();
			},
			typeOn(i) {
				this.indexOn = i
			},
			sortChang(e){
				console.log('排序')
			},
			tagClick(i) {
				
				this.tagIndex = i
				//this.list[index].active = !this.list[index].active;
			},
			cqTagClick(i) {
				
				this.cqIndex = i
				//this.list[index].active = !this.list[index].active;
			},
			jdTagClick(i) {
				
				this.jdIndex = i
				//this.list[index].active = !this.list[index].active;
			}
		}
		
	}
</script>

<style lang="scss">
	page{
		
	}
	.search{
		padding: 30rpx;
	}
	.warp{
		.NavList {
		  height: 300rpx;
		  width: 100%;
		  margin: auto;
		  background: #ffffff;
		  
		  border-radius: 8rpx;
		  display: flex;

			background: url(/static/industryspace/navbg.png);
			background-size: 750rpx 360rpx;
			padding: 30rpx 30rpx;
			height: 360rpx;
	
		}
	.u-dropdown{
		padding-right: 80rpx;
	}
	.u-grid{
	
	}
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
		background: none !important;
		color: #ffffff;
	}
	.grid,.u-grid-item-box{
		background: none !important;
	}
	.badge-icon{
		
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
	.listHeight {
		min-height: calc(100vh - 280rpx - 44px);
	}
.section24 {

		  width: 750rpx;
		  justify-content: space-between;
		  padding: 30rpx;
		.main2 {

		  margin-right: 40rpx;
		}
		.main2 image{
			width: 210rpx;
			border-radius: 4rpx;
		}
		.main3 {

		  width: 450rpx;
		  height: 210rpx;
		
		}
		
		.info5 {
		
		  width: 296rpx;
		  height: 40rpx;
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
			flex: 1;
		  height: 40rpx;
		  border-radius: 4rpx;
		  background-color: rgba(246, 247, 255, 1);
		  justify-content: center;
		  margin-right: 12rpx;
		  padding:0rpx 12rpx
		}
		
		.txt8 {
		
		  display: block;
		  overflow-wrap: break-word;
		  color: rgba(153, 153, 153, 1);
		  font-size: 22rpx;
		  white-space: nowrap;
		}
		

		
		.paragraph1 {
		  
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
		
		
		.txt9 {
		  font-size: 20rpx;
		  font-family: PingFang-SC-Bold;
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
		}
		
		.word17 {
		  font-size: 20rpx;
		  font-family: PingFang-SC-Bold;
		  color: rgba(251, 150, 115, 1);
		  line-height: 28rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
	}
	.slot-content {
		background-color: #FFFFFF;
		padding: 24rpx;
		
		.item-box {
			margin-bottom: 50rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.item {
				/* border: 1px solid $u-type-primary; */
				color: #333333;
				padding: 8rpx 40rpx;
				border-radius: 100rpx;
				margin-top: 30rpx;
				background: #F7F7F7;
			}
			
			.active {
				color: #FFFFFF;
				background-color: $u-type-primary;
			}
		}
	}
	.buttonbox{
		text-align: center;
		align-items: center;
		justify-content: center;
		margin: auto;
	}
	.rest{
		width: 40%;
		height: 96rpx;
		background: none;
		color: #333333;
		border:solid 2rpx $u-type-primary;
		border-radius: 50rpx;
		margin-right: 10rpx;
	}
	.submit{
		width: 40%;
		height: 96rpx;
		border-radius: 50rpx;
		margin-left: 10rpx;
		}
</style>
