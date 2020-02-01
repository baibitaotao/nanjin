import request from '@/utils/request'

export function officePurchaseList(data) {
  return request({
    url: `officePurchase/list`,
    method: 'post',
    data
  })
}

