import { login, logout, getUser } from '../../api/auth/index'
import { getToken } from '$utils/auth/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    user: {},
    currentUser: {
      name: '',
      email: '',
      avatar: ''
    }
  }
}

const state = getDefaultState()

const mutations = {
  // 设置token
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // 设置用户
  SET_USER: (state, user) => {
    state.user = user
  },
  // 设置用户名
  SET_NAME: (state, name) => {
    state.currentUser.name = name
  },
  // 设置用户头像
  SET_AVATAR: (state, avatar) => {
    state.currentUser.avatar = avatar
  },
  // 设置用户邮箱
  SET_EMAIL: (state, email) => {
    state.currentUser.email = email
  }
}

const actions = {
  login({ commit, dispatch }, userInfo) {
    const { email, password } = userInfo
    return new Promise((resolve, reject) => {
      login({
        email: email,
        password: password
      }).then(response => {
        debugger
        // token 存入本地缓存
        setToken(response.access_token)

        // vuex  存入token
        commit('SET_TOKEN', response.access_token)

        // 加载用户信息
        dispatch('getInfo')
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo({ commit, state }) {
    const token = getToken()
    getUser(token).then(res => {
      console.log(res)
    })
    return new Promise((resolve, reject) => {

      //   .then(response => {
      //   console.log(response)
      //   commit('SET_NAME', response.name)
      //   commit('SET_EMAIL', response.email)
      //   commit('SET_AVATAR', response.avatar)
      //   commit('SET_USER', response)
      //   resolve(response)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_EMAIL', '')
        commit('SET_AVATAR', '')
        setToken('')
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
