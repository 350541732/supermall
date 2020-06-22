import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000/api/m3',
            timeout: 5000,
        })
        //axios的拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {})

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {})

    return instance(config)
}