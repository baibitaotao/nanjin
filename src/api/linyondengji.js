import request from '@/utils/request'


export function assetsUseList(data) {
  return request({
    url: `/assetsUse/list`,
    method: 'post',
    data
  })
}

export function assetsUseToEdit(params) {
  return request({
    url: `/assetsUse/toEdit`,
    method: 'get',
    params
  })
}





export function assetsUseAdd(data) {
  return request({
    url: `/assetsUse/add`,
    method: 'post',
    data
  })
}


export function assetsUseUpdate(data) {
  return request({
    url: `/assetsUse/update`,
    method: 'post',
    data
  })
}


export function assetsUseDelete(data) {
  return request({
    url: `/assetsUse/delete?ids=${data}`,
    method: 'get',
  })
}


export function assetsUseConditionProcessSubmit(data) {
  return request({
    url: `/assetsUse/conditionProcessSubmit`,
    method: 'post',
    data
  })
}

export function assetsUseSelectGoods(params) {
  return request({
    url: `/assetsUse/selectGoods`,
    method: 'get',
    params
  })
}
export function assetsUseGiveBack(params) {
  return request({
    url: `/assetsUse/giveBack`,
    method: 'get',
    params
  })
}







