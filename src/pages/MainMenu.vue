<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import DishesListMenu from '../components/DishesListMenu.vue'
import SearchInput from '../components/SearchInput.vue'
import SelectSort from '../components/SelectSort.vue'
import Categories from '../components/Categories.vue'

const dishes = ref([])

const { addToCart, updateCart, clearCart } = inject('cart')

const categories = computed(() =>
  Array.from(
    new Set(dishes.value.map((i) => i.category).sort((item1, item2) => item1.localeCompare(item2)))
  )
)

const currentSortType = ref('')
const searchedText = ref('')
const selectedCategories = ref([])

const onChangeSort = (event) => {
  currentSortType.value = event.target.value
}

const onSearch = (event) => {
  searchedText.value = event.target.value
}

const sortedProducts = computed(() => {
  if (!currentSortType.value) return dishes.value
  return [...dishes.value].sort((dish1, dish2) => {
    return currentSortType.value
      ? String(dish1[currentSortType.value]).localeCompare(
          String(dish2[currentSortType.value]),
          'en',
          { numeric: true }
        )
      : 0
  })
})

const filteredProductsBySearch = computed(() => {
  return sortedProducts.value.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchedText.value.toLocaleLowerCase().trim())
  )
})

const filteredProductsByCategories = computed(() => {
  if (!selectedCategories.value.length) return filteredProductsBySearch.value
  return filteredProductsBySearch.value.filter((product) => {
    return selectedCategories.value.includes(product.category)
  })
})

onMounted(async () => {
  try {
    const data = await fetch('/dishes.json').then((response) => response.json())
    dishes.value = data
  } catch (error) {
    console.log(error)
  }

  const localCart = localStorage.getItem('cart')
  if (localCart) {
    const parsedLocalCart = JSON.parse(localCart)
    const dishesIdInLocalCart = parsedLocalCart.map((dish) => dish.id)
    clearCart()
    for (let dish of dishes.value) {
      if (dishesIdInLocalCart.includes(dish.id)) {
        addToCart(dish)
      }
    }
  }
})
</script>

<template>
  <div class="menu-top-part">
    <h2 class="title">Меню</h2>

    <div class="search-and-sort">
      <SearchInput :onSearch="onSearch" />

      <SelectSort :onChangeSort="onChangeSort" />

      <Categories :categoriesList="categories" v-model:chosen-categories="selectedCategories" />
    </div>
  </div>
  <DishesListMenu :dishes="filteredProductsByCategories" @add-to-cart="updateCart" />
</template>

<style scoped>
.menu-top-part {
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 40px;
}

.search-and-sort {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 15px;
  flex: 3;
}
</style>
