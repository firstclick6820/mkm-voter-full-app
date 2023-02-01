import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
      build: {
        manifest: true,
      },
      base: process.env.NODE_ENV === 'production' ? '/static/' : '/',
      root: './',
      plugins: [reactRefresh(),react()],
})


// // vite.config.js
// export default defineConfig({
//   build: {
//     // generate manifest.json in outDir
//     manifest: true,
//     rollupOptions: {
//       // overwrite default .html entry
//       input: '/path/to/main.js',
//     },
//   },
// })
