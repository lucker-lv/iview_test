const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: resolve => require(['@/pages/PageHome'], resolve),
    title: '首页'
  },
  {
    path: '/companyInfo',
    name: 'PageCompanyInfo',
    component: resolve => require(['@/pages/PageCompanyInfo'], resolve),
    title: '公司介绍'
  },
  {
    path: '/companyInfo2',
    name: 'PageCompanyInfo2',
    component: resolve => require(['@/pages/PageCompanyInfo2'], resolve),
    title: '公司介绍2'
  },
  {
    path: '/about/:id',
    name: 'PageAbout',
    component: resolve => require(['@/pages/PageAbout'], resolve),
    title: '关于'
  }
]

export default routes
