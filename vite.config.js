import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  // build: {
  //   assetsDir: './assets',
  // },
  // base: '/ivideo-web-tw-v1/',
  plugins: [react(), svgr()],
});
