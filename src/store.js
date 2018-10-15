import Vue from 'vue'
import Vuex from 'vuex'

import counterModule from '@/modules/counterModule/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counterModule
  }
})
