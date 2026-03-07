import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: "OpenSky",
      icons: [
        {
          src: "partly-cloudy-day.svg",
          sizes: "any"
        }
      ]
    }
  })],
  base: "/OpenSky/"
})
