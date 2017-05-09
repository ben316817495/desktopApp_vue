<template>
	<div class="topheader">
		<el-row class="top-menubg">
		  <el-col :span="6">
		  		<div class="startBtn">
		  			<div class="btnGroup">
		                   <a class="controlBtn yellowBtn" @click="">
		                      <i class="icon-minus"></i>
		                  </a>
		                  <a class="controlBtn redCloseBtn" @click="iconCloseBtn">
		                      <i class="icon-close"></i>
		                  </a>
		            </div>
	
		  		</div>
		  </el-col>
		  <el-col :span="18">
		  		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					  <el-menu-item index="1">处理中心</el-menu-item>
					  <el-submenu index="2">
					    <template slot="title">我的工作台</template>
					    <el-menu-item index="2-1">选项1</el-menu-item>
					    <el-menu-item index="2-2">选项2</el-menu-item>
					    <el-menu-item index="2-3">选项3</el-menu-item>
					  </el-submenu>
					  <el-menu-item index="3"><a>订单管理</a></el-menu-item>
				</el-menu>
		  </el-col>
		</el-row>
	</div>
</template>
<script>
 export default {
    data() {
      return {
        activeIndex2: '3'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
