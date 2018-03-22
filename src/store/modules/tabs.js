const state = {
  options: [{
    label: '首页',
    name: '/',
    closable: false
  }],
  deleteIndex: '',
  pagesArr: ['PageHome'],
  userInfo: {}
}

const getters = {
  options: state => state.options,
  deleteIndex: state => state.deleteIndex,
  pagesArr: state => state.pagesArr
}

const actions = {
  add_tabs ({commit, state}, data) {
    commit('add_tabs', data.tab)
    if (state.pagesArr.indexOf(data.componentName) < 0 && data.componentName !== null) {
      commit('add_cache_page', data.componentName)
    }
  },
  delete_tab ({commit, state}, route) {
    let index = state.options.findIndex((value, index) => value.name === route)
    commit('set_delete_index', index)
    commit('delete_tab')
    commit('delete_cache_page')
  }
}

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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
