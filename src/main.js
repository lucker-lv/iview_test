// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/common.styl'
import store from './store'

// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Element)
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
