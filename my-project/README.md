###目录结构

``` bash

- src
  - assets
  - components
  - router
  · App.vue
  · main.js

```

04-11
---------------------------------------
问题1：
---------------------------------------
vue单页面应用
在App.vue添加vue实例，无法执行，
在子组件可以执行

---------------------------------------
问题2：
---------------------------------------
移动端字体样式添加适配
在html中加入<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>

在JS中加入
function(){
	var win = window,
        doc = document;
         var winWidth =  window.innerWidth;
        // 640宽度以上进行限制
        var size = (winWidth / 640) * 100;
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px' ;
        alert( doc.documentElement.style.fontSize);
}
进行字体适配


----------------------
05-05
问题记录
--------------------------------
cnpm run build 时配置文件有误

config/index.js

配置需要改动

build: {
........
 assetsPublicPath: '/',
 改为
  assetsPublicPath: './',

  问题2
 # 安装模板时需要注意安装的代码严格模式

 -------------------------
 5.6 问题记录
 -------------------------

 vue-router
 动态跳转使用：this.$router.push('/');