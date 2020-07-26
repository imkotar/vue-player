<template>
  <div class="player">
    <ImageDisplay/>
    <TopMenu class="topMenu"/>      
    <SongDetails class="songDet"/>
    <BottomMenu class="bottomMenu"/>
  </div>
</template>

<script>
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'
import SongDetails from './SongDetails'
import ImageDisplay from './ImageDisplay'
export default {
  name: 'PlayerFront',
  components: {
    TopMenu,
    BottomMenu,
    SongDetails,
    ImageDisplay
  }
}
</script>

<style scoped lang="scss">
.topMenu {
  position: absolute;
  top:0px;
  left:0px;
}
.songDet {
  position: absolute;
  top:273px;
}
.bottomMenu {
  position: absolute;
  top:338px;
}

</style>
