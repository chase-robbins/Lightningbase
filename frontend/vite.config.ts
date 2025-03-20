import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
    emptyOutDir: true,
  },
  publicDir: 'static',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
