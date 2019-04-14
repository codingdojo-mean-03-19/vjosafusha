var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path'),
  session = require('express-session'),
  flash = require('express-flash'),
  port = 8000;
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(
  session({
    secret: 'abcdefghijklmnop',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

var routes = require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
