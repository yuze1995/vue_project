const state = {
  count: 0,
  errorMsg: ''
}

const mutations = {
  ADD_COUNT: function (state) {
    state.count += 1
    state.errorMsg = ''
  },
  MINUS_COUNT: function (state) {
    state.count -= 1
  },
  CLEAR_ERRORMSG: function (state) {
    state.errorMsg = ''
  },
  SHOW_ERRORMSG: function (state) {
    state.errorMsg = 'Count must greater than 0.'
  }
}

const actions = {
  addCount: ({ commit }) => {
    commit('ADD_COUNT')
    commit('CLEAR_ERRORMSG')
  },
  minusCount: ({ commit, state }) => {
    if (state.count > 0) {
      commit('MINUS_COUNT')
      commit('CLEAR_ERRORMSG')
    } else {
      commit('SHOW_ERRORMSG')
    }
  }
}

export default {
  namespced: true,
  state,
  mutations,
  actions
}
