import {
  meetingSummaryList,
  meetingSummaryToEdit,
  commonTCodeGetCodeByParentId,
  meetingSummaryAdd,
  meetingSummaryUpdate,
  meetingSummaryDelete,
  meetingSummaryConditionProcessSubmit
} from '@/api/meetingSummary'

const state = {}

const mutations = {}

const actions = {
  meetingSummaryList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  meetingSummaryToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryToEdit(params).then(response => {
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

  meetingSummaryAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  meetingSummaryUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  meetingSummaryDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  meetingSummaryConditionProcessSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingSummaryConditionProcessSubmit(params).then(response => {
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
