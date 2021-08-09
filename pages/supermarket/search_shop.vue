<template>
	<view class="warp">
		<view class="group p30">
			<!-- 搜索开始 -->
			<view class="search">
				<u-search placeholder="商标注册" height="60" v-model="keyword" :show-action="false" :showAction="true" :clearabled="true"></u-search>

			</view>

		</view>
 		<view class="screen flex-row jc p-l-r">
			<view class="hot_order">热度排序</view>
			<view class="new_order">最新上架</view>
			<view class="categorize">分类筛选</view>
		</view>
			<view class="group">
				<view class="shop-item-box">
					<view class="shop-title flex-row jc p-l-r">
						<view class="left flex-row jc">
							<view class="shop-icon">
								<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9582fb2704521079aa2817ff315a3ced2560bd03d7a258542c8578ade1560ede" mode="widthFix">
								</image>
							</view>
							<view class="flex-col">
								<text class="shop-name">创新科技旗舰店</text>
								<text class="hot">热度199</text>
							</view>
						</view>

						<text class="sees">查看</text>
					</view>
					<view class="shop-image flex-row jc">
						<block v-for="(item,index) in list" > 
							<view class="image-list">
								<image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5cbce49ba30ba94c7e2c16212a2b6c8c77c352c2a313f3d32f55f225627d2ab7" mode="widthFix"></image>
								<view class="image-text flex-col">
									<text class="image-name">商标注册商注册备份</text>
									<text class="price">¥199/次</text>
								</view>
							</view>
						</block>
					</view>
				</view>
				
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

<style scoped lang="scss">

	page{height: 100%;}

		.screen{

		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx rgba(121, 121, 121, 0.2);
		 margin-bottom: 20rpx;
		
		}
.shop-item-box{
	.shop-title{
		
		.shop-icon image{
			width:80rpx;
			height:80rpx;
			margin-right: 20rpx;
			}
		.shop-name{
			font-size: 30rpx;
			font-weight: 600;
			
		}
		.hot{
			background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngff615295c98cfd86b1d7bd54f3bb59fad9c5ad086002b40fd70013079d0a8c38) no-repeat;
			padding-left: 40rpx;
			color: rgba(254, 162, 81, 1);
			font-size: 24rpx;
		}
		.sees{
			height: 48rpx;
			border-radius: 30rpx;
			font-size: 26rpx;
			padding: 0rpx 20rpx;
			color: rgba(254, 162, 81, 1);
			border:rgba(254, 162, 81, 1) solid 2rpx;
			display:flex;
			line-height: 48rpx;
	
			margin-top: 20rpx;
			
		}
	}

}
.shop-image{
	padding: 20rpx;
	flex-wrap: wrap;
	.image-list{
		width: 50%;
		border: 10rpx solid #ffffff;
		position:relative

	}
	.image-list image{width: 100%; 
	height: 141rpx;}
	.image-text{
			position: absolute;
			left:0rpx;
			bottom:10rpx;
			z-index: 2;
			background-color: rgba(20, 45, 163, 0.6);
			color: #fff;
			width: 100%;
			padding-left:20rpx
	}
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
