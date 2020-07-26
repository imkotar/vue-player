<template>
  <div id="song-details">
    <div class="transparent-menu-bcg"></div>
    <div id="textDisplay">
      <div id="artist">{{artist}}</div>
      <div id="song">{{song}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopMenu',
  computed: {
    artist: function(){
      return this.$store.state.currentSong.artist
    },
    song: function(){
      return this.$store.state.currentSong.song
    }
  }
}
</script>
<style lang="scss" scoped>
$font-color: #FFFFFF;
#song-details{ 
  height: 66px;
  width:100%;
  display: flex;
  justify-content: center;
}
#textDisplay{
  top:17px;
  height:34px;
  position: absolute;
  text-align: center;
}
#artist{
  font-size: 18px;
  color: $font-color;
}
#song{
  font-size: 14px;
  color: $font-color;
}
</style>