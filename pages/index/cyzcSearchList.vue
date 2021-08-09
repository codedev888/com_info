<template>
	<view class="search">
		<nav-bar :isBack="true"></nav-bar>
		<u-search class="pad28" placeholder="搜索产业政策" v-model="key" @search="keySearch" @custom="textSearch"
			:action-text="searchText"></u-search>
		<view class="tjss pad28 mt10">
			<i-title title="推荐搜索" :icon="false"></i-title>
			<view class="con">
				<u-row gutter="16">
					<u-col span="3" @click="keyOn" v-for="i in 11">
						<view class="ttss-item u-line-1">产业空间</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="tjss pad28 mt10">
			<i-title title="历史搜索" :icon="false">
				<text v-if="historyList.length > 0" class="cuIcon-delete" @click="openModel"></text>
			</i-title>
			<view class="con">
				<u-row gutter="16" v-if="historyList.length > 0">
					<u-col span="3" @click="keyOn(item)" v-for="item in historyList" :key="item">
						<view class="ttss-item u-line-1">{{item}}</view>
					</u-col>
				</u-row>
				<view class="no-history" v-else>
					暂无搜索记录
				</view>
			</view>
		</view>
		<view class="results pad28 mt10">
			<view class="con">
				<view class="news-item u-border-bottom" v-for=" item in 2">
					<navigator url="" hover-class="" class="flex-column">
						<view class="h3 u-line-1">深圳市罗湖区新能源汽车充电设施建设运营管</view>
						<view class="con">
							<view class="info">
								<view class="h4 u-line-1">发布部门：罗湖区发展和改革局</view>
								<view class="h4">实施日期：2020-09-31</view>
							</view>
							<view class="status" :class="[{orange:true}]">未开始</view>
						</view>
					</navigator>
				</view>
			</view>
			<u-empty text="没有相关内容" mode="search"></u-empty>
		</view>
		<u-loadmore :status="status" :margin-top="20" :bottom="20"/>
		<u-modal v-model="show" content="确认清除搜索记录" :show-cancel-button="true" @confirm="clearHistory"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		name: "",
		components: {},
		props: {},
		data() {
			return {
				key: "",
				searchText: "搜索",
				historyList: uni.getStorageSync('historyList') || [],
				show:false,
				resultList:[],
				status: 'loadmore',
				page:{
					pageSize:5,
					page:1
				}
			}
		},
		watch: {},
		computed: {},
		methods: {
			setHistory(){
				let key = this.$u.trim(this.key)
				if (key.length < 2) {
					this.$refs.uToast.show({
						title: '请输入至少两个字符',
					})
					return false
				}
				let list = this.historyList
				let index = list.findIndex(el => {
					return el === key
				})
				if (index !== -1) {
					list.splice(index, 1)
				}
				list.unshift(key)
				if (list.length > 12) {
					list.splice(12)
				}
				uni.setStorageSync('historyList', list);
				return true
			},
			openModel(){
				this.show = true
			},
			clearHistory() {
				this.historyList = [];
				uni.removeStorageSync('historyList');
			},
			getList(){
					  let data = {
						  pageSize:this.page.pageSize,
						  page:this.page.page,
						  keyWord:this.key,
						  sort:1,
						  type:2
					  }
					  this.$u.api.commonAPi.getSearch(data).then(res=>{
						  console.log(res)
					  }).catch(err=>{
						  console.log(err)
					  })
			},
			keySearch() {
				this.setHistory()
				// this.page = 0
				// this.resultList = []
				// this.getResultList()
			},
			textSearch() {
				
				if (this.searchText == "搜索") {
					let flag = this.setHistory()
					if(!flag) return
					this.getList()
					this.searchText = "取消"
				} else {
					this.searchText = "搜索"
					this.key = ""
				}

			},
			keyOn() {}
		},
		onReachBottom() {
			// this.getResultList()
		},
		onShow() {},
		onHide() {},
		onLaunch() {}
	}
</script>
<style lang="scss" scoped>
	.search {
		padding-bottom: 40rpx;
	}
	.u-row {
		margin: 20rpx 0;
	}

	.ttss-item {
		background-color: #f7f7f7;
		font-size: 28rpx;
		color: #666;
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		margin-bottom: 16rpx;
		padding:0 6rpx;
	}
	.cuIcon-delete {
		font-size: 40rpx;
		color: #666;
	}
	.no-history{
		line-height: 60rpx;
		text-align: center;
	}
	.news-item {
		.flex-column {
			align-items: flex-start;
			padding: 20rpx 0;
	
			view {
				line-height: 46rpx;
			}
	
			.con {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.info {
					flex: 1;
					width: 0;
				}
	
				.status {
					width: 120rpx;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					border-radius: 30rpx;
					background-color: #f2f2f2;
					color: #999;
					font-size: 28rpx;
					margin-left: 20rpx;
					&.orange {
						color: #fff;
						background-color: #FB9274;
					}
				}
			}
	
		}
	}
</style>
