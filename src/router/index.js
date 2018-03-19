import Vue from 'vue'
import Router from 'vue-router'
import LayoutUI from '@/components/LayoutUI'
import PageHome from '@/components/PageHome'
import PageCompanyInfo from '@/components/PageCompanyInfo'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
      meta: {
        keepAlive: true // 是否需要被缓存
      }
    },
    {
      path: '/companyInfo',
      name: 'PageCompanyInfo',
      component: PageCompanyInfo,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/element',
      name: 'LayoutUI',
      component: LayoutUI
    }
  ]
})
