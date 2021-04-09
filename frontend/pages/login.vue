<template>
  <div class="container">
    <div class="jumbotron text-center mt-5">
      <h1>Auth0 + Gin + Nuxt.js</h1>
      <button v-if="!this.$auth.$state.loggedIn" @click="login" class="btn btn-primary btn-lg btn-login btn-block">Log in</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>

<style scoped>

</style>
