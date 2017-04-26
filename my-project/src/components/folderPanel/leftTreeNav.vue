<template>
	<div class="leftTreeNav">
		<div class="treeExternal">
			leftTreeNav
		</div>
	</div>
</template>

<style>
	.leftTreeNav{
		position: relative;
		padding:10px;
		height: 100%;
	}
	.leftTreeNav::before{
		content: '';
		height: 100%;
		position: absolute;
		right:0;
		bottom:0;
		border-right:1px solid #f5f5f5;
	}
	.leftTreeNav .treeExternal{
		min-height: 100%;
	}
</style>