<template>
	<div class="musicPlayPanel">
		<div class="loopMusicBtn"  @click="loopPlayBtn">
			<i v-if="playLoop" class="icon-refresh"></i>
			<i v-else class="icon-reload"></i>
		</div>
		<div class="likeMusicBtn"><i class="icon-heart"></i></div>
		<div class="shareMusicBtn"><i class="icon-share"></i></div>

		<div class="playAnimation" v-bind:class="{'addPlayAnimation':playClass}"></div>
		<div class="playMusicTitle">
			你经历过绝望吗？
		</div>
		<div class="musicMess">
			<i class="icon-playlist"></i> 专辑：bone7大神显神威 
			<i class="icon-music-tone-alt"></i> 歌手：bone7
		</div>
		<div class="musicControl">
			<el-row>
				<el-col :span="2" class="timeText-left">
					<a><i class="icon-control-rewind"></i></a>
				</el-col>
				<el-col :span="20" class="timeLine">
					<el-slider v-model="value1" format-tooltip="formatTooltip"></el-slider>
				</el-col>
				<el-col :span="2" class="timeText-right">
					<a><i class="icon-control-forward"></i></a>
				</el-col>
				<el-col :span="3" class="textTimeC">00:00/04:00</el-col>
				<el-col :span="15" class="musicControl_btn">
					<ul>
						<li><i class="icon-control-start"></i></li>
						<li  @click="onPlayAnimation">
							<i class="icon-control-play"></i>
						</li>
						<li  @click="stopPlayAnimation"><i class="icon-control-pause"></i></li>
						<li><i class="icon-control-end"></i></li>
						<!-- <li><i class="icon-heart"></i></li>
						<li><i class="icon-share"></i></li> -->
					</ul>
				</el-col>
				<el-col :span="3" class="mus_vcon">
					<p><i class="icon-volume-2"></i></p> <el-slider v-model="value2" class="vconStyle"></el-slider>
				</el-col>
			</el-row>
		</div>

		
	</div>
</template>


<script>
  export default {
    data() {
      return {
      	playLoop:false,
      	playClass:false,
        value1: 0,
        value2: 50,
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },//formatTooltip
      loopPlayBtn(){
      	this.playLoop = !this.playLoop;
      },//loopPlayBtn()
      onPlayAnimation(){
      		this.playClass = !this.playClass;
      },//onPlayAnimation
      stopPlayAnimation(){
      	this.playClass= false;
      },//stopPlayAnimation
    }
  }
</script>