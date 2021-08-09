<template>
  <view class="page flex-col">

	<view class="group p-l-r">
		<view class="info-item flex-col">
			<view class="title flex-row fw">办理反馈</view>
			<view class="flex-row">
				<u-radio-group v-model="fk" @change="radioGroupChange($event ,0)">
					<u-radio 
						@change="radioChange($event ,0)" 
						v-for="(item, index) in list" :key="index" 
						:name="item.name"
						:disabled="item.disabled"
					>
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
		
		</view>
		
		<view class="info-item flex-col">
			<view class="title flex-row fw">办理评价</view>
			<view class="flex-row">
				<u-radio-group v-model="pj" @change="radioGroupChange($event ,1)">
					<u-radio 
						@change="radioChange($event ,1)" 
						v-for="(item, index) in lists" :key="index" 
						:name="item.name"
						:disabled="item.disabled"
					>
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
		
		</view>
		
	</view>
		<view class="button" @tap="setdata" v-show="!isok">
			保存
		</view>
		<view class="button ok" v-show="isok">
			评价已提交，感谢你的反馈！
		</view>
  </view>
</template>
<script>

export default {
	data() {
		return {
			isok:false,
			list: [
				{
					name: '已解决',
					disabled: false
				},
				{
					name: '未解决',
					disabled: false
				}
			],
			lists: [
				{
					name: '非常满意',
					disabled: false
				},
				{
					name: '满意',
					disabled: false
				},
				{
					name: '不满意',
					disabled: false
				}
			],
			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
			fk: '已解决',
			pj: '满意',
		};
	},
	methods: {
		// 选中某个单选框时，由radio时触发
		radioChange(e,index) {
			 //console.log(e);
			 if(index === 0){
				 this.fk = e;
			 }else{
				 this.pj = e;
			 }
			 
		},
		// 选中任一radio时，由radio-group触发
		radioGroupChange(e,index) {
			 //console.log(index);
			 if(index === 0){
				 this.fk = e;
			 }else{
				 this.pj = e;
			 }
		},
		setdata(){
			console.log(this.fk,this.pj)
		}
	}
};
</script>


<style lang="scss">
page{
	height: 100%;
	background: #fff;
}
.info-item{
	padding: 30rpx 0;
}
.button{line-height: 80rpx; 
border-radius: 8rpx; 
background-color: #6482FF; 
color:#fff; 
text-align:center; 
font-size: 32rpx; width:80%; 
margin:auto; 
position:fixed;
bottom:100rpx;
 left:10%;
  z-index: 998;}
.button.ok{
	background-color: rgba(0, 0, 0, 0.3);
}
</style>
