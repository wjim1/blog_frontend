import Vue from 'vue'
import Vuex from 'vuex'
import request from '../utils/http/request'
import { isEmpty } from 'element-ui/src/utils/util'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null,

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
      }).then(res => {
        context.commit('setToken', res.access_token)
        localStorage.setItem('user_token', res.access_token)
      })
    },
    attemptRegister (context, value) {
      return request({
        url: 'auth/register',
        method: 'post',
        params: value
      })
    },
    logout () {
      localStorage.removeItem('user_token')
      this.$store.dispatch('setUser', {})
      this.$store.dispatch('setToken', null)
      this.$router.push('home')
    },
    loadUser (context, value) {

    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getToken (state) {
      return state.token
    },
    isLogged (state) {
      return !isEmpty(state.token)
    }
  }
})
