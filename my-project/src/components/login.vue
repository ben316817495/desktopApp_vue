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
					    	<el-input v-model="form.name"></el-input>
					 	</el-form-item>
					 	<el-form-item label="密码：">
					    	<el-input v-model="form.pwd"></el-input>
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
	      			name:'',
	      			pwd:'',
	      			delivery: false,
	      			type: [],
	      		}
      		}
  		},//data
  		 methods: {
  		 	onSubmit(){
  		 		this.$router.push('/');
  		 	}//onSubmit()
  		 },// methods
	}
</script>