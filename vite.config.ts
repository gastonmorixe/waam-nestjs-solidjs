import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
// import { resolve } from 'path'

export default defineConfig({
  // root
  // root: resolve(process.cwd(), 'src/pages/'),
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
