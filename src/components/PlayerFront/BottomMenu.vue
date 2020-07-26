<template>
  <div id="bottom-menu-front">
    <VolumeSlider class="volume"/>
    <div id="options">
      <ShareButton menuType="front"/>
      <div id="centerMenu">
        <PrevNextButton direction="back"/>
        <PlayPauseButton/>
        <PrevNextButton direction="next"/>
      </div>
      <LoveButton menuType="front" :song='currentSong'/>
    </div>
  </div>
</template>
<script>
import VolumeSlider from '../MenuButtons/VolumeSlider'
import PlayPauseButton from '../MenuButtons/PlayPauseButton'
import PrevNextButton from '../MenuButtons/PrevNextButton'
import LoveButton from '../MenuButtons/LoveButton'
import ShareButton from '../MenuButtons/ShareButton'
export default {
  name: 'BottomMenu',
  components: {
    VolumeSlider,
    PlayPauseButton,
    PrevNextButton,
    LoveButton,
    ShareButton
  },
  computed: {
    currentSong: function (){
      return this.$store.state.currentSong
    }
  }
}
</script>
<style scoped>
#bottom-menu-front{
  height: 141px;
  width:100%;
  background-color:#F3F4F8;
}
.volume {
  position: absolute;
  top:0px;
}
#centerMenu{
  width:160px;
  display:flex;
  justify-content: space-between;
  align-items: center
}
#options{
  margin-left: 20px;
  margin-top:38px;
  width:320px;
  display:flex;
  justify-content: space-between;
  align-items: center
}


</style>