import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Exclude problematic HTML files from build
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress warnings about HTML files in assets
        if (warning.message && warning.message.includes('.html')) {
          return
        }
        warn(warning)
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    },
    // Watch options to ignore problematic files
    watch: {
      ignored: [
        '**/templates/ITR1158/assets/fonts/*.html',
        '**/templates/ITR1158/assets/css/*.html',
        '**/templates/ITR1158/assets/js/*.html',
        '**/templates/ITR1158/assets/images/*.html'
      ]
    }
  },
  // Only process specific file types as assets
  assetsInclude: [
    '**/*.woff', 
    '**/*.woff2', 
    '**/*.ttf', 
    '**/*.eot', 
    '**/*.svg', 
    '**/*.otf',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.webp'
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    exclude: []
  }
})
