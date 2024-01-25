/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable sort-keys */
import { exclude } from './tsconfig.json';
import { URL, fileURLToPath } from 'node:url';
import {
  defineConfig
  // ,loadEnv
  // ,transformWithEsbuild
} from 'vite';
// import externalGlobals from 'rollup-plugin-external-globals';
import { Plugin as importToCDN } from 'vite-plugin-cdn-import';
// import _default from 'vite-plugin-cdn';
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc';
// import { type UserConfig } from 'vite/dist/node';
import {
  // join,
  resolve
} from 'path';
import svgr from 'vite-plugin-svgr';
// import { } from 'vite-plugin-svg-icons';
// import svgLoader from 'vite-svg-loader';
// import reactSvgPlugin from 'vite-plugin-react-svg';
// //vitejs.dev/config/
const serverOptions = {
  'host': true,
  'open': true,
  'cors': true,
  // 'https': false,
  // 'strictPort': true, // 若端口已被占用则会直接退出
  'proxy': {
    '/api': {
      target: 'http://121.196.247.3',
      'changeOrigin': true,
      'secure': true
      // 'rewrite': (path) => path.replace(/^\/api/u, '')
    }
  },
  // 'fs': {
  //   'strict': false //  支持引用除入口目录的文件
  // 'allow': [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
  // 'deny': [
  //   '.env',
  //   '.env.*',
  //   '*.{pem,crt}'
  // ] // 用于限制 Vite 开发服务器提供敏感文件的黑名单
  // }
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineConfig({
  'root': resolve('./src'), //  入口index.html，注意入口js应该与index.html 同一目录下（只能写到目录，不能写到具体文件）
  'base': '/', // 'base': './'
  'plugins': [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        ref: true,
        titleProp: true,
        descProp: true,
        expandProps: true,
        dimensions: true,
        // native: true,
        runtimeConfig: true,
        // typescript: true,
        prettier: true,
        svgo: true,
        memo: true,
        index: true,
      },
      exportAsDefault: true
      // 这里可以添加SVGR的选项
    }),
    // svgLoader({
    //   svgoConfig: {
    //     multipass: true,
    //     js2svg: {
    //       pretty: true,
    //       useShortTags: true,
    //       eol: 'crlf',
    //       finalNewline: true
    //     }
    //   },
    //   defaultImport: 'component',// or 'raw'
    //   svgo: true
    // }),
    // reactSvgPlugin({
    //   // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
    //   defaultExport: 'component',

    //   // Boolean flag to enable/disable SVGO
    //   svgo: true,

    //   // SVGO configuration object
    //   svgoConfig: {},

    //   // Props to be forwarded on SVG tag, ossible options: "start", "end" or false
    //   expandProps: 'end',

    //   // Setting this to true will forward ref to the root SVG tag
    //   ref: false,

    //   // Setting this to true will wrap the exported component in React.memo
    //   memo: false,

    //   // Replace an attribute value by an other.
    //   // The main usage of this option is to change an icon color to "currentColor" in order to inherit from text color.
    //   // replaceAttrValues: { old: 'new' },
    //   replaceAttrValues: null,

    //   // Add props to the root SVG tag
    //   // svgProps: { name: 'value' },
    //   svgProps: null,

    //   // Add title tag via title property
    //   // <SvgIcon title="Accessible icon name" /> => <svg><title>Accessible icon name</title><...></svg>
    //   // <SvgIcon title="Accessible icon name" titleId="iconName" /> => <svg aria-labelledby="iconName><title id="iconName">Accessible icon name</title><...></svg>
    //   titleProp: false,
    // }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    importToCDN({
      'modules': [
        {
          'name': 'react',
          'var': 'React',
          'path': '//cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js'
          // 'path': 'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js'
        },
        {
          'name': 'react-dom',
          'var': 'ReactDOM',
          'path': '//cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js'
          // 'path': 'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js'
          // 'path': 'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js'
          // 'path': 'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js'
        },
        {
          'name': '@mui/material',
          'var': 'MaterialUI',
          'path': '//cdn.bootcdn.net/ajax/libs/material-ui/4.12.4/umd/material-ui.production.min.js'
          // 'path': 'https://cdn.bootcdn.net/ajax/libs/material-ui/4.12.4/umd/material-ui.development.js'
          // 'path': '//unpkg.com/@material-ui/core/umd/material-ui.production.min.js'
        },
        {
          'name': 'redux',
          'var': 'Redux',
          'path': '//cdn.bootcdn.net/ajax/libs/redux/4.2.1/redux.min.js'
        },
        {
          'name': 'react-redux',
          'var': 'ReactRedux',
          'path': '//cdn.bootcdn.net/ajax/libs/react-redux/8.0.5/react-redux.min.js'
        },
        {
          'name': 'redux-thunk',
          'var': 'ReduxThunk',
          'path': '//cdn.bootcdn.net/ajax/libs/redux-thunk/2.4.2/redux-thunk.min.js'
        },
        {
          'name': 'axios',
          'var': 'axios',
          'path': '//cdn.bootcdn.net/ajax/libs/axios/1.3.6/axios.min.js'
        },
        {
          'name': 'prop-types',
          'var': 'PropTypes',
          'path': '//cdn.bootcdn.net/ajax/libs/prop-types/15.8.1/prop-types.min.js'
        },
        {
          'name': 'react-transition-group',
          'var': 'ReactTransitionGroup',
          'path': '//cdn.bootcdn.net/ajax/libs/react-transition-group/4.4.5/react-transition-group.min.js'
        }

        // {
        //   'name': 'react/react-jsx-runtime',
        //   'var': 'ReactJsxRuntime',
        //   'path': '//cdn.bootcdn.net/ajax/libs/react/18.2.0/cjs/react-jsx-runtime.production.min.js'
        // },
        // {
        //   'name': 'object-assign',
        //   'var': 'ObjectAssign',
        //   'path': '//unpkg.com/object-assign@4.1.1/index.js'
        // },
        // {
        //   'name': 'react-is',
        //   'var': 'react-is',
        //   'path': '//cdn.bootcdn.net/ajax/libs/react-is/18.2.0/umd/react-is.production.min.js'
        // },
        // {
        //   'name': '@popperjs',
        //   'var': 'Popper',
        //   'path': '//cdn.bootcdn.net/ajax/libs/popper.js/2.11.7/umd/popper.js'
        // },
        // {
        //   'name': '@emotion',
        //   'var': 'emotion',
        //   'path': '//cdn.bootcdn.net/ajax/libs/babel-standalone/7.21.4/babel.min.js'
        // },
        // {
        //   'name': '@babel',
        //   'var': 'babel',
        //   'path': '//cdn.bootcdn.net/ajax/libs/babel-standalone/7.21.4/babel.min.js'
        // },
      ]
    }),
    // {
    //   name: 'treat-js-files-as-jsx',
    //   async transform (code, id) {
    //     if (!id.match(/src\/.*\.js$/)) return null;

    //     // Use the exposed transform from vite, instead of directly
    //     // transforming with esbuild
    //     return transformWithEsbuild(code, id, {
    //       loader: 'tsx',
    //       jsx: 'automatic',
    //     });
    //   },
    // },
    // _default({
    //   esm: true,
    //   'modules': [
    //     {
    //       'name': 'react',
    //       'url': '//cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js'
    //     },
    //     {
    //       'name': 'react-dom',
    //       'url': '//cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js'
    //     },
    //     {
    //       'name': 'axios',
    //       'url': '//cdn.bootcdn.net/ajax/libs/axios/1.3.6/axios.min.js'
    //     },
    //     {
    //       'name': 'prop-types',
    //       'url': '//cdn.bootcdn.net/ajax/libs/prop-types/15.8.1/prop-types.min.js'
    //     },
    //     {
    //       'name': 'react-transition-group',
    //       'url': '//cdn.bootcdn.net/ajax/libs/react-transition-group/4.4.5/react-transition-group.min.js'
    //     },
    //     {
    //       'name': '@mui/material',
    //       'url': '//cdn.bootcdn.net/ajax/libs/material-ui/4.12.4/umd/material-ui.production.min.js'
    //       // 'url': '//unpkg.com/@material-ui/core/umd/material-ui.production.min.js'
    //     },]
    // }),
  ],
  'resolve': {
    'alias': {
      // '@': resolve(__dirname, 'src'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    'extensions': [
      // '.mjs',
      // '.mts',
      // '.js',
      '.ts',
      // '.jsx',
      '.tsx',
      // '.vue',
      // '.cjs',
      // '.cts',
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
    ],
    // loader: "tsx", // 或者 "jsx"
    // include: [
    //   // 为.jsx和.tsx文件添加这个，以保持正常行为
    //   "src/**/*.jsx",
    //   "src/**/*.tsx",
    //   "node_modules/**/*.jsx",
    //   "node_modules/**/*.tsx",
    //   // --- 或者 ---   
    //   // 添加这些行以允许所有.js文件包含JSX
    //   "src/**/*.js",
    //   "node_modules/**/*.js",
    //   // 添加这些行以允许所有.ts文件包含JSX
    //   "src/**/*.ts",
    //   "node_modules/**/*.ts",
    // ],
  },
  'build': {
    'rollupOptions': {
      'input': {
        'main': resolve(__dirname, 'src/index.html')
      },
      'output': {
        'chunkFileNames': 'js/[name]-[hash].js',
        'entryFileNames': 'js/[name]-[hash].js',
        'assetFileNames': '[ext]/[name]-[hash].[ext]',
        manualChunks (id) {

          // if (id.includes('emotion'))
          // console.log('id :', id);
          // eslint-disable-next-line no-magic-numbers, @typescript-eslint/no-magic-numbers
          return id.toString().split('node_modules/')[1]?.split('/')[0]?.toString() ?? null;
          //   if (id.includes('node_modules')) {
          //     return 'id_node_modules';
          //   }
          // }

        }
      }
      // 'external': ['react/jsx-runtime']
    },
    // 'target': 'modules', // 设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
    // target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
    target: 'esnext',
    // 'outDir': 'dist', // 构建得包名  默认：dist
    'outDir': resolve('dist'),
    'assetsDir': 'assets', // 静态资源得存放路径文件名  assets
    'sourcemap': false, // 构建后是否生成 source map 文件
    // 'brotliSize': false, // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
    'minify': 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
    'manifest': true,
    'ssrManifest': true, // 生成 manifest.json 文件
    'cssCodeSplit': true, // 启用/禁用 CSS 代码拆分。启用后，CSS 将拆分为动态块，而不是内联到 HTML <head> 中的 <style> 标签中。这可以显着提高首次渲染性能，但是如果您的应用程序依赖于在首次渲染之前注入的 CSS，则可能会导致 FOUC。默认情况下启用
    'assetsInlineLimit': 0, // 小于此阈值（以字节为单位）的导入或 URL 资源将内联为 base64 URL。设置为 0 可以完全禁用资源内联。默认情况下，限制为 4kb
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
    'write': true, // 启用将构建后的文件写入磁盘
    'emptyOutDir': true, // 构建时清空该目录
    'watch': null // 设置为 {} 则会启用 rollup 的监听器

    // 'external': [
    //   '@emotion',
    //   '@babel'
    // ],
    // 'plugins': [
    //   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    //   externalGlobals({
    //     '@emotion': 'emotion',
    //     '@babel': 'babel',
    //     // '@mui/material': 'Button',
    //     // '@mui/material': {
    //     //   Button: '@mui/material'
    //     // }
    //   })
    // ]
  },
  'server': {
    ...serverOptions,
    'hmr': true,
    'watch': {
      // 'ignored': exclude,
      followSymlinks: false,
      awaitWriteFinish: true,
      usePolling: false
    }
  },
  'css': {
    'modules': {
      // 'localsConvention': 'camelCaseOnly'
      // 'scopeBehaviour': 'global' || 'local'
    },
    'devSourcemap': false,
    'postcss': ''
    // 'preprocessorOptions': { // css的预处理器选项
    //   'scss': {
    //     // 'additionalData': '$injectedColor: orange;'
    //   }
    // }
  },
  'json': {
    'namedExports': true, // 是否支持从.json文件中进行按名导入
    'stringify': true// 从 .json 文件中导入的 JSON5 模块将被转换为 ES 模块 //  开启此项，导入的 JSON 会被转换为 export default JSON.parse("...") 会禁用按名导入
  },
  'clearScreen': false, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  'preview': serverOptions,
  'publicDir': resolve('./public')
  // 'logLevel': 'error' // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  // 'envDir': '/', // 用于加载 .env 文件的目录
  // 'envPrefix': [], // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
  // 'optimizeDeps': {
  //   'entries': [], // 指定自定义条目——该值需要遵循 fast-glob 模式
  //   'exclude': [], // 在预构建中强制排除的依赖项
  //   'include': [], // 可强制预构建链接的包
  //   'keepNames': false // true 可以在函数和类上保留 name 属性
  // }
  // 'ssr': {
  //   'external': [], // 列出的是要为 SSR 强制外部化的依赖,
  //   'noExternal': '', // 列出的是防止被 SSR 外部化依赖项
  //   'target': 'node' // SSR 服务器的构建目标
  // }
});
