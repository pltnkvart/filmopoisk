import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~/components': path.resolve(__dirname, './src/components'),
      '~/hooks': path.resolve(__dirname, './src/hooks'),
      '~/store': path.resolve(__dirname, './src/store'),
      '~/pages': path.resolve(__dirname, './src/pages'),
      '~/types': path.resolve(__dirname, './src/types'),
      '~/slices': path.resolve(__dirname, './src/slices'),
    },
  },
});
