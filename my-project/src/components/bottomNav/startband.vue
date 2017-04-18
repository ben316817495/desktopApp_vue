<template>
	<transition name="slide-fade">
		<div class="startband" v-show="startband">
			<div class="">
				startband
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: ['startband'],
		data(){
			return {
			}
		},//data()
	}	
</script>

<style>
	.startband{
		border-top-right-radius: 10px;
		bottom: 32px;
		 opacity: 0.9;
		height: 404px;
    	width: 390px;
    	position: absolute;
    	border: solid 1px #102a3e;
    	box-shadow: inset 0 0 1px #fff;
	    -webkit-box-shadow: inset 0 0 1px #fff;
	    background-color: #619bb9;
	    background: -webkit-gradient(linear,center top,center bottom,from(#327aa4),color-stop(45%,#2e4b5a),to(#5cb0dc));
	    background: rgba(0,0,0,0.5);
	}
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-active {
	  transform: translateX(10px);
	  opacity: 0;
	}
</style>