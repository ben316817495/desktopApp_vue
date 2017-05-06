<template>
	<div class="lockPage">
		<div class="desktopCenter_background"></div>
		<div class="maskOfLogin"></div>
		<div class="loginBox">
			<div class="boxHeader">
					<div class="boxHeaderImg"></div>
					<!-- <div class="boxHeaderTit">MacOSX</div> -->
					<p class="boxHeaderText">我是bone7</p>
			</div>
			<div class="boxBody">
				<el-form ref="form" :model="form" label-width="80px">
					
					 	<el-form-item label="密码：">
					    	<el-input v-model="form.pwd"></el-input>
					 	</el-form-item>
						<el-row>
							<el-col :span="24">
								<el-button class="longBtn" type="primary" @click="onSubmit">解锁登录</el-button>
							</el-col>
						</el-row>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'lockPage',
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