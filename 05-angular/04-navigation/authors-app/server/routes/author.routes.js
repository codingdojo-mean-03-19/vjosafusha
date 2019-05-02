var authors = require('../controllers/author.controller');
const path = require('path');
const route = require('express').Router();

module.exports = route.get('/tasks', authors.index);
