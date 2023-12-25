<script setup>
import Checkbox from './Checkbox.vue'

const props = defineProps({
  categoriesList: Array,
  chosenCategories: Array
})

const emit = defineEmits(['chosenCategories'])

const onBtnClick = () => {
  document.querySelector('.categories-btn').classList.toggle('categories-btn--active')
  document.querySelector('.categories-container').classList.toggle('categories-container--active')
}

const updateChosenCategories = (checked, category) => {
  let newChosenCategoriesList = [...props.chosenCategories]

  checked
    ? newChosenCategoriesList.push(category)
    : newChosenCategoriesList.splice(newChosenCategoriesList.indexOf(category), 1)

    emit("update:chosenCategories", newChosenCategoriesList)
}
</script>

<template>
  <div class="categories-wrapper">
    <button class="categories-btn" @click="onBtnClick">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="left-block" x="0.56665" y="3.40002" width="11.9" height="11.9" rx="3" fill="#9B9B9B" />
        <rect class="right-block" x="15.8667" y="5.09998" width="17.5667" height="2.83333" rx="1" fill="#C4C4C4" />
        <rect class="right-block" x="15.8667" y="10.7667" width="11.3333" height="2.83333" rx="1" fill="#C4C4C4" />
        <rect class="left-block" x="0.56665" y="18.7" width="11.9" height="11.9" rx="3" fill="#9B9B9B" />
        <rect class="right-block" x="15.8667" y="20.4" width="17.5667" height="2.83333" rx="1" fill="#C4C4C4" />
        <rect class="right-block" x="15.8667" y="26.0667" width="11.3333" height="2.83333" rx="1" fill="#C4C4C4" />
      </svg>
    </button>
    <div class="categories-container">
      <span class="categories-title">Категории:</span>
      <div class="categories-list">
        <Checkbox
          v-for="category in categoriesList"
          :key="category"
          :title="category"
          :checked="chosenCategories.includes(category)"
          @on-select-category="updateChosenCategories($event, category)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories-wrapper {
  position: relative;
}

.categories-btn {
  background: none;
  border: 2px solid #f3f3f3;
  border-radius: 10px;
  padding: 2px 4px 1px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.categories-btn .left-block {
  transition: all 0.3s ease-in-out;
}

.categories-btn .right-block {
  transition: all 0.3s ease-in-out;
}

.categories-btn:hover,
.categories-btn--active {
  border-color: #ef9494;
}

.categories-btn:hover .left-block,
.categories-btn--active .left-block {
  fill: #fa6767;
}

.categories-btn:hover .right-block,
.categories-btn--active .right-block {
  fill: #ef9494;
}

.categories-container {
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  margin-top: 10px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  padding: 16px 15px;
  z-index: 50;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.categories-container--active {
  opacity: 1;
  visibility: visible;
}

.categories-title {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1a1f16;
  margin-bottom: 15px;
}

.categories {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px -2px #9098a9;
  padding: 16px;
  width: auto;
}
</style>
