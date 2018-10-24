import actions from '@/modules/CounterModule/actions'
import mutations from '@/modules/CounterModule/mutations'

const state = {
  count: 0,
  errorMsg: ''
}

export default {
  namespced: true,
  state,
  mutations,
  actions
}
