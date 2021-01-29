import Vue from 'vue'
import App from './App.vue'
// /import 'fullpage.js/vendors/scrolloverflow'

Vue.config.productionTip = false


import VueFullPage from './assets/main'

Vue.use(VueFullPage)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })



new Vue({
  render: h => h(App),
}).$mount('#app')
