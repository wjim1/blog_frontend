<template>
  <div class="row pt-3">
    <div class="offset-sm-4 col-sm-4">
      <div class="box">
        <h4 class="text-center font-weight-normal mt-2">用户登录</h4>
        <form @submit.prevent="submit">
          <div class="form-group">
            <label>邮箱<small></small></label>
            <input type="text" class="form-control" v-model="email" required>
          </div>
          <div class="form-group">
            <label>密码</label>
            <input type="password" class="form-control" v-model="password" required>
          </div>
          <button type="submit" class="my-2 btn btn-primary w-100">登录</button>
        </form>
        <div class="mb-2 d-flex justify-content-around">
          <!--<socialite-btns></socialite-btns>-->
        </div>
      </div>
    </div>
    <div class="offset-sm-4 col-sm-4 text-center mt-2 d-flex justify-content-between">
      <p>没有账号？ <router-link class="text-blue" :to="{ name: 'auth.register' }">快速注册</router-link>
      </p>
      <p>
        <router-link class="text-blue" :to="{ name: 'auth.forget-password' }">忘记密码？</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { login } from '../../api/auth/index'
export default {
  name: 'login',
  components: {},
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      const params = {
        email: this.email,
        password: this.password
      }
      const  res = await login(params)
      // try {
      //   this.$store.dispatch('login', params)
      //   // await this.login(params)
      //   this.$message.success('欢迎回来~')
      // } catch (e) {
      //   if (e.status !== 422) {
      //     this.$message.error('账号密码错误!')
      //   }
      // }
    }
  }
}
</script>

<style scoped>

</style>
