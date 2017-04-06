<template>
	<div class="indexDesktop">
			<desktopCenter></desktopCenter>
			<topheader></topheader>
    		<bottomNav></bottomNav>
	</div>
</template>

<script>
	import topheader from '@/components/topheader'
	import bottomNav from '@/components/bottomNav'
	import desktopCenter from '@/components/desktopCenter'
	export default {
	  name: 'Indexdesktop',
	  components: {topheader,bottomNav,desktopCenter},
	}
</script>
