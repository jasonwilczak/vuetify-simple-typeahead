import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App'
import VuetifySimpleTypeahead from '../src'

Vue.use(Vuetify)
Vue.use(VuetifySimpleTypeahead);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  created() {
 }
})
