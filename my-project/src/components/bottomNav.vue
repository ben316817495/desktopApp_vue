<template>
	<div class="bottomNav">
		<el-row>
		  <el-col :span="24" class="task_tab">
		  	<startband v-bind:startband="startband"></startband>
		  	<div class="startBtn" @click="alertStart"></div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import startband from '@/components/bottomNav/startband'
	export default {
		components: {startband},//components
		data(){
			return{
				startband:false,
			}
		},//data()
		methods: {
			alertStart(){
				this.startband = !this.startband;
			},//alertStart()
		 },//methods
	}	
</script>
