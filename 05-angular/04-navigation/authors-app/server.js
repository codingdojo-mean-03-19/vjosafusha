const parser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const authorRoutes = require('./server/routes/author.routes');

app
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json());

const {
  env: { PORT: port = 8000 },
} = process;

require('./server/config/mongoose');
app.use('/', authorRoutes);

app.listen(port, () => console.log(`Express server listening on port ${port}`));
