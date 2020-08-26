import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false

// render
// render: function(createElement){
//   return createElement(App);
// }
// hyperscript createElement -> h

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
