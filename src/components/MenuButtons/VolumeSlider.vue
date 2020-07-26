<template>
  <div id="volume-slider">
    <input class="slider" type="range" :min="min" :max="max" v-model="value" v-on="getSlider(value)" :style="{ background: color}" @click="changeVol(value)">
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'VolumeSlider',
  data () {
    return {
      min: '1',
      max: '100',
      color: '',
      value: ''
    }
  },
  created () {
    this.value=this.$store.state.volume
  },
  methods: {
    ...mapActions(['changeVolume']),
    getSlider(value) {
      this.color = `linear-gradient(90deg, white ${value}%,red ${value}%)`
    },
    changeVol(volume) {
      this.changeVolume(volume)
    }
  }
}
</script>
<style scoped lang="scss">
#volume-slider{
  width:100%;
  background-color:whitesmoke;
}
.slider {
  -webkit-appearance: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 8px;
  outline: none;
  // opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  transform: translate(0px, -7px);
}

// .slider:hover {
//   opacity: 1;
// }

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 23px;
  height: 23px;
  margin-bottom: 3px;
  border-radius: 50%;
  background: white;
  background-image: url('../../assets/menuButtons/audio@1X.png');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.slider::-moz-range-thumb {
  width: 23px;
  height: 23px;
  margin-bottom: 3px;
  border-radius: 50%;
  background: white;
  background-image: url('../../assets/menuButtons/audio@1X.png');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>