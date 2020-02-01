import {
  officeStockList,
  officeStockStockTypes,
  officeItemTree,
  officeStockAdd,
  commonTCodeGetCodeByParentId,
  officeStockUpdate,
  officeStockDelete,
  commonTCodeGetCodeByParentIdVal,
  officeStockToEdit,
  officeStockModelList,
  officeStockDetail,
  selectItemList
} from '@/api/officeStock'


const state = {}

const mutations = {}

const actions = {
  officeStockList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeStockStockTypes({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockStockTypes(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeItemTree({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeItemTree(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeStockAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  commonTCodeGetCodeByParentIdVal({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      commonTCodeGetCodeByParentIdVal(params).then(response => {
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

  officeStockUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  officeStockDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeStockToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  
  officeStockModelList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockModelList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeStockDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeStockDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  
  selectItemList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      selectItemList(params).then(response => {
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
