<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="box">
        <h4 class="text-center font-weight-normal mt-2">用户注册</h4>
        <form @submit.prevent="showCaptcha">
          <div class="form-group">
            <label>邮箱地址</label>
            <input
              type="text"
              class="form-control"
              ref="emailInput"
              placeholder="xxxxx@qq.com"
              v-model="email"
              @blur="validateEmail"
              required
            >
          </div>
          <div class="form-group">
            <label>用户名</label>
            <input
              type="text"
              class="form-control"
              ref="usernameInput"
              placeholder="5 ~ 12 位字母或数字"
              v-model="name"
              @blur="validateUsername"
              required
            >
          </div>
          <div class="form-group">
            <label>密码</label>
            <input
              type="password"
              class="form-control"
              ref="passwordInput"
              placeholder="6 ~ 32 位安全密码"
              v-model="password"
              required
            >
          </div>
          <button type="submit" :disabled="!formReady" class="my-2 btn btn-primary w-100">注册</button>
        </form>
      </div>
    </div>
    <div class="offset-sm-3 col-sm-6 text-center mt-2">
      <p>
        已有账号？
        <router-link class="text-blue" :to="{ name: 'auth.login' }">快速登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      error: true,
      password: '',
      regex: {
        email: /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-.]+.(com|io|cc|co|li|it|sh|cn|net|org|jp|tw|me|info|us|in|la|pro|im|so|at|my|ren|red|top|ltd|fun|vip)$/,
        name: /^[a-zA-Z]+[a-zA-Z0-9_-]+$/
      }
    }
  },
  watch: {
    name () {
      this.$refs.usernameInput.classList.remove('is-invalid')
    },
    email () {
      this.$refs.emailInput.classList.remove('is-invalid')
    }
  },
  computed: {
    formReady () {
      return (
        !this.error &&
          this.email.match(this.regex.email) &&
          this.name.match(this.regex.name) &&
          this.name.length >= 5 &&
          this.name.length <= 12 &&
          this.password.length >= 6 &&
          this.password.length <= 32
      )
    }
  },
  methods: {
    ...mapActions([''])
  }
}
</script>

<style scoped>

</style>
