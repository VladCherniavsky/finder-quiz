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
        app: 'src/render.jsx',
        index: 'index.html'
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        preserveModules: false,
        manualChunks: (id) => {
          if (id.includes('src/render.jsx')) {
            return 'app';
          }
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext'
  },
  // Separate config for bundle
  bundle: {
    rollupOptions: {
      input: 'src/main.jsx',
      output: {
        format: 'iife',
        name: 'bundle',
        file: 'dist/bundle.js',
        inlineDynamicImports: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
