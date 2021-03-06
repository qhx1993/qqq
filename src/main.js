import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router'

Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
