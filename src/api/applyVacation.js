import request from '@/utils/request'


export function applyVacationList(data) {
  return request({
    url: `/applyVacation/list`,
    method: 'post',
    data
  })
}

export function applyVacationToEdit(params) {
  return request({
    url: `/applyVacation/toEdit`,
    method: 'get',
    params
  })
}


export function commonTCodeGetCodeByParentId(params) {
  return request({
    url: `/commonTCode/getCodeByParentId?parentId=11004`,
    method: 'get',
  })
}


export function applyVacationAdd(data) {
  return request({
    url: `/applyVacation/add`,
    method: 'post',
    data
  })
}


export function applyVacationUpdate(data) {
  return request({
    url: `/applyVacation/update`,
    method: 'post',
    data
  })
}


export function applyVacationDelete(data) {
  return request({
    url: `/applyVacation/delete?applyNos=${data}`,
    method: 'get',
  })
}

export function reportBackReportBack(data) {
  return request({
    url: `/reportBack/reportBack?type=${data.type}&applyNo=${data.applyNo}`,
    method: 'post',
  })
}


export function applyVacationListZH(data) {
  return request({
    url: `/applyVacation/listZH`,
    method: 'post',
    data
  })
}

export function applyVacationSubmit(data) {
  return request({
    url: `/applyVacation/submit`,
    method: 'post',
    data
  })
}
