<template>
	<view class="">
		<view class="group">
			<view class="title flex-row jc p-l-r">
				<text class="title-left">入驻企业51家</text>
			</view>
			<view class="in flex-row jc">
				<view class="li flex-row jc">
					<view>
						“四上”企业 
					</view>
					<view>
						<text class="big">4</text><text class="small">家</text>
					</view>
				
				</view>
				<view class="li flex-row jc">
					<view>
						国家高新技术企业
					</view>
					<view>
						<text class="big">4</text><text class="small">家</text>
					</view>
				</view>
				<view class="li flex-row jc">
					<view>
						市高新技术企业
					</view>
					<view>
						<text class="big">4</text><text class="small">家</text>
					</view>
				</view>
				<view class="li flex-row jc">
					<view>
						区高新技术企业
					</view>
					<view>
						<text class="big">4</text><text class="small">家</text>
					</view>
				</view>
			</view>	
		</view>
		<view class="height20"></view>
		<view class="group">
			<view class="title flex-row jc p-l-r bd">
				<text class="title-left">部分企业示例</text>
			</view>
			<view class="item-box">
				<view class="item flex-row  bd" v-for="(item ,index) in list" :key="index">
					<view class="flex-flex image" v-show="item.image">
							<u-image border-radius="6" width="160rpx" height="140rpx" :src="item.image"></u-image>
					</view>
					<view class="infos flex-col flex-flex" :class="item.image ? 'sheight' : ''">
						<view class="ctitle flex-col">{{item.title}}</view>
						<view class="tags flex-row" v-show="item.tags">
							<text class="tag" v-for="(tag,i) in item.tags" :key="i">{{tag}}</text>
			<!-- 				<text class="tag">租售中</text>
							<text class="tag">租售中</text> -->
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
				image:true,
				tags:true,
				list:[{
					id:1,
					title:'深业进元大厦',
					image:'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa',
					tags:['tag','tag'],
					},
					{
					id:1,
					title:'深业进元大厦',
					image:'//lanhu.oss-cn-beijing.aliyuncs.com/SketchPng180cd5f8fc68461226816244d9f111bd55b106161ee87c0ee9ea7cb54f701efa',
					tags:'',
					},
					{
					id:1,
					title:'深业进元大厦',
					image:'',
					tags:['tag','tag'],
					},
					{
					id:1,
					title:'深业进元大厦',
					image:'',
					tags:'',
					}
				]
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss">
	.in{flex-wrap: wrap; padding:0;
	border-top: solid 2rpx #DDDDDD;
		.li{width: 50%;
			height: 128rpx;
			line-height: 128rpx;
			font-size: 26rpx;
			
			padding: 0rpx 30rpx;
			border-bottom:solid 2rpx #DDDDDD;
			border-right:solid 2rpx #DDDDDD;
			.big{
				font-size: 28rpx;
				color: rgba(98, 123, 248, 1);
				margin-right: 20rpx;
				font-weight:600;
			}
			.small{
				font-size: 20rpx;
			}
			}
		}
	.item-box{
		.item{
			padding: 30rpx;
			.image{
				margin-right: 30rpx;
				height: 140rpx;
			}
			.sheight{height: 140rpx;} 
			.infos{
				/* height: 140rpx; */
				justify-content: center;
				/* align-items: center; */
				.ctitle{
					font-size: 28rpx;
					color: #333333;
					font-weight: 600;
					
				}
				.tags{
					flex-wrap: wrap; 
					margin-top: 10rpx;
				.tag{
					background: #F3F3F3;
					padding: 0rpx 10rpx;
					border-radius: 6rpx;
					margin-right: 8rpx;
					margin-bottom: 8rpx;
					font-size: 22rpx;
					line-height: 1.5;
				}
				}

			}
		}
	}
</style>
