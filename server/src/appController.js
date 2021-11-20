var Game = require('./appModel.js');

//get game by limit and offset
exports.list_all_games = function(req, res) {
  Game.getAllGames(req.params.limit, req.params.offset, function(err, game) {
    if (err)
      res.send(err);
      console.log('res', game);
      res.send(game);
  });
};

// get game by title
exports.read_a_game = function(req, res) {
  Game.getGameById(req.params.gameId, function(err, game) {
    if (err)
      res.send(err);
      res.json(game);
  });
};

//get pages count
exports.read_a_page_count = function(req,res){
  Game.getAllPagesCount(function(err, game){
    if (err)
    res.send(err);
    console.log('res', game);
    res.send(game);
  });
}

