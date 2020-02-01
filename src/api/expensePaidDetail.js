import request from '@/utils/request'


export function expensePaidDetailList(data) {
  return request({
    url: `/expensePaid/list`,
    method: 'post',
    data
  })
}

export function expensePaidDetailToEdit(params) {
  return request({
    url: `/expensePaid/toEdit`,
    method: 'get',
    params
  })
}


export function commonTCodeGetCodeByParentId(data) {
  return request({
    url: `commonTCode/getCodeByParentId?parentId=11005`,
    method: 'get',
  })
}

export function expensePaidAdd(data) {
  return request({
    url: `/expensePaid/add`,
    method: 'post',
    data
  })
}


export function expensePaidUpdate(data) {
  return request({
    url: `/expensePaid/update`,
    method: 'post',
    data
  })
}


export function expensePaidDelete(data) {
  return request({
    url: `/expensePaid/delete?applyNos=${data}`,
    method: 'get',
  })
}

export function expensePaidDetailGetComTomList(data) {
  return request({
    url:`/expensePaid/getComTomList`,
    method: 'post',
  })
}

export function expensePaidConditionProcessSubmit(data) {
  return request({
    url:`/expensePaid/conditionProcessSubmit`,
    method: 'post',
    data
  })
}


