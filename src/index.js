import Vue from 'vue'
import app from './components/app.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(elementUI)
new Vue({
  el: '#app',
  components: {
    app,
  },
  render: h => h(app),
})
