<template>
	<view class="warp">
		<nav-bar :isBack="true"></nav-bar>
		<view class="group">
		<view  @click="jump({url:'/pages/industryspace/search_space'})"   class="search">
			<u-search  placeholder="搜索产业空间" v-model="keyword" :show-action="false"></u-search>
		</view>
		 <view class="NavList"> 
			<u-grid :col="4" :border="false">
				<u-grid-item @click="jump(item)" :bg-color="bg" :custom-style="{padding: '10rpx 0 10rpx',color:'#ffffff'}" v-for="(item,index) in navList" :key="index">
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
						<view class="choose u-border">
							<u-dropdown ref="uDropdown" class="u-dropdown">
							<u-dropdown-item v-model="rentSellValue" :title="rentSellName" :options="rentSellList" height="600" @change="changeRentSell">
								</u-dropdown-item>
								<u-dropdown-item v-model="area" :title="area" :options="areaList" height="600" @change="changeArea">
								</u-dropdown-item>
								<u-dropdown-item v-model="value2" title="租金" height="600">
									<scroll-view :scroll-y="true" style="height: 800rpx;">
										<view class="slot-content flex-wrap" v-if="!rentSellValue">
											<view class="">租金（元/㎡/月）</view>
											<view class="item-box">
												<view class="item" :class="{active:index == rentIndex}" @tap="rent(index)" v-for="(item, index) in rentList" :key="index">
													{{item.name}}
												</view>
											</view>
											<view class="flex-row p-l-r interval">
												<view class="input">
													<u-input v-model="rentFeeStart" type="text" :border="true" placeholder="最小值" />
												</view>
												<view class="input">
													<u-input v-model="rentFeeEnd" type="text" :border="true" placeholder="最大值" />
												</view>
											</view>
											<view class="flex-row buttonbox p-t-b">
												<u-button class="rest" type="primary" @click="closeDropdown">取消</u-button>
												<u-button class="submit" type="primary" @click="rentSave">确定</u-button>
											</view>
										</view>
										<view class="slot-content flex-wrap" v-if="rentSellValue">
											<view class="">售价（万元/㎡）</view>
											<view class="item-box">
												<view class="item" :class="{active:index == sellIndex}" @tap="sellFee(index)" v-for="(item, index) in sellFeeList" :key="index">
													{{item.name}}
												</view>
											</view>
											<view class="flex-row p-l-r interval">
												<view class="input">
													<u-input v-model="sellFeeStart" type="text" :border="true" placeholder="最小值" />
												</view>
												<view class="input">
													<u-input v-model="sellFeeEnd" type="text" :border="true" placeholder="最大值" />
												</view>
											</view>
											<view class="flex-row buttonbox p-t-b">
												<u-button class="rest" type="primary" @click="closeDropdown">取消</u-button>
												<u-button class="submit" type="primary" @click="sellSave">确定</u-button>
											</view>
										</view>
							
									</scroll-view>
								</u-dropdown-item>
								<u-dropdown-item v-model="value3" title="面积租用" height="600">
									<scroll-view :scroll-y="true" style="height: 800rpx;">
									<view class="slot-content" style="">
										<view>面积（㎡）</view>
										<view class="item-box">
											<view class="item" :class="{active:index == roomIndex}" @tap="room(index)" v-for="(item, index) in roomList" :key="index">
												{{item.name}}
											</view>
										</view>
										<view class="flex-row p-l-r interval">
											<view class="input">
												<u-input v-model="roomAreaStart" type="text" :border="true" placeholder="最小值" />
											</view>
											<view class="input">
												<u-input v-model="roomAreaEnd" type="text" :border="true" placeholder="最大值" />
											</view>
										</view>
										<view class="flex-row buttonbox p-t-b">
											<u-button class="rest" type="primary" @click="closeDropdown">取消</u-button>
											<u-button class="submit" type="primary" @click="roomSave">确定</u-button>
										</view>
							
									</view>
									</scroll-view>
								</u-dropdown-item>
								<u-dropdown-item v-model="value4" title="更多" height="600">
									<scroll-view :scroll-y="true" style="height: 800rpx;">
									<view class="slot-content" style="">
										<view class="">产权性质</view>
										<view class="item-box">
											<view class="item" :class="{active:index == propertyIndex}" @tap="propertyClick(index)" v-for="(item, index) in propertyTypeList" :key="index">
												{{item.label}}
											</view>
										</view>
										<view class="">租售状态</view>
										<view class="item-box">
											<view class="item" :class="{active:index == rentSellIndex}" @tap="rentSellClick(index)" v-for="(item, index) in rentSellStatusList" :key="index">
												{{item.label}}
											</view>
										</view>
										<view class="">建设进度</view>
										<view class="item-box">
											<view class="item" :class="{active:index == buildIndex}" @tap="buildStatusClick(index)" v-for="(item, index) in buildStatusList" :key="index">
												{{item.label}}
											</view>
										</view>
										<view class="">其他标签</view>
										<view class="item-box">
											<view class="item" :class="item.active?'active':''" @tap="otherTagClick(index)" v-for="(item, index) in otherList" :key="index">
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
<!-- 							<view class="absolute" @tap.stop="sortChang(1)">
								<u-image width="22rpx" height="30rpx" :src="sort"></u-image>
							</view> -->
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
			<view class="listHeight">

		<view class="modecotent group">
				<pub-list :list="list" type="house" ></pub-list>
		 </view>	

					
		
			<text class="view-more">没有更多了</text>

			</view>
		</view>
		<u-tabbar
			v-model="current"
			:show="show"
			:bg-color="bgColor"
			:border-top="borderTop"
			:list="barlist"
			:mid-button="midButton"
			:inactive-color="inactiveColor"
			:activeColor="activeColor"
		></u-tabbar>	
		<!-- 底部菜单结束 -->
	</view>
