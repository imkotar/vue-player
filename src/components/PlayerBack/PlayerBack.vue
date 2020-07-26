<template>
  <div>
    <div id="playlistName">{{playlistName}}</div>
    <router-link to="/"><div class="button" id="front-background"></div></router-link>
    <div id="listContainer">
      <SongsList/>
    </div>
  </div>
</template>

<script>
import SongsList from './SongsList'
export default {
  name: 'PlayerBack',
  components: {
    SongsList
  },
  data () {
    return {
      playlistName: 'Playlist'
    }
  }
}
</script>

<style scoped lang="scss">
#playlistName {
  position: absolute;
  width:100%;
  text-align: center;
  margin-top: 30px;
  color: #60558F;
  font-size: 18px;
}
#front-background {
  top:20px;
  left:25px;
  position: absolute;
  height: 37px;
  width: 37px;
  background-color: white;
  border-radius: 50%;
  background-image: url('../../assets/menuButtons/arrow 1@1X.png');
  background-position: center;
  background-repeat: no-repeat;
}
#listContainer {
  position: relative;
  top:84px;
  left:23px;
  height: 320px;
  overflow:auto;
}


</style>
