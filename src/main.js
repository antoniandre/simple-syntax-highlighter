// Polyfill.
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { createApp, h } from 'vue'
import App from './app'
import WaveUI from './plugins/wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp({
  render: () => h(App)
})

new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')
