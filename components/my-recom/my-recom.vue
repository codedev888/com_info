<template>
	<view>
		<view class="group">
			<view class="section18 flex-row bd">
				<view class="section18-left" @tap="go('../company/find_government')">
					
					<u-image width="40rpx" height="40rpx" :src="row.icon" ></u-image>
					<text class="txt6 fw">{{row.title}}</text>
					<text class="word10">{{format_totel_title()}}</text>
				</view>
				<u-image class="icon7" width="32rpx" height="32rpx" :src="'/static/company/jt.png'" ></u-image>
			
			</view>
			
			 <pub-list :list="list" :type="row.type"></pub-list>
			
			<view class="view-more" @tap="go(row.more_url)">查看更多&gt;</view>
		</view>
		
		
	</view>
</template>

<script>
   import {
	   pubPost,
	   pubGet
    } from '@/api/store';
   var url="park/recommend/list";
	export default {
		components: {},
		props: {
			row: {
				type: Object,
				default: () => ({
					type:"gove",
					icon:"/static/company/4.png",
					title:"找政府",
					total_title:"为你智能匹配推荐{{num}}条政策扶持",
					more_url:"../company/find_government",
				 })
			}
			 
			 
		},
		data() {
			return {
				list:[]
			}
		},
		created(){
			this.getListFun();
			//console.log(this.row,"----row--");
		},
		methods: {
			async getListFun() {
				var type=this.row.type;
				var params = {
					 page:1,
					 pageSize:5,
					 searchType:"project"
				}
				if(type=="partner"||type=="fina"){
					url="sm/recommend/list/service";
				    params = {
				    	 page:1,
				    	 pageSize:5,
				    	 flagFinance:type=="fina"?true:false
				    }
				}
				var pdata={url:url,params:params};
				 pubPost(pdata).then(res=>{
					 //console.log(res);
					  if(res.data.pageVO!=undefined){
						  this.list=res.data.pageVO.list;
					  }
				 });
		    },
			format_totel_title(){
				var total_title=this.row.total_title;
				var num=this.list.length;
				return total_title.replace("{{num}}",num);
			},
			go(e){
				uni.navigateTo({
				 url:e
			  })
			}
		}
	}
</script>

<style lang="scss">
	.u-demo-area {
		margin: 0 -40rpx;
	}

	.page {
	  padding-bottom: 160rpx;
	}
	.tips-item {
		padding:20rpx 30rpx;
		line-height: 46rpx;
		font-size: 28rpx;
	}
	.tips-item .active{
		color: #5C7EFE;
		}
	.box1 {
	  z-index: auto;
	  width: 750rpx;
	  background: #fff;
	}
		
