<template>
  <div class="login-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div class="login-box p-5 bg-white rounded shadow-sm" style="width: 100%; max-width: 400px;">
      <p class="text-muted mb-1">Please enter your details</p>
      <h2 class="fw-bold mb-4">Welcome back</h2>

      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="mb-3">
          <input v-model="email" type="email" class="form-control" placeholder="Email address" required />
        </div>

        <!-- Password -->
        <div class="mb-3">
          <input v-model="password" type="password" class="form-control" placeholder="Password" required />
        </div>

        <!-- Remember + Forgot -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="form-check m-0 d-flex align-items-center gap-2">
            <input type="checkbox" class="form-check-input square-check" id="remember" />
            <label for="remember" class="form-check-label small mb-0">Remember for 30 days</label>
          </div>
          <a href="#" class="small text-primary">Forgot password</a>
        </div>

        <!-- Login Button -->
        <button type="submit" class="btn btn-primary w-100 mb-3">Log In</button>

        <!-- Google Sign-In -->
        <button type="button" class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
          Sign in with Google
        </button>

        <!-- Sign Up -->
        <button type="button" class="btn btn-link text-primary w-100 mt-3" @click="showRegister = true">
          Sign up
        </button>
      </form>
    </div>

    <!-- Register Popup -->
    <div v-if="showRegister" class="modal-backdrop">
      <div class="modal-content-box bg-white p-4 rounded shadow-sm">
        <h4 class="mb-3">Register</h4>
        <form @submit.prevent="handleRegister">
          <input type="text" class="form-control mb-3" placeholder="Full Name" v-model="registerName" required />
          <input type="email" class="form-control mb-3" placeholder="Email" v-model="registerEmail" required />
          <input type="password" class="form-control mb-3" placeholder="Password" v-model="registerPassword" required />
          <button class="btn btn-success w-100" type="submit">Create Account</button>
        </form>
        <button class="btn btn-link mt-2 w-100" @click="showRegister = false">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      showRegister: false,
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await fetch('/Login/LoginInfo.json');
        const fileUsers = await res.json();

        const tempUsers = JSON.parse(localStorage.getItem('users')) || [];
        const allUsers = [...fileUsers, ...tempUsers];

        const foundUser = allUsers.find(
          user => user.email === this.email && user.password === this.password
        );

        if (foundUser) {
          localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
          alert(`Welcome back, ${foundUser.name || 'User'} (${foundUser.role})!`);
          this.$router.push('/');
        } else {
          alert('Invalid email or password');
        }
      } catch (err) {
        console.error('Login error:', err);
        alert('Unable to check credentials.');
      }
    },

    handleRegister() {
      const newUser = {
        name: this.registerName,
        email: this.registerEmail,
        password: this.registerPassword,
        role: 'member'
      };

      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      alert(`Registered as ${newUser.name} (member)`);
      this.showRegister = false;

      this.registerName = '';
      this.registerEmail = '';
      this.registerPassword = '';
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  background-color: #f8f9fa;
}

.login-box input {
  height: 48px;
  font-size: 15px;
}

.square-check {
  width: 16px !important;
  height: 16px !important;
  border-radius: 3px !important;
  appearance: auto !important;
  -webkit-appearance: checkbox !important;
}

/* Modal popup */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content-box {
  width: 90%;
  max-width: 400px;
}
</style>
