const state = {
  options: [{
    label: '首页',
    name: '/',
    closable: false,
    component: 'PageHome',
    data: {}
  }],
  deleteIndex: '',
  // pagesArr: ['PageHome'],
  pagesArr: [],
  fromTabPath: '',
  userInfo: {}
}

const getters = {
  options: state => state.options,
  deleteIndex: state => state.deleteIndex,
  // pagesArr: state => state.pagesArr,
  pagesArr: state => state.options.map(function (item) { return item.component }),
  fromTabPath: state => state.fromTabPath
}

const actions = {
  add_tabs ({commit, state}, data) {
    commit('add_tabs', data.tab)
    if (state.pagesArr.indexOf(data.tab.component) < 0 && data.tab.component !== null) {
      commit('add_cache_page', data.tab.component)
    }
  },
  delete_tab ({commit, state}, route) {
    // commit('set_delete_index', index)
    commit('delete_tab')
    commit('delete_cache_page')
    // 删除相同组件不同实例的localstorage数据
    // deleteLCCachePage(route)
  }
}

// let deleteLCCachePage = (route) => {
//   localStorage.removeItem(route)
//   alert('remove')
// }

const mutations = {
  // 添加tabs
  add_tabs (state, data) {
    state.options.push(data)
  },
  // 删除tabs
  delete_tab (state) {
    state.options.splice(state.deleteIndex, 1)
  },
  // 设置当前删除的的tab
  set_delete_index (state, index) {
    state.deleteIndex = index
  },
  add_cache_page (state, name) {
    state.pagesArr.push(name)
  },
  delete_cache_page (state) {
    state.pagesArr.splice(state.deleteIndex, 1)
  },
  // 设置详情信息
  save_detail_info (state, info) {
    state.userInfo = info
  },
  set_from_tab_path (state, path) {
    state.fromTabPath = path
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
