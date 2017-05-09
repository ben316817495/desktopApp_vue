<template>
  <div class="folderPopup">
    <el-row class="heightFull">
     
     <el-col :span="24">
        <div class="">
            
        </div>
        <div class="titleText">
            <span><i class="icon-screen-desktop"></i> 我的电脑</span>
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
        <el-col :span="24">
              <topControllerNav></topControllerNav>
          </el-col>
          
          <el-col :span="24"  class="heightFull">
            <el-row class="folderPopup_contBg">
              <el-col :span="6" class="contBgLeft_h">
                 <leftTreeNav></leftTreeNav>
              </el-col>
            </el-row>
          </el-col>
     </el-col>


    </el-row>
  </div>
</template>

<script>
import leftTreeNav from '@/components/folderPanel/leftTreeNav'
import topControllerNav from '@/components/folderPanel/topControllerNav'
export default {
  components: {leftTreeNav,topControllerNav},
  data () {
    return {

    }
  },//data()
  methods: {
    iconCloseBtn(){
      this.$emit('btnListenEvent','close');
    },//iconCloseBtn()
  },//methods
}
</script>
