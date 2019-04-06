var express = require('express');
var app = express();
var session = require('express-session');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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
  if (!req.session.counter) {
    req.session.counter = 1;
  } else {
    req.session.counter++;
  }

  res.render('index', { counter: req.session.counter });
});

app.get('/plustwo', function(req, res) {
  req.session.counter = req.session.counter + 1;
  res.redirect('/');
});

app.get('/reset', function(req, res) {
  req.session.counter = null;

  res.redirect('/');
});


