import {
  applyBorrowList,
  applyBorrowToEdit,
  applyBorrowAdd,
  applyBorrowUpdate,
  applyBorrowDelete,
  applyBorrowSubmit
  } from '@/api/applyBorrow'
  
  
  const state = {}
  
  const mutations = {}
  
  const actions = {
    applyBorrowList({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        applyBorrowList(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
  
    applyBorrowToEdit({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        applyBorrowToEdit(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
  
    applyBorrowAdd({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        applyBorrowAdd(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    applyBorrowUpdate({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        applyBorrowUpdate(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    
    applyBorrowDelete({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        applyBorrowDelete(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    applyBorrowSubmit({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        applyBorrowSubmit(params).then(response => {
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
  