.txt1 {
	 
	  width: 318rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(0, 0, 0, 1);
	  font-family: PingFang-SC-Bold;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: right;
	  margin-left: 8rpx;
	}
	
	.icon1 {

	  width: 54rpx;
	  margin: 6rpx 0 0 2rpx;
	}
	
	.section3 {
	  z-index: auto;
	  width: 750rpx;
	 justify-content: space-between;
	  padding:15rpx 30rpx
	}
	
	.section4 {

	  width: 88rpx;
	  height: 88rpx;
	  border-radius: 50rpx;
	  box-shadow: #E3E3E3 0rpx 4rpx 8rpx;
	  overflow: hidden;
	}
	.section4 image{
		width: 88rpx;
		height: 88rpx;
	}	
	.section5 {
	  z-index: auto;
	  width: 268rpx;
	  height: 80rpx;
	  margin: 4rpx 0 0 16rpx;
	}
	
	.word2 {
	  width: 418rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 28rpx;
	  white-space: nowrap;
	  line-height: 34rpx;
	  margin-top: 6rpx;
	}
	
	.word3 {
	  width: 268rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: #666666;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	  margin-top: 4rpx;
	}
	
	.word4 {
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(93, 123, 255, 1);

	  white-space: nowrap;
	  
	  text-align: right;
	  margin: 50rpx 0 0 0rpx;
	}

	
	.section7 {
		display: flex;
	  z-index: auto;
	  width: 750rpx;
	
	  padding:30rpx;
	  justify-content: space-between;
	}
	.section7 .item{
		display: flex;
		flex-flow: column;
		text-align: center;
		align-items: center;
		font-size: 24rpx;
		color: #666666;
	}
	.section7 .item .icon{
		width: 64rpx;
		height: 64rpx;
	} 


 	.section9 {
	  z-index: auto;
	  width: 750rpx;
	  padding: 10rpx;
	  padding-left: 50rpx;
	  justify-content: space-between;
	  position: relative;
	  font-weight: 600;
		.u-image{
			position: absolute;
			left: 30rpx;
			top: 46rpx;
		}

	}


	
	.txt3 {
	  width: 104rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Semibold;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  margin: 2rpx 0 0 22rpx;
	}
	
	.view-more {
	  width: 750rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 28rpx;
	  white-space: nowrap;

	  text-align: center;
	  align-self: center;
	  padding: 20rpx;
	}
	

	.section18 {
	  z-index: auto;
	  width: 750rpx;
	  padding: 20rpx 30rpx;
	  justify-content: space-between;
	
	}
	.section18-left{justify-content: space-between;display: flex;}

	.txt6 {
	  width: 86rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	  font-family: PingFangSC-Semibold;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	  margin-left: 22rpx;
	}
	
	.word10 {
	  width: 232rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(102, 102, 102, 1);
	  font-size: 24rpx;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	  margin: 4rpx 0 0 18rpx;
	}
	
	.icon7 {
	  width: 32rpx;
	  height: 32rpx;
	  margin: 2rpx 0 0 162rpx;
	}
	
	.section24 {
	  z-index: auto;
	  width: 750rpx;
	  
	  justify-content: space-between;
	  padding: 30rpx;
	}

	.main3 {
	  z-index: auto;
	  width: 450rpx;

	}
	
	.info5 {
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
	
	.txt9 {
	  font-size: 20rpx;
	  font-family: PingFang-SC-Bold;
	  color: rgba(251, 150, 115, 1);
	  line-height: 50rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.wrap2 {
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
.section34 {
  width: 750rpx;

  justify-content: space-between;
  padding: 30rpx;
}
	.group1 {
	  position:relative
	}
	.group1 image{
	  width: 210rpx;
	  border-radius: 4rpx;	
	}
.box3 {
	z-index: 9;
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
	  width: 98rpx;
	  display: block;
	  overflow-wrap: break-word;
	  color: rgba(255, 255, 255, 1);
	  font-size: 24rpx;
	  font-family: PingFangSC-Regular;
	  white-space: nowrap;
	  line-height: 34rpx;
	  text-align: left;
	
	}

	.group2 {
	  z-index: auto;
	  width:450rpx;

	}
	
	.txt14 {

	  display: flex;
	  overflow-wrap: break-word;
	  color: rgba(51, 51, 51, 1);
	  font-size: 28rpx;
	 
	  font-family: PingFangSC-Medium;
	  white-space: nowrap;
	  line-height: 40rpx;
	  text-align: left;
	}
	.group2 .title{height: 130rpx;}
	.word26 {
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
	  
	  justify-content: space-between;
	}
	
	.section35 {
	  width: 148rpx;
	  height: 36rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.word27 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.word28 {
	  font-size: 26rpx;
	  font-family: PingFangSC-Semibold;
	  color: rgba(93, 126, 255, 1);
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
	
	.section36 {
	  width: 188rpx;
	  height: 36rpx;
	  overflow-wrap: break-word;
	  text-align: left;
	  white-space: nowrap;
	  font-size: 0;
	}
	
	.info13 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.word30 {
	  font-size: 26rpx;
	  font-family: PingFangSC-Semibold;
	  color: rgba(93, 126, 255, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	
	.info14 {
	  font-size: 26rpx;
	  color: rgba(51, 51, 51, 1);
	  line-height: 36rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	

	.tabbar-item{
		display: flex;
		flex-flow: column;
		text-align: center;
		align-items: center;
		font-size: 24rpx;
	}
	.tabbar-item .robot{margin-top: -30rpx;border-radius: 100rpx; padding-left:5rpx; 
	background: #007AFF; height: 76rpx; width: 76rpx; text-align: center; vertical-align: middle; display: flex;
	border:4rpx solid #fff}
	.tabbar-item .robot .icon{ height: 60rpx;width: 66rpx; align-items: center; vertical-align: middle; align-self: center;}
	.tabbar-item .icon,.tabbar-item text{display: flex;}
	.tabbar-item .icon{height: 48rpx; width: 48rpx;}

</style>
