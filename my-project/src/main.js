// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/*引入资源请求插件*/
import VueResource from 'vue-resource'

Vue.use(VueResource);
/*使用$http*/
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;

Vue.use(ElementUI)

Vue.config.productionTip = false


window._url = 'http://localhost:3000/'
window.router = router
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App },
 
})