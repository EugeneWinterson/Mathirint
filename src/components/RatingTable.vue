<script>
  export default {
    name: 'RatingTable',
    data () {
      return {
        users: {
          1: {
            name: 'Алексей',
            last: 'Иванов',
            class: '2A',
            rating: 0.89
          },
          2: {
            name: 'Кирилл',
            last: 'Соколов',
            class: '2A',
            rating: 0.839
          },
          3: {
            name: 'Максим',
            last: 'Волков',
            class: '2A',
            rating: 0.837
          },
          4: {
            name: 'Роман',
            last: 'Петров',
            class: '2A',
            rating: 0.836
          },
          5: {
            name: 'Никита',
            last: 'Новиков',
            class: '2A',
            rating: 0.830
          },
          6: {
            name: 'Олег',
            last: 'Васильев',
            class: '2A',
            rating: 0.827
          },
          7: {
            name: 'Егор',
            last: 'Козлов',
            class: '2A',
            rating: 0.823
          },8: {
            name: 'Вадим',
            last: 'Павлов',
            class: '2A',
            rating: 0.811
          },
          9: {
            name: 'Егор',
            last: 'Фёдоров',
            class: '2A',
            rating: 0.8
          },
          10: {
            name: 'Дмитрий',
            last: 'Смирнов',
            class: '2A',
            rating: 0.797
          }
        }
      }
    },
    methods: {
      getUsers: function (users, createElement) {
        var afterParse = [
          createElement('tr', {}, [
            createElement('td', {}, ['Имя']),
            createElement('td', {}, ['Фамилия']),
            createElement('td', {}, ['Класс']),
            createElement('td', {}, ['Рейтинг'])
          ])
        ]
        for (var user in users) {
          afterParse.push([
           createElement('tr', {}, [
            createElement('td', {}, [users[user].name]),
            createElement('td', {}, [users[user].last]),
            createElement('td', {}, [users[user].class]),
            createElement('td', {}, [users[user].rating])
          ])])
        }

        return createElement('tbody', {}, afterParse)
      }
    },
    render: function (createElement) {
      return createElement('table',
        {
          class: 'ratingTable'
        },
        [
          this.getUsers(this.users, createElement)
        ])
    }
  }
</script>

<style scoped>
.ratingTable {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(55,55,55,0.3);
  width: 100%;
}
.ratingTable > p> tr {

  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
  .ratingTable > p> tr > td {
    text-align: center;
    padding-left: 50%;
    padding-right: 50%;
    color: black;
  }
</style>