import request from '@/utils/request'


export function reportBackList(data) {
    return request({
      url: `/reportBack/list`,
      method: 'post',
      data
    })
  }
  
//   export function officeStockStockTypes() {
//     return request({
//       url: `/officeStock/stockTypes`,
//       method: 'get',
//     })
//   }

  
//   export function officeItemTree() {
//     return request({
//       url: `/officeItem/tree`,
//       method: 'get',
//     })
//   }

  
//   export function officeStockAdd(data) {
//     return request({
//       url: `/officeStock/add`,
//       method: 'post',
//       data
//     })
//   }

  
//   export function commonTCodeGetCodeByParentId(data) {
//     return request({
//       url: `/commonTCode/getCodeByParentId?parentId=11002`,
//       method: 'get',
//     })
//   }
//   export function commonTCodeGetCodeByParentIdVal(data) {
//     return request({
//       url: `/commonTCode/getCodeByParentId?parentId=${data}`,
//       method: 'get',
//     })
//   }
  

  
//   export function officeStockUpdate(data) {
//     return request({
//       url: `/officeStock/update`,
//       method: 'post',
//       data
//     })
//   }

//   export function officeStockDelete(data) {
//     return request({
//       url: `/officeStock/delete?ids=${data}`,
//       method: 'get',
//     })
//   }