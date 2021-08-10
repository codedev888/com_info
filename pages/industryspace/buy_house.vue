<template>
	<view class="warp">
		<nav-bar :isBack="true"></nav-bar>
		 <view class="NavList"> 
			<u-grid :col="4" :border="false">
				<u-grid-item :bg-color="bg" v-for="(item,index) in clist" :key="index" @tap="getCateList(item.mainUse)">
					<u-image width="72rpx" height="72rpx" :src="item.icon"></u-image>
					<view class="grid-text">{{item.label}}</view>
				</u-grid-item>
			</u-grid>
		</view>	 
		<view class="list-con mt10" id="tab">
			<u-sticky ref="sticky">
				<view class="an">
				
					<view class="tab-con">
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
<!-- 							<view class="absolute" @tap="sorts">
								<u-image width="22rpx" height="30rpx" :src="sort"></u-image>
							</view> -->
						</view>
<!-- 						<view class="type">
							<view class="item" v-for="(item,index) in options5" :key="item.value" @click="typeOn(index)"
								:class="{on:index == indexOn}">
								{{item.name}}
							</view>
						</view> -->
					</view>
				</view>
			</u-sticky>
			<view class="pad28 listHeight">

				<view class="modecotent">
					<pub-list :list="list" type="house" ></pub-list>
				</view>	
				<!--<loading-footer :status="status" slotEmpty>
				    <view slot="empty" class="column-center" style="padding-top: 100rpx">
				        <image class="img-null" src="/static/images/news_null.png"></image>
				        <text class="nr muted">暂无数据～</text>
				    </view>  
				</loading-footer>-->
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
				sellFeeList:[{
						name: '全部',
						sellFeeEnd:'',
						sellFeeStart:''
					},
					{
						name: '0-1',
						sellFeeEnd:1,
						sellFeeStart:0
					},
					{
						name: '1-2',
						sellFeeEnd:2,
						sellFeeStart:1
					},
					{
						name: '2-4',
						sellFeeEnd:4,
						sellFeeStart:2
					},
					{
						name: '4-6',
						sellFeeEnd:6,
						sellFeeStart:4
					},
					{
						name: '6以上',
						sellFeeEnd:'',
						sellFeeStart:6
					}
					],
				rentList: [{
						name: '全部',
						rentFeeEnd:'',
						rentFeeStart:''
					},
					{
						name: '0-40',
						rentFeeEnd:40,
						rentFeeStart:0
					},
					{
						name: '40-80',
						rentFeeEnd:80,
						rentFeeStart:40
					},
					{
						name: '80-120',
						rentFeeEnd:120,
						rentFeeStart:80
					},
					{
						name: '120-160',
						rentFeeEnd:160,
						rentFeeStart:120
					},
					{
						name: '160-200',
						rentFeeEnd:200,
						rentFeeStart:160
					},
					{
						name: '200以上',
						rentFeeEnd:'',
						rentFeeStart:200
					},
				],
				roomList: [{
						name: '全部',
						roomAreaEnd:'',
						roomAreaStart:''
					},
					{
						name: '0-200',
						roomAreaEnd:200,
						roomAreaStart:0
					},
					{
						name: '200-300',
						roomAreaEnd:300,
						roomAreaStart:200
					},
					{
						name: '300-500',
						roomAreaEnd:500,
						roomAreaStart:300
					},
					{
						name: '500-1000',
						roomAreaEnd:1000,
						roomAreaStart:500
					},
					{
						name: '1000以上',
						roomAreaEnd:'',
						roomAreaStart:1000
					}
				],
				  clist: [
					{
					  label: "全部",
					  icon:'/static/industryspace/buyhouse/mf.png',
					  mainUse:0
					},
					{
					  label: "办公",
					  icon:'/static/industryspace/buyhouse/bg.png',
					   mainUse:1
					},
					{
					  label: "公寓",
					  icon:'/static/industryspace/buyhouse/yf.png',
					   mainUse:2
					},
					{
					  label: "厂房",
					  icon:'/static/industryspace/buyhouse/cf.png',
					   mainUse:3
					},
					{
					  label: "仓库",
					  icon:'/static/industryspace/buyhouse/mf.png',
					   mainUse:4
					},
					{
					  label: "商铺",
					  icon:'/static/industryspace/buyhouse/sp.png',
					   mainUse:5
					},
					{
					  label: "其他",
					  icon:'/static/industryspace/buyhouse/sp.png',
					   mainUse:6
					},
				  ],
				rentSellList: [{
						label: '用房租赁',
						value: 0,
					},
					{
						label: '用房买卖',
						value: 1,
					}
				],
				areaList: [{
						label: '全部区域',
						value: 0,
						streetCode:''
					},
					{
						label: '桂园街道',
						value: 1,
						streetCode:'440303001000'
					},
					{
						label: '黄贝街道',
						value: 2,
						streetCode:'440303002000'
					},
					{
						label: '东门街道',
						value: 3,
						streetCode:'440303003000'
					},
					{
						label: '翠竹街道',
						value: 4,
						streetCode:'440303004000'
					},
					{
						label: '南湖街道',
						value: 5,
						streetCode:'440303005000'
					},
					{
						label: '笋岗街道',
						value: 6,
						streetCode:'440303006000'
					},
					{
						label: '东湖街道',
						value: 7,
						streetCode:'440303007000'
					},
					{
						label: '莲塘街道',
						value: 8,
						streetCode:'440303008000'
					},
					{
						label: '东晓街道',
						value: 9,
						streetCode:'440303009000'
					},
					{
						label: '清水河街道',
						value: 10,
						streetCode:'440303010000'
					}
				],
				propertyTypeList: [{
						label: '全部',
						value: 1,
						propertyType:''
					},
					{
						label: '社会物业',
						value: 2,
						propertyType:462
					},
					{
						label: '政府物业',
						value: 3,
						propertyType:464
					},
				],
				rentSellStatusList: [{
						label: '全部',
						value: 0,
					},
					{
							label: '租售中',
							value: 1,
					},
					{
						label: '未开始',
						value: 2,
					},
					{
							label: '已结束',
							value: 3,
					}
				],
				
				buildStatusList: [{
						label: '全部',
						value: 0,
					},
					{
							label: '未开建',
							value: 1,
					},
					{
						label: '已建成',
						value: 2,
					},
					{
							label: '建设中',
							value: 3,
					}
				],
				
				otherList: [{
						label: '停车厂',
						value: 0,
						status:[
							{
								name:'flagParking',
								code:false,
							}
						],
						//status:'flagParking',
						active:false
					},
					{
							label: '中央空调',
							value: 1,
							status:[
								{
									name:'flagCenterAir',
									code:false,
								}
							],
							//status:'flagCenterAir',
						active:false
					},
					{
						label: '食堂',
						value: 2,
						status:[
							{
								name:'flagCanteen',
								code:false,
							}
						],
						//status:'flagCanteen',
						active:false
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
		
		onPageScroll(e) {
			this.top = e.scrollTop;
			
		},
		onShow() {

		},
		onHide() {},
		onLaunch() {
 
		}, 
	    onPullDownRefresh(){
		      this.page++;
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
					tabChange(index) {
						//console.log(index);
						index == 2 ? this.chShow = false : this.chShow = true
						this.$refs["sticky"].initObserver()
						this.current = index;
						this.$refs["uDropdown"].close()
						this.goTop()
					},
					closeDropdown() {
						this.$refs.uDropdown.close();
						
						 
					},
					typeOn(i) {
						this.indexOn = i
						this.params.mainUse=i+1;
						this.list=[];
						this.getListFun();
			
					},
					getCateList(i){

						this.params.mainUse=i;
						this.list=[];
						this.getListFun();
						//console.log(this.list);
					},
					sorts(){
						console.log('排序')
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
		mounted() {
			console.log(this.$mp.page)
		}
		
		
	}
</script>

<style lang="scss">
	page{
		
	}
	
	.warp{
		.NavList {
		  
		  width: 100%;
		  margin: auto;
		 
		 
		  border-radius: 8rpx;
		  display: flex;
		  
		 

	
		}
/* 	.u-dropdown{
		padding-right: 80rpx;
	} */

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
				border-radius: 10rpx;
				margin-top: 30rpx;
				background: #F7F7F7;
			}
			
			.active {
				color: #FFFFFF;
				background-color: rgba(98, 123, 248, 1);
			}
		}
		.interval{
			.input{
				padding: 0rpx 20rpx;
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
