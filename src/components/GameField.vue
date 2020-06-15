<script>
  export default {
    name: 'GameField',
    methods: {
      getCurrentLevel () {
        return this.$store.getters.currentUserLevel('level1')
      }
    },

    render: function (createElement) {

      let level = this.getCurrentLevel()
      return createElement('table',
        {
          class: 'gameTable'
        },
        [
          level.map((row) => createElement(
            'tr',
            {},
            [
              row.map((cell) => createElement(
                'td',
                {},
                [
                  createElement('p',
                    {},
                    [cell]
                  ),
                  createElement('input',
                    {
                      attrs: {
                        type: 'checkbox'
                      }
                    }, [])
                ]
              ))
            ]
          ))
        ])
    }
  }
</script>
<style>

  td {
    height: 150px;
    width: 150px;
    text-align: center;
    font-size: xx-large;
    font-family: "Apple Color Emoji", sans-serif;
    margin: 1%;
    background-image: url('../assets/rock_other.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: gold;
  }

  tr:first-child > td:first-child {
    background-image: url('../assets/rock_start.jpg');
    color: #ff8605;
  }

  tr:last-child > td:last-child {
    background-image: url('../assets/rock_start.jpg');
    color: #ff8605;
  }

  table {
    text-align: center;
    height: 600px;
    width: 600px;
    margin: auto;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  tr > td > input {
    display: none;
  }

  td + td > input:checked {
    background-image: url('../assets/rock_start.jpg');
  }

  tr > td:hover {
    background-image: url('../assets/rock_start.jpg');
  }

  tr > td:target {
    background-image: url('../assets/rock_start.jpg');
  }
</style>