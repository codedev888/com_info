<script>
	import {
		mapMutations,
		mapActions
	} from 'vuex'
	import {
		getConfig
	} from '@/api/app'
	import Cache from '@/utils/cache'
	import {
		strToParams
	} from '@/utils/tools'
	export default {
		globalData: {
			navHeight: ""
		},
		onLaunch: function(options) {
			 
			this.options = options
			// 获取配置
			//this.getConfigFun()
			if (this.isLogin) {
				//this.getUser()
			}
		 
			 
			//获取系统信息
			this.getSystemInfo()

		},
		onShow: function() {
			 
		},
		onHide: function() {
		 
		},
		methods: {
			...mapMutations(['SETLOGINNUM', 'SETCONFIG']),
			...mapActions(['getUser']),
			getSystemInfo() {
				uni.getSystemInfo({
					success: res => {
						let {
							statusBarHeight,
							platform
						} = res;
						let navHeight;

						if (platform == 'ios' || platform == 'devtools') {
							navHeight = statusBarHeight + 44;
						} else {
							navHeight = statusBarHeight + 48;
						}
						this.globalData.navHeight = navHeight;

					},
					fail(err) {
						console.log(err);
					}

				});
			},
		 
			async getConfigFun() {
				const {
					code,
					data
				} = await getConfig()
				if (code == 1) {
					this.SETCONFIG(data)
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	@import "style/css/common.css";
</style>