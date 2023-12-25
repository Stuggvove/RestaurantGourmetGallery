<script setup>
defineProps({
  onSearch: Function
})
</script>

<template>
  <div class="form">
    <img class="search-img" src="/images/search.png" alt="" />
    <input type="text" class="form-input" id="name" placeholder="Поиск..." @input="onSearch" />
  </div>
</template>

<style scoped>
.form {
  position: relative;
  max-width: 350px;
  width: 100%;
  flex-shrink: 1;
}

.form-input {
  width: 100%;
  color: #000;
  font-family: 'Mont';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 12px 13px 12px 44px;
  background: #ffffff;
  border-radius: 10px;
  border: 2px solid #f3f3f3;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.form-input:focus {
  outline: none;
  border-color: #e98b8b;
}

.search-img {
  position: absolute;
  height: 15px;
  width: 15px;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
}
</style>
