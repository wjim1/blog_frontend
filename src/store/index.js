import Vue from 'vue'
import Vuex from 'vuex'
import request from '../utils/http/request'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null
  },
  mutations: {
    setUser (state, value) {
      this.state.user = value
    },
    setToken (state, value) {
      this.state.token = value
    }
  },
  actions: {
    attemptLogin (context, value) {
      return request({
        url: 'auth/login',
        method: 'post',
        params: value
      })
    }
  }
})
