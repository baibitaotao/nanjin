import {
  officeUseList,
  officeUseToEdit,
  officeUseAdd,
  officeUseDelete,
  officeUseUpdate,
  officeUseConditionProcessSubmit
} from '@/api/useController'

const state = {}

const mutations = {}

const actions = {
  officeUseList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeUseToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeUseAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeUseDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeUseUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  officeUseConditionProcessSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      officeUseConditionProcessSubmit(params).then(response => {
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
