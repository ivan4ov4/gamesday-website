<template>
  <div class="library">
    <h1 class="title">LIBRARY</h1>

    <div class="wrapper">
      <div class="games" v-for="game in games" :key="game.id">
        <img @click="$router.push({name: 'game', params: {id: game.title}})" class="thumbnail" src="../assets/thumbnail.png">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Library",
  data () {
    return{
      games: [
        { id: '0', image: '../assets/thumbnail.png', title: "Little Nightmares" },
        { id: '1', image: '../assets/thumbnail.png', title: "Little Nightmares" },
        { id: '2', image: '../assets/thumbnail.png', title: "Little Nightmares" },
        { id: '3', image: '../assets/thumbnail.png', title: "Little Nightmares" },
        { id: '4', image: '../assets/thumbnail.png', title: "Little Nightmares" },
        { id: '5', image: '../assets/thumbnail.png', title: "Little Nightmares" },
        { id: '6', image: '../assets/thumbnail.png', title: "Little Nightmares" },
      ]
    }
  }
};
</script>

<style scoped lang="scss">

.library{
  margin: 50px 10px 0 10px;
}

.title{
  margin-bottom: 30px;
}

.wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 20px;
}


.thumbnail{
  width: 220px;
  border-radius: 10px;
  // border: 1px solid #707070;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover{
    transform: translateY(-6px);
  }
}

@media only screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }
}

</style>