import request from '@/utils/request'

export function officeStockList(data) {
  return request({
    url: `/officeStock/list`,
    method: 'post',
    data
  })
}

export function officeStockStockTypes() {
  return request({
    url: `/officeStock/stockTypes`,
    method: 'get'
  })
}

export function officeItemTree(data) {
  return request({
    url: `/officeItem/tree?classify=${data}`,
    method: 'get'
  })
}

export function officeStockAdd(data) {
  return request({
    url: `/officeStock/add`,
    method: 'post',
    data
  })
}

export function commonTCodeGetCodeByParentId(data) {
  return request({
    url: `/commonTCode/getCodeByParentId?parentId=11002`,
    method: 'get'
  })
}
export function commonTCodeGetCodeByParentIdVal(data) {
  return request({
    url: `/commonTCode/getCodeByParentId?parentId=${data}`,
    method: 'get'
  })
}

export function officeStockUpdate(data) {
  return request({
    url: `/officeStock/update`,
    method: 'post',
    data
  })
}

export function officeStockDelete(data) {
  return request({
    url: `/officeStock/delete?ids=${data}`,
    method: 'get'
  })
}

export function officeStockToEdit(data) {
  return request({
    url: `/officeStock/toEdit?dealMark=${data.dealMark}`,
    method: 'get',
  })
}

export function officeStockModelList(data) {
  return request({
    url: `/officeStock/modelList`,
    method: 'post',
  })
}


export function officeStockDetail(data) {
  return request({
    url: `/officeStock/detail?applyNo=OFFSTO2019102484`,
    // url: `/officeStock/detail?applyNo=${data}`,
    method: 'get',
  })
}


export function selectItemList(data) {
  return request({
    url: `officeItem/selectItemList?classify=${data.classify}`,
    method: 'get',
  })
}




