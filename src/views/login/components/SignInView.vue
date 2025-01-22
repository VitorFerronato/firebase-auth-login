<template>
  <div class="card">
    <p class="card-title">Sign In</p>

    <form @submit.prevent="signIn" class="form">
      <InputText v-model="email" title="Your email" icon="ic:outline-email" />
      <InputText
        v-model="password"
        title="Password"
        icon="ic:outline-lock"
        type="password"
      />

      <a href="/login/password-recovery" class="forgot-password"
        >Forgot password?</a
      >

      <Button title="Log in" type="submit" />
    </form>

    <div class="alternative-login">
      <p>Or login with</p>

      <Icon
        @click="signInWithGoogle"
        icon="logos:google-icon"
        style="font-size: 32px; margin-right: 12px; cursor: pointer"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputText from "@/components/Input.vue";
import Button from "@/components/Button.vue";

import toastify from "@/utils/toastify";
import { useRouter } from "vue-router";

const router = useRouter();
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const email = ref("");
const password = ref("");

const signIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Login");
  } catch (error) {
    console.log(error);
  }
};

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    router.push("/home");
  } catch (error) {
    toastify("Erro ao fazer login com Google!", "error");
  }
};

const forgotPassword = async () => {
  await sendPasswordResetEmail(auth, email.value);
};
</script>
