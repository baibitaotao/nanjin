import {
  applyVacationList,
  applyVacationToEdit,
  commonTCodeGetCodeByParentId,
  applyVacationAdd,
  applyVacationUpdate,
  applyVacationDelete,
  reportBackReportBack,
  applyVacationListZH,
  applyVacationSubmit,
} from '@/api/applyVacation'


const state = {}

const mutations = {}

const actions = {
  applyVacationList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  applyVacationToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationToEdit(params).then(response => {
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

  applyVacationAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyVacationUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  
  applyVacationDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  reportBackReportBack({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      reportBackReportBack(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },


  
  applyVacationListZH({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationListZH(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  applyVacationSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      applyVacationSubmit(params).then(response => {
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
