<template>
  <div class="card">
    <p class="card-title">Recuperar senha</p>

    <form @submit.prevent="signIn" class="form">
      <InputText v-model="email" title="Your email" icon="ic:outline-email" />

      <Button @click="forgotPassword" title="Recuperar" type="submit" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputText from "@/components/Input.vue";
import Button from "@/components/Button.vue";

import toastify from "@/utils/toastify";
import { useRouter } from "vue-router";
const router = useRouter();

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth();

const email = ref("");

const forgotPassword = async () => {
  if (!email.value) {
    toastify("Insira seu email!", "error");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email.value);
    toastify("Um email foi enviado a você!", "success");

    setInterval(() => {
      router.push("/login/sign-in");
    }, 2000);
  } catch (error) {
    toastify("Erro ao enviar email!", "success");
  }
};
</script>
