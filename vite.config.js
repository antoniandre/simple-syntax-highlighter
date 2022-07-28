import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Delete from 'rollup-plugin-delete'

const build = process.env.BUNDLE ? {
  lib: {
    entry: resolve(__dirname, '/src/components/simple-syntax-highlighter.vue'),
    name: 'sshpre',
    fileName: 'sshpre',
    formats: ['es', 'umd', 'cjs']
  },
  rollupOptions: {
    plugins: [
      // Rollup also copies the files in the public folder.
      // @todo: find a way to prevent adding them at all.
      Delete({ targets: ['dist/*.ico'], hook: 'generateBundle' })
    ],
    // Make sure to externalize deps that shouldn't be bundled into library.
    external: ['vue'],
    output: {
      // Provide global variables to use in the UMD build for externalized deps.
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
    Vue({
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  build
})
