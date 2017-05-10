<template>
	<div class="musicPanel">
		<el-row class="heightFull">
			<el-col :span="24">
		        <div class="">
		            
		        </div>
		        <!-- <div class="titleText"> -->
		        <div>
		            <span><i class="icon-music-tone-alt"></i> musicPanel</span>

		            <div class="btnGroup">
		                   <a class="controlBtn yellowBtn" @click="">
		                      <i class="icon-minus"></i>
		                  </a>
		                  <a class="controlBtn redCloseBtn" @click="iconCloseBtn">
		                      <i class="icon-close"></i>
		                  </a>
		            </div>

		        </div>
		    </el-col>

		     <el-col :span="24" class="folderPopup_cont">
		      		<musicMain></musicMain>
		     </el-col>
			
		</el-row>
	</div>
</template>

<script>
import musicMain from '@/components/musicPanel/musicMain'
export default {
  components: {musicMain},
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