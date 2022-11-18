import Vue from 'vue'
import App from './App.vue'
import ClipboardJS from 'clipboard';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let clipboard = new ClipboardJS('.btn');
clipboard.on('success', function (e) {
  e.trigger.textContent = 'Copied!';
});