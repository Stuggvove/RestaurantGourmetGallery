<script setup>
defineProps({
  url: {
    type: String,
    required: true,
    default: 'pictures/chiken-fingers.png'
  },
  dishName: {
    type: String,
    required: true,
    default: 'Куриные крылья во фритюре'
  },
  dishWeight: {
    type: Number,
    required: true,
    default: 320
  },
  weightUnit: {
    type: String,
    required: true,
    default: 'г'
  },
  price: {
    type: Number,
    required: true,
    default: 599
  },
  onClickRemove: Function
})
</script>

<template>
  <div class="payment-dish-card">
    <img class="dish-img" :src="url" alt="" />
    <div class="right-part">
      <p class="dish-name">{{ dishName }}</p>
      <div class="bottom-part">
        <div class="bottom-left-part">
          <span class="dish-weight">{{ dishWeight }} {{ weightUnit }}</span>
          <p class="dish-price">{{ price }} ₽</p>
        </div>
        <button class="remove-btn" @click="onClickRemove">
          <img src="/images/close.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.payment-dish-card {
  padding: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  background: #fff;
}

.right-part {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.dish-name {
  display: inline-block;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3px;
  flex: 1;
}

.bottom-part {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
}

.bottom-left-part {
  display: flex;
  flex-direction: column;
}

.dish-weight {
  color: #959595;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.dish-price {
  display: inline-block;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.dish-img {
  max-width: 80px;
  max-height: 80px;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  object-fit: contain;
}

.remove-btn {
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
}

.remove-btn {
  cursor: pointer;
}
</style>