</template>

<script>
	import {
		sellFeeList,
		rentList,
		roomList,
		clist,
		rentSellList,
		areaList,
		propertyTypeList,
		rentSellStatusList,
		buildStatusList,
		otherList
	} from "@/utils/spaceCate";
	import {
		pubPostpage,
	} from '@/api/store';
	import {
		loadingFun
	} from '@/utils/tools';
	import {
		loadingType
	} from '@/utils/type';
	var url="api/park/garden/list";
	export default{
		data(){
			return{
				sellFeeList:sellFeeList,
				rentList:rentList,
				roomList:roomList,
				clist:clist,
				rentSellList:rentSellList,
				areaList:areaList,
				propertyTypeList:propertyTypeList,
				rentSellStatusList:rentSellStatusList,
				buildStatusList:buildStatusList,
				otherList:otherList,
				rentFeeStart:'',
				rentFeeEnd:'',
				roomAreaStart:'',
				roomAreaEnd:'',
				show: true,
				bgColor: '#ffffff',
				borderTop: true,
				midButton: false,
				inactiveColor: '#909399',
				activeColor: '#5098FF',
				custonStyle:'',
				keyword:'',
				bg:'none',
				sort:'/static/sort.png',
				sellIndex:0,
				sellFeeStart:'',
				sellFeeEnd:'',
				current: 0,
				area: '全部区域',
				value2: 2,
				value3: 2,
				value4: 2,
				rentSellValue:0,
				rentSellName:'用途',
				propertyIndex:0,
				rentSellIndex:0,
				buildIndex:0,
				otherIndex:0,
				barlist: [{
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
						text: '客服',
						customIcon: false,
					},
					{
						iconPath: "/static/tabbar/info.png",
						selectedIconPath: "/static/tabbar/info-active.png",
						//pagePath:'/page/company/index',
						text: '消息',
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
				  navList: [
					/*{
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
					},*/
					{
					  label: "买房",
					  icon:'/static/industryspace/MF@2x.png',
					  url:"/pages/industryspace/buy_house"
					},
					/*{
					  label: "城市更新",
					  icon:'/static/industryspace/CSGX@2x.png'
					},*/
					{
					  label: "地图找房",
					  icon:'/static/industryspace/DTZF@2x.png',
					   url:"/pages/industryspace/buy_house"
					},
					{
					  label: "空间需求",
					  icon:'/static/industryspace/KJXQ@2x.png',
					   url:"/pages/industryspace/release_house"
					},
					{
					  label: "发布房源",
					  icon:'/static/industryspace/FBFY@2x.png',
					  url:"/pages/industryspace/space_requirement"
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
				chShow: true,
				tagIndex:0,
				roomIndex:0,
				rentIndex:0,
				status: loadingType.LOADING,
				total:0,
				page:1,
				list:[],
				params:{
					buildStatus:"",
					flagCanteen:"",
					flagCenterAir:"",
					flagDormitory:"",
					flagParking:"",
					mainUse:"",
					propertyType:"",
					rentFeeEnd:"",
					rentFeeStart:"",
					rentSell:0,
					rentSellStatus:"",
					roomAreaEnd:"",
					roomAreaStart:"",
					sellFeeEnd:"",
					sellFeeStart:"",
					signs:[],
					sort:1,
					streetCode:""
				}
			}
		},
		onLoad() {
		    this.getListFun();
		},
		methods:{
					sellFee(i){
						this.sellFeeStart = this.sellFeeList[i].sellFeeStart;
						this.sellFeeEnd = this.sellFeeList[i].sellFeeEnd;
						this.sellIndex = i;
						//console.log(i+1 ,this.sellFeeList.length);
						if( (i+1) === this.sellFeeList.length){
							this.sellFeeStart = this.sellFeeList[i].sellFeeStart;
						}	
					},
					//租金选项卡
					rent(i){
						this.rentFeeStart = this.rentList[i].rentFeeStart;
						this.rentFeeEnd = this.rentList[i].rentFeeEnd;
						this.rentIndex = i;
						if( (i+1) === this.rentList.length){
							this.rentFeeStart = this.rentList[i].rentFeeStart;
						}
					},
					//租金选项卡数据提交
					rentSave(){
						this.$refs.uDropdown.close();
						this.params.rentFeeStart = this.rentFeeStart;
						this.params.rentFeeEnd = this.rentFeeEnd;
						//console.log(this.params.rentFeeStart ,this.params.rentFeeEnd);
						this.list=[];
						this.getListFun();
					},
					//租金选项卡数据提交
					sellSave(){
						this.$refs.uDropdown.close();
						this.params.sellFeeStart = this.sellFeeStart;
						this.params.sellFeeEnd = this.sellFeeEnd;
						//console.log(this.params.rentFeeStart ,this.params.rentFeeEnd);
						this.list=[];
						this.getListFun();
					},
					//面积选项卡
					room(i){
						this.roomAreaStart = this.roomList[i].roomAreaStart;
						this.roomAreaEnd = this.roomList[i].roomAreaEnd;
						this.roomIndex = i;
						if( (i+1) === this.roomList.length){
							this.roomAreaStart = this.roomList[i].roomAreaStart;
						}
					},
					roomSave(){
						this.$refs.uDropdown.close();
						this.params.roomAreaStart = this.roomAreaStart;
						this.params.roomAreaEnd = this.roomAreaEnd;
						console.log(this.params.roomAreaStart ,this.params.roomAreaEnd);
						//this.list=[];
						//this.getListFun();
					},
					changeRentSell(index) {
						//console.log(this.areaList[index].label);
						this.rentSellName = this.rentSellList[index].label;
						//this.$u.toast(`点击了第${index}项`);
						this.rentSellValue = index;
						this.params.rentSell = index;
						this.list=[];
						this.getListFun();
					},
					changeArea(index) {
						//console.log(this.areaList[index].label);
						this.area = this.areaList[index].label;
						//this.$u.toast(`点击了第${index}项`);
						this.params.streetCode = index;
						this.list=[];
						this.getListFun();
					},
					propertyClick(i){
						//console.log(i);
						this.propertyIndex = i;
						this.params.propertyType = this.propertyTypeList[i].propertyType;
						this.list=[];
						this.getListFun();
					},
					rentSellClick(i){
						//console.log(i);
						this.rentSellIndex = i;
						this.params.rentSellStatus = i;
						this.list=[];
						this.getListFun();
					},
					buildStatusClick(i){
						//console.log(i);
						this.buildIndex = i;
						this.params.buildStatus = i;
						this.list=[];
						this.getListFun();
					},
					otherTagClick(i){
						//console.log(i);
						this.otherIndex = i;
						this.otherList[i].active = !this.otherList[i].active;
							if(this.otherList[i].active){
							if(i ===2){
								this.params.flagCanteen = true;
							}else if(i === 1){
								this.params.flagCenterAir = true;
							}else if(i === 0){
								this.params.flagParking = true;
							}
						}else{
							if(i ===2){
								this.params.flagCanteen = false;
							}else if(i === 1){
								this.params.flagCenterAir = false;
							}else if(i === 0){
								this.params.flagParking = false;
							}	
						}

						this.list=[];
						this.getListFun();
					},
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
			jump(obj){
				 console.log(obj.url);
				uni.navigateTo({
					url:obj.url
				})
			},
			jdTagClick(i) {
				 this.jdIndex = i
				//this.list[index].active = !this.list[index].active;
			},
			async getListFun() { 
					let {
						page,
						list,
						status
					} = this;
					if (status == loadingType.FINISHED) return;
					var params=this.params;
						params.page=this.page;
					var pdata={url:url,params:params};
					const data = await  loadingFun(pubPostpage, page, list, status, pdata)
					if (!data) return
					this.page = data.page
					this.list = data.dataList
					this.status = data.status
			 }
		},
		onPageScroll(e) {
			this.top = e.scrollTop;
		},
		onShow() {

		},
		onHide() {},
		onLaunch() {

		},
		mounted() {
			console.log(this.$mp.page)
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
		/* padding-right: 80rpx; */
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
