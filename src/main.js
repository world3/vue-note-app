import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

const vuetifyOptions = { }

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(vuetifyOptions)
}).$mount('#app')
