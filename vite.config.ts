import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        dead_code: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        toplevel: true,
        if_return: true,
        join_vars: true,
        collapse_vars: true,
        reduce_vars: true,
      },
      mangle: {
        toplevel: true, // don't rename top-level functions/classes
      },
      format: {
        comments: false,
        beautify: false,
      },
      sourceMap: {
        filename: 'bundle.min.js',
        url: 'bundle.min.js.map',
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-icons', '@radix-ui/react-slot'],
          'icons': ['lucide-react', 'react-icons'],
          'animation': ['framer-motion']
        }
      }
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@radix-ui/react-icons', '@radix-ui/react-slot']
  },
  // Copy SEO files to dist directory
  publicDir: 'public',
});
