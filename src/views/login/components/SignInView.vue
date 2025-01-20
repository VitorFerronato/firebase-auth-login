<template>
  <div class="card">
    <p class="card-title">Sign In</p>

    <form @submit.prevent="signIn" class="form">
      <InputText v-model="email" title="Your email" icon="ic:outline-email" />
      <InputText v-model="password" title="Password" icon="ic:outline-lock" />

      <a href="" style="font-size: 12px" class="forgot-password"
        >Forgot password?</a
      >

      <Button title="Log in" type="submit" />
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
import { ref } from "vue";
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

import { getCurrentUser } from "vuefire";
const currentUser = getCurrentUser();

const email = ref("");
const password = ref("");

const signIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Login");
  } catch (error) {
    console.log(error);
  }
  console.log(email.value);
  console.log(password.value);
};
</script>
