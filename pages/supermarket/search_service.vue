<template>
	<view class="warp">
		<view class="group p30">
			<!-- 搜索开始 -->
			<view class="search">
				<u-search placeholder="商标注册" height="60" v-model="keyword" :show-action="false" :showAction="true" :clearabled="true" ></u-search>

			</view>

		</view>
 		<view class="screen flex-row jc p-l-r">
			<view class="hot_order">热度排序</view>
			<view class="new_order">最新上架</view>
			<view class="categorize">分类筛选</view>
		</view>
		<view class="group">
			<block v-for="(item,index) in list" > 
			<view class="section34 flex-row bd">
				<view class="group1 flex-col">
					<view class="box3 flex-col"><text class="word40">融资服务</text></view>
					<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb895c0e64f27a9ebe83cd114bdaf250154eac91a15c93e0a2be4a917ad4a1686" mode="widthFix"></image>	
				</view>
				<view class="group2 flex-col">
					<view class="flex-col title">
					  <text class="txt14">服务标题服务标题服务标题服务标题</text>
					  <text class="word26">创新科技旗舰店</text>	
					</view>
					<view class="outer3 flex-row">
						<view class="section35">
						  <text class="">访问</text>
						  <text class="word28">430</text>
						  <text class="">次</text>
						</view>
						<view class="section35">
						  <text class="">登记意向</text>
						  <text class="word28">430</text>
						  <text class="">个</text>
						</view>
					</view>
				</view>
			</view>
			  </block>
		</view>


	</view>
</template>

<script>
	import {
					pubPostpage,
				} from '@/api/store';
		    import {
		    		oloadingFun
		    	} from '@/utils/tools';
		    	import {
		    		loadingType
		    	} from '@/utils/type';
	    var url="park/recommend/list";
	
	export default{
		data(){
			return{
				keyword:'',
				status: loadingType.LOADING,
							total:0,
							page:1,
							list:[],
			}
		},
			onLoad() {
					this.getListFun();
				},
				onPullDownRefresh(){
					this.page++;
					this.getListFun();
				},
		
		methods:{
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
					}
		
		}
	}
</script>

<style scoped>
	.tips{
		font-size: 28rpx;
		color: #EB5E00;
		 background-color: rgba(235, 94, 0, 0.02);
		 line-height: 60rpx;
		 padding: 0rpx 30rpx;
	}

	page{height: 100%;}
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
		  color: #FFFFFF;
		  font-size: 24rpx;
		  display: block;
		  line-height: 40rpx;
		  text-align: left;
		
		}
	
		.group2 {
		  z-index: auto;
		  width:450rpx;
	
		}
		
		.txt14 {
		  color: rgba(51, 51, 51, 1);
		  font-size: 28rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 95%;
		  display: block;
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
		  
		  /* justify-content: space-between; */
		}
		
		.section35 {

		  height: 36rpx;
		  overflow-wrap: break-word;
		  text-align: left;
		  white-space: nowrap;
		  font-size: 0;
		  color: #FEA251;
		  font-size: 26rpx;
		  font-weight: bold;
		  margin-right: 30rpx;
		}
		
		.word27 {
		  font-size: 26rpx;
		  color: rgba(51, 51, 51, 1);
		  line-height: 36rpx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		}
		
		.word28 {
		  font-size: 32rpx;
		  font-family: PingFangSC-Semibold;
		  color:#FEA251;
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
		.screen{

		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx rgba(121, 121, 121, 0.2);
		 margin-bottom: 20rpx;
		
		}
	.screen view{font-size: 28rpx;
	line-height: 100rpx;
	background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8f3bf33343e3196004a4280a227e24030b5bb6b8a2f1666d380a10c7aa32b038) no-repeat;
	background-position: right center;
	padding-right: 30rpx;
	color: #999999;
	}	
	.screen view.categorize{
	background: url(../../static/arrow-top.png) no-repeat;
	background-size: 32rpx 32rpx;
	background-position: right center;
	color: #007AFF;
	}
</style>
