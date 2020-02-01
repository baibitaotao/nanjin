import axios from 'axios'
import {
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  baseURL: '/oa-web',
  // baseURL: 'http://172.29.201.193:8089/oa-web',
  // baseURL: 'http://172.29.201.230:9090/oa-web',
  // baseURL: 'http://172.29.201.59:8089/oa-web',
  headers: {
    "x-requested-with": 'XMLHttpRequest'
  },
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // config.url = config.url + `?AppSSOSessionID=${sessionStorage.getItem('AppSSOSessionID')}`
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    if (response.headers.sessionstatus === 'timeout') {
      var type = sessionStorage.getItem('userType')
      if (type === '2') {
        // 调外部
        window.location.href = '/uim/loginPage.jsp'
      } else {
        // 跳内部
        window.location.href = '/uim/login.jsp'
      }
    }

    if (response.status !== 200) {
      Message({
        message: response.message || 'error',
        type: 'error',
        offset:150,
        duration: 5 * 1000
      })
      return Promise.reject(response.message || 'error')
    } else {
      if (response.data.status !== '0') {
        Message({
          message: response.data.msg || 'error',
          type: 'error',
          offset:150,
          duration: 5 * 1000
        })
        return
      }
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      offset:150,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
