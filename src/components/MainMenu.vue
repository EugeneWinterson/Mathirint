<template>
  <div>
    <header>Hello {{userName}}</header>
    <div class="menuBackground">
      <h1 id="gameName">MATHIRINT</h1>
      <h5>test yourself</h5>
      <div class="menuButtons">
        <button @click="setTypeGame('single')">Singleplayer</button>
        <button @click="setTypeGame('multiplayer')">Multiplayer</button>
        <button @click="setTypeGame('settings')">Settings</button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store'

  export default {
    name: 'MainMenu',
    data: function () {
      return {
        userName: this.getUserName()
      }
    },
    methods: {
      setTypeGame (gameType) {
        if (this.$store.getters.stateList.includes(gameType)) {
          return this.$store.dispatch('SET_TYPE_OF_GAME', gameType)
        }
      },
      getUserName () {
        return store.getters.getCurrentUserName
      },
      setUserName (userName) {
        store.dispatch('SET_CURRENT_USER_NAME', userName)
      }
    }
  }
</script>

<style>
  .menuBackground {
    background: darkgray;
  }

  .menuButtons {
    background: beige;
  }
</style>