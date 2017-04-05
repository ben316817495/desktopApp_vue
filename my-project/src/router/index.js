import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import indexdesktop from '@/components/indexdesktop'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'indexdesktop',
      component: indexdesktop
    }]
})
