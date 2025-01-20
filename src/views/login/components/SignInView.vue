<template>
  <div class="card">
    <p class="card-title">Sign In</p>

    <form class="form">
      <InputText title="Your name" icon="ic:outline-email" />
      <InputText title="Password" icon="ic:outline-lock" />

      <Button title="Log in" />
    </form>

    <div class="alternative-login">
      <p>Or login with</p>

      <Icon
        icon="logos:google-icon"
        style="font-size: 32px; margin-right: 12px"
      />

      <Icon icon="logos:linkedin-icon" style="font-size: 32px" />
    </div>
  </div>
</template>

<script setup>
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";
</script>

<style scoped>
.card-title {
  font-size: 2rem;
  font-weight: bold;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.alternative-login {
  margin-top: 32px;
  font-size: 12px;
  text-align: center;
}
</style>
