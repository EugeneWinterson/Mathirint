<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MainMenu/>
    <SingleGame/>
    <GameField/>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu.vue'
  import SingleGame from './components/SingleGame.vue'
  import GameField from './components/GameField.vue'

  export default {
    name: 'app',
    components: {
      MainMenu,
      SingleGame,
      GameField
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
