// Polyfill.
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import WaveUI from './plugins/wave-ui'
import App from './app'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  WaveUI,
  render: h => h(App)
}).$mount('#app')
