<template>
  <div>
    <div id="fading"></div>
    <img id="image" :src="image">
  </div>
</template>
<script>
export default {
  name: 'TopMenu',
  data () {
    return {
      image: require('../../assets/albumsCovers/Icona_Pop_2012-119598_ETOALL_low@1X.png')
    }
  }
}
</script>
<style scoped>
#image {
  width:362px;
  height:auto;

}
#fading {
  background-color: #544282;
  position: absolute;
  width:362px;
  height:408px;
  opacity: 0.1
}
</style>