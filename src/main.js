// Polyfill.
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { createApp, h } from 'vue'
import App from './app'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp({
  render: () => h(App)
})

new WaveUI(app, {
  icons: ['md', 'fa'],
  iconsLigature: 'material-icons',
  colors: {
    primary: '#1b4',
    secondary: '#666',
    maintext: '#999',
    lightgrey: '#eee'
  }
})

app.mount('#app')
