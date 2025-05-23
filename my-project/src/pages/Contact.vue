<template>
  <div class="contact-section container py-5">
    <div class="row align-items-center">
      <!-- Left Column -->
      <div class="col-md-6 mb-4">
        <h2 class="mb-3">We are here to help!</h2>
        <p>
          Let us know how we can best serve you. Use the contact form to email us or select from the topics below that best fit your needs. It's an honor to support you in your journey towards better health.
        </p>
      </div>

      <!-- Right Column: Contact Form -->
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <input v-model="name" type="text" class="form-control flat-input" placeholder="Name" required />
          </div>
          <div class="mb-3">
            <input v-model="email" type="email" class="form-control flat-input" placeholder="Email" required />
          </div>
          <div class="mb-3">
            <input v-model="phone" type="tel" class="form-control flat-input" placeholder="Phone number" />
          </div>
          <div class="mb-3">
            <textarea v-model="message" class="form-control flat-input" rows="4" placeholder="Comment" required></textarea>
          </div>
          <button type="submit" class="btn btn-custom w-100">SEND MESSAGE</button>
        </form>
        <p class="text-muted small mt-2">
          This site is protected by reCAPTCHA and the Google
          <a href="#" class="text-decoration-underline">Privacy Policy</a> and
          <a href="#" class="text-decoration-underline">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.name}! Your message has been sent.`);
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
.flat-input {
  border: 1px solid #ccc;
  border-radius: 0;
  background-color: #fff;
  padding: 10px;
  font-size: 1rem;
  box-shadow: none;
}

.flat-input:focus {
  border-color: #a37c6b;
  outline: none;
  box-shadow: none;
}

.btn-custom {
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 0;
  padding: 12px 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: black;
  color: white;
}

</style>
