<template>
  <section class="container">
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in usersList" :key="index" class="user">
        <nuxt-link :to="`users/${index}`">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('users', ['usersList'])
  },

  async fetch({ store }) {
    await store.dispatch('users/fetchUsers')
  }
}
</script>
