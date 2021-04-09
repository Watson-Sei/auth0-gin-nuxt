<template>
  <div class="container">
    <div class="jumbotron text-center mt-5">
      <span v-if="this.$auth.$state.loggedIn" class="btn btn-primary float-right" @click="logout">Log out</span>
      <h1>Auth0 + Gin + Nuxt.js</h1>
      <button class="btn btn-danger" @click="public">Public</button>
      <button class="btn btn-warning" @click="private">Private</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'index',
  methods: {
    logout() {
      this.$auth.logout()
    },
    async public() {
      console.table(await axios.get('http://localhost:8080/public'))
    },
    async private() {
      const token = localStorage.getItem("auth._token.auth0")
      console.table(await axios.get('http://localhost:8080/private', {
        headers: {
          Authorization: token,
        }
      }))
    }
  }
}
</script>
