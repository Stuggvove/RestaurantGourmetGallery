<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

let route = useRouter()

const currentRouteName = computed(() => {
    return route.currentRoute.value.name;
  });
</script>

<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/images/logo.png" alt="" />
        <h2>Гурман Галерея</h2>
      </div>
    </router-link>
    <div v-if="currentRouteName != 'Payment'">
      <div class="cart" @click="$emit('openCartDrawer')">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#9B9B9B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g clip-path="url(#clip0_193303_398)">
            <path
              d="M7.54524 18.1818C7.99711 18.1818 8.36342 17.8155 8.36342 17.3636C8.36342 16.9118 7.99711 16.5455 7.54524 16.5455C7.09337 16.5455 6.72705 16.9118 6.72705 17.3636C6.72705 17.8155 7.09337 18.1818 7.54524 18.1818Z"
            />
            <path
              d="M16.5457 18.1818C16.9975 18.1818 17.3639 17.8155 17.3639 17.3636C17.3639 16.9118 16.9975 16.5455 16.5457 16.5455C16.0938 16.5455 15.7275 16.9118 15.7275 17.3636C15.7275 17.8155 16.0938 18.1818 16.5457 18.1818Z"
            />
            <path
              d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
            />
          </g>
        </svg>

        <p>Корзина</p>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eaeaea;
  padding: 30px 60px 25px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  margin-right: 16px;
}

.logo h2 {
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  background: linear-gradient(91deg, #ff3f3f 0%, #b70e0e 99.5%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cart {
  display: flex;
  align-items: center;
}

.cart:hover {
  cursor: pointer;
}

.cart p {
  color: #9b9b9b;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: color 0.3s ease-in-out;
}

.cart svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transition: stroke 0.3s ease-in-out;
}

.cart:hover p {
  color: #e98b8b;
}

.cart:hover svg {
  stroke: #e98b8b;
}
</style>
