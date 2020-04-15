import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeOfGame: 'none',
    stateList:  [
      'single',
      'multiplayer',
      'settings'
    ],
    isLoggedIn: false
  },
  mutations: {
    SET_TYPE_OF_GAME: (state, payload) => {
      state.typeOfGame = payload
    },
    SET_LOG_IN: (state, payload) => {
      state.isLoggedIn = payload
    }
  },
  actions: {
    SET_TYPE_OF_GAME: (injectee, typeOfGame) => {
      injectee.commit('SET_TYPE_OF_GAME', typeOfGame)
    },
    SET_LOG_IN: (injectee, isLogged) => {
      injectee.commit('SET_LOG_IN', isLogged)
    }
  },
  getters: {
    typeGame: state => {
      return state.typeOfGame
    },
    stateList: state => {
      return state.stateList
    }
  },
  modules: {}
})
