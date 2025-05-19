<template>
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">My Store</router-link>
  
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" :class="{ show: navbarOpen }">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/checkout" class="nav-link">Checkout</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
    data() {
      return {
        navbarOpen: false
      }
    },
    methods: {
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-navbar {
    background-color: #262626;
  }
  .custom-navbar .nav-link,
  .custom-navbar .navbar-brand {
    color: #fff;
  }
  .custom-navbar .nav-link:hover,
  .custom-navbar .navbar-brand:hover {
    color: #2581DC;
  }
  </style>
  