<template>
	<div class="desktopCenter">
		<div class="desktopCenter_background"></div>
		<div class="desktopCenter_cont">
			
				<div class="iconApp">
					<div class="iconApp_img">
						<img src="../assets/iconApp/computer.png">
					</div>
					<div class="iconApp_fontStyle iconApp_fontBg">我的电脑</div>
				</div>

		</div>
	</div>
</template>

<style>
	.desktopCenter_cont{
		position: absolute;
		word-break:break-all;
		word-wrap:break-word;
		left: 0;
		right: 0;
		top:0;
		bottom:0;
		padding:60px 30px 32px;
	}
	.desktopCenter_cont{
		display: flex;
		display: -webkit-flex; /* Safari */
		flex-wrap:wrap;
		flex-direction:column;
		align-items: flex-start;
	    align-content: flex-start;
	    justify-content: flex-start;
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
	.flex_iconApp{
		width:90px;
	}
	.iconApp{
		width:90px;
		height: 100px;
		text-align: center;
		margin:10px;
	}
	.iconApp_img{
		height: 70px;
    	width: 70px;
    	margin:0 auto 5px;
	}
	.iconApp_img img{
		width: 100%;
	}

	.iconApp_fontBg{
		margin-top: 6px;
	    line-height: 1.7em;
	    padding-top: 1px;
	    border-radius: 18px;
		background: rgba(0,0,0,0.15);
    	border: none;
    	margin-left: 0px;
	}
	.iconApp_fontStyle{
		overflow:hidden;text-overflow:ellipsis; white-space: nowrap;
		font-size: 12px;
		color:#fff;
		text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
		-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
		-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;
		*filter: Glow(color=#000, strength=1);
	}
</style>

<script>
 export default {

 }
 </script>