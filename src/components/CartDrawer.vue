<script setup>
import CartDishCard from './CartDishCard.vue'

defineProps({
  cartItems: Array
})
</script>

<template>
  <div class="cart-wrapper cart-wrapper--active">
    <div class="cart-bg cart-bg--active">
      <div>
        <div class="top-part">
          <svg
            @click="$emit('closeCartDrawer')"
            class="cart-close-arrow"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_193301_373)">
              <path d="M1 7H14.7143" />
              <path d="M8.71436 1L14.7144 7L8.71436 13" />
            </g>
            <defs>
              <clipPath id="clip0_193301_373">
                <rect width="16" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h3 class="cart-title">Корзина</h3>
        </div>

        <div class="cart-dishes-list" v-auto-animate="{ duration: 50 }">
          <CartDishCard
            v-for="dish in cartItems"
            :key="dish.id"
            :url="dish.url"
            :dishName="dish.dishName"
            :price="dish.price"
            :onClickRemove="() => $emit('removeFromCart', dish)"
          />
        </div>
      </div>
      <div class="bottom-part">
        <div class="final-price">
          <p class="price-text">Итого:</p>
          <div class="price-line"></div>
          <b class="price-value"
            >{{
              cartItems.map((dish) => dish.price).reduce((partialSum, a) => partialSum + a, 0)
            }}
            ₽</b
          >
        </div>
        <router-link to="/payment">
          <button
            :disabled="cartItems.length ? false : true"
            @click="$emit('closeCartDrawer')"
            class="payment-btn"
          >
            <p class="payment-text">Перейти к оплате</p>
            <svg
              width="18"
              height="16"
              viewBox="0 0 16 14"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_193301_373)">
                <path d="M1 7H14.7143" />
                <path d="M8.71436 1L14.7144 7L8.71436 13" />
              </g>
              <defs>
                <clipPath id="clip0_193301_373">
                  <rect width="16" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.cart-wrapper--active {
  visibility: visible;
  opacity: 1;
}

.cart-bg {
  position: fixed;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 400px;
  width: 100%;
  z-index: 200;
  background: #fff;
  box-shadow: -10px 4px 24px 0px rgba(0, 0, 0, 0.1);
  right: 0;
  padding: 30px;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
}

.cart-bg--active {
  transform: translateX(0);
}

.cart-bg .top-part {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
}

.top-part .cart-close-arrow {
  transform: rotate(180deg);
  margin-right: 20px;
  stroke: #777777;
  transition: all 0.3s ease-in-out;
}

.top-part .cart-close-arrow:hover {
  stroke: #000;
  cursor: pointer;
}

.cart-dishes-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.bottom-part {
  width: 100%;
  margin-top: 20px;
}

.final-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 7px;
  margin-bottom: 25px;
}

.price-text {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.price-line {
  flex: 1;
  border-bottom: 1px dashed #dfdfdf;
  margin-bottom: 4px;
}

.price-value {
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.payment-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  padding: 18px 55px;
  border-radius: 18px;
  background: #9dd458;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: all 0.2s ease-in-out;
}

.payment-btn:hover {
  background: #b5f366;
}

.payment-btn:active {
  background: #75a33b;
}

.payment-btn:disabled {
  background: #a9a9a9;
  cursor: not-allowed;
}

.payment-text {
  flex: 1;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
}

::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
