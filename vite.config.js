import { defineConfig } from 'vite'
import { resolve } from 'path'
import del from 'rollup-plugin-delete'
import { createVuePlugin } from 'vite-plugin-vue2'

const build = process.env.BUNDLE ? {
  lib: {
    entry: resolve(__dirname, '/src/components/simple-syntax-highlighter.vue'),
    name: 'sshpre'
  },
  rollupOptions: {
    plugins: [
      // del({ targets: ['dist/{images,.htaccess,ghspa.js}', 'dist/*.{ico,txt,html}'], hook: 'generateBundle' })
    ],
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['vue'],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        vue: 'Vue'
      }
    }
  }
} : {
  outDir: 'docs'
}

export default defineConfig({
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    })
  ], // https://vitejs.dev/config/
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  build
})
