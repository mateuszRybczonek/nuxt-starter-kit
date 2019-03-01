<template>
  <section class="container">
    <h1 class="title">
      User
    </h1>
    <h2 class="info">
      {{ user.name }}
    </h2>
    <nuxt-link class="button" to="/users">
      Users
    </nuxt-link>
  </section>
</template>

<script>
export default {
  async asyncData({ params, error, $axios }) {
    try {
      const { data } = await $axios.get(`/users/${params.id}`)
      return { user: data.data }
    } catch {
      error({ statusCode: 404, message: 'User not found' })
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 30px;
}

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}

.button {
  margin-top: 30px;
}
</style>
