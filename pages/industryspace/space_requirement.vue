<template>
	<view class="space">
		<view class="step1" v-show="step1Show">
			<view class="slot-content">
				<view class="">需求类型</view>
				<view class="item-box">
					<view class="item" :class="{active:index == cqIndex}" @tap="cqTagClick(index)" v-for="(item, index) in options4" :key="index">
						{{item.label}}
					</view>
				</view>
				<view class="">主要用途</view>
				<view class="item-box">
					<view class="item" :class="item.active?'active':''" @tap="jdTagClick(index)" v-for="(item, index) in options6" :key="index">
						{{item.label}}
					</view>
				</view>
				<view class="flex-row buttonbox">						
				<u-button class="submit" type="primary" @click="step1">下一步</u-button>
				</view>

			</view>
		</view>
		<view class="step2" v-if="step2Show">
				<view class="title flex-row jc p-l-r">
					<text class="title-left">用房意向</text>
				</view>
			<view class="slot-content p-t-b">
				<view>用房类型</view>
				<view class="item-box">
					<view class="item" :class="{active:index == yflxIndex}" @tap="yflxTagClick(index)" v-for="(item, index) in options1" :key="index">
						{{item.label}}
					</view>
				</view>
				<view>产权性质</view>
				<view class="item-box cq jc">
					<view class="item" :class="item.active?'active':''" @tap="cqxzTagClick(index)" v-for="(item, index) in options2" :key="index">
						{{item.label}}
					</view>
				</view>
				<view class="group p-t-b m-b">
				<view class="slider-title m-b">面积（㎡）</view>		
				<u-slider v-model="area" :active-color="'#4967FA'" :use-slot="true" :factor="factor1" min='0' max="100">
					<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
					<view class="area">
						<view class="badge-button">
							{{area * 8}}
						</view>
					</view>
				</u-slider>
				</view>
				<view class="group p-t-b m-b">
				<view class="slider-title m-b">租金（元/㎡/月）</view>		
				<u-slider v-model="rent" :active-color="'#048CC7'" :use-slot="true" :factor="factor2" min='0' max="100">
					<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
					<view class="rent">
						<view class="badge-button">
							{{rent * 10}}
						</view>
					</view>
				</u-slider>
				</view>
				<view class="group p-t-b m-b">
				<view class="slider-title m-b">售价（万元/㎡）</view>	
					
					<u-slider v-model="price" :active-color="'#69BEBB'" :use-slot="true" :factor="factor1" min='0' max="100">
						<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
						<view class="price">
							<view class="badge-button">
								{{price * 8}}
							</view>
						</view>
					</u-slider>
				</view>
				<view class="flex-row buttonbox">						
<!-- 				<u-button class="rest" type="primary" @click="closeDropdown">下一步</u-button> -->
				<u-button class="submit" type="primary" @tap.stop="setDatas(0)">提交</u-button>
				</view> 

			</view>
		</view>
		<!-- 用地意向 -->
		<view class="step2" v-if="step3Show">
				<view class="title flex-row jc p-l-r">
					<text class="title-left">用地意向</text>
				</view>
			<view class="slot-content p-t-b">
				<view class="group p-t-b m-b">
					<view class="slider-title m-b">面积（㎡）</view>		
					<u-slider v-model="area" :active-color="'#4967FA'" :use-slot="true" :factor="factor1" min='0' max="100">
						<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
						<view class="area">
							<view class="badge-button">
								{{area * 8}}
							</view>
						</view>
					</u-slider>
				</view>
				<view class="group p-t-b">
					<view class="slider-title">拟投建项目</view>		
					<u-form-item :label-position="labelPosition" prop="project">
						<u-input :border="true" placeholder="请输入拟投建项目名" v-model="project" type="text"></u-input>
					</u-form-item>
				</view>

				<view class="flex-row buttonbox">						
