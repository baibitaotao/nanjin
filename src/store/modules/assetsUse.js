import {
  assetsUseToEdit,
  officePurchaseAdd,
  officePurchaseUpdate,
  officePurchaseDelete,
  officePurchaseConditionProcessSubmit,
  purchaseDelete
  // reportBackReportBack,
  // applyVacationListZH
} from '@/api/assetsUse'

const state = {}

const mutations = {}

const actions = {
  assetsUseToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsUseToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officePurchaseAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officePurchaseAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  
  officePurchaseUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officePurchaseUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officePurchaseDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officePurchaseDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officePurchaseConditionProcessSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officePurchaseConditionProcessSubmit(params).then(response => {
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
