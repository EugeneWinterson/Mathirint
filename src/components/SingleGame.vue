<template>
  <div>
    <GameField/>
  </div>
</template>

<script>
  import GameField from './GameField.vue'

  export default {
    comments: {
      GameField
    },
    name: 'SingleGame',
  }
</script>

<style>
  #field {
    width: 800px;
    height: 800px;
  }
</style>