import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    volume: 40,
    isLoop: false,
    isShuffle: false,
    isRepeat: false,
    tracks: [
      {
        artist: "Icona Pop",
        song: "First on the album",
        duration: "3:20"
      },
      {
        artist: "Icona Pop",
        song: "Still Don't Know",
        duration: "3:16"
      },
      {
        artist: "Icona Pop",
        song: "I Love It",
        duration: "2:35"
      },
      {
        artist: "Icona Pop",
        song: "Girlfriend",
        duration: "2:50"
      },
      {
        artist: "Icona Pop",
        song: "We Got the World",
        duration: "3:07"
      },
      {
        artist: "Icona Pop",
        song: "Night Like This",
        duration: "3:24"
      },
      {
        artist: "Icona Pop",
        song: "Is there more songs?",
        duration: "6:66"
      }
    ],
    currentSong: Object,
    currentSongNumber: 0,
    isPlaying: false,
    likedSongs: [],
    time: 0,
    timeEnd: 0
  },
  mutations: {
    setCurrentSong(state, data){
      state.currentSong = data
      state.currentSongNumber = state.tracks.findIndex(i=> i.song === data.song)
      state.time = 0
      state.isPlaying = true
    },
    startStop(state, data){
      state.isPlaying = data
    },
    setTopMenu(state, data){
      switch (data) {
        case 'loopBtn':
          state.isLoop = !state.isLoop
          break
        case 'shuffleBtn':
          state.isShuffle = !state.isShuffle
          break
        case 'repeatBtn':
          state.isRepeat = !state.isRepeat
      }
    },
    startTimer(state, data){
      state.time=data.time
    },
    changeVol(state, data) {
      state.volume = data
    },
    addLoved (state, data) {
      state.likedSongs.push(data)
    },
    removeLoved (state, data) {
      const songIndex = state.likedSongs.findIndex(i=> i === data)
      state.likedSongs.splice(songIndex, 1)
    }
  },
  actions: {
    setAsCurrent(context, data) {
      context.commit('setCurrentSong', data)
    },
    setTimer(context, data) {
      // let minutesAndSeconds = data.duration.split(":")
      // let timeEnd = minutesAndSeconds[0]*60+minutesAndSeconds[1]
      const timeEnd = 100 // test 
      let time = context.state.time
      let countdown = setInterval(function() {
          time++
          const timerData = {
            time: time
          }
          context.commit('startTimer', timerData)
          if (time == timeEnd) {
            timerData.time = 0
            context.commit('startTimer', timerData)
            context.dispatch('prevNextSong', 'next')
            clearInterval(countdown)
          }
          if (context.state.isPlaying === false || data.song !== context.state.currentSong.song) clearInterval(countdown)
      }, 100);
    },
    prevNextSong(context, direction) {
        let newSong = ''
        if (context.state.currentSong.artist === undefined) {
          context.commit('setCurrentSong', context.state.tracks[0])
          return context.dispatch('setTimer', context.state.currentSong)
        }
        if (direction === 'back') {
          newSong = context.state.currentSongNumber - 1
          if (newSong < 0) {
            newSong = 0
            if (context.state.isLoop === true) { newSong = context.state.tracks.length - 1 } // if loop enabled
          }
        } else {
         newSong = context.state.currentSongNumber + 1
         if (newSong >= context.state.tracks.length) {
            newSong = context.state.tracks.length - 1
            if (context.state.isLoop === true) { // if loop enabled
              newSong = 0 
            } else {
              return context.dispatch('playPause', false)
            } 
          }
        }
        if (context.state.isShuffle === true) { newSong = Math.floor(Math.random() * context.state.tracks.length) } //random track
        if (context.state.isRepeat === true) { newSong =  context.state.currentSongNumber} //if repeat is enabled
        context.commit('setCurrentSong', context.state.tracks[newSong])
        context.dispatch('setTimer', context.state.currentSong)
    },
    playPause(context, data) {
      context.commit('startStop', data)
    },
    changeVolume(context, data) {
      context.commit('changeVol', data)
    },
    topMenuFunctions(context, data) {
      context.commit('setTopMenu', data)
    },
    addToLiked(context, data) {
      if (!context.state.likedSongs.includes(data)) {
        context.commit('addLoved', data)
      } else {
        context.commit('removeLoved', data)
      }
    }
  },
  modules: {
  }
})
