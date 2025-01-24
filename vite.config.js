import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate", // Vai registrar o service worker automaticamente
      manifest: {
        name: "Sua Aplicação Vue 3",
        short_name: "VueApp",
        description: "Aplicação Vue 3 com Firebase como PWA",
        theme_color: "#4DBA87", // cor da barra de status do dispositivo
        background_color: "#ffffff", // cor de fundo quando a PWA for carregada
        display: "standalone", // para comportamento como app nativo
        start_url: "/", // URL inicial do app
        icons: [
          {
            src: "icons/pwa-192x192.png", // caminho para o ícone
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      // workbox: {
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/(firebase|your-backend)\.com\/.*$/,
      //       handler: "NetworkFirst",
      //       options: {
      //         cacheName: "firebase-cache",
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24, // 1 dia
      //         },
      //       },
      //     },
      //   ],
      // },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
