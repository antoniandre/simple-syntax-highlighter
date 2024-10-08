import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Delete from 'rollup-plugin-delete'
import autoprefixer from 'autoprefixer'

// eslint-disable-next-line multiline-ternary
const bundleBuild = {
  lib: {
    entry: resolve(__dirname, '/src/components/simple-syntax-highlighter.vue'),
    name: 'sshpre',
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
      globals: { vue: 'Vue' },
      entryFileNames: 'sshpre.[format].js',
      chunkFileNames: '[name].js'
    }
  }
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
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  build: process.env.BUNDLE ? bundleBuild : { outDir: 'docs' },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  }
})
