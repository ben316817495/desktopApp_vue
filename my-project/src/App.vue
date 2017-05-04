<template>
  <div id="app">
 <!--  <img src="./assets/iconApp/computer.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>

 import '@/assets/css/less-css/style.css';
export default {
  name: 'app'
}
</script>

<style>
/**{font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}*/
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
/*html,body{
   height: 100%;
   width: 100%;
    margin:0;
    padding: 0;
    overflow-x: hidden;
}*/
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .heightFull{
    height:100%;
  }
  .height90{

  }
</style>
