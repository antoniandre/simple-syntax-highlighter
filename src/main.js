import Vue from 'vue'
import './plugins/vuetify'
import App from './app.vue'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  render: h => h(App),
}).$mount('#app')
