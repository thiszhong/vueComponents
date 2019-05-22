import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// options 为可选参数，无则不传
// Vue.use(Lazyload, {})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
