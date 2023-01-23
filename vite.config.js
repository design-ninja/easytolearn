import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/easytolearn/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'public'
  },
})