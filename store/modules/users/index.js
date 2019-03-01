import { make } from 'vuex-pathify'
import actions from './actions'

const state = {
  usersList: []
}

export default {
  namespaced: true,
  state,
  getters: { ...make.getters(state) },
  actions: { ...make.actions(state), ...actions },
  mutations: { ...make.mutations(state) }
}
