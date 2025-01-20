<template>
  <div class="input-container">
    <Icon :icon="icon" class="icon" />
    <i :class="[`fas ${icon} icon`]"></i>
    <input type="text" :placeholder="title" class="custom-input" />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  title: {
    type: String,
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.icon {
  position: absolute;
  left: 8px;
  font-size: 18px;
  color: gray;
}

.custom-input {
  width: 100%;
  padding: 8px 8px 8px 32px;
  border: none;
  border-bottom: 0.7px solid gray;
  font-size: 16px;
  outline: none;
  background: none;
}

.custom-input::placeholder {
  color: gray;
  font-size: 14px;
}

.custom-input:focus {
  border-bottom: 1px solid #539ed6;
}
</style>
