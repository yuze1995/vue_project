import Vue from 'vue'
import Vuex from 'vuex'

import counterModule from '@/modules/CounterModule/module'
import shoppingCartModule from '@/modules/ShoppingCartModule/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counterModule,
    shoppingCartModule
  }
})
