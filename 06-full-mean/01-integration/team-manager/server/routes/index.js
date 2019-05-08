const playerRoute = require('./player.routes.js');
const router = require('express').Router();

module.exports = router.use('/', playerRoute);
