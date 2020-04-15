<template>
  <div>
    <button @click="sendLogData">Log In</button>
    <button>Sing In</button>
  </div>
</template>

<script>
  export default {
    name: 'StartScreen',
    methods: {
      sendLogData () {
        return this.$store.dispatch('SET_LOG_IN', true)
      }
    }
  }

</script>

<style>

</style>