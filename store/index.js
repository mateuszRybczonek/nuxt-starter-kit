import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import users from './modules/users'

const createStore = () => {
  return new Vuex.Store({
    plugins: [pathify.plugin],
    modules: {
      users
    }
  })
}

export default createStore
