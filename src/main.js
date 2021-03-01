import Vue from 'vue'
import './bootstrap'
import axios from 'axios'
import App from './App.vue'
import store from './store/index'
import router from './router'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/message.css'
Vue.use(VueAxios, axios)
Vue.prototype.$message = Message
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
