import Vue from 'vue'
import { API_URL_USERS } from '~/api/constants'

export default {
  async fetchUsers({ commit }) {
    try {
      const { data } = await this.$axios.$get(`${API_URL_USERS}`)
      commit('SET_USERS_LIST', data)
    } catch (err) {
      Vue.rollbar.error('Error while fetching users', err)
    }
  }
}
