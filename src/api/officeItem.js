import request from '@/utils/request'


export function officeItemTree(data) {
    return request({
      url: `/officeItem/tree`,
      method: 'get',
    })
  }
  

  
  export function officeItemAdd(data) {
    return request({
      url: `/officeItem/add`,
      method: 'post',
      data
    })
  }

  

  
  export function officeItemUpdate(data) {
    return request({
      url: `/officeItem/update`,
      method: 'post',
      data
    })
  }

  export function officeItemDelete(data) {
    return request({
      url: `/officeItem/delete?ids=${data}`,
      method: 'get',
    })
  }