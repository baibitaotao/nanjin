import request from '@/utils/request'

export function capitalSettleList(data) {
  return request({
    url: `/capitalSettle/list`,
    method: 'post',
    data
  })
}

export function capitalSettleToEdit(params) {
  return request({
    url: `/capitalSettle/toEdit`,
    method: 'get',
    params
  })
}

export function capitalSettleAdd(data) {
  return request({
    url: `/capitalSettle/add`,
    method: 'post',
    data
  })
}

export function capitalSettleUpdate(data) {
  return request({
    url: `/capitalSettle/update`,
    method: 'post',
    data
  })
}

export function capitalSettleDelete(data) {
  return request({
    url: `/capitalSettle/delete?applyNos=${data}`,
    method: 'get'
  })
}

export function capitalSettleSubmit(data) {
  return request({
    url: `/capitalSettle/submit`,
    method: 'post',
    data
  })
}

export function treeGetTreeList(data) {
  return request({
    url: `/tree/getTreeList`,
    method: 'get',
  })
}



