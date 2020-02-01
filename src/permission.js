/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken
} from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title)
  const hasRoles = store.getters.roles && store.getters.roles.length > 0
  if (store.getters.router_length) {
    next()
  } else {
    try {
      // Action 通过 store.dispatch 方法触发
      const params = {
        serviceId: to.fullPath.split('/')[to.fullPath.split('/').length - 1]
      }
      // const params = { serviceId: '777' }
      store.dispatch('user/appUserGetLoginUserInfo').then(res => {
        sessionStorage.setItem(`userType`, res.loginUserInfo.userType)
      })
      const res = await store.dispatch('user/menuSelectMenuTree', params)
      // res.data.funcPermissions
      const accessRoutes = await store.dispatch('permission/generateRoutes', res.data.funcPermissions)
      // dynamically add accessible routes
      router.addRoutes(accessRoutes)
      // router.push({path:`${accessRoutes[0].path}/${accessRoutes[0].children[0].path}/${params.serviceId}`})
      next({
        ...to,
        replace: true
      })
    } catch (error) {
      // remove token and go to login page to re-login
      console.log('错误执行')
      await store.dispatch('user/resetToken')
      Message.error(error || 'Has Error')
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
// 这个方法暂时没有用到
function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') { // Layout组件特殊处理
        route.component = Layout
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}