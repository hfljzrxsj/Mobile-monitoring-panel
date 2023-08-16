/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable sort-keys */
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import {
  // join,
  resolve
} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  'plugins': [react()],
  'resolve': {
    'alias': {
      // '@': resolve(__dirname, 'src'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    'extensions': [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  'esbuild': {
    'jsxInject': 'import React from \'react\'',
    'pure': []
  },
  'build': {
    'rollupOptions': {
      'input': {
        'main': resolve(__dirname, 'index.html')
      }
    },
    'target': 'modules', // 设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
    'outDir': 'dist', // 构建得包名  默认：dist
    'assetsDir': 'assets', // 静态资源得存放路径文件名  assets
    'sourcemap': false, // 构建后是否生成 source map 文件
    'brotliSize': false, // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
    'minify': 'esbuild' // 项目压缩 :boolean | 'terser' | 'esbuild'
    // 'chunkSizeWarningLimit': 1000, // chunk 大小警告的限制（以 kbs 为单位）默认：500
    // 'cssTarget': 'chrome61' // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
  },
  'server': {
    'host': true,
    'open': true,
    'cors': true
  }
});
