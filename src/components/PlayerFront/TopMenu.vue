<template>
  <div id="top-menu-front">
    <div class="transparent-menu-bcg"></div>
      <div id="top-buttons">
        <div id="centerMenu">
          <img class="button" :src="loop" @click="button('loopBtn')" :style="isLoop">
          <img class="button" :src="shuffle" @click="button('shuffleBtn')" :style="isShuffle">
          <img class="button" :src="repeat" @click="button('repeatBtn')" :style="isRepeat">
        </div>
      </div>
      <router-link to="/back"><img class="button" id="menuBtn" :src="menu"></router-link>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'TopMenu',
  data () {
    return {
      loop: require('../../assets/menuButtons/topMenuButtons/refresh 4@1X.png'),
      shuffle: require('../../assets/menuButtons/topMenuButtons/shuffle@1X.png'),
      repeat: require('../../assets/menuButtons/topMenuButtons/refresh 1@1X.png'),
      menu: require('../../assets/menuButtons/topMenuButtons/menu@1X.png')
    }
  },
  computed: {
    isLoop: function () {
      return (this.$store.state.isLoop) ? 'filter:brightness(100%);' : ''
    },
    isShuffle: function () {
      return (this.$store.state.isShuffle) ? 'filter:brightness(100%);' : ''
    },
    isRepeat: function () {
      return (this.$store.state.isRepeat) ? 'filter:brightness(100%);' : ''
    }
  },
  methods: {
    ...mapActions(['topMenuFunctions']),
    button(buttonFunction) {
      this.topMenuFunctions(buttonFunction)
    },
    test() {
      console.log('test')
    }
  }
}
</script>
<style lang="scss" scoped>
#top-menu-front{ 
  height: 66px;
  width:100%;
}
#top-buttons {
  position: absolute;
  top: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#centerMenu {
  width: 97px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    max-width:100%;
    filter:brightness(70%);
    max-height:100%;
  }
}
#menuBtn{
  position: absolute;
  right: 20px;
  top: 26px;
}
</style>