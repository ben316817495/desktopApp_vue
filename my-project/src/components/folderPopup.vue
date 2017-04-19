<template>
  <div class="folderPopup">
    <el-row>
     
     <el-col :span="24">
      <div class="titleText">folderPopup</div>
    </el-col>
   
    <el-col :span="24">
      <div class="folderPopup_cont">
        
      </div>
     </el-col>


    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .folderPopup{
      top:75px;
      width: 500px;
      height: 500px;
      border-radius: 10px;
      /*background-color: #fff;*/
      position: absolute;
          background: #eee;
    background-color: rgba(190,190,190,0.5);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
    .folderPopup .titleText{
      margin:5px 5px;
    }
   .folderPopup .folderPopup_cont{
        background-color: #fff;
        width: 98%;
        height: 93%;
        margin:5px;
        border-radius: 10px;
   }
</style>
