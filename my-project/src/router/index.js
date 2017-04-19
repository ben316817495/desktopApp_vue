import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hellome from '@/components/Hellome'
import indexdesktop from '@/components/indexdesktop'
import folderPanel from '@/components/folderPanel'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'indexdesktop',
      component: indexdesktop,
      children: [
        {path: '/hello',name: 'Hello',component: Hello},
      ]
    },{
       path: '/folderPanel',
       name: 'folderPanel',
       component: folderPanel
    }
  ]
})



