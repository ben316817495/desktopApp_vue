<template>
	<div class="musicPlayPanel">
		<div class="playAnimation"></div>
		<div class="playMusicTitle">
			你经历过绝望吗？
		</div>
		<div class="musicMess">
			<i class="icon-playlist"></i> 专辑：bone7大神显神威 
			<i class="icon-music-tone-alt"></i> 歌手：bone7
		</div>
		<div class="musicControl">
		<el-row></el-row>
			<el-slider v-model="value1"></el-slider>
		</div>
	</div>
</template>