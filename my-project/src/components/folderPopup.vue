<template>
  <div class="folderPopup">
    <el-row>
     
     <el-col :span="24">
        <div class="">
            
        </div>
        <div class="titleText">
            <span>folderPopup</span>

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
  },//data()
  methods: {
    iconCloseBtn(){
      this.$emit('btnListenEvent','close');
    },//iconCloseBtn()
  },//methods
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
      position: relative;
      margin:5px 5px;
    }
   .folderPopup .folderPopup_cont{
        background-color: #fff;
        width: 98%;
        height: 93%;
        margin:5px;
        border-radius: 10px;
   }
   .controlBtn{
      margin-left:5px;
      float:left;
      display: block;
      text-decoration: none;
      outline: none;
      cursor: pointer;
        color: #aaa;
      border: 1px solid #bbb;
      border-radius: 10px;
      height: 18px;
      width: 18px;
      font-size: 1em;
      line-height: 18px;
      text-align: center;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#bbbbbb');
      background: #bbb;
      background-image: -webkit-linear-gradient(top,#eee,#bbb);
      background-image: -moz-linear-gradient(top,#eee,#bbb);
      background-image: -o-linear-gradient(top,#eee,#bbb);
      background-image: -ms-linear-gradient(top,#eee,#bbb);
      background-image: linear-gradient(top,#eee,#bbb);
      -pie-background: linear-gradient(to top,#eee,#bbb);
   }
   .redCloseBtn:hover,.redCloseBtn:active{
    color:#fff;
    background-color: #de2f0a;
     filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#de2f0a');
    background: #de2f0a;
    background-image: -webkit-linear-gradient(top,#f7d8d8,#de2f0a);
    background-image: -moz-linear-gradient(top,#f7d8d8,#de2f0a);
    background-image: -o-linear-gradient(top,#f7d8d8,#de2f0a);
    background-image: -ms-linear-gradient(top,#f7d8d8,#de2f0a);
    background-image: linear-gradient(top,#f7d8d8,#de2f0a);
    -pie-background: linear-gradient(to top,#f7d8d8,#de2f0a);
   }
   .yellowBtn:hover,.yellowBtn:active{
      color:#fff;
      background-color:#EAB11E;
       filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#EAB11E');
    background: #EAB11E;
    background-image: -webkit-linear-gradient(top,#fdd774,#EAB11E);
    background-image: -moz-linear-gradient(top,#fdd774,#EAB11E);
    background-image: -o-linear-gradient(top,#fdd774,#EAB11E);
    background-image: -ms-linear-gradient(top,#fdd774,#EAB11E);
    background-image: linear-gradient(top,#fdd774,#EAB11E);
    -pie-background: linear-gradient(to top,#fdd774,#EAB11E);
   }

   .btnGroup{
      position: absolute;
      top: 0;
      right: 0;
   }
</style>
