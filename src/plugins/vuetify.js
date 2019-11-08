import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: ['md', 'fa']
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1b4',
        secondary: '#666',
        maintext: '#999',
        lightgrey: '#eee'
      }
    }
  }
})
