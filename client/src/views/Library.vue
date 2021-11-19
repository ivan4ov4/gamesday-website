<template>
  <div class="library">
    <h1 class="title">LIBRARY</h1>

    <div class="wrapper">
      <div class="games"  v-for="game in games.slice().reverse()" :key="game.id">
        <img @click="$router.push({name: 'game', params: {id: game.title}})" class="thumbnail" :src="game.thumbnailImage">
      </div>
    </div>

  </div>
</template>

<script>
import authService from '@/services/auth-service'

export default {
  name: "Library",
  data () {
    return{
      games: [
        {
          id: '',
          image: '',
          title: '...',
          releaseDate: '...',
          platforms: '...',
          genres: '...',
          developers: '...',
          description: '...',
        }
      ],
    }
  },
  methods: {
    async fetchGames() {
      const response = await authService.getGames()

      this.games = response.data    
    }
  },
  mounted() {
    this.fetchGames()
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

.games{
  padding: 20px;
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