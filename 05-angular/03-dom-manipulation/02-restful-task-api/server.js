var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/angular-app/dist/angular-app'));

require('./server/config/routes')(app);
require('./server/config/mongoose')

app.listen(port, () => console.log(`Server listening on port ${port}!`));


