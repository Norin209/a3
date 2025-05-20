<template>
  <div>
    <!-- Hero Header Section -->
    <div class="background">
      <div class="header">
        <div class="headerWrapper">
          <h6>we do</h6>
          <h1>Demo Shopper<br>& Carts</h1>

          <!-- Decorative Shapes -->
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

        <!-- Feature Cards -->
        <div class="grid">
          <router-link to="/shop" class="card">
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
          <router-link to="/best-items" class="card">
            <h3>Best Items</h3>
            <p>See our most popular products curated for you.</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
@import url('@/assets/newhome.css');
</style>
