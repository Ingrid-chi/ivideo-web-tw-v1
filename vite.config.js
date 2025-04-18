import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/ivideo-web-tw-v1/',
  build: {
    outDir: 'docs', // ← 改成 docs 資料夾
  },
  plugins: [react(), svgr()],
});
