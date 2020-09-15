import Vue from 'vue'
import App from './App.vue'

import vueNodtificationComponents from './lib/index'

Vue.use(vueNodtificationComponents)

new Vue({
  el: '#app',
  render: h => h(App)
})