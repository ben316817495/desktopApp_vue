<template>
	<div class="indexDesktop">
		<topheader v-on:click="plusAlert"></topheader>
	</div>
</template>

<script>
import topheader from '@/components/topheader'
export default {
  name: 'Indexdesktop',
  components: {topheader},
  methods: {
    plusAlert: function () {
      alert(12222)
    }
  }
}
</script>

