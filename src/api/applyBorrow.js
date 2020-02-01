import request from '@/utils/request'


export function applyBorrowList(data) {
  return request({
    url: `/applyBorrow/list`,
    method: 'post',
    data
  })
}

export function applyBorrowToEdit(params) {
  return request({
    url: `/applyBorrow/toEdit`,
    method: 'get',
    params
  })
}

export function applyBorrowAdd(data) {
  return request({
    url: `/applyBorrow/add`,
    method: 'post',
    data
  })
}


export function applyBorrowUpdate(data) {
  return request({
    url: `/applyBorrow/update`,
    method: 'post',
    data
  })
}


export function applyBorrowDelete(data) {
  return request({
    url: `/applyBorrow/delete?applyNos=${data}`,
    method: 'get',
  })
}


export function applyBorrowSubmit(data) {
  return request({
    url: `applyBorrow/submit`,
    method: 'post',
    data
  })
}

