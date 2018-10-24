export default {
  ADD_COUNT: function (state) {
    state.count += 2
    state.errorMsg = ''
  },
  MINUS_COUNT: function (state) {
    state.count -= 1
  },
  CLEAR_ERRORMSG: function (state) {
    state.errorMsg = ''
  },
  SHOW_ERRORMSG: function (state) {
    state.errorMsg = 'Count must bigger than 0.'
  }
}
