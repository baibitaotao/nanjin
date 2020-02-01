import {
  applyFinancialList,
  applyFinancialGetComTomList,
  applyFinancialToEdit,
  applyFinancialAdd,
  applyFinancialUpdate,
  applyFinancialDelete,
  applyFinancialSubmit,
  applyFinanBToToEdit,
  applyFinanBToAdd,
  toUpdate,
  applyFinanBToUpdate,
  applyFinanBToSubmit,
  applyFinancialDetail
} from '@/api/licaichanpin'


const state = {}

const mutations = {}

const actions = {
  applyFinancialList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinancialGetComTomList({
    commit
  }) {
    return new Promise((resolve, reject) => {
      applyFinancialGetComTomList().then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinancialToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinancialAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  applyFinancialUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  applyFinancialDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinancialSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialSubmit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinanBToToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinanBToToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },



  applyFinanBToAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinanBToAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  toUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      toUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  applyFinanBToUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinanBToUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinanBToSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinanBToSubmit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyFinancialDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyFinancialDetail(params).then(response => {
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
