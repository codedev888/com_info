<template>
  <view class="page flex-col">

	<view class="group">
		<view class="info-item bd">
			<text class="fw">主要用途：</text><text>{{use_func()}}</text>
		</view>
		<view class="info-item">
			<text class="fw">需求类型：</text><text class="">
			   {{details.projectType!=""?project_type_arr[details.projectType]:'--'}}
			</text>
		</view>		
	</view>
	<view class="height20"></view>
	<view class="group">
		<view class="info-item bd">
			<text class="fw">用房意向</text>
		</view>
		<view class="info-item bd">
			<text>租赁性质：</text><text class="">{{rent_type_json[details.rentType]}}</text>
		</view>	
		<view class="info-item bd">
			<text>面积（㎡）：</text><text class="fw">{{details.needAreaStart}}-{{details.needAreaEnd}}</text>
		</view>		
		<view class="info-item bd">
			<text>产权性质：</text><text class="">{{property_type_json[details.propertyType]}}</text>
		</view>
		<view class="info-item bd">
			<text>租金（元/㎡/月）：</text><text class="">{{details.totalFeeStart}}-{{details.totalFeeEnd}}</text>
		</view>	
	</view>
	
	<view class="height20"></view>
	<view class="group">
		<view class="info-item bd">
			<text class="fw">用地意向</text>
		</view>
		<view class="info-item bd">
			<text>面积（㎡）：</text><text class="">500-1000</text>
		</view>		
		<view class="info-item bd">
			<text>拟投建项目：</text><text class="">{{details.corpName}}</text>
		</view>	
	</view>
	<view class="height20"></view>
	<view class="group">
		<view class="info-item bd flex-row jc">
			<text class="fw">当前状态：</text><text class="status">{{enter_status[details.enterStatus]}}</text>
		</view> 
		<view v-if="details.enterStatus==3" class="info-item bd">
			<text>入驻园区/不入驻原因：{{details.noEnterReason}}</text><text class=""></text>
		</view>		
		<view class="info-item bd">
			<text>登记时间：</text><text class="">{{details.createDate}}</text>
		</view>	
		<view class="info-item bd">
			<text>更新时间：</text><text class="">{{details.updateDate}}</text>
		</view>
	</view>
	<view class="height20"></view>	
	<view class="group">
		<view class="set-itme">
			<text class="word13">操作记录</text>
			<view class="box9">
				<block v-for="(item,index) in list">
				<view class="box9-item">
					<view>账号名【{{item.createName}}】</view>
					<view>修改了 {{item.content}}</view>
					<view>{{item.createDate}}</view>
				</view>
				<div class="line"></div>
			  </block> 
			</view>
		</view>

		
	</view>
	<view class="set-bar flex-row">
		<navigator :url="'demand_edit?id='+id" class="section3 flex-col">编辑</navigator> 
		<view @click="modal.show=true" class="section3 flex-col">删除需求</view>
		<navigator :url="'demand_edit?id='+id" class="section3 flex-col active">取消预约</navigator>
	</view>
	<!--弹窗-->
	<u-modal ref="uModal" :title="modal.title" v-model="modal.show" :show-cancel-button="true" 
						:show-title="modal.showTitle" :async-close="modal.asyncClose"
						@confirm="confirm" :content="modal.content"
					>
	  </u-modal>
	  <u-toast :type="toast.type" ref="uToast"></u-toast>
  </view>
</template>
<script>
import demand from '../../components/company/demand/demand.vue';
import {pubPostpage,
	   pubGet
	   } from '@/api/store';
 import {
		loadingFun
	} from '@/utils/tools';
	import {
		loadingType
	} from '@/utils/type';	   