<!-- 				<u-button class="rest" type="primary" @click="closeDropdown">下一步</u-button> -->
				<u-button class="submit" type="primary" @tap.stop="setDatas">提交</u-button>
				</view> 

			</view>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			cqIndex:0,
			jdIndex:0,
			yflxIndex:0,
			cqxzIndex:0,
			price: 0,
			rent: 0,
			area: 0,
			factor1:8,
			factor2:10,
			step2Show:false,
			step1Show:true,
			step3Show:false,
			labelPosition: 'top',
			yongtu:'',
			project:'',
				options1: [{
						label: '出租',
						active: true,
					},
					{
						label: '出售',
						active: false,
					}
				],
				options2: [{
						label: '区属国企',
						active: false,
					},
					{
						label: '区物业办',
						active: false,
					},
					{
						label: '社会物业',
						active: false,
					},
					{
						label: '股份公司',
						active: false,
					}
				],
				options4: [{
						label: '用房',
						active: true,
					},
					{
						label: '用地',
						active: false,
					}
				],
				options6: [{
						label: '办公',
						active: false,
					},
					{
						label: '研发',
						active: false,
					},
					{
						label: '厂房',
						active: false,
					},
					{
						label: '仓库',
						active: false,
					},
					{
						label: '商铺',
						active: false,
					}
				]
				
				
		}
	},
	methods:{
			cqTagClick(i) {
				
				this.cqIndex = i
				//this.list[index].active = !this.list[index].active;
			},
			jdTagClick(i) {
				this.options6[i]['active'] = !this.options6[i]['active'];
				if(this.options6[i]['active']){
					this.yongtu += this.options6[i]['label']+',';
				}
				  
				console.log(this.yongtu);
			},
			yflxTagClick(i) {
				
				this.yflxIndex = i
				//this.list[index].active = !this.list[index].active;
			},
			cqxzTagClick(i) {
				this.options2[i]['active'] = !this.options2[i]['active'];
				this.cqxzIndex = i
				//this.list[index].active = !this.list[index].active;
			},
			step1(){
				
				if(this.cqIndex === 0){
					this.step2Show = !this.step2Show;
					this.step1Show = !this.step1Show;
				}else{
					this.step3Show = !this.step3Show;
					this.step1Show = !this.step1Show;
				}
			},
			end() {
				// console.log('end');
			},
			moving() {
				// console.log('moving');
			},
			//数据提交
			setDatas(){
				// console.log('moving');
				//需求类型
				var data = new Array();
				if(this.cqIndex === 0){
				//需求类型
				data['xuqiu'] = this.options4[this.cqIndex]['label'];
				//主要用途
				data['yongtu'] = this.options6[this.jdIndex]['label'];
				//用房类型
				data['yongfang'] = this.options1[this.yflxIndex]['label'];
				//主要用途
				data['chanquan'] = this.options2[this.cqxzIndex]['label'];
				//单价
				data['price'] = this.price * 8;
				//租金
				data['rent'] = this.rent * 10;
				//面积
				data['area'] = this.area * 8;
				}else{
					
					//面积
					data['area'] = this.area * 8;
					data['project'] = this.project;
				}

				console.log(data)	
				
			}
	}
}
</script>

<style lang="scss">
	page{
		padding-bottom: 100rpx;
		background: #ffffff;
	}
	.m-b{
		margin-bottom: 60rpx;
	}
	.adds{
		font-size: 42rpx;
	}
	.slot-content {
		background-color: #FFFFFF;
		padding: 24rpx;
		
		.item-box {
			margin-bottom: 50rpx;
			display: flex;
			flex-wrap: wrap;
			/* justify-content: space-between; */
			
			.item {
				/* border: 1px solid $u-type-primary; */
				color: #333333;
				padding: 0rpx 30rpx;
				border-radius: 10rpx;
				margin-top: 30rpx;
				background: #F7F7F7;
				margin-right: 20rpx;
				line-height: 64rpx;
			}
			
			.active {
				color: #FFFFFF;
				background-color: #627BF8;
			}
		}
		.item-box.cq .item{
			width: 48%;
			margin-right: 0;
			text-align: center;
		}
	}
	.buttonbox{
		text-align: center;
		align-items: center;
		justify-content: center;
		margin: auto;
		padding: 100rpx 0;
	}
	.rest{
		width: 40%;
		height: 96rpx;
		background: none;
		color: #333333;
		border:solid 2rpx $u-type-primary;
		border-radius: 50rpx;
		margin-right: 10rpx;
	}
	.submit{
		width: 40%;
		height: 96rpx;
		border-radius: 50rpx;
		margin-left: 10rpx;
		background: #627BF8;
		}
	.badge-button {
		background-color: #4967FA;
		color: #fff;
		border-radius: 10rpx;
		font-size: 28rpx;
		line-height: 1;
		height: 72rpx;
		width: 72rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 72rpx;
		z-index: 99;
	}
	.area .badge-button{
		background-color: #4967FA;
	}
	.rent .badge-button{
		background-color: #048CC7;
	}
	.price .badge-button{
		background-color: #69BEBB;
	}
	.slider-title{
		padding: 0rpx 0;
	}
</style>
