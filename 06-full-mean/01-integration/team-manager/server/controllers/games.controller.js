const Game = require('mongoose').model('Game');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Game.find({})
      .then(games => res.json(games))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  show(req, res) {
    const { game_id: GameId } = req.params;
    Game.findById(GameId)
      .then(game => res.json(game))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  create(req, res) {
    Game.create(req.body)
      .then(game => res.json(game))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  update(req, res) {
    const { game_id: GameId } = req.params;
    Game.findByIdAndUpdate(GameId, {
      name: req.body.name,
    })
      .then(product => res.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(req, res) {
    const { game_id: GameId } = req.params;
    Game.findByIdAndRemove(GameId)
      .then(game => res.json(game))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },
};
