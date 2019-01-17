import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false
Vue.use(VueI18n)
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App,
  },
  i18n,
  render: h => h(App)
}).$mount('#app')
