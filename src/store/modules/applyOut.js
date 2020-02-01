import {
  applyOutList,
  applyOutToEdit,
  applyOutAdd,
  applyOutUpdate,
  applyOutDelete,
  applyOutListZH,
  applyOutSubmit,
  reportBackToEdit,
  reportBackAdd
} from '@/api/applyOut'


const state = {}

const mutations = {}

const actions = {
  applyOutList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyOutToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyOutAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyOutUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  applyOutDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  applyOutListZH({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutListZH(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyOutSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyOutSubmit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  reportBackToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      reportBackToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  reportBackAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      reportBackAdd(params).then(response => {
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
