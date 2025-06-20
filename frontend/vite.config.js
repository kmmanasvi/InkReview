// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import history from 'connect-history-api-fallback';

// export default defineConfig({
//   plugins: [
//     react(),
//     {
//       name: 'html-fallback',
//       configureServer(server) {
//         server.middlewares.use(history());
//       },
//     },
//   ],
//   server: {
//     port: 5173
//   },
//   build: {
//     outDir: 'dist',
//   },
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
//   base: '/',
// });


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/',
});
