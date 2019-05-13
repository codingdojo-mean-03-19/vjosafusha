const authRoutes = require('./auth.routes');
const postRoutes = require('./post.routes');
const router = require('express').Router();

module.exports = router.use('/', authRoutes, postRoutes);
