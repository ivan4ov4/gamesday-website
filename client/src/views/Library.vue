<template>
  <div class="library">
    <h1 class="title">LIBRARY</h1>

    <div class="wrapper">
      <div class="games"  v-for="game in games.slice().reverse()" :key="game.id">
        <img @click="$router.push({name: 'game', params: {id: game.title}})" class="thumbnail" :src="game.thumbnailImage">
      </div>
    </div>

    <div id="app" class="container">  
      <ul class="page">
          <li class="page__btn"><span class="material-icons"><img style="transform: rotateY(-180deg);" class="arrowIcon" src="../assets/next.png"></span></li>
          
          <ul  v-for="item in itemsCount" :key="item">
            <li v-bind:id="item" class="page__numbers">{{item}}</li>
          </ul>
          
          <!-- <li class="page__numbers active">1</li>
          <li class="page__numbers">2</li>
          <li class="page__numbers">3</li>
          <li class="page__numbers">4</li>
          <li class="page__numbers">5</li>
          <li class="page__numbers">6</li>
          <li class="page__dots">...</li>
          <li class="page__numbers"> 10</li> -->
          <li class="page__btn"><span class="material-icons"><img class="arrowIcon" src="../assets/next.png"></span></li>
        </ul>
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
      itemsCount: 0, // DO not TOUCH !!!!!
      nowPage: 1,
      ElementCount: null,
      divideNumber: 20 //this is number for divide page count elements
    }
  },
  methods: {
    async fetchGames() {
      //this.router.push({ name: 'user', params: { userId: '123' } })
      // /this.router.push({ path: 'register', query: { plan: 'private' } })
      const response = await authService.getGames()
      this.games = response.data
      
    },
    async getUrlPageCount(){
        let parameters = this.$route.query
        console.log(parameters)
    },

    async pageCalculator(){
      let parameters = this.$route.query
      if(Object.keys(parameters).length === 0){
        this.$router.push({path:'/', query:{Page: 1}})
        this.nowPage = 1
      }
      await this.getPageElementsCount()
    },
    async getPageElementsCount(){ //done math for get and set pagination
      const response = await authService.pageCount()
      let element = response.data[0].totalElements
      let count  = element / this.divideNumber
      let nana = count.toString()
      nana = nana.split('.')
      console.log(nana)
      console.log(nana[0])
      console.log(nana[1])
      let page = parseInt(nana[0])

      if(nana[1] != null){
       page =  page + 1
      }
      this.itemsCount = page
    }
    
  },
  mounted() {
    //this.$router.push({path:'/', query:{Page: 1}})
    // this.getUrlPageCount()
    //this.fetchGames()
    this.pageCalculator()
  }
};
</script>

<style scoped lang="scss">

.arrowIcon{
  width: 20px;
}

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
  width: 80%;
  margin: auto;
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





.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--greyDark);
}

ul {
  list-style-type: none;
}

.items-list {
  max-width: 90vw;
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  justify-content: center;
  align-content: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item {
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--greyDark);
  cursor: pointer;

  span {
    background: #ffffff;
    box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
    border-radius: 0.6rem;
    padding: 2rem;
    font-size: 3rem;
    transition: all 0.3s ease;
  }

  &:hover {
    span {
      transform: scale(1.2);
      color: var(--primary);
    }
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: var(--greyLight);
  }
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #0d1216;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);

  &__numbers,
  &__btn,
  &__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
  }

  &__dots {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--greyLight);
    cursor: initial;
  }

  &__numbers {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 0.4rem;

    &:hover {
      color: var(--primary);
    }

    &.active {
      color: #ffffff;
      background: var(--primary);
      font-weight: 600;
      border: 1px solid var(--primary);
    }
  }

  &__btn {
    color: var(--greyLight);
    pointer-events: none;

    &.active {
      color: var(--greyDark);
      pointer-events: initial;

      &:hover {
        color: var(--primary);
      }
    }
  }
}


</style>