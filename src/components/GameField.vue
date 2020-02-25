<script>
  export default {
    name: 'GameField',
    data: () => {
      return {
        field: 10
      }
    },
    methods: {
      createField: (field) => {
        alert('created field:' + field + 'x' + field)
      }
    },

    render: function (createElement) {
      let vueArray = [
        'Vue',
        'is',
        'awesome'
      ]
      return createElement('h1', [
        vueArray.join(' '),
        [
          createElement(this.createField(this.field))
        ]
      ])
    }
  }
</script>