module.exports = {
    HEADER: {
        'Accept': 'application/json'
    },
	// #ifdef H5
    baseURL: process.env.NODE_ENV == 'production' ? '/api/' : 'https://lhqf.szlh.org.cn/',
	// #endif
	// #ifdef MP-WEIXIN
	baseURL: 'https://lhqf.szlh.org.cn/server/'
	// #endif
}