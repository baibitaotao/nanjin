import {
  meetingCostList,
  meetingCostToEdit,
  meetingCostSubmit,
  meetingCostAdd,
  meetingCostUpdate,
  meetingCostDetail
} from '@/api/meetingCost'


const state = {}

const mutations = {}

const actions = {
  meetingCostList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingCostList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  meetingCostToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingCostToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  meetingCostAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingCostAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  meetingCostUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingCostUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  meetingCostDetail({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingCostDetail(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  meetingCostSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      meetingCostSubmit(params).then(response => {
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
