import request from '@/utils/request'

export function officeUseList(data) {
  return request({
    url: `/officeUse/list`,
    method: 'post',
    data
  })
}
export function officeUseToEdit(params) {
  return request({
    url: `/officeUse/toEdit`,
    method: 'get',
    params
  })
}

export function officeUseAdd(data) {
  return request({
    url: `/officeUse/add`,
    method: 'post',
    data
  })
}

export function officeUseDelete(params) {
  return request({
    url: `/officeUse/delete?applyNos=${params}`,
    method: 'get'
  })
}

export function officeUseUpdate(data) {
  return request({
    url: `/officeUse/update`,
    method: 'post',
    data
  })
}

export function officeUseConditionProcessSubmit(data) {
  return request({
    url: `/officeUse/conditionProcessSubmit`,
    method: 'post',
    data
  })
}

