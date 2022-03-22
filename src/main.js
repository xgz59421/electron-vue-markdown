import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import pmd from 'perfect-markdown' //  or import pmd from 'perfect-markdown/lib/pmd.umd.min.js'
Vue.use(pmd, { store }) // register pmd vuex module

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
