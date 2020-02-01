import {
  officePurchaseList,
  purchaseToEdit,
  commonTCodeGetCodeByParentId,
  purchaseAdd,
  purchaseUpdate,
  purchaseDelete
  // reportBackReportBack,
  // applyVacationListZH
} from '@/api/bangonyonpincaigou'

const state = {}

const mutations = {}

const actions = {

  officePurchaseList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officePurchaseList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
