<template>
  <div @click="action" class="button">
    <div id="button-background" v-if="direction === 'back'" style="transform: rotate(180deg)"></div>
    <div id="button-background" v-if="direction !== 'back'"></div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'PrevNextButton',
  props: {
    direction: String
  },
  methods: {
    ...mapActions(['prevNextSong']),
    action() {
      this.prevNextSong(this.direction)
    }
  }
}
</script>
<style scoped>
#button-background {
  height: 37px;
  width: 37px;
  background-color: #60558F;
  border-radius: 50%;
  background-image: url('../../assets/menuButtons/bottomMenuButtons/next 1@1X.png');
  background-position: center;
  background-repeat: no-repeat;
}
</style>