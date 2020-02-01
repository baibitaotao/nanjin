import {
  capitalSettleList,
  capitalSettleToEdit,
  // commonTCodeGetCodeByParentId,
  capitalSettleAdd,
  capitalSettleUpdate,
  capitalSettleDelete,
  capitalSettleSubmit,
  treeGetTreeList
} from '@/api/xiangmuzijin'

const state = {}

const mutations = {}

const actions = {
  capitalSettleList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      capitalSettleList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  capitalSettleToEdit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      capitalSettleToEdit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  
  treeGetTreeList({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      treeGetTreeList(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  capitalSettleAdd({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      capitalSettleAdd(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  capitalSettleUpdate({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      capitalSettleUpdate(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  capitalSettleDelete({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      capitalSettleDelete(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  capitalSettleSubmit({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      capitalSettleSubmit(params).then(response => {
        const {
          data
        } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  // reportBackReportBack({
  //   commit
  // }, params) {
  //   return new Promise((resolve, reject) => {
  //     reportBackReportBack(params).then(response => {
  //       const {
  //         data
  //       } = response
  //       resolve(data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // applyVacationListZH({
  //   commit
  // }, params) {
  //   return new Promise((resolve, reject) => {
  //     applyVacationListZH(params).then(response => {
  //       const {
  //         data
  //       } = response
  //       resolve(data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
