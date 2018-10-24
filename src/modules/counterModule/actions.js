export default {
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
