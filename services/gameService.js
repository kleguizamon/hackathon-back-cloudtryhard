const Games = require('../models/gamesModel');

class GameService {
  getGames() {
    const query = Games.find().exec();
    return query;
  }
  getGameById(id) {
    const query = Games.findOne({ _id: id }).exec();
    return query;
  }
  getGamesByCategory(category) {
    const query = Games.find({ category: category }).exec();
    return query;
  }
  postGame(game) {
    const newGame = new Games(game);
    return newGame.save();
  }
  putGame(id, Game) {
    const query = Games.findOneAndUpdate({ _id: id }, Game).exec();
    return query;
  }
}

module.exports = GameService;
