import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// mock 模拟数据接口
// import './mock/mock'

Vue.config.productionTip = false

console.log(process.env)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
