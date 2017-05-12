import Vue from 'vue'
import Router from 'vue-router'



import musicMainIndex from '@/components/musicPanel/musicMainIndex'
import lockPage from '@/components/lockPage'
import login from '@/components/login'
import indexdesktop from '@/components/indexdesktop'
import folderPanel from '@/components/folderPanel'
import '@/assets/css/simple-line-icons-master/css/simple-line-icons.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexdesktop',
      component: indexdesktop,
      children: [
        {path: '/musicMainIndex',name: 'musicMainIndex',component: musicMainIndex}
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



