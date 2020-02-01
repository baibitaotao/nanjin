import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function menuSelectMenuTree(params) {
  return request({
    url: `/menu/selectMenuTree`,
    method: 'get',
    params
  })
} 

export function appUserGetLoginUserInfo(params) {
  return request({
    url: `/userInfo/getLoginUserInfo`,
    method: 'get',
  })
}
