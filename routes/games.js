const express = require('express');
const router = express.Router();
const GameController = require('../controllers/gameController');
const GameService = require('../services/gameService');
const GameInstance = new GameController(new GameService());

router.get('/', (req, res) => {
  GameInstance.getGames(req, res);
});

router.get('/id/:id', (req, res) => {
  GameInstance.getGameById(req, res);
});

router.get('/category/:category', (req, res) => {
  GameInstance.getGamesByCategory(req, res);
});

router.post('/', (req, res) => {
  GameInstance.postGame(req, res);
});

router.put('/:id', (req, res) => {
  GameInstance.putGame(req, res);
});

module.exports = router;
