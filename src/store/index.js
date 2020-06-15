import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  currentUser: {
    name: 'noUser',
    dateOfBirth: '01.01.1951',
    country: 'noCountry',
    city: 'noCity',
    email: null,
    userRating: '0.0000',
    currentLevel: 'level1',
  },
  state: {
    typeOfGame: 'none',
    stateList: [
      'single',
      'multiplayer',
      'settings'
    ],
    isLoggedIn: false,
    isLoggedInSuccess: true,
    isSingIn: false,
    levels: {
      level1: [
        ['1', '+2', '-8', '-2'],
        ['-1', '+3', '+5', '+1'],
        ['+8', '-4', '-6', '+4'],
        ['-2', '+7', '-5', '4']
      ]
    },
    texturePath: {
      rock: 'src/assets/rock.jpg'
    }
  },
  mutations: {
    SET_TYPE_OF_GAME: (state, payload) => {
      state.typeOfGame = payload
    },
    SET_LOG_IN: (state, payload) => {
      state.isLoggedInSuccess = payload
    },
    GET_SIGN_IN_FORM: (state, payload) => {
      state.isSingIn = payload
    },
    GET_LOG_IN_FORM: (state, payload) => {
      state.isLoggedIn = payload
    },
    SET_CURRENT_USER_NAME: (state, payload) => {
      state.currentUser.name = payload
    }
  },
  actions: {
    SET_TYPE_OF_GAME: (injectee, typeOfGame) => {
      injectee.commit('SET_TYPE_OF_GAME', typeOfGame)
    },
    SET_LOG_IN: (injectee, isLogged) => {
      injectee.commit('SET_LOG_IN', isLogged)
    },
    GET_SIGN_IN_FORM: (injectee, isSingIn) => {
      injectee.commit('GET_SIGN_IN_FORM', isSingIn)
    },
    GET_LOG_IN_FORM: (injectee, payload) => {
      injectee.commit('GET_LOG_IN_FORM', payload)
    },
    SET_CURRENT_USER_NAME: (injectee, userName) => {
      injectee.commit('SET_CURRENT_USER_NAME', userName)
    }
  },
  getters: {
    typeGame: state => {
      return state.typeOfGame
    },
    stateList: state => {
      return state.stateList
    },
    getCurrentUserName: state => {
      return state.currentUser.name
    },
    currentUserLevel: state => level => {
      return state.levels[level]
    }
  },
  modules: {}
})
