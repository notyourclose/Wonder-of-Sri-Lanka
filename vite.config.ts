import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site base path: https://notyourclose.github.io/Wonder-of-Sri-Lanka/
  base: '/Wonder-of-Sri-Lanka/',
})
