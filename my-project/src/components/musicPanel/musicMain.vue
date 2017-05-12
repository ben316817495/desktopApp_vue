<template>
	<div class="musicMain" >

		<div class="msM_navTop">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-menu-item index="1"><router-link to="/musicMainIndex">音乐中心</router-link></el-menu-item>
			  <el-submenu index="2 ">
			    <template slot="title">我的工作台</template>
			    <el-menu-item index="2-1 ">选项1</el-menu-item>
			    <el-menu-item index="2-2 ">选项2</el-menu-item>
			    <el-menu-item index="2-3 ">选项3</el-menu-item>
			  </el-submenu>
			  <el-menu-item index="3 "><router-link to="/musicPlayPanel">播放器</router-link></el-menu-item>
			</el-menu>	
		</div>


		 <router-view></router-view>

	</div>
</template>

<script>
 export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }	
</script>