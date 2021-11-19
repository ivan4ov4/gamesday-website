module.exports = (app) => {
    var appCont = require('./appController');

    app.get('/', (req, res) => {
        res.send({
            message: 'Api status 200'
        })
    }),

    app.route('/games/:limit/:offset')
        .get(appCont.list_all_games)
            

    app.route('/games/:gameId')
        .get(appCont.read_a_game)

    app.route('/page')
        .get(appCont.read_a_page_count)

}