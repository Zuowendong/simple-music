import Vue from 'vue'
import App from './App'

// 引入路径有错
// import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
