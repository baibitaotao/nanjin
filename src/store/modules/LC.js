import {
  officeUseDetail,
  meetingSummaryMeetingSummaryInfo,
  capitalSettleDetail,
  purchaseDetail,
  purchaseUpdate,
  assetsStockDetail,
  assetsUseDetail,
  assetsUseUpdate,
  assetsUseList1,
  applyVacationDetail,
  meetingCostDetail,
  officePurchaseDetail,
  purchaseUpdateApproval,
  assetsUseUpdateApproval,
  applyOutDetail,
  meetingSummaryDetail,
  applyBorrowDetail,
  expensePaidDetail,
  applyFinancialFinancialDetail,
  applyFinanBToDetail,
  officeUseUpdateProcess,
  assetsStockUpdateProcess,
  assetsStockUpdateScrapProcess,
  assetsUseUpdateProcess,
  expensePaidToEdit,
  expensePaidConditionProcessSubmit
} from '@/api/LC'

const state = {}

const mutations = {}

const actions = {
  officeUseDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  meetingSummaryMeetingSummaryInfo({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryMeetingSummaryInfo(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  capitalSettleDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      capitalSettleDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  purchaseDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      purchaseDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  purchaseUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      purchaseUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsUseDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsUseDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsUseUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsUseUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  assetsUseList1({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsUseList1(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyVacationDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  meetingCostDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingCostDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officePurchaseDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officePurchaseDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  purchaseUpdateApproval({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      purchaseUpdateApproval(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  assetsUseUpdateApproval({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsUseUpdateApproval(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  
  applyOutDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  
  meetingSummaryDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  applyBorrowDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyBorrowDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  
  expensePaidDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      expensePaidDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinancialFinancialDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialFinancialDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  
  applyFinanBToDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinanBToDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeUseUpdateProcess({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseUpdateProcess(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockUpdateProcess({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockUpdateProcess(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockUpdateScrapProcess({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockUpdateScrapProcess(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  assetsUseUpdateProcess({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsUseUpdateProcess(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  expensePaidToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      expensePaidToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  expensePaidConditionProcessSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      expensePaidConditionProcessSubmit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  

  
  
  

  


  


  

  



}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
