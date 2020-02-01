import {
    assetsUseList,
    assetsUseToEdit,
    assetsUseAdd,
    assetsUseUpdate,
    assetsUseDelete,
    assetsUseConditionProcessSubmit,
    assetsUseSelectGoods,
    assetsUseGiveBack
  } from '@/api/linyondengji'
  
  
  const state = {}
  
  const mutations = {}
  
  const actions = {
    assetsUseList({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        assetsUseList(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
  
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
  
    assetsUseAdd({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        assetsUseAdd(params).then(response => {
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
  
    
    assetsUseDelete({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        assetsUseDelete(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
       
    assetsUseConditionProcessSubmit({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        assetsUseConditionProcessSubmit(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    assetsUseSelectGoods({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        assetsUseSelectGoods(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    assetsUseGiveBack({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        assetsUseGiveBack(params).then(response => {
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
  