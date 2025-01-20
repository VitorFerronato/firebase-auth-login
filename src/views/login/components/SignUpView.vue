<template>
  <div class="card">
    <p class="card-title">Sign Up</p>

    <form class="form">
      <InputText title="Your name" icon="material-symbols:account-circle" />
      <InputText title="Your email" icon="ic:outline-email" />
      <InputText title="Password" icon="ic:outline-lock" />
      <InputText title="Confirm password" icon="ic:outline-lock" />

      <Button title="Register" />
    </form>

    <div class="alternative-login">
      <p>Or register with</p>

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
