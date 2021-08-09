<template>
	<view class="details">
		<view class="group">
			<view class="banner">
				<view class="u-demo-area">
					<u-toast ref="uToast"></u-toast>
					<u-swiper @change="change" :height="354" :list="lists" :title="bannerTitle" :effect3d="effect3d" 
					:indicator-pos="indicatorPos" :mode="mode" :interval="3000" @click="click"></u-swiper>
				</view>
			</view>
			<view class="info-box flex-row jc p30">
				<view class="left flex-col">
					<text class="name">深业进元大厦</text>
					<text>深圳市-罗湖区-清水河街道</text>
					<view class="tags">
						<text>科技园区</text><text>园区标签</text>
					</view>
				</view>
				<view class="right">
					<view class="bar flex-col" >
						<view class="flex-1" @tap="like"><u-icon name="heart" size="40"></u-icon>关注</view>
						<view class="flex-row">
							<view><u-icon name="star" size="40"></u-icon>40</view>
							<view><u-icon name="eye" size="40"></u-icon>40</view>
						</view>
					</view>
				</view>	
			</view>

		</view>
		<view class="height20"></view>
		<view class="group">
			<view class="flex-row jc p30 group-title">
				<text>房源信息</text>
				<view class="changeBar flex-row jc" :class="changeType?'':'left'">
					<text class="flex-1" :class="changeType?'active':''" @tap="changeTypes(0)">出租</text>
					<text class="flex-1" :class="changeType?'':'active'" @tap="changeTypes(1)">出售</text>
				</view>
			</view>
			<!-- 出租信息开始-->
			<view class="group" v-show="changeType">
				<view class="gropu">
				<view class="huxing">
					<view class="huxing-title">
						<text>深业进元大厦</text>
					</view>

					<view class="box p30">
						<view class="li flex-row jc p-l-r">
							<view class="flex-row image">
								<u-image width="160rpx" height="120rpx" :src="'https://cdn.uviewui.com/uview/swiper/1.jpg'" borderRadius="8"></u-image>
								<text>中层</text>
							</view>
							<text>198㎡</text>
							<text>90元/㎡/月</text>
						</view>
						<view class="li flex-row jc p-l-r">
							<view class="flex-row image">
								<u-image width="160rpx" height="120rpx" :src="'https://cdn.uviewui.com/uview/swiper/1.jpg'" borderRadius="8"></u-image>
								<text>中层</text>
							</view>
							<text>198㎡</text>
							<text>90元/㎡/月</text>
						</view>	
						<view class="li flex-row jc p-l-r">
							<view class="flex-row image">
								<u-image width="160rpx" height="120rpx" :src="'https://cdn.uviewui.com/uview/swiper/1.jpg'" borderRadius="8"></u-image>
								<text>中层</text>
							</view>
							<text>198㎡</text>
							<text>90元/㎡/月</text>
						</view>
					
					</view>
					<view class="moreHouse"><text class="down">更多户型</text></view>
				</view>
			</view>
			<view class="height20"></view>
			<view class="group base_info">
			

				<scroll-view scroll-x class="bg-white nav flex-row bd" scroll-with-animation show-scrollbar="false" :scroll-left="scrollLeft">
						<view class="cu-item flex-flex" :class="index==TabCur?'cur':''" v-for="(item,index) in list" :key="index" @tap="tabSelect" :data-id="index">
							{{item.name}}
						</view>
				</scroll-view>
				<view class="modecotent">
					<view class="mode1" v-if="currentItem === 0">
						<view class="info_box p30 bd">
							<view class="li flex-row">
								<text>主要用途</text><text>办公、仓库、厂房</text>
							</view>
							<view class="li flex-row">
								<text>地 址</text><text>罗湖区-黄贝街道-深南大道207号</text>
							</view>
							<view class="li flex-row">
								<text>产权性质</text><text>区属国企</text>
							</view>
							<view class="li flex-row">
								<text>产权单位</text><text>深圳市罗湖xx控股有限公司</text>
							</view>
							<view class="group flex-row jc">
								<view>
									<view class="li flex-row">
										<text>建筑面积</text><text>40120㎡</text>
									</view>
									
									<view class="li flex-row flex-1">
										<text>租售类型</text><text>仅出租</text>
									</view>
									<view class="li flex-row">
										<text>建设进度</text><text>已建成</text>
									</view>
								</view>
								<view>
									<view class="li flex-row">
										<text>空置面积</text><text>40120㎡</text>
									</view>
									<view class="li flex-row">
										<text>竣工时间</text><text>2019-12</text>
									</view>
									<view class="li flex-row flex-1">
										<text class="fl">租售进度</text><text>租售中</text>
									</view>
								</view>
							</view>
						</view>
						<view class="info_box p30">
							<view class="li flex-row">
								<text>物业单位</text><text>单位名称单位名称</text>
							</view>
							<view class="li flex-row">
								<text>意向企业</text><text>新型创新产业</text>
							</view>
							<view class="li flex-row">
								<text>停 车 费</text><text>月收费300元/日收费10元</text>
							</view>
						
							<view class="group flex-row jc">
								<view>
									<view class="li flex-row">
										<text>停车场</text><text>200位</text>
									</view>
									
									<view class="li flex-row flex-1">
										<text>物业管理费</text><text>1000元/㎡/月</text>
									</view>
									<view class="li flex-row">
										<text>计算单位</text><text>建筑面积</text>
									</view>
								</view>
								<view>
									<view class="li flex-row">
										<text>用水价格</text><text>10元/吨</text>
									</view>
									<view class="li flex-row">
										<text>用电价格</text><text>0.6元/度</text>
									</view>
					
								</view>
							</view>
						</view>
						<view class="moreHouse"><text class="up">收起信息</text></view>
					</view>
					<view class="mode2" v-if="currentItem === 1">
						
						<view class="group p30">
							<view class="flex-row jc">
								<text>入驻企业：<text class="blue">51</text> 家</text>
								<text @tap="go()" class="blue tab-li">入驻列表</text>	
							</view>
							<view class="p-t-b">
								饼图
							</view>
						</view>
					</view>

				</view>
			</view>
			</view>
		</view>
		<!-- 出租信息结束 -->
		<!-- 出售信息开始 -->
		<view class="goup chushou" v-show="!changeType">
			<view class="huxing group">
				<view class="huxing-title">
						<text>租售信息</text>
				</view>
				<view class="flex-row jc price">
					<view class="flex-1 flex-col left">
						<text class="number">240</text>
						<text>单价（元/㎡/月）</text>
					</view>
					<view class="flex-1 flex-col">
						<text class="number blue">28820</text>
						<text>总价（元/月）</text>	
					</view>
				</view>
			</view>
			<view class="height20"></view>
			<view class="group base_info">
				<view class="info_box p30 bd">
					<view class="group flex-row jc">
						<view>
							<view class="li flex-row">
										<text>建筑面积</text><text>40120㎡</text>
							</view>
							<view class="li flex-row flex-1">
										<text>用途类型</text><text>办公</text>
							</view>
							<view class="li flex-row">
										<text>可容纳工位</text><text>100-150人</text>
							</view>
							<view class="li flex-row flex-1">
										<text>租售类型</text><text>仅出租</text>
							</view>
							<view class="li flex-row">
										<text>朝 向</text><text>东南</text>
							</view>
						</view>
						<view>
							<view class="li flex-row">
										<text>实用面积</text><text>40120㎡</text>
							</view>
							<view class="li flex-row">
										<text>楼 层</text><text>高层/42层</text>
							</view>
							<view class="li flex-row flex-1">
										<text class="fl">最早可租</text><text>2020/09/20</text>
							</view>
							<view class="li flex-row">
										<text>租售进度</text><text>租售中</text>
							</view>
							<view class="li flex-row flex-1">
										<text class="fl">装 修</text><text>简装</text>
							</view>		
						</view>
						</view>
						<view class="li flex-row">
								<text>楼栋楼层</text><text>地上42层｜地下2层</text>
						</view>
						<view class="li flex-row">
								<text>楼栋电梯</text><text>客梯3个｜货梯1个</text>
						</view>
						<view class="li flex-row">
								<text>楼栋电梯</text><text>房源意向入驻企业所属行业等</text>
						</view>
					</view>
					<view class="moreHouse"><text class="up">收起信息</text></view>
				</view>
			</view>	
			<view class="height20"></view>
			<view class="group fongyuan">
				<view class="p30 group-title flex-row jc">
					<text>房源信息</text>
					<text @tap="go()" class="blue tab-li">查看</text>
				</view>	
				<view class="info-box flex-row jc p30">
					<view class="left">
						<text class="ctitle">
							园区名称园区名称园区名称
						</text>
						<view class="flex-row">
							<text class="ctitle">出售单价</text><text>6万元/㎡起</text>	
						</view>
						<view class="flex-row">
							<text class="ctitle">在售房源</text><text>在售14套</text>	
						</view>
						<view class="flex-row">
							<text class="ctitle">建筑面积</text><text>20000㎡</text>	
						</view>
					</view>
					<u-image width="210rpx" height="188rpx" :src="'https://cdn.uviewui.com/uview/swiper/3.jpg'"></u-image>
				</view>
			</view>
			<!--周边配套信息开始 -->
			<view class="height20"></view>
			<view class="group facilities p-t-b">
					<view class="huxing-title">
						<text>周边配套</text>
					</view>

				<view class="map">
				<view class="page-body">
					<view class="page-section page-section-gap">
						<map style="width: 100%; height: 380rpx;" :latitude="latitude" :longitude="longitude" :markers="covers">
						</map>
					</view>
				</view>
				</view>
				<view class="facilities-list flex-wrap flex-row">
					<view class="li">
						<u-image width="48rpx" height="48rpx" :src="'/static/industryspace/space_details/gj-icon@2x.png'"></u-image>
						<text>公交</text>
					</view>
					<view class="li">
						<u-image width="48rpx" height="48rpx" :src="'/static/industryspace/space_details/di-icon@2x.png'"></u-image>
						<text>地铁</text>
					</view>
					<view class="li">
						<u-image width="48rpx" height="48rpx" :src="'/static/industryspace/space_details/yy-icon@2x.png'"></u-image>
						<text>医院</text>
					</view>
					<view class="li">
						<u-image width="48rpx" height="48rpx" :src="'/static/industryspace/space_details/xx-icon@2x.png'"></u-image>
						<text>学校</text>
					</view>
					<view class="li">
						<u-image width="48rpx" height="48rpx" :src="'/static/industryspace/space_details/gw-icon@2x.png'"></u-image>
						<text>购物</text>
					</view>
					<view class="li">
						<u-image width="48rpx" height="48rpx" :src="'/static/industryspace/space_details/ms-icon@2x.png'"></u-image>
						<text>美食</text>
					</view>
					<view class="li">
						<u-image width="40rpx" height="48rpx" :src="'/static/industryspace/space_details/hc-icon@2x.png'"></u-image>
						<text>火车</text>
					</view>			
				</view>
			</view>
			<!--周边配套信息结束 -->
			<view class="height20"></view>
			<view class="group">
				<view class="group-title p30">
					<text>更多推荐</text>
				</view>
				<view class="item-box">
					<view class="item flex-row  bd" v-for="(item ,index) in alist" :key="index">
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
		<view class="set-bar flex-row">
			<view class="section3 flex-col">意向登记</view>
			<button class="section3 flex-col active">与我联系</button >
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				bannerTitle: true,
				changeType:true,
				mode: 'dot',
				indicatorPos: 'bottomCenter',
				effect3d: false,
				lists: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				text: [
					{
						title: '车静安寺客户嘎哈放框架傲胜',
						s: '111'
					}
				],
			id:0, // 使用 marker点击事件 需要填写id
            title: 'map',
            latitude: 39.909,
            longitude: 116.39742,
            covers: [{
                latitude: 39.909,
                longitude: 116.39742,
                iconPath: '/static/location.png'
            }, {
                latitude: 39.90,
                longitude: 116.39,
                iconPath: '/static/location.png'
            }],
				alist:[{
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
					
				],
	  TabCur: 0,
	  scrollLeft: 0,
			list:[
				{
					name:'基本信息',
					check:true
				},
				{
					name:'入驻企业',
					check:false
				},
				
			],
			checkIndex:0,
			currentItem:0
			}
		},
		methods: {
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}张图片`,
					type: 'success'
				})
			},
			change(index) {
				// console.log(index);
			},
			changeTypes(index){
				/* if(index ===0){ */
					this.changeType = !index;
				/* }else{
					
				} */
			},
		  tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.currentItem =  e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
		  },
		  checkOne(index){
					 this.checkIndex=index;
					 console.log(index)
		  },
		  like(){
			  console.log("关注成功");
		  }
		}
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 150rpx;
	}

	.info-box{
		.left{
			font-size: 24rpx;
			line-height: 48rpx;
			.name{
				font-size: 30rpx;
				font-weight: 600;
			}
			.tags{
				font-size: 22rpx;
			}
			.tags text{
				padding: 10rpx;
				background:rgba(98, 123, 248, 0.20);
				color: rgba(98, 123, 248, 1);
				border-radius: 6rpx;
				margin-right: 10rpx;
			}
		}
		.right{
			.bar{
				text-align: right;
				/* line-height: 60rpx; */
				font-size: 28rpx;
				height: 130rpx; 
				flex-direction: column; 
				padding-top: 20rpx;
			}
			.bar view{
				margin-left: 10rpx;
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
.huxing,.facilities{
	.huxing-title{
		text-align: center;
		line-height: 60rpx;
		font-size: 30rpx;
		font-weight: 600;
	}
	.huxing-title text{
		position: relative;
		line-height: 1;
	}
	.huxing-title text:before{
		background:url(/static/line-left.png) no-repeat;
		height: 2rpx;
		width: 180rpx;
		content: "";
		position: absolute;
		left: -200rpx;
		top: 18rpx;
	}
	.huxing-title text:after{
		background:url(/static/line.png) no-repeat;
		height: 2rpx;
		width: 180rpx;
		content: "";
		position: absolute;
		right: -200rpx;
		top: 18rpx;
	}
		.box{
			.li{
				line-height: 120rpx;
				padding:20rpx 0
			}
			.li .image text{
				margin-left:40rpx
			}
		}

}
.fongyuan{
	.info-box{

		.left{
			font-size: 26rpx;
			line-height: 46rpx;
			color: rgba(102, 102, 102, 1);
		}
		.left .ctitle{
			margin-right: 30rpx;
			color: rgba(51, 51, 51, 1);
		}
		.left > .ctitle{
		
			font-weight: 600;
		}
	}
}
.chushou{
	.price{
		padding: 30rpx 0;
		text-align: center;
		line-height: 80rpx;
		.left{
			border-right: #cccccc solid 2rpx;
		}
		.number{
			font-size: 66rpx;
			color: rgba(37, 187, 225, 1);
		}
		.number.blue{
			color:rgba(109, 149, 252, 1)
		}
	}
}
.facilities{
	.map{
		height: 380rpx;
		width: 689rpx;
		margin: auto;
		margin-top: 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: 0px 2px 4px 0px rgba(198, 198, 198, 0.5);
	}
	.facilities-list{
		padding-top: 30rpx;
		.li{
			width: 20%;
			text-align: center;
			margin: 10rpx 0;
			.u-image{
				margin: auto;
			}
		}
	}
}
	.moreHouse{
		text-align: center;
		border-top: #cccccc solid 1px;
		line-height: 80rpx;
		color: rgba(73, 103, 250, 1);
		.down{
			background:url(../../static/d-d-arrow.png) no-repeat;
			background-size: 26rpx;
			background-position: right center;
			padding-right: 40rpx;
		}
		.up{
			background:url(../../static/d-t-arrow.png) no-repeat;
			background-size: 26rpx;
			background-position: right center;
			padding-right: 40rpx;
		}
	}
.base_info{
.nav {
	width: 750rpx;
	white-space: nowrap;
	background: #ffffff;
	text-align: center;
}

::-webkit-scrollbar {
	display: none;
}

.nav .cu-item {
	height: 90upx;
	display: inline-block;
	line-height: 90upx;
	margin: 0 10upx;
	padding: 0 20upx;
	font-size:24rpx;
	font-family:Source Han Sans CN;
	font-weight:400;
	color:#666666;
}

.nav .cu-item.cur {
	
	font-size: 28rpx;
	color:rgba(98, 123, 248, 1);
	position: relative;
}
.nav .cu-item.cur:after
{
	content:" ";
	  z-index: 2;
	  width: 40rpx;
	  height: 6rpx;
	  border-radius: 6rpx;
	  background-color: rgba(98, 123, 248, 1);
	  position: absolute;
	  left: calc(50% - 20rpx);
	  bottom: 0rpx;
/* 	  align-self: flex-start;
	  margin-left: 39px; */
}
.cur{
	color: #333333;
	
}	
	.catelist{
		text-align: center;
	}
	.info_box{
		font-size: 28rpx;
		line-height: 60rpx;
		color: rgba(102, 102, 102, 1);
		.li text:first-child{
			margin-right: 30rpx;
			color: rgba(51, 51, 51, 1);
			text-align: justify;
			width: 140rpx;
			display: block;
			font-weight: 600;
		}
		.li text:first-child text{
			display: inline-block;
			padding-left: 100%;
		}
	}
	
}

.group-title{
	font-size: 30rpx; 
	color: rgba(153, 153, 153, 1);
	.changeBar{
		width: 200rpx; 
		height: 60rpx; 
		border:rgba(98, 123, 248, 1) solid 2rpx;
		border-radius: 30rpx;
		position: relative;
	}
	.changeBar text{
		width:50%;
		display: block;
		text-align: center;
		line-height: 58rpx;
		border-radius: 30rpx;
		position: relative;
		z-index: 2;
		
	}
	.changeBar:before{
		content: "";
		position: absolute;
		left: 0rpx;
		top: 0rpx;
		display: block;
		height: 58rpx;
		border-radius: 30rpx;
		width:50%;
		background:rgba(98, 123, 248, 1);
		transition: all 0.5s;
	}
	.changeBar.left:before{
		left: 50%;
	}
	.changeBar text.active{
		/* background:rgba(98, 123, 248, 1); */
		color: #ffffff;
	}
}
.tab-li{
	text-decoration: underline;
	background: url(/static/d-right-arrow.png) no-repeat;
	background-position: right center;
	background-size: 26rpx;
	padding-right: 40rpx;
}
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 100rpx; text-align: center; font-size: 28rpx;color: rgba(100, 130, 255, 1); border-left: #f2f2f2 solid 2rpx;}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.section3:after{ border: 0; border-radius: 0rpx;}
.section3:first{border: 0;}
uni-button{border-radius: 0;}
</style>
