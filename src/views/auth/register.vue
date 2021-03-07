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
              required>
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
import { register, checkUserExists } from '@/api/auth'
import { setToken, getToken } from '$utils/auth/auth'
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      ticket: null,
      randstr: null,
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
    ...mapActions(['getInfo']),
    // 检查邮箱是否存在
    validateEmail(){
      this.error = false

      if (!this.email.match(this.regex.email)){
        this.error = true
        this.$refs['emailInput'].classList.add('is--invalid')
        return this.$message.error('请输入正确的邮箱地址')
      }

      const params = {
        email: this.email
      }
      checkUserExists(params).then(res => {
        if (!res.success){
          this.error = true
          this.$refs['emailInput'].classList.add('is-invalid')
          return this.$message.error('邮箱已经存在!')
        }
      })

    },
    // 检查用户名是否存在
    validateUsername(){
      this.error = false

      if (!this.name.match(this.regex.name) || this.name < 5){
        this.error = true
        this.$refs['usernameInput'].classList.add('is-invalid')
        return this.$message.error('请输入 5 ~ 12 位正确格式用户名')
      }
      const params = {
        name: this.name
      }
      checkUserExists(params).then(res => {
        if (!res.success){
          this.error = true
          this.$refs['usernameInput'].classList.add('is-invalid')
          return this.$message.error('用户名已经存在!')
        }
      })
    },
    // 前端防水墙
    showCaptcha(){
      let captcha = new window.TencentCaptcha(
        process.env.VUE_APP_CAPTCHA_ID_REGISTER,
        res => {
          if (res.ret === 0) {
            this.ticket = res.ticket
            this.randstr = res.randstr
            this.submit()
          } else {
            return this.$message.error('请先完成验证！')
          }
        }
      )
      captcha.show()
    },
    // 注册提交
    submit(){
      const params = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      register(params).then(res => {
        // token 存入本地
        setToken(res.access_token)
        // 存入vuex
        this.$store.commit('SET_TOKEN', res.access_token)
        // 获取用户信息
        this.$store.dispatch('getInfo')
      })
    }
  }
}
</script>

<style scoped>

</style>
