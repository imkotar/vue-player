<template>
  <div class="home">
    <PlayerFront/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerFront from '@/components/PlayerFront/PlayerFront.vue'

export default {
  name: 'Home',
  components: {
    PlayerFront
  }
}
</script>
