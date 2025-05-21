<template>
  <div class="about-page container py-5">
    <h2>About Demo Shopper</h2>
    <p class="lead">
      Demo Shopper is your all-in-one platform for browsing, purchasing, and tracking the best products online.
      Our mission is to simplify your shopping journey with intuitive design and powerful features.
    </p>

    <!-- User Name Input -->
    <div class="form-group mb-3">
      <label for="firstName">First Name:</label>
      <input
        v-model="firstName"
        type="text"
        id="firstName"
        class="form-control"
        placeholder="Enter your first name"
      />
    </div>
    <div class="form-group mb-3">
      <label for="lastName">Last Name:</label>
      <input
        v-model="lastName"
        type="text"
        id="lastName"
        class="form-control"
        placeholder="Enter your last name"
      />
    </div>

    <!-- Welcome Message -->
    <div v-if="fullName" class="alert alert-success mt-3">
      Welcome, {{ fullName }}!
    </div>

    <!-- Image Choice -->
    <div class="form-group mt-4">
      <label class="form-label">Choose your vibe:</label>
      <div>
        <input
          type="radio"
          id="mountain"
          value="mountain"
          v-model="selectedImage"
        />
        <label for="mountain">Mountain</label>

        <input
          type="radio"
          id="ocean"
          value="ocean"
          v-model="selectedImage"
          class="ms-3"
        />
        <label for="ocean">Ocean</label>
      </div>
    </div>

    <!-- Conditional Image -->
    <div class="image-preview mt-4">
      <img
        v-if="selectedImage === 'mountain'"
        src="@/assets/mountain.jpeg"
        alt="Mountain"
        class="img-fluid rounded shadow"
      />
      <img
        v-else-if="selectedImage === 'ocean'"
        src="@/assets/ocean.jpeg"
        alt="Ocean"
        class="img-fluid rounded shadow"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      selectedImage: ''
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`.trim();
    }
  }
};
</script>

<style scoped>
.image-preview img {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
}
</style>
