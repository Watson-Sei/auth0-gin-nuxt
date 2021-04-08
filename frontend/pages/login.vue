<template>
  <div class="container">
    <button v-if="!this.$auth.$state.loggedIn" @click="login">Log in</button>
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
