import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import standard from 'eslint-config-standard'

export default [
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    name: 'standard',
    rules: standard.rules,
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin
    }
  },
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'brace-style': ['error', 'stroustrup'],
      'no-debugger': 'warn',
      'vue/multi-word-component-names': 'off'
    }
  }
]
