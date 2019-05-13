const { AuthController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/users', AuthController.index)
  .post('/login', AuthController.login)
  .post('/register', AuthController.register)
  .delete('/logout', AuthController.logout);
