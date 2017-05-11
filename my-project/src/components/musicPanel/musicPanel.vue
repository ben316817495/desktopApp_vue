<template>
	<div class="musicPanel">
		<el-row class="heightFull">
			<el-col :span="24">
		        <div class="">
		            
		        </div>
		        <!-- <div class="titleText"> -->
		        <div class="mus_titleStyle">

		        		<el-row>
		        			<el-col :span="6" class="Leftlogo">
					            <i class="icon-music-tone-alt"></i> musicPanel
					         </el-col>
					         <el-col :span="18">
					            <div class="btnGroup">
					                   <a class="controlBtn yellowBtn" @click="">
					                      <i class="icon-minus"></i>
					                  </a>
					                  <a class="controlBtn redCloseBtn" @click="iconCloseBtn">
					                      <i class="icon-close"></i>
					                  </a>
					            </div>
					         </el-col>
					     </el-row>

		        </div>
		    </el-col>

		     <el-col :span="6" class="heightFull">
		     		<leftTreeNav></leftTreeNav>
		     </el-col>

		     <el-col :span="18" class="folderPopup_cont">
		      		<musicMain></musicMain>
		     </el-col>
			
		</el-row>
	</div>
</template>

<script>
import musicMain from '@/components/musicPanel/musicMain'
import leftTreeNav from '@/components/folderPanel/leftTreeNav'
export default {
  components: {musicMain,leftTreeNav},
  data () {
    return {

    }
  },//data()
  methods: {
    iconCloseBtn(){
      this.$emit('btnListenEvent','musicClose');
    },//iconCloseBtn()
  },//methods
}
</script>