// 🔧 vite.config.preview.js（預覽用，可雙擊 index.html）
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  base: './', // 使用相對路徑，支援 file:// 開啟
  build: {
    target: 'es2015',
    assetsInlineLimit: Infinity, // 所有資源都 inline
    cssCodeSplit: false,
  },
  plugins: [react(), svgr(), viteSingleFile()],
});
