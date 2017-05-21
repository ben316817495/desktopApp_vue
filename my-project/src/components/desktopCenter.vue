<template>
	<div class="desktopCenter">
		<div class="desktopCenter_background"></div>
		<div class="desktopCenter_cont">
			
				<div class="iconApp" @dblclick="fer">
					<div class="iconApp_img">
						<img src="../assets/iconApp/computer.png">
					</div>
					<div class="iconApp_fontStyle iconApp_fontBg" >我的电脑</div>
				</div>

				<div class="iconApp" @dblclick="cmdInterface">
					<div class="iconApp_img">
						<img src="../assets/iconApp/cmd.png">
					</div>
					<div class="iconApp_fontStyle iconApp_fontBg">CMD</div>
				</div>

				<div class="iconApp" @dblclick="musicPanel">
					<div class="iconApp_img">
						<img src="../assets/iconApp/music.png">
					</div>
					<div class="iconApp_fontStyle iconApp_fontBg">Music</div>
				</div>

				<div class="iconApp" @dblclick="">
					<div class="iconApp_img">
						<img src="../assets/iconApp/game.png">
					</div>
					<div class="iconApp_fontStyle iconApp_fontBg">Game</div>
				</div>
				
				<!-- <transition name="slide-fade">
					<folderPopup v-show="panel.showfolderPopup" v-on:btnListenEvent="btnListenEvent_fn"></folderPopup>
				</transition>
				<transition name="slide-fade">
					<cmdApplication v-show="panel.cmdApplication" v-on:btnListenEvent="btnListenEvent_fn"></cmdApplication>
				</transition>
				<transition name="slide-fade">
					<musicPanel v-show="panel.musicPanel" v-on:btnListenEvent="btnListenEvent_fn"></musicPanel>
				</transition> -->
				<transition name="slide-fade">
					<router-view></router-view>
				</transition>
		</div>
	</div>
</template>


<script>
 //  import folderPopup from '@/components/folderPopup'
 // import cmdApplication from '@/components/applicationOfCMD/cmdApplication'
 // import musicPanel from '@/components/musicPanel/musicPanel'

 export default {
 	//components:{folderPopup,cmdApplication,musicPanel},
 	data(){
 		return {
 			panel:{
 				// showfolderPopup:false,
 				// cmdApplication:false,
 				// musicPanel:false,
 			}
    	}
 	},
	methods: {
		btnListenEvent_fn(msg){
			switch(msg){
				
			}
		},//btnListenEvent_fn()
		
		 fer(){
		 	router.replace('/folderPopup');
		 },//fer()
		 cmdInterface(){
		 	router.replace('/cmdApplication');
		 },//cmdInterface
		 musicPanel(){
		 	this.$router.push('/musicPanel');
		 },//musicPanel

	},
 }
 </script>