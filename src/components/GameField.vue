<script>
  import * as PIXI from 'pixi.js'

  export default {
    name: 'GameField',
    methods: {
      getCurrentLevel () {
        let level = this.$store.state.currentUser.currentLevel
        return this.$store.getters.currentUserLevel(level)
      }
    },

    render: function (createElement) {
      let type = 'WebGL'
      if (!PIXI.utils.isWebGLSupported()) {
        type = 'canvas'
      }

      PIXI.utils.sayHello(type)
      let level = this.getCurrentLevel()
      return createElement('table', {}, [
        level.map((row) => createElement(
          'tr',
          {},
          [
            row.map((cell) => createElement(
              'td',
              {},
              [cell]
            ))
          ]
        ))
      ])
    }
  }
</script>