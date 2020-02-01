import request from '@/utils/request'


export function applyFinancialList(data) {
  return request({
    url: `/applyFinancial/list`,
    method: 'post',
    data
  })
}


export function applyFinancialGetComTomList(data) {
    return request({
      url: `/applyFinancial/getComTomList`,
      method: 'post',
    })
  }

  export function applyFinancialToEdit(params) {
    return request({
      url: `/applyFinancial/toEdit`,
      method: 'get',
      params
    })
  }

  
  export function applyFinancialAdd(data) {
    return request({
      url: `/applyFinancial/add`,
      method: 'post',
      data
    })
  }



// export function assetsUseAdd(data) {
//   return request({
//     url: `/assetsUse/add`,
//     method: 'post',
//     data
//   })
// }


export function applyFinancialUpdate(data) {
  return request({
    url: `/applyFinancial/update`,
    method: 'post',
    data
  })
}


export function applyFinancialDelete(data) {
  return request({
    url: `/applyFinancial/delete?applyNos=${data}`,
    method: 'get',
  })
}


export function applyFinancialSubmit(data) {
  return request({
    url: `/applyFinancial/submit`,
    method: 'post',
    data
  })
}
export function applyFinanBToToEdit(params) {
  return request({
    url: `applyFinanBTo/toEdit`,
    method: 'get',
    params
  })
}

export function applyFinanBToAdd(data) {
  return request({
    url: `applyFinanBTo/add`,
    method: 'post',
    data
  })
}

export function toUpdate(params) {
  return request({
    url: `applyFinanBTo/toUpdate`,
    method: 'get',
    params
  })
}


export function applyFinanBToUpdate(data) {
  return request({
    url: `/applyFinanBTo/update`,
    method: 'post',
    data
  })
}

export function applyFinanBToSubmit(data) {
  return request({
    url: `/applyFinanBTo/submit`,
    method: 'post',
    data
  })
}

export function applyFinancialDetail(params) {
  return request({
    url: `/applyFinancial/detail`,
    method: 'get',
    params
  })
}














