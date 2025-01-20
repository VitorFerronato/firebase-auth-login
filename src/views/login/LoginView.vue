<template>
  <div class="view">
    <router-view></router-view>
    <div class="img-link">
      <img src="../../images/signin-image.jpg" alt="" />
      <router-link to="/main/sign-up">Create an account</router-link>
    </div>
  </div>
</template>

<script setup></script>

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
  padding: 4rem;
  background-color: white;
}

.img-link {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
