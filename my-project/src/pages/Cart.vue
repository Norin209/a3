<template>
  <div class="container py-5">
    <div class="row">
      <!-- LEFT COLUMN: FORM -->
      <div class="col-md-7">
        <!-- Email -->
        <div class="mb-4">
          <label class="form-label fw-bold">EMAIL</label>
          <input type="email" v-model="email" class="form-control" placeholder="Email Address*" required />
        </div>

        <!-- Warranty Options -->
        <div class="mb-4 p-4 border rounded bg-white shadow-sm">
          <label class="form-label fw-bold text-uppercase">Protect Your Product</label>
          <p class="text-muted small">12-Month Limited Warranty included. Extend your warranty for longer protection.</p>

          <div class="form-check">
            <input v-model="warranty" class="form-check-input" type="checkbox" id="w1" value="175" />
            <label class="form-check-label" for="w1">
              Add 12 additional months for $175 — 24 months total coverage
            </label>
          </div>

          <div class="form-check">
            <input v-model="warranty" class="form-check-input" type="checkbox" id="w2" value="230" />
            <label class="form-check-label" for="w2">
              Add 24 additional months for $230 — 39 months total coverage
            </label>
          </div>
        </div>

        <!-- Shipping Info -->
        <div class="mb-4">
          <h5 class="fw-bold">Shipping</h5>
          <div class="row mb-2">
            <div class="col">
              <input v-model="firstName" type="text" class="form-control" placeholder="First Name" />
            </div>
            <div class="col">
              <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" />
            </div>
          </div>
          <input v-model="phone" type="tel" class="form-control mb-2" placeholder="Phone" />
          <input v-model="address" type="text" class="form-control mb-2" placeholder="Address" />
          <input v-model="apt" type="text" class="form-control mb-2" placeholder="Apt, Suite (optional)" />
          <div class="row mb-2">
            <div class="col"><input v-model="city" type="text" class="form-control" placeholder="City" /></div>
            <div class="col"><input v-model="state" type="text" class="form-control" placeholder="State" /></div>
            <div class="col"><input v-model="zip" type="text" class="form-control" placeholder="ZIP Code" /></div>
          </div>
          <select v-model="country" class="form-select">
            <option disabled>Country</option>
            <option>Australia</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
        </div>

        <!-- Payment Method -->
        <div class="mb-4">
          <h5 class="fw-bold">Payment Method</h5>
          <div class="p-3 border rounded bg-white shadow-sm">
            <input type="text" class="form-control mb-2" placeholder="Card Number" />
            <div class="row">
              <div class="col"><input type="text" class="form-control" placeholder="MM/YY" /></div>
              <div class="col"><input type="text" class="form-control" placeholder="CVV" /></div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: ORDER SUMMARY -->
      <div class="col-md-5">
        <div class="checkout-card">
          <h5 class="fw-bold mb-4">Cart Summary</h5>

          <div v-for="(item, index) in cartItems" :key="index" class="d-flex align-items-start mb-3">
            <img :src="item.image" class="me-3 rounded" style="width: 80px; height: 80px; object-fit: cover;" />
            <div class="flex-grow-1">
              <h6 class="mb-1 text-dark">{{ item.name }}</h6>
              <p class="small text-muted">{{ item.description }}</p>
              <p class="fw-bold text-dark">
                ${{ item.price }} × {{ item.quantity || 1 }} = ${{ (item.price * (item.quantity || 1)).toFixed(2) }}
              </p>
              <div class="d-flex align-items-center gap-2">
                <button class="btn btn-outline-secondary btn-sm" @click="decreaseQuantity(index)">-</button>
                <span>{{ item.quantity || 1 }}</span>
                <button class="btn btn-outline-secondary btn-sm" @click="increaseQuantity(index)">+</button>
              </div>
              <button class="btn btn-outline-danger btn-sm mt-1" @click="removeFromCart(index)">Remove</button>
            </div>
          </div>

          <hr />
          <div class="d-flex justify-content-between">
            <span>Subtotal ({{ cartItems.length }} items):</span>
            <strong>${{ totalPrice }}</strong>
          </div>
          <div class="d-flex justify-content-between text-muted">
            <span>Warranty:</span>
            <span>${{ warrantyTotal }}</span>
          </div>
          <div class="d-flex justify-content-between fw-bold mt-2">
            <span>Estimated Total:</span>
            <span>${{ estimatedTotal }}</span>
          </div>

          <button class="btn btn-dark w-100 mt-3" @click="placeOrder">
            Place Order
          </button>

          <p class="text-muted mt-3 small">
            By placing your order, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
  data() {
    return {
      cartItems: [],
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      apt: '',
      city: '',
      state: '',
      zip: '',
      country: 'Australia',
      warranty: []
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0).toFixed(2);
    },
    warrantyTotal() {
      return this.warranty.reduce((sum, cost) => sum + parseFloat(cost), 0).toFixed(2);
    },
    estimatedTotal() {
      return (parseFloat(this.totalPrice) + parseFloat(this.warrantyTotal)).toFixed(2);
    }
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  },
  methods: {
    placeOrder() {
      const requiredFields = [
        this.email, this.firstName, this.lastName, this.phone,
        this.address, this.city, this.state, this.zip, this.country
      ];

      const allFilled = requiredFields.every(field => field.trim() !== '');

      if (!allFilled) {
        alert("❗ Please fill out all required fields before placing the order.");
        return;
      }

      alert(`🎉 Order placed! Confirmation sent to: ${this.email}`);
      localStorage.removeItem('cart');
      this.cartItems = [];
      this.$router.push('/');
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    increaseQuantity(index) {
      if (!this.cartItems[index].quantity) {
        this.cartItems[index].quantity = 1;
      }
      this.cartItems[index].quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    }
  }
};
</script>

<style scoped>
.checkout-card {
  background-color: #fff !important;
  color: #000 !important;
  border: 2px solid #000;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
  max-height: none;
  overflow-y: auto;
}

.checkout-card .hover-button-row {
  display: none !important;
}

label {
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
}

.card {
  border-radius: 10px;
}

.form-check-label {
  font-size: 0.9rem;
}

input,
select {
  font-size: 0.95rem;
}
</style>
