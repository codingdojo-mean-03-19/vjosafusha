const GamePlayer = require('mongoose').model('GamePlayer');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    GamePlayer.find({})
      .populate('player')
      .populate('game')
      .then(gamePlayers => res.json(gamePlayers))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  show(req, res) {
    const gamePlayer_id = req.params.gamePlayer_id;
    GamePlayer.findById(gamePlayer_id)
      .then(gamePlayer => res.json(gamePlayer))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  create(req, res) {
    GamePlayer.create(req.body)
      .then(gamePlayer => res.json(gamePlayer))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  update(req, res) {
    const { gamePlayer_id: GamePlayerId } = req.params;
    GamePlayer.findByIdAndUpdate(GamePlayerId, {
      player: req.body.player,
      game: req.body.game,
      status: req.body.status,
    })
      .then(gamePlayer => res.json(gamePlayer))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(req, res) {
    const { gamePlayer_id: GamePlayerId } = req.params;
    GamePlayer.findByIdAndRemove(GamePlayerId)
      .then(gamePlayer => res.json(gamePlayer))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },

  getGamePlayerByGameId(req, res) {
    const game_id = req.params.game_id;
    console.log(game_id);
    GamePlayer.find({ game: game_id })
      .populate('player')
      .populate('game')
      .then(gamePlayers => res.json(gamePlayers))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  getGamePlayerByPlayerId(req, res) {
    const player_id = req.params.player_id;
    GamePlayer.find({ player: player_id })
      .then(gamePlayer => res.json(gamePlayer))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },
};
