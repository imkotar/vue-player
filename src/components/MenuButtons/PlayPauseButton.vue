<template>
  <div id="play-pause">
    <div class="button" id="button-background" @click="playButton">
      <div id="play-button" v-if="play===false"></div>
      <div id="pause-button" v-if="play===true">
        <div id="square-breaker"></div>
      </div>
    </div>
    <div class="pie" :style="time"></div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'PlayPauseButton',
  computed: {
    play: function () {
      return this.$store.state.isPlaying
    },
    time: function () {
      const result = `animation-delay: -${this.$store.state.time}s`
      return result
    }
  },
  methods: {
    ...mapActions(['playPause', 'setAsCurrent', 'setTimer']),
    playButton() {
      this.playPause(!this.$store.state.isPlaying)
      if (this.$store.state.currentSong.artist === undefined) {
        this.setAsCurrent(this.$store.state.tracks[0])
      }
      this.setTimer(this.$store.state.currentSong)
    }
  }
}
</script>
<style scoped lang="scss">
#play-pause {
  display: flex;
  align-items: center;
  justify-content: center
}
.pie {
  width: 65px; height: 65px;
  border-radius: 50%;
  background: white;
  background-image:
  linear-gradient(to right, transparent 50%, rgb(218, 224, 224) 0);
  overflow: hidden;
}
@keyframes spin {
  to { transform: rotate(.5turn); }
}
@keyframes bg {
  50% { background: rgb(218, 224, 224); }
}
.pie::before {
  content: "";
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  animation: spin 50s linear infinite,
             bg 100s step-end infinite;
  animation-play-state: paused;
  animation-delay: inherit;
}
#button-background {
  position: absolute;
  z-index: 1;
  height: 51px;
  width: 51px;
  background-color: #60558F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center
}
#pause-button{
  width:18px;
  height: 18px;
  background-color: white;
}
#square-breaker {
  height: 18px;
  margin-left: 7px;
  width: 4px;
  background-color: #60558F;
}
#play-button{
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 18px solid white;
}

</style>