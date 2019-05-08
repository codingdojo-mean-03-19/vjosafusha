const { GameController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/games', GameController.index)
  .post('/games', GameController.create)
  .get('/games/:game_id', GameController.show)
  .put('/games/:game_id', GameController.update)
  .delete('/games/:game_id', GameController.destroy);
