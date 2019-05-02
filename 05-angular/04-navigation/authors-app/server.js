const parser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

app
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json());

const {
  env: { PORT: port = 8000 },
} = process;

require('./server/config/mongoose');
app.use(require('./server/routes/author.routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
