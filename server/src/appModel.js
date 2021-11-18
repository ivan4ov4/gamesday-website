var db = require('./db.js');

//Blog object constructor
var Game = function(game){
    this.title = game.title;
    this.desc = game.desc;
};


Game.getAllGames = function (result) {
    db.query("Select * from games", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('games : ', res);  

             result(null, res);
            }
        });   
};

Blog.getGameById = function (gameId, result) {
    db.query("Select * from games where title = ? ", gameId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        
        }
    });   
};


module.exports = Game;