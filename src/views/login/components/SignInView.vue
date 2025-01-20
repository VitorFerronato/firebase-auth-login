<template>
  <div class="card">
    <p class="card-title">Sign In</p>

    <form class="form">
      <InputText title="Your name" icon="ic:outline-email" />
      <InputText title="Password" icon="ic:outline-lock" />

      <a href="" style="font-size: 12px" class="forgot-password"
        >Forgot password?</a
      >

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
