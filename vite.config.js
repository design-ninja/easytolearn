import { defineConfig } from 'vite';
import { ghPages } from "vite-plugin-gh-pages";
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/easytolearn/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react(), ghPages()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})