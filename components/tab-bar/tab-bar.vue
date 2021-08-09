<template>
	<u-tabbar v-model="current" :list="list" :mid-button="true" inactive-color="#999" active-color="#000" :border-top="false"></u-tabbar>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						iconPath: "/static/common/index.png",
						selectedIconPath: "/static/common/index-on.png",
						text: '首页',
						pagePath: "/pages/index/index",
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "/static/common/service.png",
						selectedIconPath: "/static/common/service-on.png",
						text: '找服务',
						pagePath: "/pages/service/index",
						customIcon: false,
					},
					{
						iconPath: "/static/common/robot.png",
						selectedIconPath: "/static/common/robot-on.png",
						text: '机器人',
						pagePath: "/pages/robot/index",
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "/static/common/news.png",
						selectedIconPath: "/static/common/news-on.png",
						text: '看资讯',
						pagePath: "/pages/news/index",
						customIcon: false,
					},
					{
						iconPath: "/static/common/home.png",
						selectedIconPath: "/static/common/home-on.png",
						text: '主页',
						pagePath: "/pages/home/index",
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				current: 0
			}
		},
		methods: {
			beforeSwitch(index) {
				// 只能切换偶数项
				console.log(index)
			}
		}
	}
</script>