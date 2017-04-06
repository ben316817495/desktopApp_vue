<template>
	<div class="bottomNav">
		<el-row>
		  <el-col :span="24" class="task_tab">
		  </el-col>
		</el-row>
	</div>
</template>

<style>
	.bottomNav{
		position: fixed;
    	bottom: 1px;
    	left: 0;
    	width: 100%;
	}
	.task_tab {
	    background: rgba(0,0,0,0.05);
	    border-top: 1px solid rgba(0,0,0,0.05);
	}
	.task_tab {
	    position: fixed;
	    bottom: 1px;
	    left: 0;
	    width: 100%;
	    height: 30px;
	    z-index: 100;
	    background: rgba(0,0,0,0.1);
	    border-top: 1px solid rgba(0,0,0,0.15);
	    color: #444;
	}
	.task_tab {
	    height: 32px;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    padding: 0;
	    margin: 0;
	    background: url(../assets/taskbarbg.png);
	}
</style>