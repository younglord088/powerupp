import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the India Water Portal
      '/api': {
        target: 'https://www.indiawaterportal.org/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api from the request path
      },
    },
  },
})
