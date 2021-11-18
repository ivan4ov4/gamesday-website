import api from '@/services/api'

export default {
    getGames() {
        return api().get('games')
    },

    getGame(id) {
        return api().get(`/${id}`)
    }
}