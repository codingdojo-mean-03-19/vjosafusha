const { GamePlayerController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/gamePlayers', GamePlayerController.index)
  .post('/gamePlayers', GamePlayerController.create)
  .get('/gamePlayers/:gamePlayer_id', GamePlayerController.show)
  .put('/gamePlayers/:gamePlayer_id', GamePlayerController.update)
  .delete('/gamePlayers/:gamePlayer_id', GamePlayerController.destroy)
  .get(
    '/gamePlayers/:game_id/players',
    GamePlayerController.getGamePlayerByGameId
  )
  .get(
    '/gamePlayers/:player_id/games',
    GamePlayerController.getGamePlayerByPlayerId
  );
