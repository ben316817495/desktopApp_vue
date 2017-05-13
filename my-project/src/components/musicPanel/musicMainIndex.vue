<template>
	<div class="musicMainIndex">
		<el-row>
			<el-col :span="24" class="bannerDiv">
				 <el-carousel :interval="5000" arrow="always">
				    <el-carousel-item v-for="item in banner" :key="item" class="theBanner">
				      <!-- <h3>{{ item.img }}</h3> -->
				      <img v-bind:src="item.img">
				    </el-carousel-item>
				  </el-carousel>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	      	banner:[
	      		{img:'http://p4.music.126.net/asDHZK8GC5pe128pa3SIxQ==/18888510253690457.jpg'},
	      		{img:'http://p4.music.126.net/oBhw58bIM8UHnqlk3lI14g==/18516875325279932.jpg'},
	      		{img:'http://p4.music.126.net/iAiRiqgAvrqF5fG1kqtHYg==/18943485835007874.jpg'},
	      		{img:'http://p4.music.126.net/tmLcSh5hmno92QqHvwiKRQ==/19223861300161896.jpg'},
	      	],
	      }
	  },//data()
}
</script>