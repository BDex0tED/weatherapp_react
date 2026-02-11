import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/weatherapp_react/", // Add this line! Match your repo name exactly.
})
