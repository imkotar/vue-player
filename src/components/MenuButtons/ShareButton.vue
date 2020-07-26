<template>
  <div class="button" @click="shareSong">
    <div v-if="menuType === 'front'" id="button-front"></div>
    <div v-if="menuType !== 'front'" id="button-back"></div>
  </div>
</template>
<script>

export default {
  name: 'ShareButton',
  props: {
    menuType: String
  },
  methods: {
    shareSong() {
      if (this.$store.state.currentSong.song !== undefined){
        console.log(`You shared ${this.$store.state.currentSong.song}`)
      } else {
        console.log('there is nothing to do with no track selected')
      }
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
  background-image: url('../../assets/menuButtons/share 2@1X.png');
  background-position: center;
  background-repeat: no-repeat;
}
#button-back {
  margin: 0px;
  height: 14px;
  width: 14px;
  background-color: transparent;
  background-image: url('../../assets/menuButtons/share 2@1X.png');
  background-position: center;
  background-repeat: no-repeat;
}
</style>