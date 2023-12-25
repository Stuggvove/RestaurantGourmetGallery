<script setup>
import DishCard from './DishCard.vue'

defineProps({
  dishes: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="cards-wrapper" v-auto-animate>
    <DishCard
      v-for="dish in dishes"
      :key="dish.id"
      :url="dish.url"
      :dishName="dish.dishName"
      :dishWeight="dish.dishWeight"
      :weightUnit="dish.weightUnit"
      :price="dish.price"
      :onClickAdd="() => $emit('addToCart', dish)"
      :isAdded="dish.isAdded"
    />
  </div>
</template>

<style scoped>
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}
</style>
