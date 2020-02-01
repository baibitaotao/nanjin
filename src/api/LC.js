import request from '@/utils/request'

export function officeUseDetail(params) {
  return request({
    url: `/officeUse/detail`,
    method: 'get',
    params
  })
}

export function meetingSummaryMeetingSummaryInfo(data) {
  return request({
    url: `/meetingSummary/meetingSummaryInfo/${data}`,
    method: 'get'
  })
}

export function capitalSettleDetail(params) {
  return request({
    url: `/capitalSettle/detail`,
    method: 'get',
    params
  })
}

export function purchaseDetail(params) {
  return request({
    url: `/purchase/detail`,
    method: 'get',
    params
  })
}

export function purchaseUpdate(data) {
  return request({
    url: `/purchase/update`,
    method: 'post',
    data
  })
}

export function assetsStockDetail(params) {
  return request({
    url: `/assetsStock/detail`,
    method: 'get',
    params
  })
}

export function assetsUseDetail(params) {
  return request({
    url: `/assetsUse/detail`,
    method: 'get',
    params
  })
}

export function assetsUseUpdate(data) {
  return request({
    url: `/assetsUse/update`,
    method: 'post',
    data
  })
}
export function assetsUseList1(data) {
  return request({
    url: `/assetsUse/list1`,
    method: 'post',
    data
  })
}

export function applyVacationDetail(params) {
  return request({
    url: `/applyVacation/detail`,
    method: 'get',
    params
  })
}

export function meetingCostDetail(params) {
  return request({
    url: `/meetingCost/detail`,
    method: 'get',
    params
  })
}

export function officePurchaseDetail(params) {
  return request({
    url: `/officePurchase/detail`,
    method: 'get',
    params
  })
}

export function purchaseUpdateApproval(data) {
  return request({
    url: `/purchase/updateApproval`,
    method: 'post',
    data
  })
}

export function assetsUseUpdateApproval(data) {
  return request({
    url: `assetsUse/updateApproval`,
    method: 'post',
    data
  })
}

export function applyOutDetail(params) {
  return request({
    url: `/applyOut/detail`,
    method: 'get',
    params
  })
}


export function meetingSummaryDetail(params) {
  return request({
    url: `/meetingSummary/detail`,
    method: 'get',
    params
  })
}


export function applyBorrowDetail(params) {
  return request({
    url: `/applyBorrow/detail`,
    method: 'get',
    params
  })
}

export function expensePaidDetail(params) {
  return request({
    url: `/expensePaid/detail`,
    method: 'get',
    params
  })
}


export function applyFinancialFinancialDetail(params) {
  return request({
    url: `applyFinancial/financialDetail`,
    method: 'get',
    params
  })
}


export function applyFinanBToDetail(params) {
  return request({
    url: `applyFinanBTo/detail`,
    method: 'get',
    params
  })
}

export function officeUseUpdateProcess(data) {
  return request({
    url: `officeUse/updateProcess`,
    method: 'post',
    data
  })
}

export function assetsStockUpdateProcess(data) {
  return request({
    url: `assetsStock/updateProcess`,
    method: 'post',
    data
  })
}

export function assetsStockUpdateScrapProcess(data) {
  return request({
    url: `assetsStock/updateScrapProcess`,
    method: 'post',
    data
  })
}

export function assetsUseUpdateProcess(data) {
  return request({
    url: `assetsUse/updateProcess  `,
    method: 'post',
    data
  })
}


export function expensePaidToEdit(params) {
  return request({
    url: `expensePaid/toEdit`,
    method: 'get',
    params
  })
}

export function expensePaidConditionProcessSubmit(data) {
  return request({
    url: `expensePaid/conditionProcessSubmit`,
    method: 'post',
    data
  })
}












