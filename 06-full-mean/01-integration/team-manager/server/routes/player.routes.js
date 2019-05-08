const { PlayerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/players', PlayerController.index)
  .post('/players', PlayerController.create)
  .get('/players/:player_id', PlayerController.show)
  .put('/players/:player_id', PlayerController.update)
  .delete('/players/:player_id', PlayerController.destroy);
