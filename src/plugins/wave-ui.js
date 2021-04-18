import Vue from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

Vue.use(WaveUI)

export default new WaveUI({
  icons: ['md', 'fa'],
  iconsLigature: 'material-icons',
  colors: {
    primary: '#1b4',
    secondary: '#666',
    maintext: '#999',
    lightgrey: '#eee'
  }
})
