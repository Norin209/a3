<template>
  <div>
    <AppNavbar />
    <router-view />
    <AppFooter /> <!-- Add the footer here -->
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue' // Import the footer

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>
