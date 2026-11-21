import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

function promoteDocsIndexPlugin(enabled) {
  return {
    name: 'promote-docs-index',
    closeBundle() {
      if (!enabled) return;

      const outDir = resolve(__dirname, 'docs');
      const nestedHtml = resolve(outDir, 'examples/index.html');
      const rootHtml = resolve(outDir, 'index.html');

      if (!fs.existsSync(nestedHtml)) return;

      let html = fs.readFileSync(nestedHtml, 'utf8');
      // Ensure asset & stylesheet paths resolve from /docs/index.html
      html = html.replace(/(src|href)="\.\.\/assets\//g, '$1="./assets/');
      html = html.replace(/(src|href)="\.\/examples\//g, '$1="./');

      fs.writeFileSync(rootHtml, html, 'utf8');
      fs.rmSync(resolve(outDir, 'examples'), { recursive: true, force: true });
    },
  };
}

export default defineConfig(() => {
  const isDocsOnly = process.env.BUILD_TARGET === 'docs';

  return {
    plugins: [react(), promoteDocsIndexPlugin(isDocsOnly)],
    base: isDocsOnly ? './' : './',
    build: {
      outDir: isDocsOnly ? 'docs' : 'dist',
      emptyOutDir: !isDocsOnly,
      rollupOptions: {
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
      },
    },
  };
});