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
				
				<transition name="slide-fade">
					<folderPopup v-show="showfolderPopup" v-on:btnListenEvent="btnListenEvent_fn"></folderPopup>
				</transition>
				<transition name="slide-fade">
					<cmdApplication v-show="cmdApplication" v-on:btnListenEvent="btnListenEvent_fn"></cmdApplication>
				</transition>
		</div>
	</div>
</template>


<script>
 import folderPopup from '@/components/folderPopup'
 import cmdApplication from '@/components/applicationOfCMD/cmdApplication'
 export default {
 	components:{folderPopup,cmdApplication},
 	data(){
 		return {
 			showfolderPopup:false,
 			cmdApplication:false,
    	}
 	},
	methods: {
		btnListenEvent_fn(msg){
			switch(msg){
				case "close":
					this.showfolderPopup = false;
				break;
				case "cmdClose":
					this.cmdApplication = false;
				break;
			}
		},//btnListenEvent_fn()
		fer(){
			this.showfolderPopup = !this.showfolderPopup;
		},//fer()
		cmdInterface(){
			this.cmdApplication = !this.cmdApplication;
		},//cmdInterface
	},
 }
 </script>