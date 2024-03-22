import userData from './userData'

const authModule = {
  state: {
    users: userData,
    user: {
      name: window.localStorage.getItem('NAME') || '',
      email: window.localStorage.getItem('EMAIL') || ''
    },
    error: ''
  },

  getters: {
    isAuthenticated(state) {
      return Boolean(state.user.name && state.user.email && !state.error)
    }
  },

  mutations: {
    SET_USER(state, { name, email }) {
      state.user.name = name
      state.user.email = email
    },

    SET_ERROR(state, error) {
      state.error = error
    },

    RESET(state) {
      state.error = ''
      state.user.name = ''
      state.user.email = ''
      window.localStorage.clear()
    }
  },

  actions: {
    login({ commit, state }, { email, password }) {
      commit('RESET')

      try {
        if (!email || !password) {
          throw new Error('Please provide both email and password')
        }

        const user = state.users.find((_user) => _user.email === email)

        if (!user) {
          throw new Error('Email not found')
        }

        const isPasswordValid = password === user.password

        if (!isPasswordValid) {
          throw new Error('Incorrect password')
        }

        commit('SET_USER', { email, name: user.name })

        window.localStorage.setItem('NAME', user.name)
        window.localStorage.setItem('EMAIL', email)
      } catch (error) {
        commit('SET_ERROR', error.message)
      }
    },

    logout({ commit }) {
      commit('RESET')
    }
  }
}

export default authModule
