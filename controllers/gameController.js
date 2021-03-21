class GameController {
  constructor(gameServices) {
    this.gameServices = gameServices;
  }

  async getGames(req, res) {
    try {
      const game = await this.gameServices.getGames();
      res.status(200).json(game);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getGameById(req, res) {
    const { id } = req.params;
    try {
      const game = await this.gameServices.getGameById(id);
      res.status(200).json(game);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getGamesByCategory(req, res) {
    const { category } = req.params;
    try {
      const game = await this.gameServices.getGamesByCategory(category);
      res.status(200).json(game);
    } catch (error) {
      res.status(500).json(e);
    }
  }

  async postGame(req, res) {
    const { body } = req;
    const { name, description, category, image, trailer } = body;

    if (name && description && category && image && trailer) {
      const game = {
        name: name,
        description: description,
        category: category,
        image: image,
        trailer: trailer,
      };
      try {
        await this.gameServices.postGame(game);
        res.status(200).json('Great! added game :)');
      } catch (e) {
        res.status(500).json('error');
      }
    } else {
      res.status(400).json('Information is missing');
    }
  }

  async putGame(req, res) {
    const { id } = req.params;
    const { body } = req;
    const { name, description, category, image, trailer } = body;

    if (name && description && category && image && trailer) {
      const game = {
        name: name,
        description: description,
        category: category,
        image: image,
        trailer: trailer,
      };
      try {
        await this.gameServices.putGame(id, game);
        res.status(200).json('Great! editted game :)');
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(400).json('Information is missing');
    }
  }
}

module.exports = GameController;
