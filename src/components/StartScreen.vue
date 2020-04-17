<template>
  <div>
    <b-button @click="sendLogData" variant="primary">Log In</b-button>
    <b-button v-b-modal.modal-tall @click="getRegistrationForm" variant="info">Sing In</b-button>
    <div v-if="this.$store.state.isSingIn">
      <b-modal id="modal-tall" title="Registration" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            label="Email address:"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StartScreen',
    data () {
      return {
        form: {
          email: '',
          name: ''
        }
      }
    },
    methods: {
      sendLogData () {
        return this.$store.dispatch('SET_LOG_IN', true)
      },
      getRegistrationForm () {
        return this.$store.dispatch('GET_SIGN_IN_FORM', true)
      },
      closeRegistrationForm () {
        return this.$store.dispatch('GET_SIGN_IN_FORM', false)
      },
      onSubmit (event) {
        this.closeRegistrationForm()
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.$store.dispatch('SET_CURRENT_USER_NAME', this.form.name)
        this.sendLogData()
      },
      onReset (event) {
        event.preventDefault()

        this.form.email = ''
        this.form.name = ''
      }
    }
  }
</script>

<style>

</style>