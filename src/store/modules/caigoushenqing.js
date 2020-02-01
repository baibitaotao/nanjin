import {
    purchaseList,
    purchaseToEdit,
    commonTCodeGetCodeByParentId,
    purchaseAdd,
    purchaseUpdate,
    purchaseDelete,
    purchaseConditionProcessSubmit,
    // applyVacationListZH
  } from '@/api/caigoushenqing'
  
  
  const state = {}
  
  const mutations = {}
  
  const actions = {
    purchaseList({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        purchaseList(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
  
    purchaseToEdit({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        purchaseToEdit(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    commonTCodeGetCodeByParentId({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        commonTCodeGetCodeByParentId(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    purchaseAdd({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        purchaseAdd(params).then(response => {
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
  
    
    purchaseDelete({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        purchaseDelete(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    purchaseConditionProcessSubmit({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        purchaseConditionProcessSubmit(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
  
    
    // applyVacationListZH({
    //   commit
    // }, params) {
    //   return new Promise((resolve, reject) => {
    //     applyVacationListZH(params).then(response => {
    //       const {
    //         data
    //       } = response
    //       resolve(data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
  
    
  
  
  
  
  
  
  
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  