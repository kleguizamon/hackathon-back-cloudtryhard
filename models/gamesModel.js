const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  trailer: {
    type: String,
    require: true,
  },
});

module.export = mongoose.model('Game', gamesSchema);
