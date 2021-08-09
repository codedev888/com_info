<template>
	<view class="warp">

		 <view class="NavList"> 
			<u-grid :col="6" :border="false">
				<u-grid-item :bg-color="bg" v-for="(item,index) in clist" :key="index">
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
							<u-dropdown ref="uDropdown" class="u-dropdown" @goTop="goTop">
								
								<u-dropdown-item v-model="value1" title="罗湖区" :options="options1" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value2" title="用途" :options="options2" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value3" title="面积租用" :options="options3" height="600">
								</u-dropdown-item>
								<u-dropdown-item v-model="value4" title="更多" :options="options4" height="600">
								</u-dropdown-item>

							</u-dropdown>
							<view class="absolute" @tap="sorts">
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
				current: 0,
				show: true,
				bgColor: '#ffffff',
				borderTop: true,
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
				midButton: false,
				inactiveColor: '#909399',
				activeColor: '#5098FF',
				custonStyle:'',
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
				  clist: [
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
				chShow: true,
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
					rentSell:1,
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
					},
					sorts(){
						console.log('排序')
					},
						async getListFun() {
					let {
						page,
						list,
						total,
						status
					} = this;
					if (status == loadingType.FINISHED) return;
					const params = {
						 page: page,
						 searchType:"project"
					}
					var pdata={url:url,params:params};
					const data = await oloadingFun(pubPostpage, page, list, status, pdata,total)
					if (!data) return
					this.page = data.page
					this.list = data.dataList
					this.status = data.status
					this.total=data.rtotal;
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
</style>
