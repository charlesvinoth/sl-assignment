import { createStore } from 'vuex'
import authModule from './auth'

export default createStore({
  modules: {
    auth: authModule
  }
})
