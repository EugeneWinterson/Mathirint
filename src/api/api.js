const axios = require('axios')

axios.get('/user', {
  params: {
    ID: 2
  }
})
  .then(function (response) {
    // eslint-disable-next-line no-console
    console.log(response)
  })
  .catch(function (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  })
