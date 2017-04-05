<template>
	<div class="indexDesktop">
		<topheader ></topheader>
    <el-button @click="ff" type="primary">主要按钮</el-button>
	</div>
</template>

<script>
import topheader from '@/components/topheader'
export default {
  name: 'Indexdesktop',
  components: {topheader},
  methods: {
    ff: function () {
      alert(12222)
    }
  }
}
</script>
