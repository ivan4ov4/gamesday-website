module.exports = (app) => {
    var appCont = require('./appController');

    app.get('/', (req, res) => {
        res.send({
            message: 'Api status 200'
        })
    }),

    app.route('/games')
        .get(appCont.list_all_games)
            

    app.route('/:gameId')
        .get(appCont.read_a_game)

}