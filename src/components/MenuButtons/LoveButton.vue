<template>
  <div @click="loveClicked" :style="isLoved">
    <div v-if="menuType === 'front'" class="button" id="button-front"></div>
    <div v-if="menuType !== 'front'" class="button" id="button-back"></div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoveButton',
  props: {
    menuType: String,
    song: null
  },
  computed: {
    isLoved: function () {
      if (this.$store.state.likedSongs.includes(this.song.song)) {
        return 'opacity: 1;'
      }
      return 'opacity: 0.7;'
    }
  },
  methods: {
    ...mapActions(['addToLiked']),
    loveClicked() {
      let songData = Object
      if (this.menuType === 'front') {
        if (this.$store.state.currentSong.song !== undefined){
          songData = this.$store.state.currentSong
        } else {
          return console.log('there is nothing to do with no track selected')
        }
      } else if (this.menuType === 'back') {
        songData = this.song
      } 
      this.addToLiked(songData.song)
    }
  }
}
</script>
<style scoped>
#button-front {
  height: 37px;
  width: 37px;
  background-color: white;
  border-radius: 50%;
  background-image: url('../../assets/menuButtons/favorite 2@1X.png');
  background-position: center;
  background-repeat: no-repeat;
}
#button-back {
  margin: 0px;
  height: 14px;
  width: 16px;
  background-color: transparent;
  background-image: url('../../assets/menuButtons/favorite 2@1X.png');
  background-position: center;
  background-repeat: no-repeat;
}
</style>