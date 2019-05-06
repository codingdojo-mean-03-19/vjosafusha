const noteRoute = require('./note.routes.js');
const router = require('express').Router();

module.exports = router.use('/', noteRoute);
