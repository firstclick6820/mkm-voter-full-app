import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  build: {manifest: true},
  base: process.env.mode === 'production' ? '/static/' : '/',
  root:'./',
  plugins: [react(), reactRefresh()],
})


