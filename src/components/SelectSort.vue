<script setup>
defineProps({
  onChangeSort: Function
})
</script>

<template>
  <label class="select-container" for="select">
    <select id="select" class="sort-select" required="required" @change="onChangeSort">
      <option class="option" disabled value="" selected="selected">Cортировать</option>
      <option class="option" value="dishName">По алфавиту</option>
      <option class="option" value="price">По цене</option>
      <option class="option" value="dishWeight">По весу</option>
    </select>
    <svg class="arrow">
      <polyline points="1 1 5 5 9 1" />
    </svg>
  </label>
</template>

<style scoped>
.select-container {
  position: relative;
  display: inline-block;
  max-width: 300px;
  flex-shrink: 2;
}

.arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: #9098a9;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

.sort-select {
  -webkit-appearance: none;
  padding: 12px 40px 13px 12px;
  width: 100%;
  border: 2px solid #f3f3f3;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  font-family: 'Mont';
  font-size: 13px;
  transition: all 0.3s ease-in-out;
}

.sort-select:required:invalid {
  color: #5a667f;
}

.sort-select:focus {
  outline: none;
  border-color: #e98b8b;
}

.sort-select:hover + .arrow {
  stroke: #e98b8b;
}

.option {
  color: #111;
}

.option[value=''][disabled] {
  display: none;
}
</style>
