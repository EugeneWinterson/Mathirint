<template>
  <div>
    <div class="menuBackground">
      <h1 id="gameName">MATHIRINT</h1>
      <h5>test yourself</h5>
      <div class="menuButtons">
        <button>New Game</button>
        <button>Multiplayer</button>
        <button>Settings</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainMenu',
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