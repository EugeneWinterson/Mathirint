import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeOfGame: 'none'
  },
  mutations: {
    SET_TYPE_OF_GAME: (state, payload) => {
      state.typeOfGame = payload;
    }
  },
  actions: {
    SET_TYPE_OF_GAME: (injectee, typeOfGame) => {
      injectee.commit('SET_TYPE_OF_GAME', typeOfGame);
    }
  },
  getters: {
    typeGame: state => {
      return state.typeOfGame;
    }
  },
  modules: {
  }
})
