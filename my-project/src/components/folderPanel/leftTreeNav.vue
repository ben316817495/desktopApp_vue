<template>
	<div class="leftTreeNav">
		leftTreeNav
	</div>
</template>

<style>
	.leftTreeNav{
		position: relative;
		padding:10px;
		
	}
	.leftTreeNav::before{
		content: '';
		height: 100%;
		position: absolute;
		right:0;
		bottom:0;
		border-right:1px solid #f5f5f5;
	}
</style>