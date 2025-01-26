import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://rbac-blog.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
  build:{
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0]; // Split vendor dependencies into separate chunks
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500, 
  }
});
