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
				
				<transition name="slide-fade">
						<folderPopup v-show="showfolderPopup" v-on:btnListenEvent="btnListenEvent_fn"></folderPopup>
				</transition>
		</div>
	</div>
</template>


<script>
import folderPopup from '@/components/folderPopup'
 export default {
 	components:{folderPopup},
 	data(){
 		return {
 			showfolderPopup:false,
    	}
 	},
	methods: {
		btnListenEvent_fn(msg){
			switch(msg){
				case "close":
					this.showfolderPopup =false;
				break;
			}
		},//btnListenEvent_fn()
		fer(){
			//alert(2);
			this.showfolderPopup = !this.showfolderPopup;
		},//fer()
	},
 }
 </script>