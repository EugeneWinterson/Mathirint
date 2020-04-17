<template>
  <div id="app">
    <div>
      <a>state:{{this.getState}}</a>
    </div>
    <div v-if="!this.$store.state.isLoggedInSuccess">
      <StartScreen/>
    </div>
    <div v-if="this.$store.state.isLoggedInSuccess">
      <MainMenu/>
    </div>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu.vue'
  import StartScreen from  './components/StartScreen.vue'

  export default {
    name: 'app',
    components: {
      MainMenu,
      StartScreen
    },
    computed: {
      getState () {
        return this.$store.state.typeOfGame
      }
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
