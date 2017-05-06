const publicMethods = {
	methods: {
		onLoadPage(){
			//alert(1);
	  		if(this.username =='' || !this.username){
	  			this.$router.push('/login');
	  		}
	  	},//onLoadPage()
	}//methods
}//publicMethods

export default publicMethods
