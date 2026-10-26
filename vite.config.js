import react from '@vitejs/plugin-react'
import process from 'node:process'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from /UI-UX-Project/; Vercel and local dev serve from /
  base: process.env.GITHUB_ACTIONS ? '/UI-UX-Project/' : '/',
})
