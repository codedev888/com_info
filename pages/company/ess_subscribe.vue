<template>
	<view class="u-wrap">
		<view class="top-tips">
			订阅服务分类。已选：{{bigCh}}类，包含{{results.length}}小类
		</view>
<!-- 		
				<view class="u-demo-result-line">
					{{result.length ? `选中了"${getResult}"` : '请选择'}}
				</view> -->
		<view class="u-menu-wrap">
			<checkbox-group @change="bigcheckboxChange">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
				 :data-current="index" @tap.stop="swichMenu(index)">
					<text class="u-line-1">{{item.value}}</text>
					<view class="checked" v-show="item.num">已选（{{item.num}})</view>
					<checkbox :value="item.value" class="ck" /> 
				</view>
			</scroll-view>
			</checkbox-group>
			
			<block v-for="(item,index) in tabbar" :key="index">
				<scroll-view scroll-y class="right-box" v-if="current==index">
					<view class="page-view">
						<view class="class-item">
							<view class="item-title">
								<text>{{item.name}}</text>
							</view>
				<view class="">
					<u-checkbox-group :size="size" :width="width" 
						:wrap="wrap"
						@change="checkboxGroupChange" 
						:activeColor="activeColor"
					>
						<u-checkbox
							@change="checkboxChange($event,index)"
							v-model="item1.checked" v-for="(item1, index1) in item.child" 
							:key="index1" :name="item1.name"
							:shape="shape"
							:disabled="item1.disabled"
							data-current="1"
						>{{item1.name}}</u-checkbox>
					</u-checkbox-group>
				</view>
<!-- 							<view class="item-container">
								<view class="thumb-box" v-for="(item1, index1) in item.child" :key="index1">
									<image class="item-menu-image" :src="item1.name" mode=""></image>
									<view class="item-menu-name">{{item1.name}}</view>
								</view>
							</view> -->
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
		<view class="button" @tap="setdata">
			保存
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				tabbar: [
					{
						value:'金融服务',
						num:0,
						child:[
							{
								name:'金融服务',
								checked: false,
								disabled: false
							},
							{
								name:'产学研',
								checked: false,
								disabled: false
							},
							{
								name:'保险服务',
								checked: false,
								disabled: false
							},
							{
								name:'公证服务',
								checked: false,
								disabled: false
							},
							{
								name:'综合商务',
								checked: false,
								disabled: false
							},
							{
								name:'文化旅游',
								checked: false,
								disabled: false
							},
							{
								name:'黄金珠宝',
								checked: false,
								disabled: false
							},
							{
								name:'知识产权',
								checked: false,
								disabled: false
							},
						]
					},
					{
						value:'科技创新',
						num:0,
						child:[
							{
								name:'金融服务1',
								checked: false,
								disabled: false
							},
							{
								name:'产学研1',
								checked: false,
								disabled: false
							},
							{
								name:'保险服务1',
								checked: false,
								disabled: false
							},
							{
								name:'公证服务1',
								checked: false,
								disabled: false
							},
							{
								name:'综合商务1',
								checked: false,
								disabled: false
							},
							{
								name:'文化旅游1',
								checked: false,
								disabled: false
							},
							{
								name:'黄金珠宝1',
								checked: false,
								disabled: false
							},
							{
								name:'知识产权1',
								checked: false,
								disabled: false
							},
						]
					},					
					{
						value:'法律服务',
						num:0,
					},
					{
						value:'综合商务',
						num:0,
					},					
					{
						value:'文化旅游',
						num:0,
					},
					{
						value:'黄金珠宝',
						num:0,
					},
					{
						value:'知识产权',
						num:0,
					},
				],
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				
				disabled: false,
				checked: true,
				result: [],
				results:[],
				sxs:[],
				shape: 'square',
				//max: 3,
				activeColor: '#4967FA',
				size: 30,
				wrap: true,
				width: 'auto',
				bigCh:0
			}
		},

		computed: {
			getResult() {
				return this.result.join(",");
			}
		},
		created(){
			//console.log(this.result)
		},
		methods: {
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(index == this.current) return ;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return ;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			},
			bigcheckboxChange(e){
				console.log(e);
				console.log(e.target.value);
				this.bigCh = e.target.value.length;
			},
			checkboxChange(e,name) {
				//this.sxs[a1] = e.name;
/* 
				var newarr = new Array();
				newarr['id'] = name;
				newarr['name'] = e.name; */
			
				if(e.value){
					//console.log(name);
					this.results.push(e.name);
					//;
					this.tabbar[name].num += 1;
					//console.log(this.tabbar[name]);
				//this.sxs.push(newarr);
				//console.log(this.sxs);
				}else{
					var _index = this.results.indexOf(e.name);
					this.results.splice( _index , 1 )
					this.tabbar[name].num -= 1;
					//console.log(_index);
				//var _index = this.sxs.indexOf(newarr);
				//this.sxs.splice( _index , 1 )
				//console.log(_index);					
					
				}
				 //console.log(this.results);
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				this.result = e;
			},
			setdata(){
				console.log('提交数据');
			}
		},

	}
</script>

<style lang="scss" scoped>
	.button{line-height: 80rpx; border-radius: 8rpx; background-color: #6482FF; color:#fff; text-align:center; font-size: 32rpx; width:80%; margin:auto; position:fixed;bottom:100rpx; left:10%; z-index: 998;}
	.u-checkbox{line-height: 2.8;}
	.u-tab-view{width: 260rpx !important;}
	.u-line-1{width: 100%; display: block; flex:1;  text-align: left; line-height:96rpx; padding-left: 20rpx;}
	.checked{width: 100%; display: block; flex:1; font-weight: normal !important;  text-align: right; padding-right: 30rpx; line-height:60rpx}
	.u-tab-item{display:block; position:relative;}
	.ck{transform:scale(0.7); position:absolute; right:20rpx; top:22rpx}
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}
uni-checkbox .uni-checkbox-input{width: 32rpx !important; height: 32rpx !important;}
	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		/* height: 110rpx; */
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
/* 		justify-content: center; */
		flex-direction: column;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	.u-line-1{display: block;}
	.u-tab-item-active {
		position: relative;
		color: #6482FF;
		font-size: 28rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 40rpx;
		right: 0;
		top: calc(50% - 20rpx);
		border-radius: 6rpx;
	}

	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}
	
	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}
	
	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
