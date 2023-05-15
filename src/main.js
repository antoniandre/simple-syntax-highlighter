import Vue from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import App from './app.vue'

Vue.use(WaveUI)

new Vue({
  render: h => h(App),
  waveui: new WaveUI({
    icons: ['md', 'fa'],
    iconsLigature: 'material-icons',
    colors: {
      primary: '#1b4',
      secondary: '#666',
      maintext: '#333',
      lightgrey: '#eee'
    }
  })
}).$mount('#app')
