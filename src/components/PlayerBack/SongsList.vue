<template>
  <div>
    <div id="list">
      <div v-for="song in songs" :key="song.song">
        <Song :songData='song'/>
      </div>
    </div>
  </div>
</template>

<script>
import Song from './Song'
export default {
  name: 'SongsList',
  components: {
    Song
  },
  data () {
    return {
      songs: []
    }
  },
  created(){
    this.songs = this.$store.state.tracks
  }
}
</script>

<style scoped lang="scss">
#list {
  width: 281px;
}



</style>
