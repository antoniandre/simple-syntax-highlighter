import { createApp } from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import App from './app.vue'

const app = createApp(App)

app.use(WaveUI, {
  icons: ['md', 'fa'],
  iconsLigature: 'material-icons',
  colors: {
    light: {
      primary: '#1b4',
      secondary: '#666',
      maintext: '#333',
      lightgrey: '#eee'
    },
    dark: {
      primary: '#6c8',
      secondary: '#aaa',
      maintext: '#999',
      lightgrey: '#eee'
    }
  },
  theme: 'auto'
})

app.mount('#app')