var page_url="park/project/history/list";	     
var url="park/project/details";
var del_url="park/project/delete/";
var details_key="parkProjectDO";
export default {
  data() {
    return {
        id:0,
		modal:{
			show:false,
			showTitle:true,
			asyncClose: false,
			content:"删除",
			title:"确定删除此记录？"
		},
		toast:{
			type:"success",
			title:"删除成功",
			icon:true,
			position:"center",
			url:""
		},
		status: loadingType.LOADING,
		total:0,
		page:1,
		list:[],
		details:{},
		project_type_arr:{"1":"产业用房","2":"产业用地","3":"用房用地均可"},
        enter_status:{1:'待入住',2:'已入驻',3:'不入驻'},
        xq_type:{"1":'办公',"2":'公寓',"3":'厂房',"4":"仓库","5":"商铺","6":"其他"},
		rent_type_json:{"1":'出租',"2":"出售","3":"出租和出售"},
		property_type_json:{"464":"政府物业","462":"社会物业","464,462":"政府物业,社会物业","464,462":"政府物业,社会物业","462,464":"社会物业,政府物业"},
    };
  },
  onLoad(opt){
	   opt.id=opt.id?opt.id:55;
	  if(opt.id){
		  url+="/"+opt.id;
		  this.id=opt.id;
		  this.getDetails();
		  this.getListFun();
	  }else{
		  uni.navigateBack();
	  }
      
  },
  methods: {
       getDetails(){
		     pubGet({url:url}).then(res=>{
				 // console.log(res);
				  if(res.code==0){ 
					   this.details=res.data[details_key];
				  }
				  
			 });
	   },
	   use_func(){
		   if(!this.details.mainUse){
			   return "--";
		   }
		   var umain_arr=this.details.mainUse.split(",");
		   //xq_ty
		   var xq_type=this.xq_type;
		   var umain_srt="";
		   for (var i in umain_arr) {
		   	   umain_srt+=xq_type[umain_arr[i]];
			   if(i<umain_arr.length-1){
				   umain_srt+=",";
				   //console.log(i+1);
			   }
		   }
		   return umain_srt;
	   },
	   show_toast(){
	   		this.$refs.uToast.show(this.toast);
	   	},
	   //删除
	   confirm(){
		   del_url+=this.id;
		   pubGet({url:del_url}).then(res=>{
				if(res.code){
					this.show_toast();
					setTimeout(function(){
						uni.navigateBack();
					},2000);
				}
		   })
		  // console.log(this.id);  
	   },
	   async getListFun() {
	   			let {
	   				page,
	   				list,
	   				status
	   			} = this;
	   			if (status == loadingType.FINISHED) return;
	   			const params = {
	   				 page: page,
	   				 projectId:this.id
	   			}
	   			var pdata={url:page_url,params:params};
	   			const data = await loadingFun(pubPostpage, page, list, status, pdata)
	   			if (!data) return
	   			this.page = data.page
	   			this.list = data.dataList
	   			this.status = data.status
	   		}
  },
  
  components:{
  }
};
</script>


<style>
page{padding-bottom: 100rpx;}
.status{color:#F8B964}
.set-bar{position: fixed; width: 100%; justify-content: space-between; bottom: 0rpx; left: 0rpx; background: #ffffff;}
.section3{flex: 1; line-height: 90rpx; text-align: center; font-size: 28rpx;color: rgba(100, 130, 255, 1); border-left: #f2f2f2 solid 2rpx;}
.section3.active{background-color: rgba(100, 130, 255, 1); color: #ffffff;}
.section3:first{border: 0;}
.info-item{line-height: 80rpx; padding: 0rpx 30rpx;}
 .set-itme{padding: 0rpx 30rpx;}
 .word13{font-size: 32rpx; padding: 20rpx 0rpx 10rpx 0rpx; display: block;}
 .box9{}
 .box9-item{
	 background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdf066cf97096a97ced6e749b316739f7e70db2bbeccaf6cc3c61cd04f2a3c55d) no-repeat;
	 background-size: 40rpx 40rpx;
	 padding:0rpx 0rpx 20rpx 60rpx;
	 line-height: 42rpx;
	 font-size: 28rpx;
	 margin-top: 20rpx;
 }


</style>
