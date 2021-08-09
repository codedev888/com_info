<template>
	<view class="warp">
		 
		<view class="group">
			<view class="tips">
				根据你的偏好，智能匹配推荐{{total}}个房源
			</view>
			<pub-list :list="list" type="house_bnt"></pub-list>
		 
			 
		</view>
		<view class="bottom">
			<view class="total-msg">已为您推荐{{total}}条数据</view>
			<view class="but">保存</view>
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
	.total-msg{color: #6482FF; font-size: 20rpx; text-align: center;margin: auto; line-height: 60rpx;}
	.but{width: 80%; line-height: 90rpx; color: #fff; 
	background-color: rgba(100, 130, 255, 1); 
	font-size: 28rpx; text-align: center; justify-items: center;
	margin: auto;border-radius: 8rpx;}
	.bottom{padding-top: 100rpx;}
	page{height: 100%;}
	.section24 {
	  z-index: auto;
	  width: 750rpx;
	  
	  justify-content: space-between;
	  padding: 30rpx;
	}
	
	.main2 {
	  z-index: 129;
	}
	.main2 image{
		width: 210rpx;
		border-radius: 4rpx;
	}
	.main3 {
	  z-index: auto;
	  width: 450rpx;

	}
	
	.info5 {
	  z-index: 133;
	  width: 296rpx;
	  display: block;
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
	  height: 40rpx;
	  border-radius: 4rpx;
	  background-color: rgba(246, 247, 255, 1);
	  justify-content: center;
	  margin-right: 12rpx;
	  padding:0rpx 12rpx
	}
	
	.txt8 {
	  z-index: 151;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(153, 153, 153, 1);
	  font-size: 22rpx;
	  white-space: nowrap;
	}
	

	
	.paragraph1 {
	  z-index: 157;
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
	  z-index: 137;
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
	
	.txt9 {
	  font-size: 20rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.wrap2 {
	  z-index: 141;
	  width: 108rpx;
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
	
.set{ position: relative;}
.layer9 {
  z-index: auto;
  width: 750rpx;
  justify-content: space-between;
  padding: 20rpx;
}

.word7 {
  z-index: 85;
  
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
 
  white-space: nowrap;
  line-height: 34rpx;
  text-align: left;
  margin-top: 2rpx;
}

.info19 {
  z-index: 87;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 26rpx;

  white-space: nowrap;
  line-height: 36rpx;
  text-align: left;

}

.group17{
	display: none;
	border: 2px  solid #fff;
	border-radius: 8rpx;  /*圆角弧度为7px*/
	position: absolute;
	overflow: inherit;
	padding: 2rpx 18rpx;
	right: 0rpx;
	top: 54rpx;
	background: #ffffff;
	box-shadow: #D2D2D2 0rpx 0rpx 8rpx;
}
.group17:after{border: 0;}
.group17 .word16:hover{color: #007AFF;}
.set:hover .group17{display: block;}
.group17:before{
	content: '';
	width: 0;
	height: 0;
	border: 10rpx solid;
	position: absolute;
	top: -20rpx;
	right: 10rpx;
	z-index: 2;
	border-color:  transparent transparent #ffffff;
}	
.word16 {
  z-index: 100;
  display: block;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 22rpx;
  white-space: nowrap;
  line-height: 32rpx;
  text-align: center;
  padding: 10rpx 20rpx;
}
.label1 {
  z-index: 89;
  width: 32rpx;
  height: 32rpx;
  margin: 4rpx 0 0 2rpx;
}
</style>
