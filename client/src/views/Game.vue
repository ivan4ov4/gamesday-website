<template>
  <div class="about">
      <div class="container">
        <div class="content">
          <div class="library">
            <button class="default-btn" @click="$router.push({name: 'library'})">LIBRARY</button>
          </div>
          <div class="titleCont">
            <div class="display: flex; flex-direction: column;">
            <p>LITTLE NIGHTMARES</p>
            <p>Initial release date: December 9, 2020</p>
            </div>
          </div>
          <div class="platformsCont">
            <img class="platforms" src="../assets/windows-logo.svg">
            <img class="platforms" src="../assets/xbox.png">
            <img class="platforms" src="../assets/playstation.png">
            <img class="platforms" src="../assets/nintendo-switch.png">
          </div>
        </div>
        <img class="banner" src="../assets/banner.png">
        <div class="gradient-bg"></div>
      </div>


      <div class="container2">
        <div class="leftCont">
          <div class="platformText">
            <p style="color: #DF3F53">Platforms:</p>
            <p>PlayStation 4, Xbox One, PlayStation 5, Nintendo Switch, Xbox Series X and Series S, Microsoft Windows, Google Stadia</p>
          </div>

          <div class="platformText">
            <p style="color: #DF3F53">Developers:</p>
            <p>Tarsier Studios, Supermassive Games</p>
          </div>

          <div class="platformText">
            <p style="color: #DF3F53">Genres:</p>
            <p>Puzzle Video Game, Platform game, Survival horror</p>
          </div>


          <div class="platformText">
            <p style="color: #DF3F53">Description:</p>
            <p>Little Nightmares II is similar to its predecessor; it takes place in a 2.5D world. The player must explore the world, occasionally encountering platformer-like situations or being blocked by puzzles that must be solved to proceed. Unlike the first game, the player is not completely helpless; Mono has the ability to grab certain items and swing them to break objects or to fight back against smaller foes, although he, like Six, must rely on stealth and the environment to evade larger foes. The player is also given the ability to call out to Six and hold her hand to make sure they stay together and must often work together with her to solve environmental puzzles and defeat or evade enemies. The game also features collectible hats and glitching remains, the latter of which will unlock an additional scene upon collecting them all. </p>
          </div>
        </div>

        <div class="rightCont">
            <button class="default-btn" >WATCH TRAILER</button>
        </div>
      </div>
  </div>
</template>


<style scoped lang="scss">

.about{
  overflow-x: hidden;
}

.gradient-bg{
  background: rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(255, 255, 255, .1) 40%, rgba(0, 0, 0, 0.5) 75%, rgb(0, 0, 0) 100%) repeat scroll 0 0;
  position: relative;
  margin-top: -200px;
  height: 200px;
}

.container{
  position: relative;
  width: 100%;
  height: 100%;
}

.content{
  display: flex;
  justify-content: center;
}

.titleCont{
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  z-index: 1;
  width: 85%;
}

.platformsCont{
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  z-index: 1;
  width: 85%;
}

.platforms{
  width: 1.5rem;
}

.banner{
  width: 100%;
}

.library{
  margin-top: 30px;
  width: 85%;
  position: absolute;
  display: flex;
}

.default-btn{
  background: #DF3F53;
  border: 0;
  color: white;
  border-radius: 10px;
  width: 166px;
  height: 45px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover{
    transform: scale(0.98);
  }
}

.container2{
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.leftCont{
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 85%;
}

.platformText{
  width: 600px;
  text-align: left;
  margin-bottom: 10px;
}

.rightCont{
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 85%;
}

@media only screen and (max-width: 1000px) {

  .banner {
    width: auto;
    height: 400px;
    object-position: -300px 0;
  }

  .library{
    justify-content: center;
  }

  .titleCont{
    flex-direction: column;
    margin-bottom: 50px;
  }
  
  .platformsCont{
    justify-content: center;
  }

  .leftCont{
    flex-direction: column;
    margin-top: 70px;
  }

  .platformText{
    width: auto;
    text-align: center;
  }

  .rightCont{
    justify-content: center;
  }
}

@media only screen and (max-width: 900px) {
  .banner {
    object-position: -340px 0;
  }
}

@media only screen and (max-width: 800px) {
  .banner {
    object-position: -380px 0;
  }
}

@media only screen and (max-width: 700px) {
  .banner {
    object-position: -420px 0;
  }
}

@media only screen and (max-width: 600px) {
  .banner {
    object-position: -480px 0;
  }
}

@media only screen and (max-width: 500px) {
  .banner {
    object-position: -540px 0;
  }
}

@media only screen and (max-width: 400px) {
  .banner {
    object-position: -580px 0;
  }
}


</style>