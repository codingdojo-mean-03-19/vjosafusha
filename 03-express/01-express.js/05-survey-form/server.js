var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'abcdefghijklmnop',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.listen(8000, function() {
  console.log('listening on port 8000');
});

app.get('/', function(req, res) {
  res.render('index');
});
app.post('/process', function(req, res) {
  req.session.name = req.body.name;
  req.session.location = req.body.location;
  req.session.language = req.body.language;
  req.session.comment = req.body.comment;

  res.redirect('/result');
});

app.get('/result', function(req, res) {
  data = {
    name: req.session.name,
    location: req.session.location,
    language: req.session.language,
    comment: req.session.comment,
  };

  res.render('result', { data });
});

app.get('/back', function(req, res) {
  req.session = null;

  res.redirect('/');
});
