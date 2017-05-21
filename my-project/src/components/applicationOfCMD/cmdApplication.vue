<template>
	<div class="cmdApplication">
		<el-row class="heightFull">
     
		     <el-col :span="24">
		        <div class="">
		            
		        </div>
		        <div class="titleText">
		            <span><i class="icon-screen-desktop"></i> CMD 管理员:Bone7</span>

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
		</el-row>
	</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },//data()
  methods: {
    iconCloseBtn(){
    //router.go(-1)
     router.replace('/');
      //this.$emit('btnListenEvent','cmdClose');
    },//iconCloseBtn()
  },//methods
}
</script>