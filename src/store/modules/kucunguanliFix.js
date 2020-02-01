import {
  assetsStockList,
  assetsStockToEdit,
  assetsStockPurchaselist,
  assetsStockAddStock,
  assetsStockUpdate,
  assetsStockDelete,
  assetsStockConditionProcessSubmit,
  assetsStockToEditScrap,
  assetsStocSelectScrapList,
  addScrap,
  submitScrap,
  updateScrap
} from '@/api/kucunguanliFix'

const state = {}
const mutations = {}
const actions = {
  assetsStockList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockPurchaselist({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockPurchaselist(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockAddStock({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockAddStock(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockConditionProcessSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockConditionProcessSubmit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStockToEditScrap({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStockToEditScrap(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  assetsStocSelectScrapList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      assetsStocSelectScrapList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  addScrap({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      
      addScrap(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  submitScrap({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      submitScrap(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateScrap({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      updateScrap(params).then(response => {
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
