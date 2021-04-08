<template>
  <div class="container">
    <button v-if="this.$auth.$state.loggedIn" @click="logout">Log out</button>
  </div>
</template>


<script>
export default {
  name: 'index',
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
