import { createApp } from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
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
