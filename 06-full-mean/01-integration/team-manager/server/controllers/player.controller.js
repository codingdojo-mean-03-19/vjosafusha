const Player = require('mongoose').model('Player');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Player.find({})
      .then(players => res.json(players))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  show(req, res) {
    const { player_id: PlayerId } = req.params;
    Player.findById(PlayerId)
      .then(player => res.json(player))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  create(req, res) {
    Player.create(req.body)
      .then(player => res.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  update(req, res) {
    const { player_id: PlayerId } = req.params;
    Player.findByIdAndUpdate(PlayerId, {
      name: req.body.name,
      position: req.body.position,
      status: req.body.position,
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
    const { player_id: PlayerId } = req.params;
    Player.findByIdAndRemove(PlayerId)
      .then(player => res.json(player))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },
};
