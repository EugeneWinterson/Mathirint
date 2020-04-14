<template>
  <div>
    <div class="menuBackground">
      <h1 id="gameName">MATHIRINT</h1>
      <h5>test yourself</h5>
      <div class="menuButtons">
        <button @click="setTypeGame('single')">New Game</button>
        <button @click="setTypeGame('multiplayer')">Multiplayer</button>
        <button @click="setTypeGame('settings')">Settings</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainMenu',
    methods: {
      setTypeGame (gameType) {
        if (this.$store.getters.stateList.includes(gameType)) {
          return this.$store.dispatch('SET_TYPE_OF_GAME', gameType)
        }
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