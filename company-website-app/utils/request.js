const BASE_URL = 'http://company-website.test/api'; // Laragon 自动虚拟主机

export const request = (url, method = 'GET', data = {}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + url,
            method,
            data,
            success: (res) => {
                if (res.data.code === 200) {
                    resolve(res.data.data);
                } else {
                    uni.showToast({ title: '请求失败', icon: 'none' });
                    reject(res.data);
                }
            },
            fail: (err) => {
                uni.showToast({ title: '网络错误', icon: 'none' });
                reject(err);
            }
        });
    });
};