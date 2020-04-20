<template>
  <div id="app">
<<<<<<< HEAD
    <img alt="Vue logo" src="./assets/logo.png">
    <MainMenu/>
    <SingleGame/>
    <GameField/>
=======
    <div>
      <a>state:{{this.getState}}</a>
    </div>
    <div v-if="!this.$store.state.isLoggedInSuccess">
      <StartScreen/>
    </div>
    <div v-if="this.$store.state.isLoggedInSuccess">
      <MainMenu/>
    </div>
>>>>>>> master
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu.vue'
<<<<<<< HEAD
  import SingleGame from './components/SingleGame.vue'
  import GameField from './components/GameField.vue'
=======
  import StartScreen from  './components/StartScreen.vue'
>>>>>>> master

  export default {
    name: 'app',
    components: {
      MainMenu,
<<<<<<< HEAD
      SingleGame,
      GameField
=======
      StartScreen
    },
    computed: {
      getState () {
        return this.$store.state.typeOfGame
      }
>>>>>>> master
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
