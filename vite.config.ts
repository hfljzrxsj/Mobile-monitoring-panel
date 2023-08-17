/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable sort-keys */
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc';
import {
  // join,
  resolve
} from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  'base': '/',
  'plugins': [react()],
  'resolve': {
    'alias': {
      // '@': resolve(__dirname, 'src'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    'extensions': [
      '.mjs',
      '.mts',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  'esbuild': {
    // 'jsxInject': 'use \'strict\';',
    'pure': [
      'console.log',
      'debugger'
    ],
    'jsxFactory': 'React.createElement',
    'jsxFragment': 'React.Fragment',
    'drop': [
      'console',
      'debugger'
    ]
  },
  'build': {
    'rollupOptions': {
      'input': {
        'main': resolve(__dirname, 'index.html')
      },
      'minify': 'esbuild'
      // 'minify': 'terser'
    },
    'target': 'modules', // 设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
    'outDir': 'dist', // 构建得包名  默认：dist
    'assetsDir': 'assets', // 静态资源得存放路径文件名  assets
    'sourcemap': false, // 构建后是否生成 source map 文件
    'brotliSize': false, // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
    'minify': 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
    'ssrManifest': true, // 生成 manifest.json 文件
    'cssCodeSplit': true, // 启用/禁用 CSS 代码拆分。启用后，CSS 将拆分为动态块，而不是内联到 HTML <head> 中的 <style> 标签中。这可以显着提高首次渲染性能，但是如果您的应用程序依赖于在首次渲染之前注入的 CSS，则可能会导致 FOUC。默认情况下启用
    'assetsInlineLimit': 0 // 小于此阈值（以字节为单位）的导入或 URL 资源将内联为 base64 URL。设置为 0 可以完全禁用资源内联。默认情况下，限制为 4kb
    // 'mode': 'development' // 'development' | 'production' | 'none
    // 'chunkSizeWarningLimit': 1000, // chunk 大小警告的限制（以 kbs 为单位）默认：500
    // 'cssTarget': 'chrome61' // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
    // 'terserOptions': {
    //   'compress': {
    //     'drop_console': true,
    //     'drop_debugger': true,
    //     'pure_funcs': [
    //       'console.log',
    //       'debugger'
    //     ],
    //     // 'keep_infinity': true,
    //     // 'passes': 0,
    //     // 'toplevel': true,
    //     'unsafe': false,
    //     'unsafe_arrows': false,
    //     'unsafe_comps': false,
    //     'unsafe_Function': false,
    //     'unsafe_math': false,
    //     'unsafe_methods': false,
    //     'unsafe_proto': false,
    //     'unsafe_regexp': false,
    //     'unsafe_symbols': false,
    //     'unsafe_undefined': false
    //   }
    // }
  },
  'server': {
    'host': true,
    'open': true,
    'cors': true
  },
  'css': {
    'modules': {
      // 'localsConvention': 'camelCaseOnly'
    },
    'devSourcemap': false
  },
  'json': {
    // 从 .json 文件中导入的 JSON5 模块将被转换为 ES 模块
    'stringify': true
  },
  'clearScreen': false,
  'preview': {
    'host': true,
    'open': true,
    'cors': true
  }
});
