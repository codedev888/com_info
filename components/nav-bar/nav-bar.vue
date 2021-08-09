<template>
	  <u-navbar :is-back="isBack" :title="pageName" title-color="#333" title-size="36" title-width="320" :background="{ background: '#f7f7f7' }">
		  <template v-slot:right>
			  <slot>
				  <view class="handle">
					<u-icon name="more-dot-fill"  color="#666" size="48" @click="handle"></u-icon>
				  </view>
			  </slot>
		  </template>		  
	  </u-navbar>
</template>

<script>
export default {
  name:"" ,
  components:{},
  props:{
	  title: {
	  	type: String,
	  	default: ''
	  },
	  isBack: {
		  type: Boolean,
		  default: true
	  }
  },
  data(){
    return {
		pageName:"罗i企"
    }
  },
  watch:{
	  title(val){
		  this.pageName = val
	  }
  },
  computed:{
	  
  },
  methods:{
	  handle(){
		  console.log("handle")
	  }
  },
  mounted() {
  	this.pageName = document.title
  },
  onShow(){},
  onHide(){},
  onLaunch(){}
}
</script>
<style lang="scss" scoped>
	// page {
	// 	height: calc(100vh - 94px);
	// 	margin-top: 44px;
	// }
	.handle {
		padding-right: 30rpx;
	}
</style>
