<template>
  <div class="view">HOME</div>
  <Button title="Logout" @click="logout" />
  == {{ auth.currentUser.displayName }}
</template>

<script setup>
import Button from "@/components/Button.vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (error) {
    console.error("Erro ao deslogar:", error);
  }
};
</script>
