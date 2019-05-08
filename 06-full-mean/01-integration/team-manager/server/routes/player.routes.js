const { PlayerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/players', PlayerController.index)
  .post('/', PlayerController.create)
  .get('/:player_id', PlayerController.show)
  .put('/:player_id', PlayerController.update)
  .delete('/:player_id', PlayerController.destroy);
