<template>
	<transition name="slide-fade">
		<div class="startband" v-show="startband">
			<div class="">
				<ul class="setUpPanel">
					<li><router-link to="/">首页</router-link></li>
					<li><div class="leftspliter"></div></li>
					<li><router-link to="/folderPanel">文件夹</router-link></li>
					<li><a>navTie</a></li>
					<li><a>navTie</a></li>
				</ul>
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
	.setUpPanel{
	    background: #fff;
    	border: solid 1px #365167;
    	width: 250px;
    	height: 385px;
    	margin: 7px 0 7px 7px;
    	padding:0;
	}
	.setUpPanel li{
		list-style: none;
	}
	.setUpPanel li a{
		border: solid 1px transparent;
	    display: block;
	    padding: 0 3px;
	    height: 30px;
	    line-height: 30px;
	    margin: 3px 10px;
	    text-decoration: none;
	    color:#444;
	}
	.setUpPanel li a:hover {
		height: 30px;
	    line-height: 30px;
	    border: solid 1px #7da2ce;
	    -webkit-border-radius: 3px;
	    -moz-border-radius: 3px;
	    border-radius: 3px;
	    -webkit-box-shadow: inset 0 0 1px #fff;
	    -moz-box-shadow: inset 0 0 1px #fff;
	    box-shadow: inset 0 0 1px #fff;
	    background-color: #cfe3fd;
	    background: -webkit-gradient(linear,center top,center bottom,from(#dcebfd),to(#c2dcfd));
	}
	.setUpPanel li .leftspliter{
		    margin: 0 15px 0 15px;
    		border-top: solid 1px #d6e5f5;
	}
</style>