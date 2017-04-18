<template>
	<div class="desktopCenter">
		<div class="desktopCenter_background"></div>
		<div class="desktopCenter_cont">
			
			<div class="iconApp">
				<div class="iconApp_img">
					<img src="../assets/iconApp/computer.png">
				</div>
			</div>

		</div>
	</div>
</template>

<style>
	.desktopCenter_cont{
		position: absolute;
		left: 0;
		right: 0;
		top:0;
		bottom:0;
		padding:60px 10px 32px;
	}
	.desktopCenter_background{
		height:100%;
		left: 0;
		right: 0;
		top:0;
		bottom: 0;
		position: absolute;
		background-image:url('http://demo.kalcaddle.com/static/images/wall_page/7.jpg');
		background-attachment: fixed;
	    -webkit-transition: all ease .3s;
	    -moz-transition: all ease .3s;
	    -o-transition: all ease .3s;
	    -ms-transition: all ease .3s;
	    transition: all ease .3s;
	    -moz-background-size: cover;
	    -o-background-size: cover;
	    -webkit-background-size: cover;
	    background-size: cover;
	    -ms-background-size: cover;
	    background-size: 100% 100%;
	}
	.iconApp_img{
		height: 70px;
    	width: 70px;
	}
	.iconApp_img img{
		width: 100%;
	}
</style>

<script>
 export default {

 }
 </script>