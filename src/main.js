// Polyfill.
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { createApp, h } from 'vue'
// import vuetify from './plugins/vuetify'
import App from './app'

createApp({
  // vuetify,
  render: () => h(App)
}).mount('#app')
