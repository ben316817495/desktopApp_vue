<template>
	<div class="loginPage">
		<div class="desktopCenter_background"></div>
		<div class="maskOfLogin"></div>
		<div class="loginBox">
			<div class="boxHeader">
					<div class="boxHeaderImg"></div>
					<div class="boxHeaderTit">MacOSX</div>
					<p class="boxHeaderText">欢迎登陆MacOSX账户</p>
			</div>
			<div class="boxBody">
				<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="用户名：">
					    	<el-input v-model="form.phone"></el-input>
					 	</el-form-item>
					 	<el-form-item label="密码：">
					    	<el-input type="password" v-model="form.password"></el-input>
					 	</el-form-item>
						<el-form-item >
							<el-row>
								<el-col :span="12">
									 <el-checkbox-group v-model="form.type">
										<el-checkbox  label="记住密码"></el-checkbox>
									 </el-checkbox-group>
								</el-col>
								<el-col :span="12">
									<p class="forGetPwd">忘记密码？</p>
								</el-col>
							</el-row>
						</el-form-item>
						<el-row>
							<el-col :span="24">
								<el-button class="longBtn" type="primary" @click="onSubmit">立即登陆</el-button>
							</el-col>
						</el-row>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'loginPage',
	  components: {},
	  data() {
      	return {
	      	form: {
	      			phone:'',
	      			password:'',
	      			delivery: false,
	      			type: [],
	      		},
	      		someData:{},
      		}
  		},//data
  		 methods: {
  		 	onSubmit(){
  		 		//router.replace('/');
				  this.$http.get(_url+'login/cellphone?phone='+this.form.phone+'&password='+this.form.password).then(response => {
				    // get body data
				    this.someData = response.body;
				    console.log(this.someData)
				    router.replace('/');
				    //router.go('/');
  		 			//this.$router.push('/');

				  }, response => {
				    // error callback
				    console.log(response)
				  });
  		 	},//onSubmit()
  		 },// methods
	}
</script>