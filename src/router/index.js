import Vue from 'vue'
import Router from 'vue-router'
import LayoutUI from '@/components/LayoutUI'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: resolve => require(['@/pages/PageHome'], resolve),
      meta: {
        // keepAlive: true, // 是否需要被缓存
        label: '首页'
      }
    },
    {
      path: '/companyInfo',
      name: 'PageCompanyInfo',
      component: resolve => require(['@/pages/PageCompanyInfo'], resolve),
      meta: {
        label: '公司介绍'
      }
    },
    {
      path: '/companyInfo2',
      name: 'PageCompanyInfo2',
      component: resolve => require(['@/pages/PageCompanyInfo2'], resolve),
      meta: {
        label: '公司介绍2'
      }
    },
    {
      path: '/about/:id',
      name: 'PageAbout',
      component: resolve => require(['@/pages/PageAbout'], resolve),
      meta: {
        label: '关于'
      },
      props: true
    },
    {
      path: '/personalInfo',
      name: 'PagePersonalInfo',
      component: resolve => require(['@/pages/PagePersonalInfo'], resolve),
      meta: {
        label: '个人中心'
      }
    },
    {
      path: '/element',
      name: 'LayoutUI',
      component: LayoutUI
    }
  ]
})

// const pageDatas = []

// router.afterEach((to, from) => {
//   // console.log(from.matched[0].instances.default.$data)
//   // console.log(from)
//   let data = from.matched[0] && from.matched[0].instances && from.matched[0].instances.default && from.matched[0].instances.default.$data
//   // pageDatas.push({
//   //   path: from.path,
//   //   data: data
//   // })
//   localStorage.setItem(from.path, JSON.stringify(data))

//   // to.name
//   // console.log('to: ', to)
//   // console.log(to.matched[0] && to.matched[0].instances && to.matched[0].instances.default && to.matched[0].instances.default._data)

//   // next()
// })

export default router
