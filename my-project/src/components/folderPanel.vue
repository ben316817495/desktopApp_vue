<template>
	<div class="folderPanel">
		<topheader></topheader>
    	<bottomNav></bottomNav>
	</div>
</template>

<script>
	import topheader from '@/components/topheader'
	import bottomNav from '@/components/bottomNav'
	export default {
	  name: 'folderPanel',
	  components: {topheader,bottomNav},
	}
</script>