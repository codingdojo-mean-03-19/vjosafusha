var express = require('express'),
  path = require('path'),
  app = express(),
  bodyParser = require('body-parser'),
  port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist/restful-tasks-nested')));

require('./server/routes/routes')(app);
require('./server/config/mongoose');

app.listen(port, () => console.log(`Server listening on port ${port}!`));
