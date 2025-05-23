<template>
  <div>
    <!-- Hero Header Section -->
    <div class="background">
      <div class="header">
        <div class="headerWrapper">
          <h6>we do</h6>
          <h1>Demo Shopper<br>& Carts</h1>
          <div class="circle blue"></div>
          <div class="square red"></div>
          <div class="triangle green"></div>
          <div class="circle orange"></div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="section services">
      <div class="sectionWrapper">
        <h6>explore</h6>
        <h2>Our Features</h2>
        <p class="description">
          Shop top products, manage your cart, and access your account easily with our intuitive navigation.
        </p>
        <div class="square blue"></div>

        <div class="grid">
          <router-link to="/products" class="card">
            <h3>Shop</h3>
            <p>Browse our best-selling and featured products.</p>
          </router-link>
          <router-link to="/cart" class="card">
            <h3>Cart</h3>
            <p>Review your selected items before checkout.</p>
          </router-link>
          <router-link to="/login" class="card">
            <h3>Login / Register</h3>
            <p>Access or create your account to personalize your shopping.</p>
          </router-link>
          <router-link to="/news" class="card">
            <h3>Our News</h3>
            <p>See our most event and upcoming events.</p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Best Seller Carousel Section -->
    <div class="section best-sellers">
      <div class="sectionWrapper">
        <h6>popular</h6>
        <h2>Best Sellers</h2>
        <div class="carousel">
          <div class="carousel-card">
            <img :src="items[current].img" :alt="items[current].name" class="carousel-img" />
            <h3>{{ items[current].name }}</h3>
            <p>{{ items[current].desc }}</p>
          </div>
          <div class="carousel-controls">
            <button @click="prev">&#8592;</button>
            <button @click="next">&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      current: 0,
      items: [
        {
          name: 'Sweater',
          desc: 'Warm and cozy for any season.',
          img: require('@/assets/sweater.jpeg')
        },
        {
          name: 'Sneakers',
          desc: 'Perfect for running or everyday use.',
          img: require('@/assets/shoes.jpeg')
        },
        {
          name: 'T-Shirt',
          desc: 'Lightweight and stylish.',
          img: require('@/assets/tshirt.jpeg')
        }
      ]
    };
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.items.length;
    },
    prev() {
      this.current = (this.current - 1 + this.items.length) % this.items.length;
    }
  }
};
</script>

<style scoped>

@import url('@/assets/newhome.css');
</style>