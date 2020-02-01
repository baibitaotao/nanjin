import request from '@/utils/request'

export function assetsStockList(data) {
  return request({
    url: `/assetsStock/list`,
    method: 'post',
    data
  })
}

export function assetsStockToEdit(params) {
  return request({
    url: `/assetsStock/toEdit`,
    method: 'get',
    params
  })
}

export function assetsStockPurchaselist(data) {
  return request({
    url: `/assetsStock/Purchaselist`,
    method: 'post',
    data
  })
}

export function assetsStockAddStock(data) {
  return request({
    url: `/assetsStock/addStock`,
    method: 'post',
    data
  })
}

export function assetsStockUpdate(data) {
  return request({
    url: `/assetsStock/update`,
    method: 'post',
    data
  })
}

export function assetsStockDelete(data) {
  return request({
    url: `/assetsStock/delete?ids=${data}`,
    method: 'get'
  })
}

export function assetsStockConditionProcessSubmit(data) {
  return request({
    url: `/assetsStock/conditionProcessSubmit`,
    method: 'post',
    data
  })
}

export function assetsStockToEditScrap(params) {
  return request({
    url: `/assetsStock/toEditScrap`,
    method: 'get',
    params
  })
}

export function assetsStocSelectScrapList(params) {
  return request({
    url: `/assetsStock/selectScrapList`,
    method: 'get',
    params
  })
}

export function addScrap(data) {
  return request({
    url: `/assetsStock/addScrap`,
    method: 'post',
    data
  })
}

export function submitScrap(data) {
  return request({
    url: `/assetsStock/submitScrap`,
    method: 'post',
    data
  })
}

export function updateScrap(data) {
  return request({
    url: `/assetsStock/updateScrap`,
    method: 'post',
    data
  })
}














