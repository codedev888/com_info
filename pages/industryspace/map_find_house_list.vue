<template>
	<view class="findhouse">
		<view class="group top p30">
			<view class="flex-row">
				<view class="left flex-col">
					<u-icon name="heart-fill" color="#ff0000" size="24" ></u-icon>
					<text>已关注</text>
				</view>
				<view class="right flex-row jc">
					<view class="flex-col">
						<text class="fw">怡庭园这是园区名称</text>
						<text class="desc">罗湖区-黄贝街道 | 在租7套 | 123元/m²/月起</text>
					</view>
					<u-icon name="arrow-right" size="22"></u-icon>
					
				</view>
			</view>
		</view>
		<view class="height20"></view>
		<view class="group">
			<view class="item-box">
				<view class="item flex-row  bd" v-for="(item ,index) in list" :key="index">
					<view class="flex-flex image" v-show="item.image">
							<u-image border-radius="6" width="210rpx" height="200rpx" :src="item.image"></u-image>
					</view>
					<view class="infos flex-col flex-flex" :class="item.image ? 'sheight' : ''">
						<view class="ctitle flex-col">{{item.title}}</view>
						<view class="tags flex-row">
							<text class="tag mj">{{item.mj}} |</text>
							<text class="tag xq"> {{item.xqm}}</text>
			<!-- 				<text class="tag">租售中</text>
							<text class="tag">租售中</text> -->
						</view>
						<view class="price">
							<text>75</text>元/㎡/月起
						</view>
					</view>
				</view>
						
						
						
			</view>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
				list:[{
					id:1,
					title:'深业进元大厦深业进元大厦深业进元大厦深业进元大厦深业进元',
					image:'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa',
					mj:'152.11m²',
					xqm:'罗湖区-黄贝街道怡庭园'
					
					},{
					id:1,
					title:'深业进元大厦深业进元大厦深业进元大厦深业进元大厦深业进元',
					image:'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa',
					mj:'152.11m²',
					xqm:'罗湖区-黄贝街道怡庭园'
					
					},{
					id:1,
					title:'深业进元大厦深业进元大厦深业进元大厦深业进元大厦深业进元',
					image:'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa',
					mj:'152.11m²',
					xqm:'罗湖区-黄贝街道怡庭园'
					
					},
					
				]
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss">
	.top{
		.left{
			border-right: #CCCCCC solid 2rpx;
			text-align: center;
			justify-content: center;
			align-items: center;
			padding-right: 20rpx;
		}
		.right{
			padding-left: 30rpx;
			width: 580rpx;
			line-height: 42rpx;
			.desc{
			font-size: 12px;	
			}
		}
	}
	.item-box{
		.item{
			padding: 30rpx;
			.image{
				margin-right: 30rpx;
				height: 210rpx;
			}
			.sheight{height: 210rpx;} 
			.infos{
				/* height: 140rpx; */
				justify-content: center;
				/* align-items: center; */
				.ctitle{
					font-size: 28rpx;
					color: #333333;
					font-weight: 600;
					padding-bottom: 10rpx;
					
				}
				.tags{
					flex-wrap: wrap; 
					margin-top: 10rpx;
				.tag{
/* 					background: #F3F3F3;
					padding: 0rpx 10rpx;
					border-radius: 6rpx; */
					margin-right: 8rpx;
					margin-bottom: 8rpx;
					font-size: 26rpx;
					line-height: 1.5;
				}
				.tag.xq{
					font-size: 22rpx;
				}
				}
				.price{
					font-size: 28rpx;
					color: #FB9673;
				}
				.price > text{
					font-size: 32rpx;
				}

			}
		}
	}
</style>
