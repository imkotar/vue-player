<template>
  <div id="container">
    <router-link to="/"><div class="button" @click="setSong(songData)">
      <p id="topInfo">{{songData.duration}} | {{songData.artist}}</p>
      <p id="songName">{{songData.song}}</p>
    </div></router-link>
    <div id="buttons">
      <ShareButton menuType="back"/>
      <LoveButton menuType="back" :song='songData'/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LoveButton from '../MenuButtons/LoveButton'
import ShareButton from '../MenuButtons/ShareButton'
export default {
  name: 'Song',
  props: {
    songData: Object
  },
  components: {
    LoveButton,
    ShareButton
  },
  methods: {
    ...mapActions(['setAsCurrent', 'setTimer']),
    setSong(songData){
      this.setAsCurrent(songData)
      this.setTimer(this.$store.state.currentSong)
    }
  }
}
</script>

<style scoped lang="scss">
p{
  margin:4px;
}
#container {
  height: 77px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  border-bottom: 1px solid #D3D5DE;
}
#topInfo{
  font-size: 12px;
  color: #78747F;
}
#songName{
  font-size:16px;
  color: #2F1A4B;
}
#buttons {
  width:36px;
  display: flex;
  justify-content: space-between;
}
</style>
