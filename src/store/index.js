import { defineStore } from "pinia";

export const useAuthStore = defineStore("alerts", {
  state: () => ({
    count: 0,
    name: "Vitor",
  }),
});
