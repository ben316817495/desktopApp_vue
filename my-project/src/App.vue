<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
 import publicMethods from '@/assets/js/public'
 import '@/assets/css/less-css/style.css';
export default {
  name: 'app',
  data(){
  	return{
  		username:'111',
  	}
  },//data()
  mounted(){
  	this.onLoadPage();
  },
  methods: {

  },// methods
   mixins: [publicMethods]
}
</script>

