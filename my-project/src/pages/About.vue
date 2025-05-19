<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-4">
      <h2>About This Store</h2>
      <p>This is a demo eCommerce website built using Vue 3 for my school project.</p>
  
      <form class="mt-3">
        <div class="mb-3">
          <label>First Name:</label>
          <input type="text" v-model="firstName" class="form-control" />
        </div>
        <div class="mb-3">
          <label>Last Name:</label>
          <input type="text" v-model="lastName" class="form-control" />
        </div>
        <p class="fw-bold">Welcome, {{ fullName }}</p>
  
        <div class="mb-3">
          <label>Choose your vibe:</label><br />
          <input type="radio" value="Mountain" v-model="theme" /> Mountain
          <input type="radio" value="Ocean" v-model="theme" class="ms-3" /> Ocean
        </div>
  
        <img v-if="theme" :src="themeImage" class="img-fluid" style="max-width: 300px;" />
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
      return {
        firstName: '',
        lastName: '',
        theme: ''
      }
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      },
      themeImage() {
        return this.theme === 'Mountain'
          ? 'https://via.placeholder.com/300x200?text=Mountain'
          : 'https://via.placeholder.com/300x200?text=Ocean'
      }
    }
  }
  </script>
  