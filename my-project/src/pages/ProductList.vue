<template>
  <div class="container py-5">
    <h2 class="mb-4">Shop Products</h2>

    <!-- Category Filter -->
    <div class="mb-4">
      <label class="me-2">Filter by Category:</label>
      <select v-model="selectedCategory" class="form-select w-auto d-inline-block">
        <option value="">All</option>
        <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <!-- Product Grid -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in filteredProducts" :key="product.id">
        <div
          class="card h-100 shadow-sm position-relative custom-product-card"
          @mouseenter="hovered = product.id"
          @mouseleave="hovered = null"
        >
          <img
            :src="getImage(product.image)"
            class="card-img-top product-img"
            :alt="product.name"
            @error="onImageError"
            loading="lazy"
          />

          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="fw-bold">${{ product.price }}</p>
          </div>

          <div v-if="hovered === product.id && !sliderMode" class="hover-button-row">
            <button class="btn btn-dark px-4 fw-bold" @click="handleView(product.id)">View</button>
            <button class="btn btn-dark px-4 fw-bold" @click="addToCart(product)">Order</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider Modal -->
    <div v-if="sliderMode" class="slider-modal" @click.self="closeSlider">
      <div class="slider-card">
        <img
          :src="getImage(currentProduct.image)"
          class="slider-image"
          :alt="currentProduct.name"
          @error="onImageError"
          loading="lazy"
        />
        <div class="slider-content">
          <h3>{{ currentProduct.name }}</h3>
          <p class="description">{{ currentProduct.description }}</p>
          <p class="price fw-bold">${{ currentProduct.price }}</p>
        </div>
        <div class="slider-controls">
          <button @click="prevProduct">←</button>
          <button @click="nextProduct">→</button>
        </div>
        <button class="btn btn-outline-secondary mt-3" @click="closeSlider">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import products from '../data/products.json';

export default {
  name: 'ProductList',
  data() {
    return {
      selectedCategory: '',
      hovered: null,
      zoomed: null,
      sliderMode: false,
      products,
      cart: []
    };
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.products.map(p => p.category))];
    },
    filteredProducts() {
      return this.selectedCategory
        ? this.products.filter(p => p.category === this.selectedCategory)
        : this.products;
    },
    currentProduct() {
      return this.products.find(p => p.id === this.zoomed);
    }
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  },
  methods: {
    addToCart(product) {
      const existing = this.cart.find(item => item.id === product.id);

      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(this.cart));
      alert(`${product.name} added to cart!`);
    },
    handleView(id) {
      this.hovered = null;
      this.zoomed = id;
      this.sliderMode = true;
    },
    closeSlider() {
      this.zoomed = null;
      this.sliderMode = false;
    },
    nextProduct() {
      const index = this.products.findIndex(p => p.id === this.zoomed);
      const nextIndex = (index + 1) % this.products.length;
      this.zoomed = this.products[nextIndex].id;
    },
    prevProduct() {
      const index = this.products.findIndex(p => p.id === this.zoomed);
      const prevIndex = (index - 1 + this.products.length) % this.products.length;
      this.zoomed = this.products[prevIndex].id;
    },
    getImage(path) {
      return process.env.BASE_URL + path.replace(/^\//, '');
    },
    onImageError(e) {
      e.target.src = process.env.BASE_URL + 'image/fallback.jpeg';
    }
  }
};
</script>

<style scoped>
.product-img {
  object-fit: cover;
  height: 200px;
}

.custom-product-card::after {
  display: none !important;
}

.hover-button-row {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.slider-modal ~ .row .hover-button-row {
  display: none !important;
}

.slider-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.slider-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 700px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.slider-image {
  width: 100%;
  border-radius: 12px;
  object-fit: contain;
  max-height: 400px;
  margin-bottom: 20px;
}

.slider-content h3 {
  font-size: 1.8rem;
  margin-bottom: 8px;
}
.slider-content .description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 6px;
}
.slider-content .price {
  font-size: 1.2rem;
  font-weight: bold;
}

.slider-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.slider-controls button {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
