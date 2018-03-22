import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import tabs from './modules/tabs.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tabs
  },
  actions,
  mutations,
  getters
})

export default store
