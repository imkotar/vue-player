<template>
  <div id="app">
    <div class="background"></div>
    <div class="shadow">
      <div id="player-main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a{
  text-decoration: none;
}
 .background {
   position:fixed;
   height:100%;
   width: 100%;
   background-image: url("./assets/Background@1X.png");
   filter: blur(18px);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
 }
#player-main {
  overflow: hidden;
  position: relative; 
  background-color: #F3F4F8;
  width: 361px;
  height: 481px;
  top: 28px;
  border-radius: 33px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.shadow {
  position: absolute;
  left: 0; 
  right: 0; 
  margin-top: 50px;
  margin-left: auto; 
  margin-right: auto; 
  width: 370px;
  height: 569px;
}
.button {
  cursor: pointer;
}
.transparent-menu-bcg {
  position: absolute;
  opacity: 0.6;
  background-color:#2A224D;
  height: 100%;
  width: 100%;
}

</style>
