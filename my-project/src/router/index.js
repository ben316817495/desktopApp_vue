import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import indexdesktop from '@/components/indexdesktop'
import folderPanel from '@/components/folderPanel'
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
    },{
       path: '/folderPanel',
       name: 'folderPanel',
       component: folderPanel
    }
  ]
})
