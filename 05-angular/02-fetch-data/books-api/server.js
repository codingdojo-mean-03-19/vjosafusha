var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8000;

app.use(bodyParser.json());
// app.use(express.static( __dirname + '/angular-app/dist/angular-app' ));

var routes = require('./server/config/routes')(app);
var book = require('./server/config/book_routes')(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));


