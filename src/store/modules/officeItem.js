import {
   officeItemTree,
    officeItemAdd,
    officeItemUpdate,
    officeItemDelete
} from '@/api/officeItem'


const state = {}

const mutations = {}

const actions = {
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

  officeItemAdd({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        officeItemAdd(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },



    officeItemUpdate({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        officeItemUpdate(params).then(response => {
          const {
            data
          } = response
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },


    officeItemDelete({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        officeItemDelete(params).then(response => {
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
