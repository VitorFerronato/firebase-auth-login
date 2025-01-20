<template>
  <div :class="['view', invertImg]">
    <router-view></router-view>

    <div class="img-link">
      <img
        v-if="currentPath == '/login/sign-in'"
        src="../../images/signin-image.jpg"
        alt=""
      />

      <img v-else src="../../images/signup-image.jpg" alt="" />
      <router-link :to="redirectTo">{{ linkText }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

const currentPath = computed(() => {
  return route.path;
});

const redirectTo = computed(() => {
  return currentPath.value.includes("sign-in")
    ? "/login/sign-up"
    : "/login/sign-in";
});

const invertImg = computed(() => {
  return currentPath.value == "/login/sign-up" ? "invertRow" : "";
});

const linkText = computed(() => {
  return currentPath.value == "/login/sign-in"
    ? "Create an account"
    : "I am already member";
});
</script>

<style scoped>
.view {
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 5rem;
  padding: 1rem 4rem;
  background-color: white;
}

.invertRow {
  flex-direction: row-reverse;
}

.img-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.img-link a {
  font-size: 12px;
}

.img-link a:hover {
  text-decoration: underline;
}
</style>
