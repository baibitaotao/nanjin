import request from '@/utils/request'


export function meetingCostList(data) {
  return request({
    url: `/meetingCost/list`,
    method: 'post',
    data
  })
}

export function meetingCostToEdit(params) {
  return request({
    url: `/meetingCost/toEdit`,
    method: 'get',
    params
  })
}


export function meetingCostSubmit(data) {
  return request({
    url: `/meetingCost/submit`,
    method: 'post',
    data
  })
}


export function meetingCostAdd(data) {
  return request({
    url: `/meetingCost/add`,
    method: 'post',
    data
  })
}


export function meetingCostUpdate(data) {
  return request({
    url: `/meetingCost/update`,
    method: 'post',
    data
  })
}


export function meetingCostDetail(data) {
  return request({
    url: `/applyVacation/delete?applyNos=${data}`,
    method: 'get',
  })
}

