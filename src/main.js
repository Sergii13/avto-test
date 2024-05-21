import './assets/main.css'
import { VBtn } from 'vuetify/components/VBtn'
import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  aliases: {
    VBtnPrimary: VBtn,
    VBtnSecondary: VBtn
  },
  defaults: {
    VBtnSecondary: {
      height: '40px',
      variant: 'outlined',
      class: ['v-btn--secondary']
    },
    VBtnPrimary: {
      height: '40px',
      class: ['v-btn--primary']
    }
  }
})


createApp(App)
  .use(vuetify)
  .mount('#app')
