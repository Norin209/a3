<template>
    <div class="container mt-4">
      <h2>Product Catalog</h2>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <div class="card">
            <img :src="product.image" class="card-img-top" alt="product image">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text fw-bold">${{ product.price }}</p>
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import productData from '../product.js' // if you're using JS format
  
  export default {
    name: 'ProductList',
    data() {
      return {
        products: productData
      }
    }
  }
  </script>
  