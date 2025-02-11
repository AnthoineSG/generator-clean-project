import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8082
  },
  resolve: {
    alias: [
      {
        find: '@/assets',
        replacement: '/src/assets',
      },
      {
        find: '@/components',
        replacement: '/src/components',
      },
      {
        find: '@/constants',
        replacement: '/src/constants',
      },
      {
        find: '@/contexts',
        replacement: '/src/contexts',
      },
      {
        find: '@/data',
        replacement: '/src/data',
      },
      {
        find: '@/hooks',
        replacement: '/src/hooks',
      },
      {
        find: '@/navigation',
        replacement: '/src/navigation',
      },
      {
        find: '@/services',
        replacement: '/src/services',
      },
      {
        find: '@/screens',
        replacement: '/src/screens',
      },
      {
        find: '@/ui-kit',
        replacement: '/src/ui-kit',
      },
      {
        find: '@/types',
        replacement: '/src/types',
      },
    ],
  },
});
