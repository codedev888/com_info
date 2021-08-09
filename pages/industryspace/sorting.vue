<template>
	<view class="confirm">
		<u-modal v-model="tipShow" @confirm="tipConfirm" :content="tipcontent" :title="tipTitle" :show-cancel-button="tipCancelButton" ref="uModal" :async-close="true"></u-modal>
		<u-button @click="showModal">删除</u-button>
	</view>
</template>

<script>
export default {
    data() {
        return {
			tipShow: false,
			tipCancelButton:true,
			tipTitle:'小提示',
			tipcontent:'确定要删除吗',
		}
	},
	onLoad: function(opt) {
		
	},
	methods:{
		//提示开始弹窗
		showModal() {
			this.tipShow = true;
		},
		tipConfirm() {
			setTimeout(() => {
				// 3秒后自动关闭
				this.tipShow = false;
				// 如果不想关闭，而单是清除loading状态，需要通过ref手动调用方法
				// this.$refs.uModal.clearLoading();
			}, 3000)
		}
		//提示结束弹窗
    }
}
</script>