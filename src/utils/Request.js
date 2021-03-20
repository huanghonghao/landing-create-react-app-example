import axios from 'axios';

axios.create({
    timeout: 15000,// 请求超时时间15秒
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'JSESSIONID=F9E7A227AF2E19C6D23D1ED9D9D5B723; remember-me=R1FuYnZNZ29Ndm1sWHRGJTJCZ3dFdSUyQnclM0QlM0Q6eGZRUUJ1RXR2UTcxMWw4N2dpSEkwUSUzRCUzRA; $designer_app_name=serviceMaintenanceCenter'
    }
})

// 发送请求前拦截： 在此可修改header等
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 请求响应后拦截：在此可统一处理提示。
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default axios;