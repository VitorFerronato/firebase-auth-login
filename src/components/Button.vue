<template>
  <button v-bind="$attrs" class="custom-button">{{ title }}</button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped>
.custom-button {
  background-color: #6cb2eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
}

.custom-button:hover {
  background-color: #539ed6;
}

.custom-button:active {
  transform: scale(0.98);
}
</style>
