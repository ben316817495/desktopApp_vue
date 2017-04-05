<template>
	<div class="topheader">
		<el-row>
		  <el-col :span="4">logo</el-col>
		  <el-col :span="20" class="fff" @click="plusAlert">logo</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
  methods: {
    plusAlert: function () {
      alert(12222)
    }
  }
}
</script>
<style>.fff{height:100px;}</style>
