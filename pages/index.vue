<template>
  <section class="container">
    <div>
      <Logo />
      <h2 class="subtitle">
        Nuxt Starter Kit
      </h2>
      <h3>Includes:</h3>
      <ul>
        <li>Nuxt.js</li>
        <li>Local express server</li>
        <li>Ava</li>
        <li>Vuex</li>
        <li>Prettier</li>
        <li>eslint</li>
        <li>tailwind</li>
        <li>stylelint</li>
        <li>husky</li>
        <li>Travis CI</li>
        <li>Rollbar</li>
      </ul>
      <br>
      <ul>
        <li>nuxt-sass-resources-loader</li>
        <li>vue-svg-loader</li>
        <li>vuex-pathify</li>
      </ul>
      <CalendarIcon />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo/Logo.vue'
import CalendarIcon from '~/assets/icons/calendar.svg?inline'

export default {
  components: {
    Logo,
    CalendarIcon
  }
}
</script>
