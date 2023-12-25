<script setup>
import { provide, ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import CartDrawer from './components/CartDrawer.vue'

const cartItems = ref([])
const cartIsOpen = ref(false)

const updateCart = (dish) => {
  if (!dish.isAdded) {
    addToCart(dish)
  } else {
    removeFromCart(dish)
  }
}

const openCartDrawer = () => {
  cartIsOpen.value = true
}
const closeCartDrawer = () => {
  cartIsOpen.value = false
}

const addToCart = (dish) => {
  cartItems.value.push(dish)
  dish.isAdded = true
  updateLocalCart()
}

const removeFromCart = (dish) => {
  cartItems.value.splice(cartItems.value.indexOf(dish), 1)
  dish.isAdded = false
  updateLocalCart()
}

const clearCart = () => {
  cartItems.value.map((dish) => removeFromCart(dish))
  cartItems.value = []
}

const updateLocalCart = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

onMounted(() => {
  if (cartItems.value.length) return
  const localCart = localStorage.getItem('cart')
  if (localCart) {
    const parsedLocalCart = JSON.parse(localCart)
    parsedLocalCart.map((dish) => addToCart(dish))
    }
  }
)

provide('cart', {
  cartItems,
  updateCart,
  addToCart,
  removeFromCart,
  clearCart,
})
</script>

<template>
  <CartDrawer
    v-if="cartIsOpen"
    @close-cart-drawer="closeCartDrawer"
    @remove-from-cart="removeFromCart"
    :cartItems="cartItems"
  />

  <div class="container">
    <Header @open-cart-drawer="openCartDrawer" />

    <div class="menu-warpper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  line-height: 1;
  background: #ededed;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
}

@font-face {
  font-family: 'Mont';
  src:
    local('Mont-Bold'),
    url('/fonts/Mont-Bold.woff2') format('woff2'),
    url('/fonts/Mont-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Mont';
  src:
    local('Mont-SemiBold'),
    url('/fonts/Mont-SemiBold.woff2') format('woff2'),
    url('/fonts/Mont-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Mont';
  src:
    local('Mont-Regular'),
    url('/fonts/Mont-Regular.woff2') format('woff2'),
    url('/fonts/Mont-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Mont';
  src:
    local('Mont-Light'),
    url('/fonts/Mont-Light.woff2') format('woff2'),
    url('/fonts/Mont-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

#app {
  font-family: 'Mont', Helvetica, Arial, sans-serif;
  accent-color: #fa6767;
}

.container {
  margin: auto;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  width: 100%;
  min-height: calc(100vh - 160px);
}

.menu-warpper {
  padding: 25px 60px 40px;
}

.menu-warpper .title {
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
