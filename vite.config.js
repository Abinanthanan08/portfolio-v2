import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  fontFamily: {
    sans: ['Poppins', 'Arial', 'sans-serif'],
    roboto: ['Roboto', 'sans-serif'],
  },
  plugins: [
    tailwindcss(),
    react(),
  ],
  corePlugins: {
    scrollBehavior: true,
  },
})
