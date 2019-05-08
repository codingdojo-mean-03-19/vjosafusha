const playerRoute = require('./player.routes.js');
const gameRoute = require('./game.routes');
const gamePlayerRoute = require('./gamePlayer.routes');
const router = require('express').Router();

module.exports = router.use('/', playerRoute, gameRoute, gamePlayerRoute);
