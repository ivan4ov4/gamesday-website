var Game = require('./appModel.js');

exports.list_all_games = function(req, res) {
  Game.getAllGames(function(err, game) {

    if (err)
      res.send(err);
      console.log('res', game);
      res.send(game);
  });
};


exports.read_a_game = function(req, res) {
  Game.getGameById(req.params.gameId, function(err, game) {
    if (err)
      res.send(err);
      res.json(game);
  });
};

exports.read_a_page_count = function(req,res){
  Game.getAllPagesCount(function(err, game){
    if (err)
    res.send(err);
    console.log('res', game);
    res.send(game);
  });
}

