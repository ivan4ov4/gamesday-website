import api from '@/services/api'

export default {
    pageCount(){
        return api().get('/page')
    },
    
    getGames() {
        return api().get('games')
    },

    getGame(id) {
        return api().get(`/games/${id}`)
    },


}