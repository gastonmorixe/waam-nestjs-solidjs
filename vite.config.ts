import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
// import { resolve } from 'path'

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        hydratable: true,
      },
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'views/solid/pages/index.html'),
    //     nested: resolve(__dirname, 'nested/index.html'),
    //   },
    // },
  },
})
