import Vue from 'vue'
import Router from 'vue-router'

import lockPage from '@/components/lockPage'
import login from '@/components/login'
import indexdesktop from '@/components/indexdesktop'
import folderPanel from '@/components/folderPanel'

//音乐界面
import musicMainIndex from '@/components/musicPanel/musicMainIndex'
import musicPlayPanel from '@/components/musicPanel/musicPlayPanel'


import '@/assets/css/simple-line-icons-master/css/simple-line-icons.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexdesktop',
      component: indexdesktop,
      children: [
        {path: '/musicMainIndex',name: 'musicMainIndex',component: musicMainIndex},
        {path: '/musicPlayPanel',name: 'musicPlayPanel',component: musicPlayPanel}
      ]
    },{
       path: '/folderPanel',
       name: 'folderPanel',
       component: folderPanel
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/lockPage',
      name:'lockPage',
      component:lockPage
    }
  ]
})



