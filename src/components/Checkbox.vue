<script setup>
defineProps({
  checked: Boolean,
  title: String,
})
</script>

<template>
  <div class="category">
    <input
      class="category-input"
      @input="$emit('onSelectCategory', $event.target.checked)"
      type="checkbox"
      :checked="checked"
      :id="title"
    />
    <label :for="title">{{ title.charAt(0).toUpperCase() + title.slice(1) }}</label>
  </div>
</template>

<style scoped>
.category {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.category > * {
  cursor: pointer;
}

.category-input[type='checkbox'] {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.65rem;
  color: #fff;
  flex-shrink: 0;
}

.category:not(:last-child) {
  margin-bottom: 8px;
}
</style>
