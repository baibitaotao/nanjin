import request from '@/utils/request'

export function meetingSummaryList(data) {
  return request({
    url: `/meetingSummary/list`,
    method: 'post',
    data
  })
}

export function meetingSummaryToEdit(params) {
  return request({
    url: `/meetingSummary/toEdit`,
    method: 'get',
    params
  })
}

export function commonTCodeGetCodeByParentId(params) {
  return request({
    url: `/commonTCode/getCodeByParentId?parentId=11006`,
    method: 'get'
  })
}

export function meetingSummaryAdd(data) {
  return request({
    url: `/meetingSummary/add`,
    method: 'post',
    data
  })
}

export function meetingSummaryUpdate(data) {
  return request({
    url: `/meetingSummary/update`,
    method: 'post',
    data
  })
}

export function meetingSummaryDelete(data) {
  return request({
    url: `/meetingSummary/delete?ids=${data}`,
    method: 'get'
  })
}

export function meetingSummaryConditionProcessSubmit(data) {
  return request({
    url: `/meetingSummary/conditionProcessSubmit`,
    method: 'post',
    data
  })
}

