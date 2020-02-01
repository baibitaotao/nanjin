import request from '@/utils/request'


export function applyOutList(data) {
    return request({
      url: `/applyOut/list`,
      method: 'post',
      data
    })
  }

  
  export function applyOutToEdit(params) {
    return request({
      url: `/applyOut/toEdit`,
      method: 'get',
      params
    })
  }

  export function applyOutAdd(data) {
    return request({
      url: `/applyOut/add`,
      method: 'post',
      data
    })
  }

  
  export function applyOutUpdate(data) {
    return request({
      url: `/applyOut/update`,
      method: 'post',
      data
    })
  }
  export function applyOutDelete(data) {
    return request({
      url: `/applyOut/delete?applyNos=${data}`,
      method: 'get',
    })
  }
  
  
  export function applyOutListZH(data) {
    return request({
      url: `/applyOut/listZH`,
      method: 'post',
      data
    })
  }
  

  
  export function applyOutSubmit(data) {
    return request({
      url: `applyOut/submit`,
      method: 'post',
      data
    })
  }

  export function reportBackToEdit(params) {
    return request({
      url: `reportBack/toEdit`,
      method: 'get',
      params
    })
  }

  export function reportBackAdd(data) {
    return request({
      url: `reportBack/add`,
      method: 'post',
      data
    })
  }
  
  
  