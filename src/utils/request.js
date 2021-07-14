export default function myRequest(params) {
    

    uni.showLoading({
        title: '加载中'
    });
    
    const baseUrl = "https://";
    let header = {}
    if(!params.url.includes("/login")) {
        //非登录请求携带token
        header.Authorization = ""
    }
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            header,
            success(res) {

                // console.log('成功回调', res);
                
                resolve(res);
            },
            fail(err) {
                reject(err);
                console.log('fali', err);
            },
            complete() {
                uni.hideLoading();
            }
        })
    })
}