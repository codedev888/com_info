<template>
	<view class="warp">
		
		<view class="group">
			<view class="tips">
				为你智能匹配推荐{{total}}条政策扶持
			</view>
			<block v-for="(item,index) in list" >
				<view class="item">
					<text class="title">深圳市罗湖区新能源汽车充电设施建设运营管</text>
					<text>发布部门：罗湖区发展和改革局</text>
					<text>实施日期：2020-09-31</text>
				</view>
				<view class="height20"></view>
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
		var url="sm/recommend/list/service";
		 export default {
			  data() {
			    return {
					status: loadingType.LOADING,
					total:0,
					page:1,
					list:[],
					
				};
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
						 flagFinance:false
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
	   };
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
.item{padding: 30rpx; line-height: 50rpx;}
.item text{display: flex;}
.title{font-size: 28rpx; color: #333333;}
</style>
