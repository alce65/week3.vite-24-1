import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        got: resolve(__dirname, 'got.html'),
        vite: resolve(__dirname, 'vite.html'),
      },
    },
  },
});
