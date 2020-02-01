import {
    expensePaidDetailList,
    expensePaidDetailToEdit,
    commonTCodeGetCodeByParentId,
    expensePaidAdd,
    expensePaidUpdate,
    expensePaidDelete,
    expensePaidDetailGetComTomList,
    expensePaidConditionProcessSubmit
    } from '@/api/expensePaidDetail'
    
    
    const state = {}
    
    const mutations = {}
    
    const actions = {
        expensePaidDetailList({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
            expensePaidDetailList(params).then(response => {
            const {
              data
            } = response
            resolve(data)
          }).catch(error => {
            reject(error)
          })
        })
      },
    
    
      expensePaidDetailToEdit({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
            expensePaidDetailToEdit(params).then(response => {
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
    
      expensePaidAdd({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
          expensePaidAdd(params).then(response => {
            const {
              data
            } = response
            resolve(data)
          }).catch(error => {
            reject(error)
          })
        })
      },
    
      expensePaidUpdate({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
          expensePaidUpdate(params).then(response => {
            const {
              data
            } = response
            resolve(data)
          }).catch(error => {
            reject(error)
          })
        })
      },
    
      
      expensePaidDelete({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
          expensePaidDelete(params).then(response => {
            const {
              data
            } = response
            resolve(data)
          }).catch(error => {
            reject(error)
          })
        })
      },
      
      expensePaidDetailGetComTomList({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
          expensePaidDetailGetComTomList(params).then(response => {
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
    