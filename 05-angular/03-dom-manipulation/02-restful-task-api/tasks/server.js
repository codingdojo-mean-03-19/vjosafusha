const parser = require('body-parser');
const express = require('express');
const path = require('path');

const {
  env: { PORT: port = 8000 },
} = process;
const app = express();

require('./server/config/mongoose');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use(require('./server/routes'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));
