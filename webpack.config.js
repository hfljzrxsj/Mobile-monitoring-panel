import { resolve } from 'path';
module.exports = {
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    // extensions: ['.js', '.ts', '.jsx', '.json', '.vue', '.mjs', '.tsx']
  },
};