<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
 import '@/assets/css/less-css/style.css';
export default {
  name: 'app',
  data(){
  	return{
  		username:'',
  	}
  },//data()
  mounted(){
  	this.onLoadPage();
  },
  methods: {
  	onLoadPage(){
  		if(this.username =='' || !this.username){
  			this.$router.push('/login');
  		}
  	}//onLoadPage()
  },// methods
}
</script>

