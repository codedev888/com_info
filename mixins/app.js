
import {
	mapGetters,
	mapMutations
} from 'vuex'
import wechath5 from '@/utils/wechath5'

import {isWeixinClient, currentPage, paramsToStr} from '@/utils/tools'
import Cache from "@/utils/cache"
import {inputInviteCode} from "@/api/user"
import {BACK_URL} from '@/config/cachekey'
export default {
	data() {
		return {
            primaryColor: "#FF2C3C"
		};
	},
	async onLoad(option) {
		const route = currentPage().route
		if(!['pages/login/login', 'pages/forget_pwd/forget_pwd', 'pages/register/register'].includes(route)) {
			Cache.set(BACK_URL, `/${route}${paramsToStr(option)}`)
		}
		console.log(this.$store.getters.inviteCode)
		// #ifdef H5
		if (isWeixinClient()) {
			
			await wechath5.config()
			setTimeout(() => {
				this.wxShare()
			}, 500)
		}
		// #endif
	},
	methods: {
		 
	},
	computed: {
		...mapGetters(['isLogin', 'loginNum']),
	}
};
