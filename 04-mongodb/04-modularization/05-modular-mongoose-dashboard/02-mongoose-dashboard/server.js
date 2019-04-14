var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var routes = require('./server/config/routes')(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));


