var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8000;

app.use(bodyParser.json());

var routes = require('./server/config/routes')(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));


