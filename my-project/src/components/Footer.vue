<template>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>Swinburne University</span>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>+61 412 345 678</span>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>info@demoshopper.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="footer-widget">
                <div class="footer-logo">
                  <h1 style="font-family: 'Pacifico'; color: white;">Demo Shopper</h1>
                </div>
                <div class="footer-text">
                  <p>We deliver top-tier shopping experiences with curated collections and seamless checkout.</p>
                </div>
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                  <a href="#"><i class="fab fa-instagram google-bg"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
                  <li><router-link to="/products">Shop</router-link></li>
                  <li><router-link to="/cart">Cart</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>Join our mailing list for updates and offers.</p>
                </div>
                <div class="subscribe-form">
                  <form>
                    <input type="text" placeholder="Email Address" />
                    <button><i class="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>© 2025 Demo Shopper. All rights reserved.</p>
              </div>
            </div>
            <div class="col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/terms">Terms</router-link></li>
                  <li><router-link to="/privacy">Privacy</router-link></li>
                  <li><router-link to="/policy">Policy</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterSection",
  };
  </script>
  
  <style scoped>
  @import "@/assets/footer.css";
  </style>
  