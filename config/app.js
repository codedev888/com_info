module.exports = {
    HEADER: {
        'Accept': 'application/json'
    },
	// #ifdef H5
    baseURL: process.env.NODE_ENV == 'production' ? '/' : 'http://10.10.20.223:667/orgPc/',
	// #endif
	// #ifdef MP-WEIXIN
	baseURL: 'http://10.10.20.223:667/orgPc/'
	// #endif
}