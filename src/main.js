import { createApp } from 'vue'
import WaveUI from './plugins/wave-ui'
import App from './app.vue'

const app = createApp(App)

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
