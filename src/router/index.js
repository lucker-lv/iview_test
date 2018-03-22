import Vue from 'vue'
import Router from 'vue-router'
import LayoutUI from '@/components/LayoutUI'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: resolve => require(['@/pages/PageHome'], resolve),
      meta: {
        keepAlive: true, // 是否需要被缓存
        label: '首页'
      }
    },
    {
      path: '/companyInfo',
      name: 'PageCompanyInfo',
      component: resolve => require(['@/pages/PageCompanyInfo'], resolve),
      meta: {
        keepAlive: true,
        label: '公司介绍'
      }
    },
    {
      path: '/companyInfo2',
      name: 'PageCompanyInfo2',
      component: resolve => require(['@/pages/PageCompanyInfo2'], resolve),
      meta: {
        keepAlive: true,
        label: '公司介绍2'
      }
    },
    {
      path: '/about/:id',
      name: 'PageAbout',
      component: resolve => require(['@/pages/PageAbout'], resolve),
      meta: {
        keepAlive: true,
        label: '关于'
      },
      props: true
    },
    {
      path: '/element',
      name: 'LayoutUI',
      component: LayoutUI
    }
  ]
})
