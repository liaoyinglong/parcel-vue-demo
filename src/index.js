import Vue from 'vue'
import app from './app.vue'
new Vue({
  el: '#app',
  components: {
    app,
  },
  render: h => h(app),
})
