<template>
  <div class="card">
    <p class="card-title">Sign Up</p>

    <form @submit.prevent="signUp" class="form">
      <InputText
        v-model="userName"
        :disabled="isLoading"
        title="Your name"
        icon="material-symbols:account-circle"
        rules="required"
      />
      <InputText
        v-model="email"
        :disabled="isLoading"
        title="Your email"
        icon="ic:outline-email"
      />
      <InputText
        v-model="password"
        :disabled="isLoading"
        title="Password"
        icon="ic:outline-lock"
        type="password"
      />
      <InputText
        v-model="confirmPassword"
        :disabled="isLoading"
        title="Confirm password"
        icon="ic:outline-lock"
        type="password"
      />

      <div v-if="isLoading" class="d-flex justify-center">
        <Loader />
      </div>

      <Button title="Register" :disabled="isLoading" type="submit" />
    </form>

    <div class="alternative-login">
      <p>Or register with</p>

      <Icon
        @click="signInWithGoogle"
        icon="logos:google-icon"
        style="font-size: 32px; cursor: pointer"
      />
    </div>
  </div>
</template>

<script setup>
import InputText from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Loader from "@/components/Loader.vue";
import { ref } from "vue";
import toastify from "@/utils/toastify";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

import { useRouter } from "vue-router";
const router = useRouter();

const userName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

let isLoading = ref(false);

const signUp = async () => {
  isLoading.value = true;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    await updateProfile(userCredential.user, {
      displayName: userName.value,
    });

    toastify("Usuário criado com sucesso", "success");

    setTimeout(() => {
      router.push("/login/sign-in");
    }, 3000);
  } catch (error) {
    console.log(error);
    toastify("Erro ao criar usuário!", "error");
  }

  resetForm();
  isLoading.value = false;
};

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    router.push("/home");
  } catch (error) {
    toastify("Erro ao fazer login com Google!", error);
  }
};

const resetForm = () => {
  userName.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
};
</script>
