import axios from 'axios'
import { Message } from 'element-ui'
import router from '../../router'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000
})

// 请求拦截
http.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  }, error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    return response.data
  }, error => {
    switch (error.response.status) {
      case 401:
        if (window.location.pathname !== 'auth/login') {
          window.location.href = '/auth/login'
        }
        break
      case 403:
        Message.error(error.response.data.message || '您没有此操作权限')
        break
      case 404:
      case 405:
        router.push({ name: 'not-found' })
        break
      case 422:
        const data = error.response.data.errors
        let content = ''
        Object.keys(data).map(function (key) {
          const value = data[key]
          content = value[0]
        })
        Message.error(content)
        break
      case 500:
      case 501:
      case 503:
      default:
        Message.error('服务器出了点小问题，程序员小哥哥要被扣工资了~！')
    }
    return Promise.reject(error.response)
  }
)

export default http
