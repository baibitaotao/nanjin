import request from '@/utils/request'


export function purchaseList(data) {
  return request({
    url: `/purchase/list`,
    method: 'post',
    data
  })
}

export function purchaseToEdit(params) {
  return request({
    url: `/purchase/toEdit`,
    method: 'get',
    params
  })
}


export function commonTCodeGetCodeByParentId(params) {
  return request({
    url: `/commonTCode/getCodeByParentId?parentId=${params}`,
    method: 'get',
  })
}


export function purchaseAdd(data) {
  return request({
    url: `/purchase/add`,
    method: 'post',
    data
  })
}


export function purchaseUpdate(data) {
  return request({
    url: `/purchase/update`,
    method: 'post',
    data
  })
}


export function purchaseDelete(data) {
  return request({
    url: `/purchase/delete?ids=${data}`,
    method: 'get',
  })
}


export function purchaseConditionProcessSubmit(data) {
  return request({
    url: `/purchase/conditionProcessSubmit`,
    method: 'post',
    data
  })
}
