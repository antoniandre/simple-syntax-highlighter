// Polyfill.
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './app'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  vuetify,
  render: h => h(App),
}).$mount('#app')
