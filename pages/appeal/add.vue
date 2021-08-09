<template>
	<view class="warp">
		<view class="group p-l-r">
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
			<view class="title">企业名称</view>
			<view class="">
			<u-form-item :label-position="labelPosition" prop="company">
				<u-input :border="border" placeholder=" "  v-model="model.company" type="text" :custom-style="{background:'#F5F7FF'}"></u-input>
			</u-form-item>
			</view>

			<view class="title">统一社会信用代码</view>
			<u-form-item  :label-position="labelPosition" prop="creditcode">
				<u-input :border="border" placeholder=" "  v-model="model.creditcode" :custom-style="{background:'#F5F7FF'}" type="text"></u-input>
			</u-form-item>
			<view class="title"><text class="required">*</text>联系人名称</view>
			<u-form-item :label-position="labelPosition" prop="name">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<view class="title"><text class="required">*</text>联系人电话</view>
			<u-form-item :label-position="labelPosition" prop="phone">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.phone" type="number"></u-input>
			</u-form-item>
			<view class="title"><text class="required">*</text>诉求标题</view>
			<u-form-item :label-position="labelPosition" prop="claimtitle">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.claimtitle" type="text"></u-input>
			</u-form-item>	
			<view class="title"><text class="required">*</text>诉求分类</view>
			<u-form-item :label-position="labelPosition" prop="cate">
				<u-input :border="border" type="select" :select-open="cateSelectShow" v-model="model.cate" placeholder="请选择" @click="cateSelectShow = true"></u-input>
			</u-form-item>			
			<view class="title"><text class="required">*</text>受理部门</view>
			<u-form-item :label-position="labelPosition" prop="department">
				<u-input :border="border" type="select" :select-open="selectShow" v-model="model.department" placeholder="请选择商品类型" @click="selectShow = true"></u-input>
			</u-form-item>							

			<u-form-item :label-position="labelPosition" label="诉求描述" prop="intro">
				<u-input type="textarea" :border="border" placeholder="300字内容" v-model="model.intro" />
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="企业期望" prop="expect">
				<u-input type="textarea" :border="border" placeholder="300字内容" v-model="model.expect" />
			</u-form-item>		
			<u-form-item :label-position="labelPosition" label="与相关职能部门前期沟通情况" prop="situation">
				<u-input type="textarea" :border="border" placeholder="300字内容" v-model="model.situation" />
			</u-form-item>				
			
			
		

			<u-form-item :label-position="labelPosition" label="图片附件" prop="photo" label-width="150">
				<u-upload width="160" height="160"></u-upload>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="其他文件附件" prop="file" label-width="150">
				<u-upload width="160" height="160"></u-upload>
			</u-form-item>
			

		</u-form>

		<u-button @click="submit" class="button">提交</u-button>
		
		<u-select mode="single-column" :list="cate" v-model="cateSelectShow" @confirm="cateSelectConfirm"></u-select>
		<u-select mode="single-column" :list="department" v-model="selectShow" @confirm="selectConfirm"></u-select>
		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		</view>


<!-- 	<view class="set-bar flex-row">
		<view class="section3 flex-col" @tap="cancel">取消</view>
		<button class="section3 flex-col active" @tap="setdata">提交</button >
	</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			let that = this;
			return{
			model: {
				company:"",
				creditcode:'',
				name: '',
				phone: '',
				claimtitle: '',
				cate: '',
				department: '',
				expect: '',
				situation: '',
				intro: '',
				agreement: false,
				region: '',
				remember: false,
				file: '',
				photo: ''
			},
			cate: [
				{
					value: '电子产品',
					label: '电子产品'
				},
				{
					value: '服装',
					label: '服装'
				},
				{
					value: '工艺品',
					label: '工艺品'
				}
			],
			department: [
				{
					value: '电子产品1',
					label: '电子产品1'
				},
				{
					value: '服装2',
					label: '服装2'
				},
				{
					value: '工艺品3',
					label: '工艺品3'
				}
			],
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur' ,
					},
					{
						min: 3,
						max: 5,
						message: '姓名长度在3到5个字符',
						trigger: ['change','blur'],
					},
					{
						// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.chinese(value);
						},
						message: '姓名必须为中文',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					},
	
				],
				claimtitle: [
					{
						required: true,
						message: '请输入姓名',
						trigger: 'blur' ,
					},
					{
						min: 3,
						max: 5,
						message: '姓名长度在3到5个字符',
						trigger: ['change','blur'],
					}
				],		
				cate: [
					{
						required: true,
						message: '请选择分类',
						trigger: 'change',
					}
				],
				department: [
					{
						required: true,
						message: '请选择部门',
						trigger: 'change',
					}
				],
				phone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change','blur'],
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					}
				],
	


			},
			border: true,
			check: false,
			selectStatus: 'close',
			pickerShow: false,
			selectShow: false,
			cateSelectShow:false,
			radioCheckWidth: 'auto',
			radioCheckWrap: false,
			labelPosition: 'top',
			codeTips: '',
			errorType: ['message'],
			}
		},
	onLoad() {
	
	},
	computed: {

	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
		methods:{

			//数据提交
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					//if(!this.model.agreement) return this.$u.toast('请勾选协议');
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		},


		// 选择分类回调
		cateSelectConfirm(e) {
			this.model.cate = '';
			e.map((val, index) => {
				this.model.cate += this.model.cate == '' ? val.label : '-' + val.label;
			})
		},
		// 选择部门回调
		selectConfirm(e) {
			this.model.department = '';
			e.map((val, index) => {
				this.model.department += this.model.department == '' ? val.label : '-' + val.label;
			})
		},
		
		borderChange(index) {
			this.border = !index;
		},

		labelPositionChange(index) {
			this.labelPosition = index == 0 ? 'left' : 'top';
		},
		codeChange(text) {
			this.codeTips = text;
		},

		errorChange(index) {
			if(index == 0) this.errorType = ['message'];
			if(index == 1) this.errorType = ['toast'];
			if(index == 2) this.errorType = ['border-bottom'];
			if(index == 3) this.errorType = ['border'];
		}
		}
	}
</script>

<style lang="scss">
page{
	padding-bottom: 50rpx;
	background: #ffffff;
}
.u-input{
	padding:0rpx !important;
}
.uni-input-input,.uni-input-placeholder{
	padding: 0rpx 20rpx !important;
}

.sborder{
	border:#ccc solid 2rpx
}
.agreement {
	display: flex;
	align-items: center;
	margin: 40rpx 0;

	.agreement-text {
		padding-left: 8rpx;
		color: $u-tips-color;
	}
}
.uni-input-input{
	border: #ccc solid 1px;
}
.title{
	line-height: 1;
}
.required{
	color: #ff0000;
	margin-right: 10rpx;
}
.button{line-height: 80rpx; 
border-radius: 8rpx; 
background-color: #6482FF; 
color:#fff; 
text-align:center; 
font-size: 32rpx; width:80%; 
margin:auto; 
margin-top: 100rpx;
margin-bottom: 100rpx;
}
</style>
