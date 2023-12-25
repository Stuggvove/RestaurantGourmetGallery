<script setup>
defineProps({
  url: {
    type: String,
    required: true,
    default: "pictures/chiken-fingers.png"
  },
  dishName: {
    type: String,
    required: true,
    default: "Куриные крылья во фритюре"
  },
  dishWeight: {
    type: Number,
    required: true,
    default: 320
  },
  weightUnit: {
    type: String,
    required: true,
    default: "г"
  },
  price: {
    type: Number,
    required: true,
    default: 599
  },
  isAdded: Boolean,
  onClickAdd: Function
})

</script>

<template>
  <div class="dish-card">
    <div class="top-part">
      <img class="dish-img" :src="url" alt="" />
      <p class="dish-name">{{ dishName }}</p>
      <span class="dish-weight">{{ dishWeight }} {{ weightUnit }}</span>
    </div>
    <div class="bottom-path">
      <span class="price">{{ price }} ₽</span>
        <img @click="onClickAdd" :src="isAdded ? '/images/checked.png' : '/images/plus.png'" alt="" />
    </div>
  </div>
</template>

<style>
.dish-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 30px;
  border-radius: 40px;
  border: 2px solid #f3f3f3;
  background: #fff;
  transition: all 0.3s ease-in-out;
}

.dish-card:hover {
  box-shadow: rgba(0, 0, 0, 0.14) 0 8px 20px;
  transform: translate3d(0px, -1px, 0px);
}

.dish-card .top-part {
  display: flex;
  flex-direction: column;
}

.dish-card .dish-img {
  height: 150px;
  align-self: center;
  margin-bottom: 10px;
  object-fit: contain;
}

.dish-card button:hover {
  cursor: pointer;
}

.dish-card .dish-name {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
}

.dish-card .dish-weight {
  color: #959595;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
}

.bottom-path {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  justify-self: end;
}

.dish-card .price {
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

</style>
