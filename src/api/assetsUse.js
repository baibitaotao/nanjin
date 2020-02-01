import request from '@/utils/request'

export function assetsUseToEdit(params) {
  return request({
    url: `/assetsUse/toEdit`,
    method: 'get',
    params
  })
}

export function officePurchaseAdd(data) {
  return request({
    url: `officePurchase/add`,
    method: 'post',
    data
  })
}


export function officePurchaseUpdate(data) {
  return request({
    url: `/officePurchase/update`,
    method: 'post',
    data
  })
}

export function officePurchaseDelete(params) {
  return request({
    url: `/officePurchase/delete?ids=${params}`,
    method: 'get',
  })
}

export function officePurchaseConditionProcessSubmit(data) {
  return request({
    url: `/officePurchase/conditionProcessSubmit`,
    method: 'post',
    data
  })
}



