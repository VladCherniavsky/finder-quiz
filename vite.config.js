import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(),react()],
// })

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      input: {
        bundle: 'src/main.jsx',
        app: 'src/render.jsx',
        index: 'index.html'
      },
      output: {
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        preserveModules: false,
        inlineDynamicImports: false,
        manualChunks: null,
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.facadeModuleId?.includes('main.jsx')) {
            return 'bundle.js';
          }
          return 'assets/[name].js';
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
