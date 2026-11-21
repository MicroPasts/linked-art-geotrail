import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(() => {
  const isDocsOnly = process.env.BUILD_TARGET === 'docs';
  const isUmd = process.env.BUILD_TARGET === 'umd';

  const config = {
    plugins: [react()],
    base: './',
    build: {
      outDir: isUmd ? 'dist-umd' : isDocsOnly ? 'docs' : 'dist',
      emptyOutDir: true,
    },
  };

  if (isUmd) {
    config.build.lib = {
      entry: resolve(__dirname, 'src/umd.jsx'),
      name: 'LinkedArtGeoTrail',
      formats: ['umd'],
      fileName: () => 'linked-art-geotrail.umd.js',
    };
  } else {
    config.build.rollupOptions = {
        input: isDocsOnly
          ? { index: resolve(__dirname, 'examples/index.html') }
          : {
              main: resolve(__dirname, 'index.html'),
              docs: resolve(__dirname, 'examples/index.html'),
            },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('maplibre-gl')) {
                return 'vendor-maplibre';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              if (id.includes('react')) {
                return 'vendor-react';
              }
              return 'vendor';
            }
          },
        },
      };
  }

  return config;
});