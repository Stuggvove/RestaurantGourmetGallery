<script setup>
import PaymentDishCard from '@/components/PaymentDishCard.vue'
import { computed, inject } from 'vue'

const { cartItems, clearCart, removeFromCart } = inject('cart')

const numberDishes = computed(() => cartItems.value.reduce((partialSum) => partialSum + 1, 0))
const totalWeight = computed(() =>
  cartItems.value.map((dish) => dish.dishWeight).reduce((accum, a) => accum + a, 0)
)
const totalPrice = computed(() =>
  cartItems.value.map((dish) => dish.price).reduce((accum, a) => accum + a, 0)
)

const items = computed(() => cartItems.value)
</script>

<template>
  <div class="menu-top-part">
    <h2 class="title">Ваш заказ</h2>
  </div>
  <aside class="payment-wrapper">
    <div v-if="items.length > 0" class="payment-card-container">
      <PaymentDishCard
        v-for="dish in items"
        :key="dish.id"
        :url="dish.url"
        :dishName="dish.dishName"
        :dishWeight="dish.dishWeight"
        :weightUnit="dish.weightUnit"
        :price="dish.price"
        :onClickRemove="() => removeFromCart(dish)"
      />
    </div>
    <div class="payment-empty" v-else>
      <h2 class="payment-empty-text">У вас нет заказов</h2>
      <router-link to="/">
        <button class="payment-empty-btn">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7144 7L1.00007 7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 13L1 7L7 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="payment-text">Вернуться назад</p>
        </button>
      </router-link>
    </div>
    <aside class="payment-info-wrapper">
      <div class="payment-info-panel">
        <div class="top-panel-part">
          <p class="number-dishes-text">Всего товаров: {{ numberDishes }}</p>
          <p class="total-weight-text">Вес: {{ (totalWeight / 1000).toFixed(2) }} кг</p>
        </div>
        <div class="delimiter"></div>
        <div class="bottom-panel-part">
          <div class="total-price">
            <p class="total-price-text">Итого:</p>
            <p class="total-price-value">{{ totalPrice }} ₽</p>
          </div>
          <input type="text" class="promo-code-input" id="promo-code" placeholder="Промокод" />
        </div>
      </div>
      <button @click="clearCart" class="buy-btn">Купить</button>
    </aside>
  </aside>
</template>

<style scoped>
aside {
  position: sticky;
  top: 10px;
  align-self: start;
}

.payment-wrapper {
  position: relative;
  display: flex;
  gap: 28px;
  align-items: flex-start;
  height: 100%;
}

.payment-empty {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.payment-empty-text {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 20px;
}

.payment-empty-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  padding: 18px 25px;
  border-radius: 18px;
  border: none;
  background: #9dd458;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: all 0.2s ease-in-out;
}

.payment-empty-btn:hover {
  background: #b5f366;
}

.payment-empty-btn:active {
  background: #75a33b;
}

.payment-text {
  flex: 1;
  margin: 0 15px;
}

.menu-top-part {
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 40px;
}

.payment-card-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  flex-basis: 75%;
}

.payment-info-wrapper {
  position: sticky;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  flex-shrink: 0;
}

.payment-info-panel {
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 20px;
  background: #f4efe9;
  padding: 15px 10px;
  margin-bottom: 10px;
}

.top-panel-part,
.bottom-panel-part {
  padding: 0 10px;
}

.number-dishes-text,
.total-weight-text,
.total-price-text {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.delimiter {
  background: #d0c7bc;
  height: 1px;
  width: 100%;
  margin: 10px 0;
}

.total-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.total-price-text {
  font-weight: 700;
}

.total-price-value {
  color: #087c06;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.promo-code-input {
  border-radius: 8px;
  border: 1px solid #d0c7bc;
  background: #f4efe9;
  padding: 8px;
  color: #000;
  font-family: Mont;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  transition: all 0.2s ease-in-out;
}

.promo-code-input:focus {
  outline: 2px solid #a49c94;
}

.buy-btn {
  border-radius: 12px;
  background: #f4efe9;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  padding: 13px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.buy-btn:hover {
  background: #efe5d9;
}

.buy-btn:active {
  background: #dacfc1;
}
</style>
