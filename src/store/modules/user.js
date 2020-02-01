import {
  login,
  logout,
  getInfo,
  menuSelectMenuTree,
  appUserGetLoginUserInfo
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import router, {
  resetRouter
} from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  router_length: null,
  router: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ROUTER_LENGTH: (state, length) => {
    state.router_length = length
  },
  SAVE_ROUTER: (state, routerData) => {
    state.routerData = routerData
  }
}

const actions = {
  menuSelectMenuTree({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      menuSelectMenuTree(params).then(res => {
        // console.log(res.data)
        commit('SAVE_ROUTER', res.data.data.funcPermissions)
        commit('SET_ROUTER_LENGTH', 10)
        resolve(res.data)
      }).catch(err => {
        reject(error)
      })
    })
  },

  appUserGetLoginUserInfo({
    commit
  },params) {
    return new Promise((resolve, reject) => {
      appUserGetLoginUserInfo(params).then(res => {
      resolve(res.data.data)
      }).catch(err => {
        reject(error)
      })
      commit('SET_ROUTER_LENGTH', 10)
    })
  },

  // user login
  login({
    commit
  }, userInfo) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', 'admin-token')
      setToken('admin-token')
      resolve()
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {
          data
        } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {
          roles,
          name,
          avatar,
          introduction
        } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({
    commit,
    dispatch
  }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const {
        roles
      } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, {
        root: true
      })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
