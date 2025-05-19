<template>
    <div>
      <!-- Hero Section -->
      <section class="sect sect--padding-top">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site">
                <h1 class="site__title">Fast paced way to grow your business</h1>
                <h2 class="site__subtitle">Manage analytics like a boss</h2>
                <div class="site__box-link">
                  <router-link class="btn btn--width" to="/products">Shop Now</router-link>
                  <router-link class="btn btn--revert btn--width" to="/contact">Contact</router-link>
                </div>
                <img class="site__img" src="https://image.ibb.co/c7grYb/image3015.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Plans -->
      <section class="sect sect--padding-bottom">
        <div class="container">
          <div class="row row--center">
            <h1 class="row__title">Pricing</h1>
            <h2 class="row__sub">What fits your business the best?</h2>
          </div>
          <div class="row row--center row--margin">
            <div class="col-md-4 col-sm-4 price-box price-box--purple">
              <div class="price-box__wrap">
                <div class="price-box__img"></div>
                <h1 class="price-box__title">Startup</h1>
                <p class="price-box__people">1 - 100 people</p>
                <h2 class="price-box__discount">
                  <span class="price-box__dollar">$</span>49<span class="price-box__discount--light">/mo</span>
                </h2>
                <h3 class="price-box__price">$65/mo</h3>
                <p class="price-box__feat">Features</p>
                <ul class="price-box__list">
                  <li class="price-box__list-el">1 License</li>
                  <li class="price-box__list-el">24h helpcenter</li>
                  <li class="price-box__list-el">No tasks limit</li>
                  <li class="price-box__list-el">No contractors limit</li>
                </ul>
                <div class="price-box__btn">
                  <a class="btn btn--purple btn--width">Start now</a>
                </div>
              </div>
            </div>
  
            <div class="col-md-4 col-sm-4 price-box price-box--violet">
              <div class="price-box__wrap">
                <div class="price-box__img"></div>
                <h1 class="price-box__title">Business</h1>
                <p class="price-box__people">100 - 500 people</p>
                <h2 class="price-box__discount">
                  <span class="price-box__dollar">$</span>149<span class="price-box__discount--light">/mo</span>
                </h2>
                <h3 class="price-box__price">$225/mo</h3>
                <p class="price-box__feat">Features</p>
                <ul class="price-box__list">
                  <li class="price-box__list-el">1 License</li>
                  <li class="price-box__list-el">24h helpcenter</li>
                  <li class="price-box__list-el">No tasks limit</li>
                  <li class="price-box__list-el">No contractors limit</li>
                </ul>
                <div class="price-box__btn">
                  <a class="btn btn--violet btn--width">Start now</a>
                </div>
              </div>
            </div>
  
            <div class="col-md-4 col-sm-4 price-box price-box--blue">
              <div class="price-box__wrap">
                <div class="price-box__img"></div>
                <h1 class="price-box__title">Corporate</h1>
                <p class="price-box__people">500+ people</p>
                <h2 class="price-box__discount">
                  <span class="price-box__dollar">$</span>399<span class="price-box__discount--light">/mo</span>
                </h2>
                <h3 class="price-box__price">$499/mo</h3>
                <p class="price-box__feat">Features</p>
                <ul class="price-box__list">
                  <li class="price-box__list-el">1 License</li>
                  <li class="price-box__list-el">24h helpcenter</li>
                  <li class="price-box__list-el">No tasks limit</li>
                  <li class="price-box__list-el">No contractors limit</li>
                </ul>
                <div class="price-box__btn">
                  <a class="btn btn--blue btn--width">Start now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
    mounted() {
      const $ = window.$;
      if ($ && $("#myCarousel").carousel) {
        $("#myCarousel").carousel({ interval: false });
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');
  </style>
  